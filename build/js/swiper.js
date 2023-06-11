const swiper = new Swiper('.swiper', {
    allowSlideNext: true,
    allowSlidePrev: true,
    allowTouchMove: false,
    autoplay: {
        delay: 5000
    },
    loop: true,
    speed: 1000,
    effect: 'fade'
});

const studioSwiper = new Swiper('.studio-slider', {
    loop: true,
    speed: 500,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})