module.exports.init = async function() {
  const mongoose = require("mongoose");
  const Product = mongoose.model("Product");
  const products = require("./products");

  let p = await Product.findOne();
  if (!p) {
    const b = await Product.collection.insert(products);
    console.log("created and inserted");
  } else {
    console.log("already have products");
  }
};
