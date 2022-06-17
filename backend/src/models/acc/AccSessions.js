const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    sessionType: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("AccSessions", schema);