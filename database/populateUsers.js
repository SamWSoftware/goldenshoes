module.exports.init = async function() {
  const mongoose = require("mongoose");
  const User = mongoose.model("User");
  const user = require("./users");

  let p = await User.findOne();
  if (!p) {
    const b = await User.collection.insert(user);
    console.log("created and inserted");
  } else {
    console.log("already have user");
  }
};
