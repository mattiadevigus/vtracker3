const { app, BrowserWindow } = require('electron')

function createWindow () {

    const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    frame: true,
    autoHideMenuBar: true,
    titleBarStyle: "hiddenInset",
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL('http://localhost:3000');

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