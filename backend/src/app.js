const express = require("express");
const session = require("express-session");
const cors = require("cors");
const controller = require("./controllers/controller");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const configPassport = require("./config/passport");
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./config/db");
const routes = require("./routes/router");
const tasks = require("./tasks/start");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true }));
app.use(session({
    secret: "r4c3r5f4r3v3r",
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser("r4c3r5f4r3v3r"));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "../build")));

//tasks
tasks.startOperation();

module.exports = app;