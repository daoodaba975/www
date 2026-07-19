import { GetServerSideProps } from "next";

import { getAllArticles } from "@/lib/mdx";
import {
  absoluteUrl,
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  SITE_AUTHOR,
} from "@/lib/site";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildFeed() {
  const articles = getAllArticles();
  const lastBuildDate = new Date().toUTCString();

  const items = articles
    .map((article) => {
      const url = absoluteUrl(`/articles/${article.slug}`);

      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(article.description)}</description>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
${(article.tags ?? [])
  .map((tag) => `      <category>${escapeXml(tag)}</category>`)
  .join("\n")}
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${SITE_NAME} — Writings`)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en</language>
    <managingEditor>${escapeXml(SITE_AUTHOR)}</managingEditor>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${absoluteUrl(
      "/rss.xml"
    )}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "application/rss+xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );
  res.write(buildFeed());
  res.end();

  return { props: {} };
};

export default function Rss() {
  return null;
}
