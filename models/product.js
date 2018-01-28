const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  images: [String],
  title: String,
  price: Number,
  brand: String,
  category: String,
  gender: String,
  description: [String],
  productCode: Number,
  colors: [String],
  stock: [{ size: Number, stock: Number }]
});

mongoose.model("Product", productSchema);
