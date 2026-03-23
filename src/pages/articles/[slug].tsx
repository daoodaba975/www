import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { ArrowLeft } from "@phosphor-icons/react";

import MdxHeading from "@/../../components/mdx/MdxHeading";
import MdxImage from "@/../../components/mdx/MdxImage";
import MdxLink from "@/../../components/mdx/MdxLink";
import MdxList from "@/../../components/mdx/MdxList";
import MdxListIcon from "@/../../components/mdx/MdxListIcon";
import MdxDivider from "@/../../components/mdx/MdxDivider";
import MdxSubscribe from "@/../../components/mdx/MdxSubscribe";
import MdxCode from "@/../../components/mdx/MdxCode";
import ScrollProgress from "@/../../components/ScrollProgress";

import { getAllArticles, getArticleBySlug, ArticleMeta } from "@/../lib/mdx";

interface ArticlePageProps {
  source: MDXRemoteSerializeResult;
  meta: ArticleMeta;
}

export default function ArticlePage({ source, meta }: ArticlePageProps) {
  return (
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title>{String(meta?.title || "Article") + " | Writings"}</title>
        <meta name="description" content={String(meta?.description || "")} />
        {/* OG Meta Tags */}
        <meta
          property="og:url"
          content={`https://daooda.dev/articles/${meta.slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/degyjrpjj/image/upload/v1750992429/daooda/share/og_share.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="daooda.dev" />
        <meta
          property="twitter:url"
          content={`https://daooda.dev/articles/${meta.slug}`}
        ></meta>
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/degyjrpjj/image/upload/v1750992429/daooda/share/og_share.png"
        />
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
          {new Date(meta.date).toLocaleDateString("fr-FR")}
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
