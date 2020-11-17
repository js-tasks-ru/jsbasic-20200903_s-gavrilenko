import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.main = this.createModal()
  }

  createModal() {
    let main = document.createElement('div');
    main.classList.add("modal");
    main.insertAdjacentHTML('beforeend', `<div class="modal__overlay"></div> <div class="modal__inner"> <div class="modal__header"> <button type="button" class="modal__close"> <img src="../../assets/images/icons/cross-icon.svg" alt="close-icon" /> </button> <h3 class="modal__title"> </h3> </div>
      <div class="modal__body">
      </div>
    </div>`)
    let btn = main.querySelector(".modal__close");
    btn.addEventListener("click", function () {
      let body = document.getElementsByTagName('body');
      body[0].classList.remove("is-modal-open");
      main.remove()
    })
    document.addEventListener('keydown', function (ev) {
      if (ev.key === "Escape") {
        let body = document.getElementsByTagName('body');
        body[0].classList.remove("is-modal-open");
        main.remove()
      }
    })
    return main;
  }
  open() {


    let body = document.getElementsByTagName('body')
    body[0].classList.add("is-modal-open")
    body[0].append(this.main)
  }

  setTitle(arg) {
    let div = this.main.querySelector(".modal__title")
    div.innerHTML = arg
  }

  setBody(arg) {
    let div = this.main.querySelector(".modal__body")
    div.append(arg)
  }

  close() {
    let body = document.getElementsByTagName('body');
    body[0].classList.remove("is-modal-open");
    this.main.remove()
  }
}
