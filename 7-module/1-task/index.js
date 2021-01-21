import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    let main = this.createMenu(categories);
    this.createScroll(main)
    this.value;
    const links = main.querySelectorAll(".ribbon__item");
    for (let a = 0; a < links.length; a++) {
      links[a].addEventListener("click", function (tg) {
        let event = new CustomEvent("ribbon-select", {
          detail: categories[a].id,
          bubbles: true
        })
        main.dispatchEvent(event)
        this.value = links[a].getAttribute('data-id')
      })
    }
    this.elem = main;
  }

  createMenu(categories) {
    let main = document.createElement('div');
    main.classList.add('ribbon')
    main.insertAdjacentHTML("beforeend", `<button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible"> <img src="../../assets/images/icons/angle-icon.svg" alt="icon"> </button> <nav class="ribbon__inner"> </nav> <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible"> <img src="../../assets/images/icons/angle-icon.svg" alt="icon"> </button>`)
    let inner = main.querySelector(".ribbon__inner")
    for (let i = 0; i < categories.length; i++) {
      if (i === 0) {
        inner.insertAdjacentHTML("beforeend", `<a href="#" class="ribbon__item ribbon__item_active" data-id="${categories[i].id}">${categories[i].name}</a>`)
      } else {
        inner.insertAdjacentHTML("beforeend", `<a href="#" class="ribbon__item" data-id="${categories[i].id}">${categories[i].name}</a>`)
      }
    }
    return main;
  }

  createScroll(main) {
    let btnL = main.querySelector('.ribbon__arrow_left');
    let btnR = main.querySelector('.ribbon__arrow_right');
    let inner = main.querySelector('.ribbon__inner')
    let width = 0
    btnR.addEventListener('click', function () {
      width = 350
      inner.scrollBy(width, 0);
    })
    btnL.addEventListener('click', function () {
      width = -350
      inner.scrollBy(width, 0);
    })
  }
}
