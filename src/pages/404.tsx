import Header from "@/../components/Header";
import Error404 from "@/../components/errors/Error404";

export default function Custom404() {
  return (
    <>
      <Header header="Page Not Found ❌" />
      <Error404 />
    </>
  );
}
