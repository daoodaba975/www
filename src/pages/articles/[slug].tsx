import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { ArrowLeft } from "@phosphor-icons/react";

import MdxHeading from "@/components/mdx/MdxHeading";
import MdxImage from "@/components/mdx/MdxImage";
import MdxLink from "@/components/mdx/MdxLink";
import MdxList from "@/components/mdx/MdxList";
import MdxListIcon from "@/components/mdx/MdxListIcon";
import MdxDivider from "@/components/mdx/MdxDivider";
import MdxSubscribe from "@/components/mdx/MdxSubscribe";
import MdxCode from "@/components/mdx/MdxCode";
import ScrollProgress from "@/components/ScrollProgress";

import { getAllArticles, getArticleBySlug, ArticleMeta } from "@/lib/mdx";
import { absoluteUrl, formatDate, DEFAULT_OG_IMAGE } from "@/lib/site";

interface ArticlePageProps {
  source: MDXRemoteSerializeResult;
  meta: ArticleMeta;
}

export default function ArticlePage({ source, meta }: ArticlePageProps) {
  const articleUrl = absoluteUrl(`/articles/${meta.slug}`);
  const ogImage = meta.image ? absoluteUrl(meta.image) : DEFAULT_OG_IMAGE;

  return (
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title>{`${meta.title} | Writings`}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={articleUrl} />
        {/* OG Meta Tags */}
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={ogImage} />
        <meta property="article:published_time" content={meta.date} />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="daooda.dev" />
        <meta property="twitter:url" content={articleUrl} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <ScrollProgress />

      <Link
        href="/writings"
        className="md:hidden flex items-center gap-1.5 px-4 pt-6 text-sm text-celtic hover:text-pacific transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Writings</span>
      </Link>

      <article className="max-w-3xl mx-auto px-4 py-10 prose dark:prose-invert text-night dark:text-silver">
        <h1>{meta.title}</h1>
        <p className="text-sm text-gray-500">
          {formatDate(meta.date)}
        </p>
        <>
          <MDXRemote
            {...source}
            components={{
              h1: (props) => <MdxHeading as="h1" {...props} />,
              h2: (props) => <MdxHeading as="h2" {...props} />,
              h3: (props) => <MdxHeading as="h3" {...props} />,
              MdxImage,
              MdxLink,
              MdxList,
              MdxListIcon,
              MdxDivider,
              MdxSubscribe,
              MdxCode,
            }}
          />
        </>
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getAllArticles();

  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const { content, meta } = getArticleBySlug(slug);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      meta,
    },
  };
};
