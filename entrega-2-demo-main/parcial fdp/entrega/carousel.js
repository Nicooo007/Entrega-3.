let currentIndex = 0;

function autoSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Quitar la clase "active" del slide actual
    slides[currentIndex].classList.remove('active');

    // Avanzar al siguiente slide
    currentIndex = (currentIndex + 1) % totalSlides;

    // Agregar la clase "active" al nuevo slide
    slides[currentIndex].classList.add('active');

    // Mover el carrusel
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Cambiar el slide cada 3 segundos
setInterval(autoSlide, 3000);
