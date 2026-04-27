export const initJQueryScripts = () => {
  if (typeof window === "undefined") return;

  const $ = require("jquery");

  const $faq = $("#homefaq");

  // prevent duplicate bindings (VERY IMPORTANT in Next.js)
  $faq.off("show.bs.collapse hide.bs.collapse");

  //  Only one open at a time
  // $faq.on("show.bs.collapse", function (e) {
  //   $faq.find(".accordion-collapse.show").not(e.target).removeClass("show");
  // });

  // Prevent closing last open item
  $faq.on("hide.bs.collapse", function (e:any) {
    const openItems = $faq.find(".accordion-collapse.show");

    if (openItems.length === 1) {
      e.preventDefault();
    }
  });
};
