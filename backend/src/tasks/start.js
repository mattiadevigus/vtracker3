const colors = require('colors/safe');
const dbfun = require('../fun/db');
const accFun = require('../fun/acc/files');

exports.startOperation = async () => {
    console.log(colors.cyan("Vtracker is starting"));
    console.log(colors.cyan("Beta 1"));

    const platform = await dbfun.readConfigParam('resultsPlatform');

    switch(platform) {
        case "ACC":
            accFun.mainOperation(await dbfun.readConfigParam('resultsPath'));
            break;
    }   
}