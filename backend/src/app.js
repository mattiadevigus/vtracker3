const express = require("express");
const cors = require("cors");
const path = require("path");

const db = require("./config/db");
const vtRoutes = require("./routes/router");

const app = express();

app.use(express.static(path.join(__dirname, "../build")));
db.createAccSession()
    .then(res => console.log(res));
app.use("/", vtRoutes);

module.exports = app;