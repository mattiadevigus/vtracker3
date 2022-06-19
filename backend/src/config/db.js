const mongoose = require('mongoose');
const url = process.env.MONGOURI;

// schema
const AccSessions = require("../models/acc/AccSessions");
const AccTimes = require("../models/acc/AccTimes");

exports.createAccSession = async () => {
    mongoose.connect(url, { dbname: "vtracker", useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log("Connected") });

    const res = await AccSessions.create({
        format: "Q",
        weather: 1,
        creationDate: "01/01/2022",
        trackId: 24,
        serverId: 2
    });

    return res._id;
}

exports.createAccTime = (id) => {
    mongoose.connect(url, { dbname: "vtracker", useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log("Connected") });

    AccTimes.create({
        driverName: "Mattia",
        sectorOne: 32465,
        sectorTwo: 21345,
        sectorTree: 28653,
        carId: 23,
        isValid: true,
        sessionId: 2
    }, (err) => {
        if (err) console.log(err)
        mongoose.connection.close();
    });
}

