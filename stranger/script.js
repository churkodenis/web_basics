const carouselItems = document.querySelectorAll('.carousel__item');
const prevButton = document.querySelector('.carousel__button.prev');
const nextButton = document.querySelector('.carousel__button.next');
let currentIndex = 0;

// Функція для відображення потрібного елемента каруселі
function showCarouselItem(index) {
    const offset = -index * 100; // Зсув для кожного слайду на 100% вліво
    carouselItems.forEach(item => {
        item.style.transform = `translateX(${offset}%)`;
    });
}

// Перехід до попереднього елемента
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showCarouselItem(currentIndex);
});

// Перехід до наступного елемента
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showCarouselItem(currentIndex);
});

// Ініціалізація - відображення першого елемента каруселі
showCarouselItem(currentIndex);
