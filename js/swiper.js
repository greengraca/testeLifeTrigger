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

var swiperMarcas = new Swiper('.swiper-container-marcas', {
    // Optional parameters
    loop: true,
    // centeredSlides: true,
    speed: 10000,
    spaceBetween: 50,
    slidesPerView: 'auto',
    loopedSlides: 11,
    slidesPerGroup: 11,
    freeMode: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    }
})

  var swiperMarcas2 = new Swiper('.swiper-container-marcas2', {
    // Optional parameters
    loop: true,
    // centeredSlides: true,
    speed: 10000,
    spaceBetween: 50,
    slidesPerView: 'auto',
    loopedSlides: 11,
    slidesPerGroup: 11,
    freeMode: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
        reverseDirection: true
    }
  })