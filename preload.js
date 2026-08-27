const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('detectX', {
    getSystemInfo: () => ipcRenderer.invoke('get-system-info'),
    openSystemInfo: () => ipcRenderer.invoke('open-system-info')
});