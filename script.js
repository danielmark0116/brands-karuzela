const carouselBox = document.querySelector('#carousel-box');
const items = document.querySelectorAll('.item');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');

let valueToTranslate = carouselBox.clientWidth;
let translate = 0;

let maxCounter = Math.ceil(
  (items[0].clientWidth * items.length) / valueToTranslate
);

let counter = 1;

window.addEventListener('resize', function() {
  this.setTimeout(function() {
    valueToTranslate = carouselBox.clientWidth;
    maxCounter = Math.ceil(
      (items[0].clientWidth * items.length) / valueToTranslate
    );
  }, 500);
});

nextBtn.addEventListener('click', function() {
  if (counter < maxCounter) {
    translate = valueToTranslate * counter;
    carouselBox.style.transform = `translateX(-${translate}px)`;
    counter += 1;
  }
});

prevBtn.addEventListener('click', function() {
  if (counter > 1) {
    counter = counter - 1;
    translate = translate - valueToTranslate;
    carouselBox.style.transform = `translateX(-${translate}px)`;
  }
});
