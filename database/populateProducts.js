module.exports.init = async function() {
  const keys = require("../config/keys");
  const mongoose = require("mongoose");
  require("../models/product");

  mongoose.connect(keys.mongoURI);
  mongoose.Promise = global.Promise;

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
