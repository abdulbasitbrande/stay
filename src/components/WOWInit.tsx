"use client";

import { useEffect } from "react";

export default function WOWInit() {
  useEffect(() => {
    let wowInstance: any;

    async function initWOW() {
      const WOW = (await import("wowjs")).default;

      wowInstance = new WOW.WOW({
        live: false,
      });

      wowInstance.init();
    }

    initWOW();

    return () => {
      wowInstance = null;
    };
  }, []);

  return null;
}