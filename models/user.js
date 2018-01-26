const mongoose = require("mongoose");
const { Schema } = mongoose;

const AddressSchema = require("./address");
const OptionsSchema = require("./options");
const CartSchema = require("./cart");

const userSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  address: [AddressSchema],
  cart: CartSchema,
  options: OptionsSchema
});

mongoose.model("User", userSchema);
