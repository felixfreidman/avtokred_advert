"use strict";

var _Swiper, _Swiper2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var wordArray = [];
window.ityped.init(document.querySelector('.ityped'), {
  strings: ['по 2-м документам', 'без справок', 'без поручителей', 'без первого взноса'],
  loop: true
});
var swiper = new Swiper('#feedbackSwiper', (_Swiper = {
  fadeEffect: {
    crossFade: true
  },
  // navigation: {
  //     nextEl: '.swiper-button-next--header',
  //     prevEl: '.swiper-button-prev--header',
  // },
  // pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true,
  // },
  loop: true
}, _defineProperty(_Swiper, "fadeEffect", {
  crossFade: true
}), _defineProperty(_Swiper, "speed", 800), _defineProperty(_Swiper, "watchSlidesProgress", true), _defineProperty(_Swiper, "watchVisibility", true), _defineProperty(_Swiper, "disableOnInteraction", true), _defineProperty(_Swiper, "slidesPerView", 4), _Swiper));
var swiper = new Swiper('#banksSwiper', (_Swiper2 = {
  fadeEffect: {
    crossFade: true
  },
  // navigation: {
  //     nextEl: '.swiper-button-next--header',
  //     prevEl: '.swiper-button-prev--header',
  // },
  // pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true,
  // },
  loop: true
}, _defineProperty(_Swiper2, "fadeEffect", {
  crossFade: true
}), _defineProperty(_Swiper2, "speed", 800), _defineProperty(_Swiper2, "watchSlidesProgress", true), _defineProperty(_Swiper2, "watchVisibility", true), _defineProperty(_Swiper2, "disableOnInteraction", true), _defineProperty(_Swiper2, "slidesPerView", 3), _Swiper2));