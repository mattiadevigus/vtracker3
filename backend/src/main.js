const { app, BrowserWindow } = require('electron');
const server = require('./server');

function createWindow() {

  const win = new BrowserWindow({
    minWidth: 700,
    width: 1280,
    height: 720,
    frame: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL('http://localhost:9000');

}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})