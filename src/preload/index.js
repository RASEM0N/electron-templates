// https://electronjs.org/docs/tutorial/security
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('MessagesAPI', {
    onLoaded: (callback) => {
        ipcRenderer.on('loaded', callback)
    },
})
