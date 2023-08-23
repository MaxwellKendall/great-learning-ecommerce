const Products = require("../service/productService");

const products = new Products();

const fetchAllProductsHandler = (req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    res.statusCode = 200;
    console.log(`${new Date()} - API called for fetching all products`);
    res.end(JSON.stringify(products.getAllProducts()));
  } else {
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

const fetchProductByIdHandler = (req, res, productId) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET") {
    res.statusCode = 200;
    const product = products.getProductById(productId);
    console.log(
      `${new Date()} - API called for fetching product using the provided id`
    );
    res.end(
      JSON.stringify(
        product
          ? product
          : { message: `Product with id ${productId} was not found` }
      )
    );
  } else {
    res.statusCode = 404;
    console.log(`${new Date()} - Route not found`);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

module.exports = {
  fetchAllProductsHandler,
  fetchProductByIdHandler,
};
