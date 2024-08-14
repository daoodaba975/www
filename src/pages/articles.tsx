import Header from "@/../components/Header";
import LatestArticles from "@/../components/home/LatestArticles";
import Subscribe from "@/../components/home/Subscribe";

export default function Articles() {
  return (
    <>
      <Header header="Articles - Read all my latest writings here 🗞️" />
      <LatestArticles />
      <Subscribe />
    </>
  );
}
