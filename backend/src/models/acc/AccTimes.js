const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    driverName: {
        type: String,
        required: true
    },
    sectorOne: {
        type: Number,
        required: true,
    },
    sectorTwo: {
        type: Number,
        required: true,
    },
    sectorTree: {
        type: Number,
        required: true,
    },
    carId: {
        type: Number,
        required: true,
    },
    isValid: {
        type: Boolean,
        required: true
    },
    sessionId: {
        type: Number,
        required: true
    }
});

schema.index({ driverName: 1, sectorOne: -1, sectorTwo: -1, sectorTree: -1, carId: -1, isValid: -1, sessionId: -1 }, {unique: true});

module.exports = mongoose.model("AccTimes", schema);