const left = document.querySelector('#left');
const right = document.querySelector('#right');
const items = document.querySelector('#items');
// const slider = document.querySelector('.slidder');

// let wid = slider.offsetWidth;
const minRight = 0;
const maxRight = 1200;
const step = 120;
let currentRight = 0;

items.style.right = currentRight;

right.addEventListener('click', function() {
  if (currentRight < maxRight) {
    currentRight += step;
    items.style.right = currentRight + 'px';
  }
});

left.addEventListener('click', function() {
  if (currentRight > minRight) {
    currentRight -= step;
    items.style.right = currentRight + 'px';
  }
});

