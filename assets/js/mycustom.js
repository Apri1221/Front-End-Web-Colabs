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
          stagePadding: 20
        },
        370: {
          items: 1,
          margin: 10,
          stagePadding: 40
        },
        500: {
          items: 1,
          margin: -80,
          stagePadding: 40
        },
        // tablet
        600: {
          items: 2,
          margin: 150,
          stagePadding: 20
        },
        710: {
          items: 2,
          margin: 180,
          stagePadding: 40
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


// stop page autoscroll when focused input
// untuk IOS
$(document).on('touchstart', 'textarea, input[type=text], input[type=date], input[type=password], input[type=email], input[type=number]', function (e) {

  var intv = 100;
  var $obj = $(this);

  if (getMobileOperatingSystem() == 'ios') {

    e.preventDefault();
    e.stopPropagation();

    $obj.css({ 'transform': 'TranslateY(-10000px)' }).focus();
    setTimeout(function () { $obj.css({ 'transform': 'none' }); }, intv);
  }
  return true;
});

// untuk android
function onKeyboardOnOff(isOpen) {
  // Write down your handling code
  if (isOpen) {
    // keyboard is open
    $wrap.css({ opacity: 0 })
      .find('.content').hide(); // trick the browser thinks the element is relatively top position... 
    setTimeout(function () {
      $wrap.css({ opacity: 1 })
        .find('.content').show();
    }, 10);
  }
}

// animasi button tambahan
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