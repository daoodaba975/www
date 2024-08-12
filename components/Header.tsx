import Head from "next/head";

interface HeaderProps {
  header: string;
}

function Header(props: Readonly<HeaderProps>) {
  return (
    <>
      <Head>
        <title>{props.header}</title>
        <meta
          name="description"
          content="👨🏽‍💻 Daouda BA, FullStack Developer, Based in DAKAR, Senegal."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          // @ts-expect-error
          fetchpriority="high"
          href="/favicon.ico"
        />

        {/* OG Meta Tags */}
        <meta property="og:url" content="https://daooda.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/degyjrpjj/image/upload/v1697857126/galsendev/share/a8outneqrzhfr7zn79vo.png"
        />
        <meta property="og:title" content="Daouda BA" />
        <meta
          property="og:description"
          content="👨🏽‍💻 Daouda BA, FullStack Developer, Based in DAKAR, Senegal."
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="daooda.dev" />
        <meta property="twitter:url" content="https://daooda.dev" />
        <meta name="twitter:title" content="Daouda BA" />
        <meta
          name="twitter:description"
          content="👨🏽‍💻 Daouda BA, FullStack Developer, Based in DAKAR, Senegal."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/degyjrpjj/image/upload/v1688584020/website/share/ugaacimkpgt6rsnecvds.png"
        />
      </Head>
    </>
  );
}

export default Header;
