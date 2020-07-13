

jQuery(function($) {

  console.log('PRIVET');

  //  MASKS ON

  $('input[type=tel]').mask('+0(000) 000-0000');

  //  OFF

  // MENU BURGER SEARCH ON

  $('.header__burger-wrap').on('click', function () {
   $('.header').toggleClass('header-opened')
  });

  $('.header__personal-search').on('click', function () {
    $('.header__personal-search').toggleClass('active')
  });

  //  OFF


  // SCROLL ON

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

  //  OFF

  // SLIDERS ON

  $('.first-slider').slick({
    slidesToShow: 6,
    arrows: true,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow'),
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  $('.second-slider').slick({
    slidesToShow: 6,
    arrows: true,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow'),
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.third-slider').slick({
    slidesToShow: 4,
    arrows: true,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow'),
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.fourth-slider').slick({
    slidesToShow: 6,
    arrows: true,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow'),
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  $('.news__slider').slick({
    slidesToShow: 4,
    arrows: true,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow'),
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Off

  // MEASURING AND SYSTEM GRID ON

  $('.measuring__view-item').on('click', function () {

    if ($(this).hasClass('go-to-grid')){

      if ($(this).closest('.measuring').hasClass('build-table')){

        $(this).closest('.measuring').removeClass('build-table').addClass('build-grid');

        $(this).closest('.measuring').find('.measuring__list-item').removeClass('col-xl-12').addClass('col-xl-4');
      }
    }

    if ($(this).hasClass('go-to-table')){

      if ($(this).closest('.measuring').hasClass('build-grid')){

        $(this).closest('.measuring').removeClass('build-grid').addClass('build-table');

        $(this).closest('.measuring').find('.measuring__list-item').removeClass('col-xl-4').addClass('col-xl-12');
      }
    }



  });

  // OFF


});
