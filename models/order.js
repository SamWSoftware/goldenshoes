const mongoose = require("mongoose");
const { Schema } = mongoose;
const AddressSchema = require("./address");

const orderSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  orderNo: Number,
  orderDate: Date,
  shippedDate: { type: Date, default: 0 },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      number: Number,
      size: Number
    }
  ],
  deliveryAddress: AddressSchema,
  totalCost: Number
});

mongoose.model("Order", orderSchema);
