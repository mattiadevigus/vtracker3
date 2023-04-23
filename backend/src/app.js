const express = require("express");
const cors = require("cors");
const path = require("path");
const routes = require("./routes/router");
const tasks = require("./tasks/start");

const app = express();
app.use(express.static(path.join(__dirname, '../build')));
app.use(cors());
app.use("/", routes);

//tasks
tasks.startOperation();

module.exports = app;