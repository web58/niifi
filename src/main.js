

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

  $(document).mouseup(function (e){ // событие клика по веб-документу
    var burgerWrap = $('.header__burger-wrap');
    var div = $(".header__nav"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0 && !burgerWrap.is(e.target)  )  { // и не по его дочерним элементам
      if ($('.header').hasClass('header-opened')){
        $('.header').removeClass('header-opened');
      }
    }
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

  // FORMS ON

  $('.header__buttons-item.for-order-form, .def-button.for-order-form, .sub-button.for-order-form').on('click', function () {

    $('.popup-form.form-order').fadeIn();

  });

  $('.header__buttons-item.for-comment-form, .def-button.for-comment-form, .sub-button.for-comment-form').on('click', function () {

    $('.popup-form.form-comment').fadeIn();

  });

  $('.popup-form__cont-exit, .popup-form__back').on('click', function () {

    $('.popup-form').fadeOut('300', function() {
      $('.popup-form').removeClass('thanks');
    });

  });

  $('.popup-form .sub-button').on('click', function (evt) {

    evt.preventDefault();
    $(this).closest('.popup-form').addClass('thanks')

  });

  $('input[type="file"]').change(function() {
    var file = $('input[type="file"]')[0].files[0].name;
    $(this).closest('label').find('span').text(file);

  });

  // for-comment-form

  // OFF

  // FORM PAGE ON

  $('.quiz__cont-var label').on('click', function () {
    $(this).closest('.quiz__cont-var').siblings().find('input').val('');
    $(this).closest('.quiz__cont-var').siblings().find('label').removeClass('active');
    $(this).addClass('active');
  });

  $('.for-quiz-form').on('click', function () {
    $('body').css('overflow-y', 'hidden');
    $('.quiz').fadeIn();
  });

  $('.quiz__cont-exit, .sub-button').on('click', function () {
    $('body').css('overflow-y', 'auto');
    $('.quiz').fadeOut();
  });

  // OFF


});
