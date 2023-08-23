const fs = require("fs");

class Products {
  constructor() {
    this.products = JSON.parse(fs.readFileSync("./app/data/products.json", "utf-8"));
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id == id);
    return product;
  }
}

module.exports = Products;