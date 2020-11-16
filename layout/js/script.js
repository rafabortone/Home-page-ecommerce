$(document).ready(function () {
  //header
  $('.header__iconmenu, .header__menu').click(function () {
    $('.header__menu').toggleClass('header__menu--active');
  })

  $('.header__icons--search, .header__autocomplete').click(function () {
    $('.header__autocomplete').toggleClass('header__autocomplete--active');
  })

//stopPropagatiion
  $('.header__menu--wrapper, .header__autocomplete--inputs, .modal-newsletter__wrapper').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
  })

  //footer
  $('.footer__menu--title').click(function () {
    const $this = $(this);
    $this.next($('.footer__menu--links')).toggleClass('footer__menu--links--active')
  })


  //banner
  const sliderPrincipal = $('#home__banner--slider')
  if (sliderPrincipal.length) {
    sliderPrincipal.slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: true,
    })
  }

  const sliderPrincipalMobile = $('#home__banner--slider--mobile')
  if (sliderPrincipalMobile.length) {
    sliderPrincipalMobile.slick({
      autoplay: false,
      dots: true,
      arrows: true,
    })
  }

  const sliderTipBar = $('#tipbar-list')
  if (sliderTipBar.length) {
    sliderTipBar.slick({
      autoplay: false,
      dots: false,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      variableWidth: true,
      responsive: [{
          breakpoint: 1599,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }

        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          },
        },
      ]
    })
  }

  const sliderMarcas = $('#marcas-list')
  if (sliderMarcas.length) {
    sliderMarcas.slick({
      autoplay: false,
      dots: false,
      arrows: false,
      slidesToShow: 5,
      slidesToScroll: 5,
      variableWidth: true,
      responsive: [{
          breakpoint: 1599,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }

        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          },
        },
      ]
    })
  }

  const sliderShelfHome = $('#shelf-list')
  if (sliderShelfHome.length) {
    sliderShelfHome.slick({
      arrows: true,
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      variableWidth: true,
      responsive: [{
          breakpoint: 1599,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }

        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          },
        },
      ]
    })

  }

  $('.modal-newsletter').click(function () {
    $(this).hide();
  })

})