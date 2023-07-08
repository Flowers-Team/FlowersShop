import "../components/card/card.js";


document.addEventListener('DOMContentLoaded', function () {
  const reviewsLink = document.querySelector('.reviews-link');
  const activeLink = document.querySelector('.active-link');
  const reviewsContent = document.querySelector('.ruby__content-reviews');
  const rubyContent = document.querySelector('.ruby__content-ruby');
  const rubyDelivery = document.querySelector('.ruby__content-delivery_terms');
  const rubyRuby = document.querySelector('.wrapper_ruby__content');


  reviewsContent.style.display = 'none'; // Скрыть блок отзывов по умолчанию

  reviewsLink.addEventListener('click', function (e) {
    e.preventDefault();
    reviewsContent.style.display = 'block'; // Показать блок отзывов
    rubyContent.style.display = 'none'; // Скрыть блок оплаты
    rubyDelivery.style.display = 'none';
    rubyRuby.style.display = 'none';
    reviewsLink.classList.add('active-link'); // Добавить класс active-link к reviews-link
    activeLink.classList.remove('active-link'); // Удалить класс active-link у ruby__content-ruby-link

  });

  activeLink.addEventListener('click', function (e) {
    e.preventDefault();
    rubyContent.style.display = 'block'; // Показать блок оплаты
    rubyDelivery.style.display = 'block'; // Показать блок оплаты
    rubyRuby.style.display = 'block'; // Показать блок оплаты
    reviewsContent.style.display = 'none'; // Скрыть блок отзывов
    activeLink.classList.add('active-link'); // Добавить класс active-link к active-link
    reviewsLink.classList.remove('active-link'); // Удалить класс active-link у reviews-link
  });
});


// слайдер

// Получение всех элементов слайдера
window.addEventListener('load', function () {
  // Получение всех элементов слайдера
  const sliderLine = document.querySelector('.container-cards');
  const sliderImages = document.querySelectorAll('.card');
    const sliderBtnPrev = document.querySelector('.slider-blog__next-button');
  const sliderBtnNext = document.querySelector('.slider-blog__prev-button');

  // Инициализация переменных
let sliderCount = 0;
const sliderWidth = sliderImages[0].offsetWidth;

// Добавление обработчиков событий
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);


// Функции
function nextSlide() {
  sliderCount++;

  if (sliderCount >= sliderImages.length) {
    sliderCount = 0;
  }
  rollSlider();
}

function prevSlide() {
  sliderCount--;

  if (sliderCount < 0) {
    sliderCount = sliderImages.length - 1;
  }
  rollSlider();
  
}

function goToSlide(index) {
  sliderCount = index;
  rollSlider();
  
}

function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}
});







