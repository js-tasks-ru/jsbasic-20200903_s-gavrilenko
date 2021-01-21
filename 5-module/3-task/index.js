function initCarousel() {
  const slides = document.querySelectorAll('.carousel__slide');
  const slider = document.querySelector('.carousel__inner');
  const btnLeft = document.querySelector('.carousel__arrow_left');
  const btnRight = document.querySelector('.carousel__arrow_right');
  let current = 0;
  if (current == 0) {
    btnLeft.style.display = 'none'
  }
  btnRight.addEventListener('click', function () {
    if (current != slides.length - 1) {
      btnLeft.style.display = '';
      let width = 0;
      for (let i = 0; i <= current; i++) {
        width = width + slides[i].offsetWidth
      }
      current = current + 1;
      if (current == slides.length - 1) {
        btnRight.style.display = 'none'
      }
      slider.style.transform = `translateX(-${width}px)`
    }
  })
  btnLeft.addEventListener('click', function () {
    if (current != 0) {
      btnRight.style.display = '';
      let widthLeft = 0;
      for (let i = 1; i < current; i++) {
        widthLeft = widthLeft + slides[i].offsetWidth
      }
      current = current - 1;
      if (current == 0) {
        btnLeft.style.display = 'none'
      }
      slider.style.transform = `translateX(-${widthLeft}px)`
    }
  })
}
