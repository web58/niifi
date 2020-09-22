

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

  $('.catalog-side__right-view__item').on('click', function () {

    if ($(this).hasClass('go-to-grid')){

      if ($(this).closest('.catalog-side').hasClass('build-table')){

        $(this).closest('.catalog-side').removeClass('build-table').addClass('build-grid');

      }
    }

    if ($(this).hasClass('go-to-table')){

      if ($(this).closest('.catalog-side').hasClass('build-grid')){

        $(this).closest('.catalog-side').removeClass('build-grid').addClass('build-table');

      }
    }

  });

  // CATALOG FILTER TITLE ARROW ON
  if (window.matchMedia("(max-width: 1199px)").matches) {
    $('.catalog-side__left-filters__title').on('click', function () {
      $(this).toggleClass('diz-active');
      $('.filter-block').fadeToggle(10);
    });
  }
  // OFF



  // OFF

  // FORMS ON

  $('.header__buttons-item.for-order-form, .def-button.for-order-form, .sub-button.for-order-form').on('click', function () {

    var hiddenValue = $(this).attr('data-form-button');
    $('.popup-form-form-order-hidden').val(hiddenValue);
    $('.popup-form.form-order').fadeIn();

  });

  $('.header__buttons-item.for-download-form, .def-button.for-download-form, .sub-button.for-download-form').on('click', function () {

    var hiddenValue = $(this).attr('data-form-button');
    $('.popup-form-form-download-hidden').val(hiddenValue);
    $('.popup-form.form-download').fadeIn();

  });

  $('.header__buttons-item.for-comment-form, .def-button.for-comment-form, .sub-button.for-comment-form').on('click', function () {

    var hiddenValue = $(this).attr('data-form-button');
    $('.popup-form-form-comment-hidden').val(hiddenValue);
    $('.popup-form.form-comment').fadeIn();

  });

  $('.popup-form__cont-exit, .popup-form__back').on('click', function () {

    $('.popup-form').fadeOut('100', function() {
      setTimeout(function () {
        $('.popup-form').removeClass('thanks');
      }, 1000);
    });

  });

    // ОТПРАВКА ФОРМЫ - ОТОБРАЖЕНИЕ БЛАГОДАРНОСТИ ON

  $('.popup-form .sub-button').on('click', function (evt) {

    evt.preventDefault();
    $(this).closest('.popup-form').addClass('thanks')

  });

    // OFF

  $('input[type="file"]').change(function() {
    var file = $('input[type="file"]')[0].files[0].name;
    $(this).closest('label').find('span').text(file);

  });

  // for-comment-form

  // OFF

  // FORM QUIZ PAGE ON

  $('.quiz__cont-var label').on('click', function () {
    $(this).closest('.quiz__cont-var').siblings().find('input').val('');
    $(this).closest('.quiz__cont-var').siblings().find('label').removeClass('active');
    $(this).addClass('active');
  });

  $('.for-quiz-form').on('click', function () {
    $('body').css('overflow-y', 'hidden');
    $('.quiz').fadeIn();
  });

  $('.quiz__cont-exit').on('click', function () {
    $('body').css('overflow-y', 'auto');
    $('.quiz').fadeOut(300, function () {
      $('.quiz__cont-form').fadeIn();
      $('.quiz .popup-form__cont-thanks').fadeOut();
    });
  });

    // ОТПРАВКА КВИЗА - ОТОБРАЖЕНИЕ БЛАГОДАРНОСТИ ON

  $('.quiz .sub-button').on('click', function (evt) {

    evt.preventDefault();
    $(this).closest('.quiz__cont-form').fadeOut(300, function () {
      $('.popup-form__cont-thanks').fadeIn(300);
    })

  });

    // OFF

  // OFF

  // RANGE FILTER ON



  // OFF

});
