exports.getServerName = (arr) => {
    return arr["serverName"];
}

exports.getSessionType = (arr) => {
    return arr["sessionType"];
}

exports.getTrackName = (arr) => {
    return arr["trackName"];
}

exports.getBestLap = (arr) => {
    return arr["sessionResult"].bestlap;
}

exports.getWeather = (arr) => {
    return arr["sessionResult"].isWetSession;
}