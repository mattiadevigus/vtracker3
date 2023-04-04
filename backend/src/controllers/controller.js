// controllers base
const passport = require('passport');
const path = require('path');

exports.getHome = (req, res) => {
    res.send("Test");
}

exports.login = (req, res) => {
    console.log("Received request!");
    passport.authenticate('local', (err, user, info) => {
        if (err) throw err;
        if (!user) res.send(false);
        else {
            res.send(true);
        }
    })
}

exports.all = (req, res) => {
    res.sendFile(path.join(__dirname, '../../build/index.html'));
}