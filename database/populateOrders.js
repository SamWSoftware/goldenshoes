module.exports.init = async function() {
  const mongoose = require("mongoose");
  const Order = mongoose.model("Order");
  const orders = require("./orders");

  let p = await Order.findOne();
  if (!p) {
    const b = await Order.collection.insert(orders);
    console.log("created and inserted");
  } else {
    console.log("already have orders");
  }
};
