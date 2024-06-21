const burger = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  overlay.classList.toggle('active');
});

close.addEventListener('click', () => {
  burger.classList.remove('active');
  overlay.classList.remove('active');
});

menu.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    event.target.nextElementSibling.classList.toggle('active');
  }
});

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    burger.classList.remove('active');
    overlay.classList.remove('active');
  }
});

const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function showSlide() {
  heroSlides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % heroSlides.length;
  heroSlides[currentSlide].classList.add('active');
}

setInterval(showSlide, 5000);





// ヒーロー画像のスライド切り替えのコードは変更なし