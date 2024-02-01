function goto() {
    window.location.href="Reg/index.html";
  }
  const carouselContainer = document.querySelector('.carousel-container');

  let slideIndex = 0;

  function showSlides() {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }

    const translateValue = -slideIndex * 100;
    carouselContainer.style.transform = `translateX(${translateValue}%)`;

    slideIndex++;
  }

  // Set interval to change slides every 3 seconds (adjust as needed)
  setInterval(showSlides, 4000);