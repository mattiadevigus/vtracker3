const express = require("express");
const routes = require("./routes/router");
const tasks = require("./tasks/start");

const app = express();

//tasks
tasks.startOperation();

module.exports = app;