export const initJQueryGlobal = async () => {
  if (typeof window === "undefined") return;

  const $ = (await import("jquery")).default;

  window.$ = window.jQuery = $;
};