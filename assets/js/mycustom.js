/* card carousel -- specific navigation custom */
/* dibuat dengan cinta oleh apri */
/* dokumentasi : https://stackoverflow.com/questions/31224192/owl-carousel-making-custom-navigation */

$(document).ready(function () {

  // fungsi pertama owl-carousel, sudah di MOD untuk bisa punya beberapa carousel dalam 1 page
  $('.owl-carousel').each(function () {
    $(this).owlCarousel({
      loop: false,
      dots: false,
      responsiveClass: true,
      responsive: {
        // smartphone
        0: {
          items: 1,
          margin: 40,
          stagePadding: 40
        },
        370: {
          items: 1,
          margin: 10,
          stagePadding: 40
        },
        500: {
          items: 2,
          margin: 200,
          stagePadding: 40
        },
        // tablet
        650: {
          items: 2,
          margin: 200,
          stagePadding: 40
        },
        // ipad pro dan 1024 laptop
        // di mod agar bisa nampilin custom navigasi
        1000: {
          items: 3,
          margin: 200,
          stagePadding: 40,
          nav: true,
          navText: [
            '<i class="material-icons" aria-hidden="true">keyboard_arrow_left</i><span class="sr-only">Previous</span>',
            '<i class="material-icons" aria-hidden="true">keyboard_arrow_right</i><span class="sr-only">Next</span>'
          ]
        },
        // laptop
        1300: {
          items: 3,
          stagePadding: 40,
          nav: true,
          navText: [
            '<i class="material-icons" aria-hidden="true">keyboard_arrow_left</i><span class="sr-only">Previous</span>',
            '<i class="material-icons" aria-hidden="true">keyboard_arrow_right</i><span class="sr-only">Next</span>'
          ]
        }
      }
    });
  });

  // animasi button (efek bubble) tambahan
  var animateButton = function (e) {

    e.preventDefault();
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
      e.target.classList.remove('animate');
    }, 700);
  };

  var bubblyButtons = document.getElementsByClassName("bubbly-button");

  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }



  let fab1 = document.getElementById("fab1");
  let innerFabs = document.getElementsByClassName("inner-fabs")[0];

  fab1.addEventListener("click", function () {
    innerFabs.classList.toggle("show");
  });

  document.addEventListener("click", function (e) {
    switch (e.target.id) {
      case "fab1":
      case "fab2":
      case "fab3":
      case "fab4":
      case "fabIcon":
        break;
      default:
        innerFabs.classList.remove("show");
        break;
    }

  });

});