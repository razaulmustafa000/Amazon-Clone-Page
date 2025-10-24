// Hero-Section-Slider 
const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slide');
const totalSlides = slideImages.length;

let index = 0;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
});

// Auto Slide every 5 seconds
setInterval(() => {
  index = (index + 1) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
}, 5000);



// Product Slider-2

document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector(".product-slides2");
    const slides = document.querySelectorAll(".product-slide2");
    const prevBtn = document.querySelector(".prev-btn2");
    const nextBtn = document.querySelector(".next-btn2");

    const slidesPerView = 4;
    const totalSlides = slides.length;
    const maxIndex = totalSlides - slidesPerView;
    
    let currentIndex = 0;

    function updateSlider() {
        const slideWidthPercentage = 100 / slidesPerView;
        const offset = -currentIndex * slideWidthPercentage; 
        
        slidesContainer.style.transform = `translateX(${offset}%)`;

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= maxIndex;
        
        prevBtn.style.opacity = currentIndex === 0 ? 0.5 : 1;
        nextBtn.style.opacity = currentIndex >= maxIndex ? 0.5 : 1;
    }

    function nextSlide() {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    updateSlider();
});