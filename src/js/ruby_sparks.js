document.addEventListener('DOMContentLoaded', function() {
    const reviewsLink = document.querySelector('.reviews-link');
    const activeLink = document.querySelector('.active-link');
    const reviewsContent = document.querySelector('.ruby__content-reviews');
    const rubyContent = document.querySelector('.ruby__content-ruby');
    const rubyDelivery = document.querySelector('.ruby__content-delivery_terms');
    const rubyRuby = document.querySelector('.wrapper_ruby__content');
   
  
    reviewsContent.style.display = 'none'; // Скрыть блок отзывов по умолчанию
  
    reviewsLink.addEventListener('click', function(e) {
      e.preventDefault();
      reviewsContent.style.display = 'block'; // Показать блок отзывов
      rubyContent.style.display = 'none'; // Скрыть блок оплаты
      rubyDelivery.style.display = 'none';
      rubyRuby.style.display = 'none';
      reviewsLink.classList.add('active-link'); // Добавить класс active-link к reviews-link
    activeLink.classList.remove('active-link'); // Удалить класс active-link у ruby__content-ruby-link
    
    });
  
    activeLink.addEventListener('click', function(e) {
      e.preventDefault();
      rubyContent.style.display = 'block'; // Показать блок оплаты
      rubyDelivery.style.display = 'block'; // Показать блок оплаты
      rubyRuby.style.display = 'block'; // Показать блок оплаты
      reviewsContent.style.display = 'none'; // Скрыть блок отзывов
      activeLink.classList.add('active-link'); // Добавить класс active-link к active-link
      reviewsLink.classList.remove('active-link'); // Удалить класс active-link у reviews-link
    });
  });