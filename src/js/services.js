export default function mobileSlider() {
  if (window.matchMedia('(max-width: 768px)').matches) {
    const swiper1 = new Swiper('.swiper1', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      spaceBetween: 16,
      slidesPerView: 'auto',
    });

    const swiper2 = new Swiper('.swiper2', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      spaceBetween: 16,
      slidesPerView: 'auto',
    });

    const swiper3 = new Swiper('.swiper3', {
      // Optional parameters
      direction: 'horizontal',
      loop: false,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      spaceBetween: 16,
      slidesPerView: 'auto',
    });
  }
}


