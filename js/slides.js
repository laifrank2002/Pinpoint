$(document).ready(function() {

  $('#intro_slides').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
  });

  $('#exec_slides').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    centerMode: true,
    centerPadding: '150px',
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: 'ondemand'
  });

});
//pqxz4655
