import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {

    let main = this.createCarousel();

    let slides1 = this.createSlides(main, slides);
    main.append(slides1)
    const btns = main.querySelectorAll('.carousel__button');
    for (let a = 0; a < btns.length; a++) {
      btns[a].addEventListener("click", function () {
        let event = new CustomEvent("product-add", {
          detail: slides[a].id,
          bubbles: true
        })
        main.dispatchEvent(event)
      })
    }
    this.elem = main;
  }

  createCarousel() {
    let main = document.createElement("div");
    main.classList.add("carousel");
    main.insertAdjacentHTML('beforeend', '<div class="carousel__arrow carousel__arrow_right"> <img src="../../assets/images/icons/angle-icon.svg" alt="icon"> </div> <div class="carousel__arrow carousel__arrow_left"> <img src="../../assets/images/icons/angle-left-icon.svg" alt="icon"></div>')
    return main;
  }

  createSlides(main1, slides) {
    let main = document.createElement("div");
    main.classList.add("carousel__inner");
    for (let i = 0; i < slides.length; i++) {
      main.insertAdjacentHTML('beforeend', `<div class="carousel__slide" data-id="${slides[i].id}"> <img src="../../assets/images/carousel/${slides[i].image}" class="carousel__img" alt="slide"> <div class="carousel__caption"> <span class="carousel__price">€${slides[i].price}.00</span> <div class="carousel__title">${slides[i].name}</div> <button type="button" class="carousel__button"> <img src="../../assets/images/icons/plus-icon.svg" alt="icon"> </button> </div> </div>`)

    }
    const slides1 = main.querySelectorAll('.carousel__slide');
    const btnLeft = main1.querySelector('.carousel__arrow_left');
    const btnRight = main1.querySelector('.carousel__arrow_right');
    let current = 0;
    if (current == 0) {
      btnLeft.style.display = 'none'
    }
    btnRight.addEventListener('click', function () {
      if (current != slides1.length - 1) {
        btnLeft.style.display = '';
        let width = 0;
        for (let i = 0; i <= current; i++) {
          width = width + 500
        }
        current = current + 1;
        if (current == slides1.length - 1) {
          btnRight.style.display = 'none'
        }
        main.style.transform = `translateX(-${width}px)`
      }
    })
    btnLeft.addEventListener('click', function () {
      if (current != 0) {
        btnRight.style.display = '';
        let widthLeft = 0;
        for (let i = 1; i < current; i++) {
          widthLeft = widthLeft + 500
        }
        current = current - 1;
        if (current == 0) {
          btnLeft.style.display = 'none'
        }
        main.style.transform = `translateX(-${widthLeft}px)`
      }
    })
    return main;
  }
}
