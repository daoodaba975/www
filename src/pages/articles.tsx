import Header from "@/../components/Header";
import LatestArticles from "@/../components/home/LatestArticles";
import Subscribe from "@/../components/home/Subscribe";

export default function Articles() {
  return (
    <>
      <Header header="Articles - See all my articles here 🗞️" />
      <LatestArticles />
      <Subscribe />
    </>
  );
}
