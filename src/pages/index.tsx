import { GetStaticProps } from "next";

import Header from "@/../components/Header";
import Readme from "@/../components/home/Readme";
import Stack from "@/../components/home/Stack";
import LatestWritings from "@/../components/home/LatestWritings";
import Subscribe from "@/../components/Subscribe";

import { ArticleMeta, getAllArticles } from "@/../lib/mdx";

export const getStaticProps: GetStaticProps = async () => {
  const articles = getAllArticles().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return {
    props: {
      articles,
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
