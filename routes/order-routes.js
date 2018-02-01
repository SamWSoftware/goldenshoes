const mongoose = require("mongoose");

const Order = mongoose.model("Order");

module.exports = app => {
  app.get("/api/current-user-orders", async (req, res) => {
    const orders = await Order.find({
      _user: req.user.id
    });
    console.log("orders0", orders);

    res.send(orders);
  });
};
