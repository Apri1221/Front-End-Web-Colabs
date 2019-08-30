/* card carousel -- specific navigation custom */
/* dibuat dengan cinta oleh apri */
/* dokumentasi : https://stackoverflow.com/questions/31224192/owl-carousel-making-custom-navigation */

$(document).ready(function () {

  // Siema carousel
  const siemas = document.querySelectorAll('.siema');

  // Extend prototype with method that adds arrows to DOM
  // Style the arrows with CSS or JS — up to you mate
  Siema.prototype.addArrows = function () {

    // make buttons & append them inside Siema's container
    this.prevArrow = document.createElement('button');
    this.nextArrow = document.createElement('button');
    this.prevArrow.textContent = '<';
    this.nextArrow.textContent = '>';
    this.selector.appendChild(this.prevArrow);
    this.selector.appendChild(this.nextArrow);

    // event handlers on buttons
    this.prevArrow.addEventListener('click', () => this.prev());
    this.nextArrow.addEventListener('click', () => this.next());
  };

  for (const siema of siemas) {
    const instance = new Siema({
      perPage: {
        768: 2,
        1024: 3,
      },
      selector: siema,
    });
    instance.addArrows();
  }


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


  // untuk tombol share
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