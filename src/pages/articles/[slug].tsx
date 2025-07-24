import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import MdxHeading from "@/../../components/mdx/MdxHeading";
import MdxImage from "@/../../components/mdx/MdxImage";
import MdxList from "@/../../components/mdx/MdxList";
import MdxListIcon from "@/../../components/mdx/MdxListIcon";
import MdxDivider from "@/../../components/mdx/MdxDivider";
import MdxSubscribe from "@/../../components/mdx/MdxSubscribe";

import { getAllArticles, getArticleBySlug, ArticleMeta } from "@/../lib/mdx";

interface ArticlePageProps {
  source: MDXRemoteSerializeResult;
  meta: ArticleMeta;
}

export default function ArticlePage({ source, meta }: ArticlePageProps) {
  return (
    <>
      <Head>
        <title>{String(meta?.title || "Article") + " | Writings"}</title>
        <meta name="description" content={String(meta?.description || "")} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://daooda.dev/articles/${meta.slug}`}
        />
        <meta property="og:image" content={`https://daooda.dev${meta.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta
          name="twitter:image"
          content={`https://daooda.dev${meta.image}`}
        />
      </Head>

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
              MdxList,
              MdxListIcon,
              MdxDivider,
              MdxSubscribe,
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
