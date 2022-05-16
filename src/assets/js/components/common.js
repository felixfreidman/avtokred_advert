const wordArray = []
window.ityped.init(document.querySelector('.ityped'), {
    strings: ['по 2-м документам', 'без справок', 'без поручителей', 'без первого взноса'],
    loop: true
})
var swiper = new Swiper('#feedbackSwiper', {
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
    loop: true,
    fadeEffect: {
        crossFade: true
    },
    speed: 800,
    watchSlidesProgress: true,
    watchVisibility: true,
    disableOnInteraction: true,
    slidesPerView: 4,
});
var swiper = new Swiper('#banksSwiper', {
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
    loop: true,
    fadeEffect: {
        crossFade: true
    },
    speed: 800,
    watchSlidesProgress: true,
    watchVisibility: true,
    disableOnInteraction: true,
    slidesPerView: 3,
});