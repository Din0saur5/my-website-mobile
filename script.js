const burgerButton=document.getElementById('plain-burger');
const dropDown = document.querySelector('.drop-menu');
const menuExit = document.getElementById('menu-exit-button');
burgerButton.addEventListener('click', function () {
    dropDown.style.display = 'block';
   
});

menuExit.addEventListener('click', function () {
    dropDown.style.display = 'none';
    
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".gallery-slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        showSlide(currentSlide);
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    // Initially display the first slide
    showSlide(currentSlide);
});

