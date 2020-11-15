//header
$('.header__iconmenu, .header__menu').click(function (e) {
  $('.header__menu').toggleClass('header__menu--active');
})

$('.header__menu--wrapper').click(function (e) {
  e.preventDefault();
  e.stopPropagation();
})