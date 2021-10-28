// nav menu

const hamburgerBtn = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger__menu');
const body = document.querySelector('body');

function handleClick() {
  hamburgerBtn.classList.toggle('open');
  hamburgerMenu.classList.toggle('open');
  body.classList.toggle('no-scroll');
}

hamburgerBtn.addEventListener('click', handleClick);

// carousel
const slider = document.querySelector('.carousel__slider');
const slides = Array.from(slider.children);
// const slideWidth = slides[0].getBoundingClientRect().width;
const nextBtn = document.querySelector('.carousel__controls--right ');
const prevBtn = document.querySelector('.carousel__controls--left ');

// arrange slides next to each other
function setSlideWidth(slide, index) {
  slide.style.left = index * window.innerWidth + 'px';
  slider.style.transform = 'translateX(0)';
}
slides.forEach(setSlideWidth);

// handle window resize
function resizeSlider() {
  slides.forEach(setSlideWidth);
}

function moveToSlide(slider, currentSlide, targetSlide) {
  slider.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

// move to next slide on right button click

function toNextSlide() {
  const currentSlide = slider.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const firstSlide = currentSlide.parentNode.firstElementChild;

  if (!nextSlide) {
    moveToSlide(slider, currentSlide, firstSlide);
  } else {
    moveToSlide(slider, currentSlide, nextSlide);
  }
}

function toPrevSlide() {
  const currentSlide = slider.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const lastSlide = currentSlide.parentNode.lastElementChild;

  if (!prevSlide) {
    moveToSlide(slider, currentSlide, lastSlide);
  } else {
    moveToSlide(slider, currentSlide, prevSlide);
  }
}

nextBtn.addEventListener('click', toNextSlide);
prevBtn.addEventListener('click', toPrevSlide);
nextBtn.addEventListener('keypress', toNextSlide);
prevBtn.addEventListener('keypress', toPrevSlide);
window.addEventListener('resize', resizeSlider);
