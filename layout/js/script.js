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