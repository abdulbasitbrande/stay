import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Script from "next/script";

import "../../public/assets/fonts/aileron/stylesheet.css";
import "../../public/assets/fonts/inter/stylesheet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";

import "@/styles/globals.css";
import "@/styles/main.css";
import "@/styles/u-main.css";
import "@/styles/responsive.css";

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
      <Component {...pageProps} />

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}
