export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
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
    console.log(productId, amount)
    if (this.cartItems.length !== 0) {
      for (let i = 0; i < this.cartItems.length; i++) {
        if (productId === this.cartItems[i].product.id) {
          console.log(4)
          this.cartItems[i].count = this.cartItems[i].count + amount
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

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

