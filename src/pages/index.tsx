import Header from "@/../components/Header";
import Readme from "@/../components/home/Readme";
import Stack from "@/../components/home/Stack";
import LatestWritings from "@/../components/home/LatestWritings";
import Subscribe from "@/../components/Subscribe";

export default function Home() {
  return (
    <>
      <Header header="Home - Daouda BA, FullStack Developer 👨🏽‍💻" />
      <Readme />
      <Stack />
      <LatestWritings />
      <Subscribe />
    </>
  );
}
