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
    const servers = db.run("SELECT Servers.serverId, Servers.name as serverName, Sessions.sessionId, Tracks.trackId, Tracks.fullName as trackName, Tracks.image, count(DISTINCT Times.driverName) as driversCount FROM Servers LEFT JOIN Sessions ON Servers.serverId=Sessions.serverId LEFT JOIN Tracks ON Sessions.trackId = Tracks.trackId LEFT JOIN Times ON Times.sessionId = Sessions.sessionId GROUP BY Sessions.trackId, Servers.name", []);
    const serversObj = [];
    servers.forEach(server => {
        const bestTime = db.run("SELECT *, SUM(sectorOne + sectorTwo + sectorTree) As totalTime FROM Times GROUP BY timeId HAVING sessionId = ? AND isValid = -1 ORDER BY SUM(sectorOne + sectorTwo + sectorTree) LIMIT 1", server.sessionId);
        serversObj.push({server, bestTime});
    });

    res.send(serversObj);
}