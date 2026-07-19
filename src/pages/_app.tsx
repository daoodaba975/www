import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import type { AppProps } from "next/app";

import { Sora } from "next/font/google";
const sora = Sora({ subsets: ["latin"] });

import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import "@/styles/globals.css";

// Cloudflare's RUM endpoint only allows `http://localhost` (no port) as an
// origin, so the beacon always fails CORS in dev. Load it in production only.
const cloudflareBeaconToken =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_CF_BEACON_TOKEN
    : undefined;

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <>
      {loading && <Loader />}
      <div className={sora.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>

      {/* Cloudflare Web Analytics */}
      {cloudflareBeaconToken && (
        <Script
          id="cloudflare-web-analytics"
          type="module"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon={JSON.stringify({ token: cloudflareBeaconToken })}
        />
      )}
    </>
  );
}
