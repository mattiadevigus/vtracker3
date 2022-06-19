const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    format: {
        type: String,
        required: true
    },
    weather: {
        type: Number,
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    },
    trackId: {
        type: Number,
        required: true
    },
    serverId: {
        type: Number,
        required: true
    },
});

schema.index({ format: 1, weather: 1, creationDate: 1, trackId: 1, serverId: 1 }, { unique: true });

module.exports = mongoose.model("AccSessions", schema);