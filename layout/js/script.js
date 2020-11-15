//header
$('.header__iconmenu, .header__menu').click(function () {
  $('.header__menu').toggleClass('header__menu--active');
})

$('.header__icons--search, .header__autocomplete').click(function () {
  $('.header__autocomplete').toggleClass('header__autocomplete--active');
})


$('.header__menu--wrapper, .header__autocomplete--inputs').click(function (e) {
  e.preventDefault();
  e.stopPropagation();
})

//footer
$('.footer__menu--title').click(function () {
  const $this = $(this);
  $this.next($('.footer__menu--links')).toggleClass('footer__menu--links--active')
})


//banner
$(document).ready(function () {
  
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
    console.log('oppaaa');
    sliderPrincipalMobile.slick({
      autoplay: false,
      dots: true,
      arrows: true,
    })
  }
})
