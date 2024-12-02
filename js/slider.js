const swiper1 = new Swiper(".slider-1", {
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

const swiper2 = new Swiper(".slider-2", {
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper3 = new Swiper(".slider-3", {
  loop: true,
  speed: 1000,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  autoHeight: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".custom-pagination",
    clickable: true
  },
});