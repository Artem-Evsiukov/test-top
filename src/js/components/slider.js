// import Swiper from 'swiper/bundle';

function initSwiper() {
  const sliderSmall = new Swiper('.js-small', {
    spaceBetween: 10,
    slidesPerView: 4,
    watchSlidesProgress: true,
    freeMode: true,
    centerInsufficientSlides: true,
  });
  const sliderBig = new Swiper('.js-big', {
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    thumbs: {
      swiper: sliderSmall,
    },
  });
}

export default initSwiper;
