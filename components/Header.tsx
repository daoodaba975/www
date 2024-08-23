import Head from "next/head";
import { useEffect } from "react";

interface HeaderProps {
  header: string;
}

function Header(props: Readonly<HeaderProps>) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://beamanalytics.b-cdn.net/beam.min.js";
    script.setAttribute("data-token", process.env.BEAM_DATA_TOKEN || "");
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>{props.header}</title>
        <meta
          name="description"
          content="👨🏽‍💻 Daouda BA, FullStack Developer ‒ Passionate about building innovative solutions 🚀"
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
          content="https://res.cloudinary.com/degyjrpjj/image/upload/v1697857126/daooda/share/h3ln2ib2b7qu0hgpezty.png"
        />
        <meta property="og:title" content="Daouda BA" />
        <meta
          property="og:description"
          content="👨🏽‍💻 Daouda BA, FullStack Developer ‒ Passionate about building innovative solutions 🚀"
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
          content="👨🏽‍💻 Daouda BA, FullStack Developer ‒ Passionate about building innovative solutions 🚀"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/degyjrpjj/image/upload/v1697857126/daooda/share/h3ln2ib2b7qu0hgpezty.png"
        />
      </Head>
    </>
  );
}

export default Header;
