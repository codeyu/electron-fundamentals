const electron = require('electron');
const countdown = require('./countdown')
const path = require('path');
const {app, BrowserWindow, ipcMain: ipc} = electron;

const windows = [];

app.on('ready', _=>{
    [1, 2, 3].forEach(i => {
        let win = new BrowserWindow({
            height: 400,
            width: 400
        })
        win.loadURL(path.normalize('file://' + path.join(__dirname, 'countdown.html')));
        win.on('closed', _=>{
            console.log('closed!');
            win = null;
        })
        windows.push(win)
    })
    
})

ipc.on('countdown-start', _=> {
    console.log('starting!')
    countdown(count => {
        console.log('count', count)
        windows.forEach(win => {
            win.webContents.send('countdown', count)
        })
    })
})