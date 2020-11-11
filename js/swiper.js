var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    centeredSlides: true,
    breakpoints: {
        800: {
            slidesPerView: 2,
            centeredSlides: false
        },
        1100: {
            slidesPerView: 3,
            centeredSlides: true
        }

    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    }
});