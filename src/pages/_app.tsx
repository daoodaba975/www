import Layout from "@/../components/Layout";
import "@/styles/globals.css";

import type { AppProps } from "next/app";

import { Sora } from "next/font/google";
const sora = Sora({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={sora.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
