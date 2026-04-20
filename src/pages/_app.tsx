import type { AppProps } from "next/app";
import Script from "next/script";

import "../../public/assets/fonts/aileron/stylesheet.css"
import "../../public/assets/fonts/inter/stylesheet.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "animate.css/animate.min.css";

import "@/styles/globals.css";
import "@/styles/main.css";
import "@/styles/responsive.css";

import WOWInit from "@/components/WOWInit";

export default function App({ Component, pageProps }: AppProps) {
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