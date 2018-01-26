const mongoose = require("mongoose");
const { Schema } = mongoose;

const optionsSchema = new Schema({
  mailingList: { type: Boolean, default: true },
  promotional: { type: Boolean, default: true },
  cartReminder: { type: Boolean, default: true }
});

mongoose.model("Options", optionsSchema);
