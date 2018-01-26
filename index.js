const express = require("express");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const bodyParser = require("body-parser");

const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

// Models
require("./models/user");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/auth-routes")(app);
// require("./routes/billing-routes")(app);
// require("./routes/product-routes")(app);

if (process.env.NODE_ENV === "production") {
  // express serves production assets
  app.use(express.static("client/build"));
  // express serves index.html if it doesnt recognse the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
