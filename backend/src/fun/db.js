const path = require('path');
const sqlite = require('better-sqlite3');
const timeParser = require('./time');
const pathDb = "./src/config/vtracker.db";

// read Fieldtype in Config table
exports.readConfigParam = async (fieldType) => {
    const db = new sqlite(pathDb);
    const stmt = db.prepare(`SELECT fieldValue FROM Config WHERE fieldName=?`);

    const res = await stmt.get(fieldType);

    return res.fieldValue;
}

// create session
exports.createSession = (serverName, trackName, weatherValue, sessionType, dataCreation) => {
    const db = new sqlite(pathDb);
    const serverId = getIdByName("Servers", "serverId", serverName);
    const trackId = getIdByName("Tracks", "trackId", trackName);
    const sessionTypeId = getIdByName("SessionTypes", "sessionTypeId", sessionType);

    let stmt = db.prepare(`INSERT OR IGNORE INTO Sessions VALUES(NULL, ?, ?, ?, ?, ?)`);
    stmt.run(serverId, trackId, sessionTypeId, weatherValue, dataCreation.toString());

    stmt = db.prepare(`SELECT sessionId FROM Sessions WHERE serverId= ? AND trackId = ? AND sessionTypeId = ? AND weatherValue = ? AND creationDate = ?`);
    let lastId = stmt.get(serverId, trackId, sessionTypeId, weatherValue ,dataCreation.toString());

    db.close();

    return lastId["sessionId"];
};

exports.insertTime = (driverName, carModel, time, lastId, isValid) => {
    const db = new sqlite(pathDb);

    let stmt = db.prepare(`INSERT OR IGNORE INTO Times VALUES(NULL, ?, ?, ?, ?, ?, ?, ?)`);
    stmt.run(driverName, carModel, timeParser.getSeconds(time[0]), timeParser.getSeconds(time[1]), timeParser.getSeconds(time[2]), lastId, isValid);

    db.close();
};

/* 
    return Id value from table based by column name
    if count = 0 -> add new record
    columnName = the name of table column to select (example: serverId)
    tableName = the name of table
    fieldValue = the value of fild to search/add
    fieldCondition (Optional) = name of the column where fieldValue need to be read/assigned
*/
getIdByName = (tableName, columnName, fieldValue, fieldCondition = "name") => {
    const db = new sqlite(pathDb);
    let id;

    let stmt = db.prepare(`SELECT ${columnName} as returnId FROM ${tableName} WHERE ${fieldCondition}=?`);
    let res = stmt.get(fieldValue);

    if (res === undefined) {
        let stmt = db.prepare(`INSERT INTO ${tableName} VALUES(NULL, ?)`);
        stmt.run(fieldValue);

        stmt = db.prepare(`SELECT ${columnName} AS returnId FROM ${tableName} WHERE ${fieldCondition}=?`);
        res = stmt.get(fieldValue);
    }

    id = res.returnId
    db.close();
    return id;
}

exports.run = ($query, $values) => {
    const db = new sqlite(pathDb);
    const stmt = db.prepare($query);
    const res = stmt.all($values)
    return res;
}