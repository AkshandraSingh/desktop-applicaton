const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = async () => {
    const window = new BrowserWindow({
        width: 700,
        maxWidth: 700,
        minWidth: 700,
        height: 500,
        maxHeight: 500,
        minHeight: 500,
    })
    await window.loadFile(path.join(__dirname, "client", 'html', "mainPage.html"))
}

app.on('ready', () => {
    createWindow()
    console.log('Electron window started')
})  
