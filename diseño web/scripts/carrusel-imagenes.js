const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-image');

    let counter = 1;
    const slideWidth = carouselImages[0].clientWidth;

    carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

    setInterval(() => {
      carouselSlide.style.transition = 'transform 0.5s ease-in-out';
      counter++;
      carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
    }, 3000);

    carouselSlide.addEventListener('transitionend', () => {
      if (carouselImages[counter].id === 'last-clone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
      }
      if (carouselImages[counter].id === 'first-clone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
      }
    });