const fs = require('fs');
const fsPromises = fs.promises;
const colors = require('colors/safe');
const db = require('../db');
const results = require('./results');

exports.mainOperation = async (path) => {
    const files = await readDirectoryFiles(path);
    const filesDate = await getFilesDataCreation(path);

    let index = 0;
    for (let session of files) {
        let idSession = db.createSession(results.getServerName(session), results.getTrackName(session), results.getWeather(session), results.getSessionType(session), filesDate[index]);
       /*  let leaderboards = results.getFullLeaderBoard(session);

        for (let driver of leaderboards) {
            let times = results.getAllLapsFromDriver(session, driver.car["carId"]);
            for (let time of times) {
                database.insertTime((driver.currentDriver["firstName"] + " " + driver.currentDriver["lastName"]), driver.car["carModel"], time, idSession);
            }
        }

        index++; */
    }
}

readDirectoryFiles = async (filespath) => {
    let arr = [];
    if (fs.existsSync(filespath)) {
        let files = await fsPromises.readdir(filespath);
        if (files.length == 0) console.log(colors.bgRed(`0 files detected`));
        files.forEach(file => {
            if (file.indexOf(".json") > -1 && (file.includes("_FP") || file.includes("_Q") || file.includes("_R"))) {
                arr.push(getFileCoded(filespath + "/" + file));
                console.log(`FILE OK ${colors.green(file)}`);
            } else {
                console.log(`FILE SKIPPED ${colors.red(file)}`);
            }
        });

        console.log(colors.green("-------------------------------------"));
    } else {
        console.log(colors.bgRed(`No directory found || Your directory: ${filespath}`));
    }

    /* console.log(arr); */
    return arr;
}

readFile = (file) => {
    fs.readFile(file, (err, data) => {

    })
}

getFilesDataCreation = async(filespath) => {
    let dates = [];
    if (fs.existsSync(filespath)) {
        let files = await fsPromises.readdir(filespath);
        files.forEach(file => {
            let dateCreation = fs.statSync((filespath + "/" + file));
            dates.push(dateCreation["birthtime"]);
        })
    }

    return dates;
}

getFileCoded = (filename) => {
    let data;
    data = fs.readFileSync(filename).toString();
    data = removeEscape(data);

    return data;
}

removeEscape = (string) => {
    string = string.replace(/[\u0000-\u0019]+/g, "");

    return JSON.parse(string);
}