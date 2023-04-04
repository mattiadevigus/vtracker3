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

exports.getFullLeaderBoard = (arr) => {
    return arr["sessionResult"].leaderBoardLines;
}

exports.getAllLapsFromDriver = (arr, id) => {
    let times = [];
    let i = 0;

    while (arr.laps[i] != undefined) {
        if (arr.laps[i].carId === id) {

            const obj = {
                splits: arr.laps[i].splits,
                isValidForBest: arr.laps[i].isValidForBest
            }

            times.push(obj);
        }

        i++;
    }

    return times;
}

