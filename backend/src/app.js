const express = require('express');
const cors = require('cors');
const path = require('path');

const vtRoutes = require('./routes/vt/router');

const app = express();

app.use(express.static(path.join(__dirname, '../build')));
app.use("/", vtRoutes);

module.exports = app;