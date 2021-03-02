$(function () {
  var swiper = new Swiper('.sample__slider', {
    direction: 'vertical',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button__next',
      prevEl: '.swiper-button__prev',
    },
  });
});