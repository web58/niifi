

jQuery(function($) {

  console.log('PRIVET');

  //  MASKS ON

  $('input[type=tel]').mask('+0(000) 000-0000');

  //  MASKS OFF

  // MENU BURGER SEARCH ON

  $('.header__burger-wrap').on('click', function () {
   $('.header').toggleClass('header-opened')
  });

  $('.header__personal-search').on('click', function () {
    $('.header__personal-search').toggleClass('active')
  });

  // MENU BURGER SEARCH OFF


  // SCROLL

  if (window.matchMedia("(min-width: 1200px) and (max-width: 1599px)").matches) {

    $(window).scroll(scrollArrow);

    function scrollArrow() {
      var scrolled = $(window).scrollTop();

      if (scrolled > 160){
        $('body').addClass('page-scrolled');
      } else{
        $('body').removeClass('page-scrolled');
      }
    }

  } else if (window.matchMedia("(min-width: 1600px)").matches){

    $(window).scroll(scrollArrow);

    function scrollArrow() {
      var scrolled = $(window).scrollTop();

      if (scrolled > 160){
        $('body').addClass('page-scrolled');
      } else{
        $('body').removeClass('page-scrolled');
      }
    }
  }




});