const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('detectX', {
    getSystemInfo: () => ipcRenderer.invoke('get-system-info'),
    openSystemInfo: () => ipcRenderer.invoke('open-system-info'),
    getVersion: () => ipcRenderer.invoke('get-version'),
    
    // Update functions
    checkForUpdates: () => ipcRenderer.invoke('check-for-updates'),
    downloadUpdate: () => ipcRenderer.invoke('download-update'),
    installUpdate: () => ipcRenderer.invoke('install-update'),
    
    // Update events
    onUpdateAvailable: (callback) => ipcRenderer.on('update-available', callback),
    onUpdateNotAvailable: (callback) => ipcRenderer.on('update-not-available', callback),
    onDownloadProgress: (callback) => ipcRenderer.on('download-progress', callback),
    onUpdateDownloaded: (callback) => ipcRenderer.on('update-downloaded', callback),
    onUpdateError: (callback) => ipcRenderer.on('update-error', callback)
});
