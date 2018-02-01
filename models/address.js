const mongoose = require("mongoose");
const { Schema } = mongoose;

const addressSchema = new Schema({
  house: String || Number,
  street: [String],
  city: String,
  postcode: String,
  coutry: { type: String, default: "United Kingdom" }
});

mongoose.model("Address", addressSchema);
