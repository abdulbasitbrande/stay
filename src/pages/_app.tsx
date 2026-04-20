import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Script from "next/script";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "animate.css/animate.min.css";

import "@/styles/globals.css";
import "@/styles/main.css";
import "@/styles/responsive.css";

import WOWInit from "@/components/WOWInit";

import { initJQueryGlobal } from "@/lib/jquery";
import { initJQueryScripts } from "@/lib/jqueryInit";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const init = async () => {
      await initJQueryGlobal(); // wait for jquery load
      initJQueryScripts();
    };

    init();

    const handleRouteChange = async () => {
      setTimeout(async () => {
        await initJQueryGlobal();
        initJQueryScripts();
      }, 50);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <WOWInit />

      <Component {...pageProps} />

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}
