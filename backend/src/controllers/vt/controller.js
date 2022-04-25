const path = require('path');

exports.test = (req, res) => {
    res.send("test");
}

exports.all = (req, res) => {
    res.sendFile(path.join(__dirname, "../../../build", "index.html"));
}