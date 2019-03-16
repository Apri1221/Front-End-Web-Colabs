(() => {
  'use strict';
  // Page is loaded
  const objects = document.getElementsByClassName('asyncImage');

  Array.from(objects).map((item) => {
    // Start loading image
    const img = new Image();
    img.src = item.dataset.src;
    // Once image is loaded replace the src of the HTML element
    img.onload = () => {
      item.classList.remove('asyncImage');
      return item.nodeName === 'IMG' ?
        item.src = item.dataset.src :
        item.style.backgroundImage = `url(${item.dataset.src})`;
    };
  });
})();


/* card carousel -- specific navigation custom */
/* dibuat dengan cinta oleh apri */
/* dokumentasi : https://stackoverflow.com/questions/31224192/owl-carousel-making-custom-navigation */
$(document).ready(function () {
  $('.owl-carousel').each(function () {
    $(this).owlCarousel({
      loop: false,
      dots: false,
      responsiveClass: true,
      responsive: {
        // smartphone
        0: {
          items: 1,
          margin: 30,
          stagePadding: 15,
          autoplay: true,
          autoplayHoverPause: true,
        },
        370: {
          items: 1,
          margin: 10,
          stagePadding: 30,
          autoplay: true,
          autoplayHoverPause: true,
        },
        // tablet
        600: {
          items: 2,
          margin: 20,
          stagePadding: 10
        },
        // ipad pro
        1000: {
          items: 2,
          stagePadding: 80,
          nav: true,
          navText: [
            '<i class="material-icons" aria-hidden="true">keyboard_arrow_left</i><span class="sr-only">Previous</span>',
            '<i class="material-icons" aria-hidden="true">keyboard_arrow_right</i><span class="sr-only">Next</span>'
          ]
        },
        // laptop
        1300: {
          items: 3,
          stagePadding: 30,
          nav: true,
          navText: [
            '<i class="material-icons" aria-hidden="true">keyboard_arrow_left</i><span class="sr-only">Previous</span>',
            '<i class="material-icons" aria-hidden="true">keyboard_arrow_right</i><span class="sr-only">Next</span>'
          ]
        }
      }
    });
  });
});