// controllers base
const path = require("path");

exports.login = (req, res) => {
    console.log("Received request!");
    res.send("Test");
}

exports.test = (req, res) => {
    res.send("test");
}

exports.all = (req, res) => {
    res.sendFile(path.join(__dirname, "../../../build", "index.html"));
}