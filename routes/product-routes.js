const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = app => {
  app.get("/api/products/search/v1", async (req, res) => {
    let queryLength = Object.keys(req.query).length;
    console.log(req.query);
    if (queryLength === 0) {
      let products = await Product.find({});
      res.send(products);
    } else if (queryLength === 1) {
      // no AND needed
      let products;
      if (req.query.stock) {
        // one or more stock
        products = await Product.find(handleStock(req.query.stock));
      } else if (req.query.colors && typeof req.query.colors !== "string") {
        // array of colors
        products = await Product.find(handleColorsArray(req.query.colors));
      } else {
        products = await Product.find(req.query);
      }
      res.send(products);
    } else {
      console.log(convertToAnd(req.query));
      let products = await Product.find(convertToAnd(req.query));
      res.send(products);
    }
  });
};

function convertToAnd(query) {
  let q = Object.keys(query).map(param => {
    if (param === "stock") {
      console.log(handleStock(query.stock));
      return handleStock(query.stock);
    } else if (param === "colors" && typeof query.colors !== "string") {
      // an array of colors
      return handleColorsArray(query.colors);
    } else {
      return { [param]: query[param] };
    }
  });
  return { $and: q };
}

function handleStock(size) {
  return { stock: { $elemMatch: { size: size, stock: { $gt: 0 } } } };
}

function handleColorsArray(array) {
  return { $or: array.map(col => ({ colors: col })) };
}
