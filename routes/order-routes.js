const mongoose = require("mongoose");

const Order = mongoose.model("Order");
const Product = mongoose.model("Product");

module.exports = app => {
  app.get("/api/current-user-orders", async (req, res) => {
    const orders = await Order.find({
      _user: req.user.id
    });
    console.log("orders0", orders);

    res.send(orders);
  });

  app.get("/api/order/:id", async (req, res) => {
    console.log("getting order", req.params.id);
    const order = await Order.findOne({ orderNo: req.params.id })
      .populate("_user")
      .populate("items.productId");

    console.log(order);
    res.send(order);
  });
};
