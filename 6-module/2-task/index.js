import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.name = product.name;
    this.price = product.price;
    this.category = product.category;
    this.img = product.img;
    this.id = product.id;

    let main_div = document.createElement('div');
    let top_div = document.createElement('div');
    let body_div = document.createElement('div');
    let top_img = document.createElement('img');
    let body_img = document.createElement('img');
    let title_div = document.createElement('div');
    let button = document.createElement('button');
    let span = document.createElement('span');

    main_div.classList.add("card");
    top_div.classList.add("card__top");
    body_div.classList.add("card__body");
    top_img.classList.add("card__image");
    span.classList.add("card__price");
    button.classList.add("card__button");
    title_div.classList.add("card__title");

    top_img.setAttribute("img", `/assets/images/products/${product.img}`);
    top_img.setAttribute("alt", "product");
    span.innerHTML = `€${product.price}.00`;
    title_div.innerHTML = `${product.name}`;
    body_img.setAttribute("src", "/assets/images/icons/plus-icon.svg");
    body_img.setAttribute("alt", "icon");
    button.setAttribute("type", "button");

    main_div.append(top_div);
    main_div.append(body_div);
    top_div.append(top_img);
    top_div.append(span);
    body_div.append(title_div);
    button.append(body_img);
    body_div.append(button);

    this.elem = main_div;
  }

  /*elem() {

    let main_div = document.createElement('div');
    let top_div = document.createElement('div');
    let body_div = document.createElement('div');
    let top_img = document.createElement('img');
    let body_img = document.createElement('img');
    let title_div = document.createElement('div');
    let button = document.createElement('button');
    let span = document.createElement('span');

    main_div.classList.add("card");
    top_div.classList.add("card__top");
    body_div.classList.add("card__body");
    top_img.classList.add("card__image");
    span.classList.add("card__price");
    button.classList.add("card__button");
    title_div.classList.add("card__title");

    top_img.setAttribute("img", `/assets/images/products/${this.img}`);
    top_img.setAttribute("alt", "product");
    span.innerHTML = `€${this.price}.00`;
    title_div.innerHTML = `${this.name}`;
    body_img.setAttribute("src", "/assets/images/icons/plus-icon.svg");
    body_img.setAttribute("alt", "icon");
    button.setAttribute("type", "button");

    main_div.append(top_div);
    main_div.append(body_div);
    top_div.append(top_img);
    top_div.append(span);
    body_div.append(title_div);
    button.append(body_img);
    body_div.append(button);
    return main_div;
  }*/
}

/* <div class="card">
      <div class="card__top">
        <img src="/assets/images/products/laab_kai_chicken_salad.png" class="card__image" alt="product">
        <span class="card__price">€10.00</span>
      </div>
      <div class="card__body">
        <div class="card__title">Laab kai chicken salad</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
     */
/*let main_div = document.createElement('div');
let top_div = document.createElement('div');
let body_div = document.createElement('div');
let top_img = document.createElement('img');
let body_img = document.createElement('img');
let title_div = document.createElement('div');
let button = document.createElement('button');
let span = document.createElement('span');
main_div.classList.add("card");
top_div.classList.add("card__top");
body_div.classList.add("card__body");
top_img.classList.add("card__image");
span.classList.add("card__price");
button.classList.add("card__button");
title_div.classList.add("card__title");

top_img.setAttribute("img", `/assets/images/products/${this.img}`);
top_img.setAttribute("alt", "product");
span.innerHTML = `€${this.price}.00`;
title_div.innerHTML = `${this.name}`;
body_img.setAttribute("src", "/assets/images/icons/plus-icon.svg");
body_img.setAttribute("alt", "icon");
button.setAttribute("type", "button");

main_div.append(top_div);
main_div.append(body_div);
top_div.append(top_img);
top_div.append(span);
body_div.append(title_div);
button.append(body_img);
body_div.append(button);
return main_div;*/