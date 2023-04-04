const express = require("express");
const path = require("path");
const routes = require("./routes/router");
const tasks = require("./tasks/start");

const app = express();
app.use(express.static(path.join(__dirname, '../build')));

app.use("/", routes);

//tasks
tasks.startOperation();

module.exports = app;