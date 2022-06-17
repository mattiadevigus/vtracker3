const mongoose = require('mongoose');
const url = "mongodb+srv://MattiVers:07081276Ma@cluster0.tpijffq.mongodb.net/?retryWrites=true&w=majority";

// schema
const AccTimes = require("../models/acc/AccTimes");

exports.createAccTime = async () => {
    const client = await mongoose.connect(url, { dbname: "vtracker", useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log("Connected") });

    AccTimes.create({
        driverName: "Mattia",
        sectorOne: 32465,
        sectorTwo: 21345,
        sectorTree: 28653,
        carId: 23,
        isValid: true,
        sessionId: 2
    }, (err, res) => {
        if (err) {
            console.log(err)
            return false;
        };

        return true;
    });
}