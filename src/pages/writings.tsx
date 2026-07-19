import { GetStaticProps } from "next";

import Header from "@/components/Header";
import Subscribe from "@/components/Subscribe";
import ArticlesSection from "@/components/writings/ArticlesSection";

import { getAllArticles, ArticleMeta } from "@/lib/mdx";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      articles: getAllArticles(),
    },
  };
};

export default function Writings({ articles }: { articles: ArticleMeta[] }) {
  return (
    <>
      <Header header="Writings - Read all my latest articles here 🗞️" />
      <ArticlesSection articles={articles} />
      <Subscribe />
    </>
  );
}
