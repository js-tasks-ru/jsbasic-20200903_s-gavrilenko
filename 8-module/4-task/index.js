import createElement from '../../assets/lib/create-element.js';
import escapeHtml from '../../assets/lib/escape-html.js';

import Modal from '../../7-module/2-task/index.js';

export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;

    this.addEventListeners();
  }

  addProduct(product) {
    if (this.cartItems.length === 0) {
      this.cartItems.push({ product, count: 1 })
    } else {
      for (let i = 0; i < this.cartItems.length; i++) {
        if (JSON.stringify(product) === JSON.stringify(this.cartItems[i].product)) {
          this.cartItems[i].count = this.cartItems[i].count + 1
          break;
        } else if (i === this.cartItems.length - 1) {
          this.cartItems.push({ product, count: 1 })
          break;
        }
      }
    }
    this.onProductUpdate(this.cartItems)
  }

  updateProductCount(productId, amount) {
    if (this.cartItems.length !== 0) {
      for (let i = 0; i < this.cartItems.length; i++) {
        if (productId === this.cartItems[i].product.id) {
          this.cartItems[i].count = this.cartItems[i].count + amount
          this.onProductUpdate(this.cartItems[i])
          if (this.cartItems[i].count === 0) {
            this.cartItems.splice(i, 1)
          }
          break;
        }
      }
    }
  }

  isEmpty() {
    if (this.cartItems.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  getTotalCount() {
    let totalCount = 0;
    if (this.cartItems.length !== 0) {
      for (let i = 0; i < this.cartItems.length; i++) {
        totalCount = totalCount + this.cartItems[i].count
      }
    }
    return totalCount
  }

  getTotalPrice() {
    let totalPrice = 0;
    if (this.cartItems.length !== 0) {
      for (let i = 0; i < this.cartItems.length; i++) {
        totalPrice = this.cartItems[i].count * this.cartItems[i].product.price + totalPrice
      }
    }
    return totalPrice
  }

  renderProduct(product, count) {
    return createElement(`
    <div class="cart-product" data-product-id="${product.id
      }">
      <div class="cart-product__img">
        <img src="../../assets/images/products/${product.image}" alt="product">
      </div>
      <div class="cart-product__info">
        <div class="cart-product__title">${escapeHtml(product.name)}</div>
        <div class="cart-product__price-wrap">
          <div class="cart-counter">
            <button type="button" class="cart-counter__button cart-counter__button_minus">
              <img src="../../assets/images/icons/square-minus-icon.svg" alt="minus">
            </button>
            <span class="cart-counter__count">${count}</span>
            <button type="button" class="cart-counter__button cart-counter__button_plus">
              <img src="../../assets/images/icons/square-plus-icon.svg" alt="plus">
            </button>
          </div>
          <div class="cart-product__price">€${product.price.toFixed(2)}</div>
        </div>
      </div>
    </div>`);
  }

  renderOrderForm() {
    return createElement(`<form class="cart-form">
      <h5 class="cart-form__title">Delivery</h5>
      <div class="cart-form__group cart-form__group_row">
        <input name="name" type="text" class="cart-form__input" placeholder="Name" required value="Santa Claus">
        <input name="email" type="email" class="cart-form__input" placeholder="Email" required value="john@gmail.com">
        <input name="tel" type="tel" class="cart-form__input" placeholder="Phone" required value="+1234567">
      </div>
      <div class="cart-form__group">
        <input name="address" type="text" class="cart-form__input" placeholder="Address" required value="North, Lapland, Snow Home">
      </div>
      <div class="cart-buttons">
        <div class="cart-buttons__buttons btn-group">
          <div class="cart-buttons__info">
            <span class="cart-buttons__info-text">total</span>
            <span class="cart-buttons__info-price">€${this.getTotalPrice().toFixed(
      2
    )}</span>
          </div>
          <button type="submit" class="cart-buttons__button btn-group__button button">order</button>
        </div>
      </div>
    </form>`);
  }

  renderModal() {
    let modal = new Modal();
    modal.setTitle('Your order');
    let div = document.createElement('div');

    for (let i = 0; i < this.cartItems.length; i++) {
      let main = this.renderProduct(this.cartItems[i].product, this.cartItems[i].count)
      div.append(main)
    }

    let btns = div.getElementsByTagName('button')
    for (let i = 0; i < btns.length; i++) {
      let id = btns[i].closest(".cart-product").getAttribute("data-product-id")
      if (btns[i].classList.contains("cart-counter__button_plus")) {
        btns[i].addEventListener('click', () => {
          this.updateProductCount(id, 1)
        })
      } else if (btns[i].classList.contains("cart-counter__button_minus")) {
        btns[i].addEventListener('click', () => {
          this.updateProductCount(id, -1)
          if (this.cartItems.length === 0) {
            this.cartIcon.update(this);
            modal.close()
          }
        })
      }
    }

    div.append(this.renderOrderForm())
    let cart_form = div.querySelector(".cart-form")
    cart_form.addEventListener("submit", async (ev) => {
      this.onSubmit(ev)
    })

    modal.setBody(div);
    modal.open()
  }

  onProductUpdate(cartItem) {
    if (document.body.classList.contains('is-modal-open')) {
      let productId = cartItem.product.id
      let modalBody = document.querySelector(".modal__body")
      let itemBody = modalBody.querySelector(`[data-product-id="${productId}"]`)
      let productCount = modalBody.querySelector(`[data-product-id="${productId}"] .cart-counter__count`);
      let productPrice = modalBody.querySelector(`[data-product-id="${productId}"] .cart-product__price`);
      let infoPrice = modalBody.querySelector(`.cart-buttons__info-price`);
      if (cartItem.count === 0) {
        itemBody.remove()
        infoPrice.innerHTML = `€${this.getTotalPrice().toFixed(2)}`;
      } else {
        productCount.innerHTML = cartItem.count
        productPrice.innerHTML = `€${(cartItem.product.price * cartItem.count).toFixed(2)}`;
        infoPrice.innerHTML = `€${this.getTotalPrice().toFixed(2)}`;
      }
    }
    this.cartIcon.update(this);
  }

  async onSubmit(event) {
    event.preventDefault();
    let modalInner = document.querySelector(".modal__inner")

    let buttn = modalInner.querySelector(`[type="submit"]`)
    buttn.classList.add("is-loading")

    let formDat = modalInner.querySelector(".cart-form")
    let promise = await fetch('https://httpbin.org/post', {
      method: "POST",
      body: new FormData(formDat)
    })
    let result = await promise;

    if (result.ok === true) {
      let modalTitle = modalInner.querySelector('.modal__title')
      modalTitle.innerHTML = "Success!"
      let modalBody = modalInner.querySelector('.modal__body')
      modalBody.innerHTML = `<div class="modal__body-inner">
      <p>
        Order successful! Your order is being cooked :) <br>
        We’ll notify you about delivery time shortly.<br>
        <img src="../../assets/images/delivery.gif">
      </p>
    </div>`
      this.cartItems = []
      this.cartIcon.update(this);
    }
  };

  addEventListeners() {
    this.cartIcon.elem.onclick = () => this.renderModal();
  }
}