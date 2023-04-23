// controllers base
const passport = require('passport');
const path = require('path');

const db = require('../fun/db');

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

exports.getAllServers = (req, res) => {
    const servers = db.run("SELECT * FROM Servers", []);
    const serversObj = [];
    servers.forEach(server => {
        const serverId = server.serverId;
        const serverName = server.name;

        const serverObj = {
            id: server.serverId,
            name: server.name
        }

        serversObj.push(server);
    });

    res.send(serversObj);
}