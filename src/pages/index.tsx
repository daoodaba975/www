import { GetStaticProps } from "next";

import Header from "@/components/Header";
import Readme from "@/components/home/Readme";
import Stack from "@/components/home/Stack";
import LatestWritings from "@/components/home/LatestWritings";
import Subscribe from "@/components/Subscribe";

import { ArticleMeta, getAllArticles } from "@/lib/mdx";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      articles: getAllArticles().slice(0, 3),
    },
  };
};

export default function Home({ articles }: { articles: ArticleMeta[] }) {
  return (
    <>
      <Header header="Home - Daouda BA, FullStack Developer 👨🏽‍💻" />
      <Readme />
      <Stack />
      <LatestWritings articles={articles} />
      <Subscribe />
    </>
  );
}
