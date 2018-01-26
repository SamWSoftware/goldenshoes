const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;

const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  console.log("serialise", user);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(res => {
    console.log("deserialise", res);
    done(null, res);
  });
});

passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      const existingUser = await User.findOne({
        email: profile.emails[1].value
      });
      console.log(existingUser);
      if (existingUser) {
        console.log("existing user");
        done(null, existingUser);
      } else {
        console.log("new User");
        const newUser = await new User({
          email: profile.emails[1].value,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName
        }).save();
        done(null, newUser);
      }
    }
  )
);
