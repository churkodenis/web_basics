let currentSlide = 0;

function showSlide(slideIndex) {
  const items = document.querySelectorAll('.carousel-item');
  const totalSlides = items.length;

  if (slideIndex >= totalSlides) {
    currentSlide = 0;
  } else if (slideIndex < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = slideIndex;
  }

  const carouselWidth = document.querySelector('.carousel').offsetWidth;
  document.querySelector('.carousel-items').style.transform = `translateX(-${currentSlide * carouselWidth}px)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

showSlide(currentSlide);

window.addEventListener('resize', () => showSlide(currentSlide));
