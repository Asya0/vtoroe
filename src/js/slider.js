import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

document
  .querySelector(".swiper-pagination-bullet-custom")
  .classList.add("swiper-pagination-bullet-active");

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "custom",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChangeTransitionStart: function () {
      var activeIndex = this.realIndex;
      var bullets = document.querySelectorAll(
        ".swiper-pagination-bullet-custom"
      );

      bullets.forEach(function (bullet, index) {
        if (index === activeIndex) {
          bullet.classList.add("swiper-pagination-bullet-active");
        } else {
          bullet.classList.remove("swiper-pagination-bullet-active");
        }
      });
    },
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  effect: "fade",
  speed: 1000,
  spaceBetween: 100,
});

document
  .querySelectorAll(".swiper-pagination-bullet-custom")
  .forEach(function (bullet, index) {
    bullet.addEventListener("click", function () {
      swiper.slideTo(index); // Используем `swiper` для переключения к слайду с соответствующим индексом
    });
  });
