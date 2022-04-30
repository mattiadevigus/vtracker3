const { app, BrowserWindow } = require('electron');
const path = require('path');
const server = require('./server');


function createWindow() {

  const win = new BrowserWindow({
    minWidth: 700,
    width: 1280,
    height: 720,
    frame: false,
    autoHideMenuBar: true,
    titleBarStyle: "hidden",
  })

  win.loadURL('http://localhost:9000');

}

app.whenReady().then(createWindow)

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})