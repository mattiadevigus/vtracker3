const express = require('express');
const cors = require('cors');

const v1 = require('./../api/v1/index');

const app = express();
app.use("/api/v1/", v1);

module.exports = app;