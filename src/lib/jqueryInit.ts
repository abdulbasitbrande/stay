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
  //   alert("This is working");
  // $(".col-auto .butn").on('click', function(){
  //   alert("helo");
  // })



  // Calculate Width 	
  if ($(window).width() >= 991) {  
    var secWidth = $(".forJqueryOnly").width();
    var containerWidth = $(".container").width();
    var marginLEftRight = secWidth - containerWidth;
    var finalMargin = marginLEftRight / 2;
    // $('.forJqueryOnly .img-wrapper').css({ width: 'calc(100% + ' + finalMargin + 'px)' });
    $('.forJqueryOnly .imgbox').css({ width: 'calc(100% + ' + finalMargin + 'px)' });
    $('.forJqueryOnly .facilities-list-slider').css({ width: 'calc(100% + ' + finalMargin + 'px)' });
    $('.banner-sec .swiper-pagination').css({ right: finalMargin + 'px' });
  }

  // Calculate Width 	
  if ($(window).width() >= 991) {

    var secWidth = $(".leftBoxforJqueryOnly").width();
    var containerWidth = $(".container").width();
    var marginLEftRight = secWidth - containerWidth;
    var finalMargin = marginLEftRight / 2;
    // $('.leftBoxforJqueryOnly .img-wrapper').css({ transform: 'translateX(-' + finalMargin + 'px)' });
    $('.leftBoxforJqueryOnly .imgbox').css({ transform: 'translateX(-' + finalMargin + 'px)' });
    $('.leftBoxforJqueryOnly .about-company-content-wrapper').css('--before-translate', '-' + finalMargin + 'px');
  }
};
