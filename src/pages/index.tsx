import Header from "@/../components/Header";
import Readme from "@/../components/home/Readme";
import Stack from "@/../components/home/Stack";
import LatestArticles from "@/../components/home/LatestArticles";
import Subscribe from "@/../components/home/Subscribe";

export default function Home() {
  return (
    <>
      <Header header="Home - Daouda BA, FullStack Developer 👨🏽‍💻" />
      <Readme />
      <Stack />
      <LatestArticles />
      <Subscribe />
    </>
  );
}
