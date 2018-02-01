module.exports.init = async function() {
  const keys = require("../config/keys");

  const mongoose = require("mongoose");
  require("../models/order");
  require("../models/product");
  require("../models/user");

  mongoose.connect(keys.mongoURI);
  mongoose.Promise = global.Promise;

  await require("./populateUsers").init();
  await require("./populateProducts").init();
  await require("./populateOrders").init();

  console.log("The database is now populated");
  process.exit();
};
