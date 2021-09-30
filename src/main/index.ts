import * as path from 'path'
import { app, BrowserWindow } from 'electron'

const createWindow = () => {
    let win: BrowserWindow = new BrowserWindow({
        title: 'Application',
        width: 900,
        height: 800,
        webPreferences: {
            preload: path.join(app.getAppPath(), 'preload', 'index.js'),
        },
    })

    win.loadFile('renderer/index.html').catch((e) => {
        console.error(`ERROR: ${e.message}`)
    })

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', () => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
