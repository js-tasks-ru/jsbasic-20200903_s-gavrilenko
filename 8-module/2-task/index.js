import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.elem = this.render(this.filters)
  }
  render(filters) {
    let main1 = document.createElement("div");
    main1.classList.add("products-grid")
    let main2 = document.createElement("div");
    main2.classList.add("products-grid__inner");

    this.filters = Object.assign(this.filters, filters);
    for (let i of this.products) {
      if (this.filters.noNuts && i.nuts)
        continue;
      if (this.filters.vegeterianOnly && !i.vegeterian)
        continue;
      if (void 0 !== this.filters.maxSpiciness && i.spiciness > this.filters.maxSpiciness)
        continue;
      if (this.filters.category && i.category != this.filters.category) {
        continue;
      }

      let card = new ProductCard(i);

      main2.append(card.elem);

    }
    main1.append(main2)
    return main1
  }
  updateFilter(filters) {

    let main1 = document.querySelector(".products-grid")
    main1.innerHTML = "";
    let main = document.createElement("div");
    main.classList.add("products-grid__inner");

    this.filters = Object.assign(this.filters, filters);
    for (let i of this.products) {
      if (this.filters.noNuts && i.nuts)
        continue;
      if (this.filters.vegeterianOnly && !i.vegeterian)
        continue;
      if (void 0 !== this.filters.maxSpiciness && i.spiciness > this.filters.maxSpiciness)
        continue;
      if (this.filters.category && i.category != this.filters.category) {
        continue;
      }

      let card = new ProductCard(i);

      main.append(card.elem);
    }
    console.log(main)
    main1.append(main)
    return main
  }
}