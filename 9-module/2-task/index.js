import Carousel from '../../6-module/3-task/index.js';
import slides from '../../6-module/3-task/slides.js';

import RibbonMenu from '../../7-module/1-task/index.js';
import categories from '../../7-module/1-task/categories.js';

import StepSlider from '../../7-module/4-task/index.js';
import ProductsGrid from '../../8-module/2-task/index.js';

import CartIcon from '../../8-module/1-task/index.js';
import Cart from '../../8-module/4-task/index.js';

export default class Main {

  constructor() {
  }

  async render() {
    let carouselHolder = document.querySelector('[data-carousel-holder]')
    let ribbonMenuHolder = document.querySelector('[data-ribbon-holder]')
    let stepSliderHolder = document.querySelector('[data-slider-holder]')
    let cartIconHolder = document.querySelector('[data-cart-icon-holder]')
    let productsGridHolder = document.querySelector('[data-products-grid-holder]')

    let cartIcon = new CartIcon();
    let cart = new Cart(cartIcon)
    let stepSlider = new StepSlider({ steps: 5, value: 3 }).elem
    let carousel = new Carousel(slides)
    let ribbonMenu = new RibbonMenu(categories).elem
    carouselHolder.append(carousel.elem)
    ribbonMenuHolder.append(ribbonMenu)
    stepSliderHolder.append(stepSlider)
    cartIconHolder.append(cartIcon.elem)
    let response = await fetch('products.json');
    let result = await response.json()
    let productsGrid = new ProductsGrid(result)
    productsGrid.updateFilter({
      noNuts: document.getElementById('nuts-checkbox').checked,
      vegeterianOnly: document.getElementById('vegeterian-checkbox').checked,
      maxSpiciness: stepSlider.value,
      category: ribbonMenu.value
    });
    productsGridHolder.append(productsGrid.elem)

    stepSlider.addEventListener('slider-change', (event) => {
      productsGrid.updateFilter({
        maxSpiciness: event.detail
      });
    })

    let noNutsControl = document.querySelector('#nuts-checkbox');
    noNutsControl.addEventListener('change', (event) => {
      productsGrid.updateFilter({ noNuts: event.target.checked });
    });

    let vegetarianOnlyControl = document.querySelector('#vegeterian-checkbox');
    vegetarianOnlyControl.addEventListener('change', (event) => {
      productsGrid.updateFilter({ vegeterianOnly: event.target.checked });
    });

    ribbonMenu.addEventListener('ribbon-select', (event) => {
      productsGrid.updateFilter({ category: event.detail });
    })

    document.body.addEventListener('product-add', (event) => {
      for (let i = 0; i < result.length; i++) {
        if (result[i].id === event.detail) {
          cart.addProduct(result[i])
          break;
        }
      }
    })
  }

  // addEventListeners() {
  //   let noNutsControl = document.querySelector('[data-no-nuts]');
  //   console.log(noNutsControl)
  //   noNutsControl.addEventListener('change', (event) => {
  //     productsGrid.updateFilter({ noNuts: event.target.checked });
  //   });

  //   let vegetarianOnlyControl = document.querySelector('[data-vegetarian-only]');
  //   console.log(vegetarianOnlyControl)
  //   vegetarianOnlyControl.addEventListener('change', (event) => {
  //     productsGrid.updateFilter({ vegeterianOnly: event.target.checked });
  //   });
  // }
}
