import Swiper from "../node_modules/swiper/swiper-bundle.min.mjs";
import Navigation from "../node_modules/swiper/modules/navigation.min.mjs";

function initSliders() {
  if (document.querySelector(".swiper")) {
    new Swiper(".swiper", {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 15,
      autoHeight: true,
      speed: 800,
      autoplay: {
        delay: 5000,
      },

      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
      on: {},
    });
  }
}

initSliders();
