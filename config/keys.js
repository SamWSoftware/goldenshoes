// select dev or production keys

if (process.env.NODE_ENV == "production") {
  // return production keys
  module.exports = require("./prod");
} else {
  // return dev keys
  module.exports = require("./dev");
}
