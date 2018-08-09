const electron = require('electron')
const {
    app,
    BrowserWindow
} = electron
const isDev = require('electron-is-dev')
const path = require('path')
let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 680
    });
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)
    mainWindow.on('closed', () => mainWindow = null)
}
app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
});