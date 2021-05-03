import { ipcMain } from 'electron'

import pathToRows from './pathsToRows'
import prepareData from './prepareData'
import groupWords from './groupWords'

ipcMain.on('process-files', (event, paths) => {

    try {

    pathToRows(paths)
        .then(rows => prepareData(rows))
        .then(words => groupWords(words))
        .then(groupedWords => event.reply('process-files', groupedWords))
    }
    catch (e){
        reject (e)
    }
})