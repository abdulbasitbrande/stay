export const initJQueryScripts = () => {
  if (typeof window === "undefined") return;

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
