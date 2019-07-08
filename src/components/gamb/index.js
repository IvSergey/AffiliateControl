let gamb = document.querySelector('#gamb__menu');
// const aside = document.querySelector('.aside');
const menu = document.querySelector('.aside__menu');


gamb.addEventListener('click', function() {
  console.log('click');
  if (menu.classList.contains('aside__menu--active')) {
    // aside.style.height = '100vh';
    menu.classList.remove('aside__menu--active');
    gamb.classList.remove('gamb__btn--active');
  }
  else {
    menu.classList.add('aside__menu--active');
    // aside.style.height = '100%';
    gamb.classList.add('gamb__btn--active');
  }
});