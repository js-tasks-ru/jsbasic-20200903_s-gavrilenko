import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
  constructor() {
    this.render();

    this.addEventListeners();
  }

  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }

  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add('cart-icon_visible');

      this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>`;

      this.updatePosition();

      this.elem.classList.add('shake');
      this.elem.addEventListener('transitionend', () => {
        this.elem.classList.remove('shake');
      }, { once: true });

    } else {
      this.elem.classList.remove('cart-icon_visible');
    }
  }

  addEventListeners() {
    document.addEventListener('scroll', () => this.updatePosition());
    window.addEventListener('resize', () => this.updatePosition());
  }

  updatePosition() {
    //console.log(cart)
    //console.log(true)
    let cartIcon = document.querySelector(".cart-icon_visible")

    //console.log(document.querySelectorAll(".container")[1].getBoundingClientRect().x + document.querySelectorAll(".container")[1].getBoundingClientRect().width + 20)
    //console.log(window.)
    if (cartIcon != null && window.pageYOffset >= 50 && document.documentElement.clientWidth > 767) {
      if (cartIcon.style.position != "fixed") {
        cartIcon.style.position = "fixed"
        cartIcon.style.top = "50px"
      }
      cartIcon.style.left = `${Math.min(
        document.querySelector('.container').getBoundingClientRect().right + 20,
        document.documentElement.clientWidth - cartIcon.offsetWidth - 10
      )}px`
    } else if (cartIcon != null && window.pageYOffset < 50) {
      if (cartIcon.style.position != "absolute") {
        cartIcon.style.position = "absolute"
        cartIcon.style.top = null
        cartIcon.style.left = null
      }
    }
  }
}
