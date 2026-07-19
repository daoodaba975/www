import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Daooda — Writings"
          href="/rss.xml"
        />
      </Head>
      <body className="bg-snow dark:bg-night">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
