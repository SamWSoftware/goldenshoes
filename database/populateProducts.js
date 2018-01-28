module.exports.init = async function() {
  require("../models/product");
  const keys = require("../config/keys");
  const mongoose = require("mongoose");
  mongoose.connect(keys.mongoURI);
  mongoose.Promise = global.Promise;

  const Product = mongoose.model("Product");
  const products = require("./products");

  let p = await Product.findOne();
  if (!p) {
    const b = await Product.collection.insert(products, onInsert);
    console.log("created and inserted");
  } else {
    console.log("already have products");
  }
};

function onInsert(err, docs) {
  if (err) {
    console.log(err);
    throw err;
  }
}
