const { app, BrowserWindow } = require('electron')

function createWindows() {
    let win = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadURL('http://localhost:3000/')

    win.focus()
}

app.whenReady().then(createWindows)