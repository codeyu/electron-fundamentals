'use strict'

const electron = require('electron')
const {app, BrowserWindow, Menu} = electron
const name = app.getName()

let template = [
    {
        label: name,
        submenu: [{
            label: `About ${name}`,
            role: 'about'
        }, {
            type: 'separator'
        }, {
            label: 'Quit',
            accelerator: 'Cmd+Q',
            click: function () {app.quit()}
        }]
    },
    {
        label: 'Another',
        submenu: [{
            label: 'Sweet'
        }]
    }
]

app.on('ready', function () {
    new BrowserWindow()
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
})