import Header from "@/../components/Header";
import Error500 from "@/../components/errors/Error500";

export default function Custom404() {
  return (
    <>
      <Header header="Ouch! - Internal Server Error ❌" />
      <Error500 />
    </>
  );
}
