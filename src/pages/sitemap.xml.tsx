import { GetServerSideProps } from "next";

import { getAllArticles } from "@/lib/mdx";
import { absoluteUrl } from "@/lib/site";
import {
  HomePath,
  CareerPath,
  ProjectsPath,
  WritingsPath,
} from "@/routes";

const staticPaths = [HomePath, CareerPath, ProjectsPath, WritingsPath];

function buildSitemap() {
  const articles = getAllArticles();
  const today = new Date().toISOString().split("T")[0];

  const urls = [
    ...staticPaths.map((path) => ({ loc: absoluteUrl(path), lastmod: today })),
    ...articles.map((article) => ({
      loc: absoluteUrl(`/articles/${article.slug}`),
      lastmod: new Date(article.date).toISOString().split("T")[0],
    })),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, lastmod }) =>
      `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
  )
  .join("\n")}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );
  res.write(buildSitemap());
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}
