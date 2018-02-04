const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      size: Number,
      quantity: Number
    }
  ],
  lastEditted: { type: Date }
});

mongoose.model("Cart", cartSchema);
