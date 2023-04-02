const path = require('path');
const sqlite = require('better-sqlite3');
const pathDb = "./src/config/vtracker.db";


// read Fieldtype in Config table
exports.readConfigParam = async (fieldType) => {
    const db = new sqlite(pathDb);
    const stmt = db.prepare(`SELECT fieldValue FROM Config WHERE fieldName=?`);

    const res = await stmt.get(fieldType);

    return res.fieldValue;
}

// create session
exports.createSession = (server, track, weatherValue, sessionType, dataCreation) => {
    const db = new sqlite(pathDb);
    const serverId = getServerId(server);
    
    /*     track = results.fixTrackYear(track);
    
        let stmt = db.prepare(`INSERT OR IGNORE INTO Sessions VALUES(NULL, ?, ?, ?, ?, ?)`);
        stmt.run(server, track, weatherValue, sessionType, dataCreation.toString());
    
        stmt = db.prepare(`SELECT ses_id FROM Sessions WHERE ses_creation = ?`);
        let lastId = stmt.get(dataCreation.toString());
    
        db.close();
    
        return lastId["ses_id"]; */
};

getServerId = (serverName) => {
    const db = new sqlite(pathDb);
    let id;

    let stmt = db.prepare(`SELECT serverId FROM Servers WHERE name=?`);
    let res = stmt.get(serverName);

    if (res === undefined) {
        let stmt = db.prepare(`INSERT INTO Servers VALUES(NULL, ?)`);
        stmt.run(serverName);

        stmt = db.prepare(`SELECT serverId FROM Servers WHERE name=?`);
        res = stmt.get(serverName);
    }

    id = res.serverId
    return id;
}