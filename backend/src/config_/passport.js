const User = require("../models/User");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

passport.use(new localStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) throw err;
            if (result) {
                return done(null, user);
            } else {
                return done(null, null);
            }
        });
    });
}));

passport.serializeUser((user, cb) => {
    cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
        cb(err, user);
    });
});

module.exports = passport;