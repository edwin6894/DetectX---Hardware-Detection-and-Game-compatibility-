const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const si = require('systeminformation');
const { exec } = require('child_process');
const { autoUpdater } = require('electron-updater');

let mainWindow;
autoUpdater.autoDownload = false;
autoUpdater.autoInstallOnAppQuit = false;
autoUpdater.allowPrerelease = true;
autoUpdater.forceDevUpdateConfig = true;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 700,
        minWidth: 900,
        minHeight: 700,
        maxWidth: 900,
        maxHeight: 700,
        backgroundColor: '#0a0e17',
        title: 'DetectX - © 2026 Edwin Thomas',
        icon: path.join(__dirname, 'assets', 'icon.ico'),
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        },
        autoHideMenuBar: true,
        show: false,
        center: true,
        resizable: true,
        maximizable: false,
        fullscreenable: false,
        minimizable: true
    });

    mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));
    
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    mainWindow.webContents.setWindowOpenHandler(({ url }) => {
        shell.openExternal(url);
        return { action: 'deny' };
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.whenReady().then(() => {
    createWindow();
    
    setTimeout(() => {
        checkForUpdates();
    }, 5000);
    
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

function checkForUpdates() {
    if (!app.isPackaged) {
        return;
    }
    
    autoUpdater.checkForUpdates().catch(() => {});
}

autoUpdater.on('update-available', (info) => {
    if (mainWindow) {
        mainWindow.webContents.send('update-available', { version: info.version });
    }
});

autoUpdater.on('update-not-available', () => {
    if (mainWindow) {
        mainWindow.webContents.send('update-not-available');
    }
});

autoUpdater.on('download-progress', (progress) => {
    if (mainWindow) {
        mainWindow.webContents.send('download-progress', { percent: Math.round(progress.percent) });
    }
});

autoUpdater.on('update-downloaded', (info) => {
    if (mainWindow) {
        mainWindow.webContents.send('update-downloaded', { version: info.version });
    }
});

autoUpdater.on('error', (error) => {
    if (error.message.includes('not signed')) {
        return;
    }
    if (mainWindow) {
        mainWindow.webContents.send('update-error', { message: error.message });
    }
});

ipcMain.handle('check-for-updates', async () => {
    if (app.isPackaged) {
        await autoUpdater.checkForUpdates();
        return { success: true };
    }
    return { success: false };
});

ipcMain.handle('get-version', async () => {
    return app.getVersion();
});

ipcMain.handle('download-update', async () => {
    await autoUpdater.downloadUpdate();
    return { success: true };
});

ipcMain.handle('install-update', async () => {
    setTimeout(() => {
        autoUpdater.quitAndInstall(true, true);
    }, 1000);
    return { success: true };
});

ipcMain.handle('open-system-info', async () => {
    const { exec } = require('child_process');
    
    return new Promise((resolve) => {
        exec('cmd /c start msinfo32', (error) => {
            if (error) {
                resolve({ success: false, error: error.message });
            } else {
                resolve({ success: true });
            }
        });
    });
});

ipcMain.handle('get-system-info', async () => {
    try {
        const [cpu, graphics, mem, memLayout, osInfo] = await Promise.all([
            si.cpu(),
            si.graphics(),
            si.mem(),
            si.memLayout(),
            si.osInfo()
        ]);
        
        const cpuData = getCPUData(cpu.brand);
        const cpuInfo = {
            brand: cpu.brand,
            manufacturer: cpu.manufacturer,
            vendor: cpu.vendor,
            cores: cpu.cores,
            physicalCores: cpu.physicalCores,
            threads: cpu.threads,
            speed: cpu.speed,
            speedMin: cpu.speedMin,
            speedMax: cpu.speedMax,
            cache: formatCache(cpu.cache),
            codename: cpuData.codename,
            year: cpuData.year,
            lithography: cpuData.lithography,
            socket: cpu.socket,
            virtualization: cpu.virtualization,
            score: getCPUScore(cpu.brand, cpu.cores, cpu.speedMax)
        };
        
        const igpu = [];
        const dgpu = [];
        
        if (graphics.controllers) {
            graphics.controllers.forEach(controller => {
                const isIntegrated = isIntegratedGPU(controller.model, controller.vendor);
                const gpuInfo = {
                    vendor: controller.vendor,
                    model: controller.model,
                    vram: controller.vram || 0,
                    vramDynamic: controller.vramDynamic,
                    bus: controller.bus,
                    driverVersion: controller.driverVersion || getDefaultDriver(controller.model, controller.vendor),
                    driverDate: controller.driverDate || 'Not Available',
                    type: isIntegrated ? 'igpu' : 'dgpu',
                    score: getGPUScore(controller.model, controller.vendor, controller.vram, isIntegrated)
                };
                
                if (isIntegrated) {
                    igpu.push(gpuInfo);
                } else {
                    dgpu.push(gpuInfo);
                }
            });
        }
        
        const ramInfo = {
            total: Math.round(mem.total / (1024 ** 3)),
            free: Math.round(mem.free / (1024 ** 3)),
            used: Math.round(mem.used / (1024 ** 3)),
            available: Math.round(mem.available / (1024 ** 3)),
            type: memLayout[0]?.type || 'DDR4',
            speed: memLayout[0]?.clockSpeed || null,
            modules: memLayout.length,
            score: getRAMScore(mem.total)
        };
        
        const cpuScore = cpuInfo.score;
        const allGPUs = [...igpu, ...dgpu];
        const gpuScores = allGPUs.map(g => g.score);
        const bestGPUScore = gpuScores.length > 0 ? Math.max(...gpuScores) : 25;
        const ramScore = ramInfo.score;
        
        const performanceScore = Math.round(
            (cpuScore * 0.35) + 
            (bestGPUScore * 0.50) + 
            (ramScore * 0.15)
        );
        
        return {
            cpu: cpuInfo,
            igpu: igpu,
            dgpu: dgpu,
            ram: ramInfo,
            os: {
                platform: osInfo.platform,
                distro: osInfo.distro,
                release: osInfo.release,
                arch: osInfo.arch,
                hostname: osInfo.hostname
            },
            performanceScore: performanceScore
        };
    } catch (error) {
        throw error;
    }
});

function formatCache(cache) {
    if (!cache) return 'N/A';
    
    if (typeof cache === 'object') {
        const parts = [];
        if (cache.l1d) parts.push(`L1d: ${(cache.l1d / 1024).toFixed(0)}KB`);
        if (cache.l1i) parts.push(`L1i: ${(cache.l1i / 1024).toFixed(0)}KB`);
        if (cache.l2) parts.push(`L2: ${(cache.l2 / (1024 * 1024)).toFixed(1)}MB`);
        if (cache.l3) parts.push(`L3: ${(cache.l3 / (1024 * 1024)).toFixed(1)}MB`);
        return parts.join(', ') || 'N/A';
    }
    
    if (typeof cache === 'number') {
        return (cache / (1024 * 1024)).toFixed(1) + ' MB';
    }
    
    return 'N/A';
}

function getCPUData(brand) {
    if (!brand) return { codename: 'Unknown', year: new Date().getFullYear() - 3, lithography: 'Unknown' };
    
    const cpuDatabase = [
        { pattern: /Core Ultra 9 285K|Core Ultra 7 265K|Core Ultra 5 245K/i, codename: 'Arrow Lake', year: 2024, lithography: 'Intel 20A' },
        { pattern: /Core Ultra 9 185H|Core Ultra 7 155H|Core Ultra 5 125H/i, codename: 'Meteor Lake', year: 2023, lithography: 'Intel 4' },
        { pattern: /i9-14900K|i9-14900|i7-14700K|i7-14700|i5-14600K|i5-14400|i3-14100/i, codename: 'Raptor Lake Refresh', year: 2023, lithography: 'Intel 7' },
        { pattern: /i9-14900HX|i7-14700HX|i5-14500HX/i, codename: 'Raptor Lake-HX Refresh', year: 2024, lithography: 'Intel 7' },
        { pattern: /i9-13900K|i9-13900|i7-13700K|i7-13700|i5-13600K|i5-13400|i3-13100/i, codename: 'Raptor Lake', year: 2022, lithography: 'Intel 7' },
        { pattern: /i9-13900H|i7-13700H|i5-13500H|i5-13450H/i, codename: 'Raptor Lake-H', year: 2023, lithography: 'Intel 7' },
        { pattern: /i7-1360P|i5-1340P|i3-1315U/i, codename: 'Raptor Lake-P', year: 2023, lithography: 'Intel 7' },
        { pattern: /i9-12900K|i9-12900|i7-12700K|i7-12700|i5-12600K|i5-12400|i3-12100/i, codename: 'Alder Lake', year: 2021, lithography: 'Intel 7' },
        { pattern: /i9-12900H|i7-12700H|i5-12500H|i5-12450H/i, codename: 'Alder Lake-H', year: 2022, lithography: 'Intel 7' },
        { pattern: /i7-1260P|i5-1240P|i3-1220P/i, codename: 'Alder Lake-P', year: 2022, lithography: 'Intel 7' },
        { pattern: /i7-1255U|i5-1235U|i3-1215U/i, codename: 'Alder Lake-U', year: 2022, lithography: 'Intel 7' },
        { pattern: /i9-11900K|i7-11700K|i5-11600K|i5-11400|i3-11100/i, codename: 'Rocket Lake', year: 2021, lithography: '14nm' },
        { pattern: /i7-1185G7|i7-1165G7|i5-1135G7|i5-1145G7|i3-1115G4|i3-1125G4/i, codename: 'Tiger Lake', year: 2020, lithography: '10nm SuperFin' },
        { pattern: /i7-11800H|i7-11850H|i5-11400H|i5-11260H|i7-11370H|i5-11300H/i, codename: 'Tiger Lake-H', year: 2021, lithography: '10nm SuperFin' },
        { pattern: /i9-10900K|i7-10700K|i5-10600K|i5-10400|i3-10100/i, codename: 'Comet Lake', year: 2020, lithography: '14nm' },
        { pattern: /i7-10750H|i5-10300H|i7-10870H|i7-10875H/i, codename: 'Comet Lake-H', year: 2020, lithography: '14nm' },
        { pattern: /i7-1065G7|i5-1035G4|i3-1005G1|i5-1035G1/i, codename: 'Ice Lake', year: 2019, lithography: '10nm' },
        { pattern: /i7-10510U|i5-10210U|i3-10110U/i, codename: 'Comet Lake-U', year: 2019, lithography: '14nm' },
        { pattern: /i9-9900K|i9-9900|i7-9700K|i7-9700|i5-9600K|i5-9400|i3-9100/i, codename: 'Coffee Lake Refresh', year: 2018, lithography: '14nm' },
        { pattern: /i9-9980HK|i7-9750H|i5-9300H/i, codename: 'Coffee Lake-H Refresh', year: 2019, lithography: '14nm' },
        { pattern: /i7-8700K|i7-8700|i5-8600K|i5-8400|i3-8100/i, codename: 'Coffee Lake', year: 2017, lithography: '14nm' },
        { pattern: /i7-8750H|i5-8300H|i7-8850H|i5-8400H/i, codename: 'Coffee Lake-H', year: 2018, lithography: '14nm' },
        { pattern: /i7-8550U|i5-8250U|i3-8130U/i, codename: 'Kaby Lake-R', year: 2017, lithography: '14nm' },
        { pattern: /i7-7700K|i7-7700|i5-7600K|i5-7400|i3-7100/i, codename: 'Kaby Lake', year: 2017, lithography: '14nm' },
        { pattern: /i7-7700HQ|i5-7300HQ|i7-7500U|i5-7200U/i, codename: 'Kaby Lake', year: 2016, lithography: '14nm' },
        { pattern: /i7-6700K|i7-6700|i5-6600K|i5-6400|i3-6100/i, codename: 'Skylake', year: 2015, lithography: '14nm' },
        { pattern: /i7-6700HQ|i5-6300HQ|i7-6500U|i5-6200U/i, codename: 'Skylake', year: 2015, lithography: '14nm' },
        { pattern: /i7-5775C|i5-5675C/i, codename: 'Broadwell', year: 2015, lithography: '14nm' },
        { pattern: /i7-5500U|i5-5200U|i3-5010U/i, codename: 'Broadwell-U', year: 2015, lithography: '14nm' },
        { pattern: /i7-4790K|i7-4790|i5-4690K|i5-4460|i3-4130/i, codename: 'Haswell', year: 2014, lithography: '22nm' },
        { pattern: /i7-4700HQ|i7-4700MQ|i5-4200U|i5-4210U|i7-4500U/i, codename: 'Haswell', year: 2013, lithography: '22nm' },
        { pattern: /i7-3770K|i7-3770|i5-3570K|i5-3470|i3-3220/i, codename: 'Ivy Bridge', year: 2012, lithography: '22nm' },
        { pattern: /i7-3520M|i7-3540M|i7-3610QM|i7-3630QM|i7-3720QM|i7-3740QM/i, codename: 'Ivy Bridge', year: 2012, lithography: '22nm' },
        { pattern: /i5-3210M|i5-3230M|i5-3320M|i5-3340M|i5-3360M|i5-3380M/i, codename: 'Ivy Bridge', year: 2012, lithography: '22nm' },
        { pattern: /i3-3110M|i3-3120M|i3-3130M|i3-3217U|i3-3227U|i3-3229Y/i, codename: 'Ivy Bridge', year: 2012, lithography: '22nm' },
        { pattern: /i7-3517U|i7-3537U|i7-3667U|i7-3687U|i5-3317U|i5-3337U|i5-3427U|i5-3437U/i, codename: 'Ivy Bridge', year: 2012, lithography: '22nm' },
        { pattern: /i7-2600K|i7-2600|i5-2500K|i5-2400|i3-2100/i, codename: 'Sandy Bridge', year: 2011, lithography: '32nm' },
        { pattern: /i7-2670QM|i5-2410M|i7-2630QM|i5-2520M|i3-2310M/i, codename: 'Sandy Bridge', year: 2011, lithography: '32nm' },
        { pattern: /i7-980X|i7-970|i7-960|i7-950|i7-930|i5-760|i5-750|i3-530/i, codename: 'Nehalem', year: 2010, lithography: '45nm' },
        { pattern: /i7-870|i7-860|i5-670|i5-650|i3-540/i, codename: 'Lynnfield', year: 2009, lithography: '45nm' },
        { pattern: /Core 2 Quad Q9|Core 2 Quad Q8/i, codename: 'Yorkfield', year: 2008, lithography: '45nm' },
        { pattern: /Core 2 Quad Q6/i, codename: 'Kentsfield', year: 2007, lithography: '65nm' },
        { pattern: /Core 2 Duo E8|Core 2 Duo E7/i, codename: 'Wolfdale', year: 2008, lithography: '45nm' },
        { pattern: /Core 2 Duo E6|Core 2 Duo E4|Core 2 Duo E2/i, codename: 'Conroe', year: 2006, lithography: '65nm' },
        { pattern: /Core 2 Duo T9|Core 2 Duo T8|Core 2 Duo T7|Core 2 Duo T6|Core 2 Duo T5/i, codename: 'Penryn', year: 2008, lithography: '45nm' },
        { pattern: /Core 2 Duo T7|Core 2 Duo T5|Core 2 Duo T2/i, codename: 'Merom', year: 2006, lithography: '65nm' },
        { pattern: /Core 2 Solo/i, codename: 'Penryn', year: 2008, lithography: '45nm' },
        { pattern: /Pentium D 9|Pentium D 8/i, codename: 'Presler', year: 2006, lithography: '65nm' },
        { pattern: /Pentium D 8|Pentium D 9/i, codename: 'Smithfield', year: 2005, lithography: '90nm' },
        { pattern: /Pentium 4 6|Pentium 4 5/i, codename: 'Cedar Mill', year: 2006, lithography: '65nm' },
        { pattern: /Pentium 4 5|Pentium 4 6/i, codename: 'Prescott', year: 2004, lithography: '90nm' },
        { pattern: /Pentium 4 2|Pentium 4 3/i, codename: 'Northwood', year: 2002, lithography: '130nm' },
        { pattern: /Pentium 4 1/i, codename: 'Willamette', year: 2000, lithography: '180nm' },
        { pattern: /Pentium M 7/i, codename: 'Dothan', year: 2004, lithography: '90nm' },
        { pattern: /Pentium M 1/i, codename: 'Banias', year: 2003, lithography: '130nm' },
        { pattern: /Pentium Gold G5|Pentium Silver N5/i, codename: 'Gemini Lake', year: 2017, lithography: '14nm' },
        { pattern: /Pentium G4|Pentium G3/i, codename: 'Haswell', year: 2013, lithography: '22nm' },
        { pattern: /Pentium N3|Pentium N4/i, codename: 'Braswell', year: 2015, lithography: '14nm' },
        { pattern: /Pentium B9|Pentium B8|Pentium 2/i, codename: 'Sandy Bridge', year: 2011, lithography: '32nm' },
        { pattern: /Celeron N4|Celeron N3|Celeron N2/i, codename: 'Gemini Lake', year: 2017, lithography: '14nm' },
        { pattern: /Celeron J4|Celeron J3|Celeron J1/i, codename: 'Apollo Lake', year: 2016, lithography: '14nm' },
        { pattern: /Celeron G1|Celeron G5|Celeron G4/i, codename: 'Sandy Bridge', year: 2011, lithography: '32nm' },
        { pattern: /Celeron E3|Celeron E1/i, codename: 'Wolfdale', year: 2008, lithography: '45nm' },
        { pattern: /Celeron D 3|Celeron D 4/i, codename: 'Prescott', year: 2004, lithography: '90nm' },
        { pattern: /Celeron 2|Celeron 1/i, codename: 'Northwood', year: 2002, lithography: '130nm' },
        { pattern: /Celeron 8|Celeron 7|Celeron B/i, codename: 'Sandy Bridge', year: 2011, lithography: '32nm' },
        { pattern: /Atom x7|Atom x5/i, codename: 'Cherry Trail', year: 2015, lithography: '14nm' },
        { pattern: /Atom Z3|Atom Z2/i, codename: 'Bay Trail', year: 2013, lithography: '22nm' },
        { pattern: /Atom N2|Atom N4|Atom N5/i, codename: 'Pineview', year: 2010, lithography: '45nm' },
        { pattern: /Atom N270|Atom N280|Atom 230/i, codename: 'Diamondville', year: 2008, lithography: '45nm' },
        { pattern: /Xeon E5|Xeon E3/i, codename: 'Sandy Bridge-EP', year: 2012, lithography: '32nm' },
        { pattern: /Xeon W|Xeon Gold|Xeon Silver/i, codename: 'Skylake-SP', year: 2017, lithography: '14nm' },
        { pattern: /Ryzen 9 9950X|Ryzen 9 9900X|Ryzen 7 9700X|Ryzen 5 9600X/i, codename: 'Granite Ridge', year: 2024, lithography: '4nm' },
        { pattern: /Ryzen 7 8700G|Ryzen 5 8600G|Ryzen 5 8500G/i, codename: 'Phoenix', year: 2024, lithography: '4nm' },
        { pattern: /Ryzen 9 7950X|Ryzen 9 7900X|Ryzen 7 7700X|Ryzen 5 7600X/i, codename: 'Raphael', year: 2022, lithography: '5nm' },
        { pattern: /Ryzen 9 7945HX|Ryzen 7 7745HX|Ryzen 5 7645HX/i, codename: 'Dragon Range', year: 2023, lithography: '5nm' },
        { pattern: /Ryzen 7 7840U|Ryzen 5 7640U/i, codename: 'Phoenix', year: 2023, lithography: '4nm' },
        { pattern: /Ryzen 9 5950X|Ryzen 9 5900X|Ryzen 7 5800X|Ryzen 5 5600X/i, codename: 'Vermeer', year: 2020, lithography: '7nm' },
        { pattern: /Ryzen 9 5900HX|Ryzen 7 5800H|Ryzen 5 5600H/i, codename: 'Cezanne', year: 2021, lithography: '7nm' },
        { pattern: /Ryzen 7 5700U|Ryzen 5 5500U/i, codename: 'Lucienne', year: 2021, lithography: '7nm' },
        { pattern: /Ryzen 7 4800H|Ryzen 5 4600H|Ryzen 7 4700U|Ryzen 5 4500U/i, codename: 'Renoir', year: 2020, lithography: '7nm' },
        { pattern: /Ryzen 9 3950X|Ryzen 9 3900X|Ryzen 7 3800X|Ryzen 5 3600|Ryzen 5 3600X/i, codename: 'Matisse', year: 2019, lithography: '7nm' },
        { pattern: /Ryzen 7 2700X|Ryzen 5 2600|Ryzen 5 2600X|Ryzen 3 2200G/i, codename: 'Pinnacle Ridge', year: 2018, lithography: '12nm' },
        { pattern: /Ryzen 7 1700X|Ryzen 7 1700|Ryzen 5 1600|Ryzen 5 1600X|Ryzen 3 1200/i, codename: 'Summit Ridge', year: 2017, lithography: '14nm' },
        { pattern: /FX-9590|FX-9370|FX-8350|FX-8320|FX-6300|FX-4300/i, codename: 'Vishera', year: 2012, lithography: '32nm' },
        { pattern: /FX-8150|FX-8120|FX-6100|FX-4100/i, codename: 'Zambezi', year: 2011, lithography: '32nm' },
        { pattern: /Phenom II X6|Phenom II X4|Phenom II X2/i, codename: 'Thuban/Deneb', year: 2009, lithography: '45nm' },
        { pattern: /Phenom X4|Phenom X3/i, codename: 'Agena', year: 2007, lithography: '65nm' },
        { pattern: /Athlon II X4|Athlon II X2/i, codename: 'Propus/Regor', year: 2009, lithography: '45nm' },
        { pattern: /Athlon 64 X2/i, codename: 'Windsor/Brisbane', year: 2006, lithography: '65nm' },
        { pattern: /Athlon 64 FX/i, codename: 'SledgeHammer', year: 2003, lithography: '130nm' },
        { pattern: /Athlon 64/i, codename: 'Newcastle/Venice', year: 2004, lithography: '90nm' },
        { pattern: /Athlon XP 3|Athlon XP 2/i, codename: 'Barton', year: 2003, lithography: '130nm' },
        { pattern: /Athlon XP 1/i, codename: 'Palomino/Thoroughbred', year: 2001, lithography: '130nm' },
        { pattern: /Athlon Thunderbird|Athlon 1/i, codename: 'Thunderbird', year: 2000, lithography: '180nm' },
        { pattern: /Duron 1|Duron 9|Duron 8/i, codename: 'Applebred', year: 2003, lithography: '130nm' },
        { pattern: /Duron 1|Duron 9/i, codename: 'Morgan', year: 2001, lithography: '180nm' },
        { pattern: /Duron 6|Duron 7/i, codename: 'Spitfire', year: 2000, lithography: '180nm' },
        { pattern: /Sempron 3|Sempron 2/i, codename: 'Sargas', year: 2009, lithography: '45nm' },
        { pattern: /Sempron 1|Sempron 3/i, codename: 'Manila', year: 2006, lithography: '90nm' },
        { pattern: /Sempron 2|Sempron 3/i, codename: 'Palermo', year: 2004, lithography: '90nm' },
        { pattern: /Turion 64 X2/i, codename: 'Tyler', year: 2007, lithography: '65nm' },
        { pattern: /Turion 64/i, codename: 'Lancaster', year: 2005, lithography: '90nm' },
        { pattern: /Opteron 6|Opteron 4/i, codename: 'Istanbul', year: 2009, lithography: '45nm' },
        { pattern: /Opteron 2|Opteron 1/i, codename: 'Santa Rosa', year: 2006, lithography: '90nm' },
        { pattern: /A10-7|A10-6|A8-7|A8-6|A6-7|A6-6/i, codename: 'Kaveri', year: 2014, lithography: '28nm' },
        { pattern: /A10-5|A8-5|A6-5|A4-5/i, codename: 'Trinity', year: 2012, lithography: '32nm' },
        { pattern: /A8-3|A6-3|A4-3|E2-3/i, codename: 'Llano', year: 2011, lithography: '32nm' },
        { pattern: /A6-9|A4-9|E2-9/i, codename: 'Bristol Ridge', year: 2016, lithography: '28nm' },
        { pattern: /A9-9|A6-9|E2-9/i, codename: 'Stoney Ridge', year: 2016, lithography: '28nm' },
        { pattern: /VIA C7/i, codename: 'Esther', year: 2005, lithography: '90nm' },
        { pattern: /VIA Nano/i, codename: 'Isaiah', year: 2008, lithography: '65nm' },
        { pattern: /VIA C3/i, codename: 'Nehemiah', year: 2001, lithography: '130nm' },
        { pattern: /Apple M3|Apple M2|Apple M1/i, codename: 'Apple Silicon', year: 2021, lithography: '5nm' }
    ];
    
    for (const cpu of cpuDatabase) {
        if (cpu.pattern.test(brand)) {
            return cpu;
        }
    }
    
    const b = brand.toLowerCase();
    if (b.includes('intel')) {
        const match = brand.match(/i[3579]-(\d{1,2})/i);
        if (match) {
            const gen = parseInt(match[1]);
            const genMap = {
                14: { codename: 'Raptor Lake Refresh', year: 2023, lithography: 'Intel 7' },
                13: { codename: 'Raptor Lake', year: 2022, lithography: 'Intel 7' },
                12: { codename: 'Alder Lake', year: 2021, lithography: 'Intel 7' },
                11: { codename: 'Tiger Lake/Rocket Lake', year: 2020, lithography: '10nm SuperFin' },
                10: { codename: 'Ice Lake/Comet Lake', year: 2019, lithography: '10nm' },
                9: { codename: 'Coffee Lake Refresh', year: 2018, lithography: '14nm' },
                8: { codename: 'Coffee Lake', year: 2017, lithography: '14nm' },
                7: { codename: 'Kaby Lake', year: 2016, lithography: '14nm' },
                6: { codename: 'Skylake', year: 2015, lithography: '14nm' },
                5: { codename: 'Broadwell', year: 2015, lithography: '14nm' },
                4: { codename: 'Haswell', year: 2013, lithography: '22nm' },
                3: { codename: 'Ivy Bridge', year: 2012, lithography: '22nm' },
                2: { codename: 'Sandy Bridge', year: 2011, lithography: '32nm' },
                1: { codename: 'Nehalem', year: 2010, lithography: '45nm' }
            };
            if (genMap[gen]) return genMap[gen];
        }
        
        if (b.includes('core 2')) return { codename: 'Core Architecture', year: 2007, lithography: '65nm' };
        if (b.includes('pentium')) return { codename: 'Pentium', year: 2005, lithography: '90nm' };
        if (b.includes('celeron')) return { codename: 'Celeron', year: 2005, lithography: '90nm' };
        if (b.includes('atom')) return { codename: 'Atom', year: 2010, lithography: '45nm' };
        if (b.includes('xeon')) return { codename: 'Xeon', year: 2015, lithography: '22nm' };
        
        return { codename: 'Intel Processor', year: 2015, lithography: 'Unknown' };
    }
    
    if (b.includes('amd') || b.includes('ryzen') || b.includes('athlon') || b.includes('phenom') || b.includes('fx') || b.includes('sempron') || b.includes('duron') || b.includes('turion') || b.includes('opteron')) {
        const match = brand.match(/Ryzen [3579] (\d{4})/i);
        if (match) {
            const modelNum = parseInt(match[1]);
            const ryzenMap = {
                9000: { codename: 'Granite Ridge', year: 2024, lithography: '4nm' },
                8000: { codename: 'Phoenix', year: 2024, lithography: '4nm' },
                7000: { codename: 'Raphael', year: 2022, lithography: '5nm' },
                5000: { codename: 'Vermeer', year: 2020, lithography: '7nm' },
                4000: { codename: 'Renoir', year: 2020, lithography: '7nm' },
                3000: { codename: 'Matisse', year: 2019, lithography: '7nm' },
                2000: { codename: 'Pinnacle Ridge', year: 2018, lithography: '12nm' },
                1000: { codename: 'Summit Ridge', year: 2017, lithography: '14nm' }
            };
            if (ryzenMap[modelNum]) return ryzenMap[modelNum];
        }
        
        if (b.includes('fx')) return { codename: 'Vishera', year: 2012, lithography: '32nm' };
        if (b.includes('phenom')) return { codename: 'Deneb', year: 2009, lithography: '45nm' };
        if (b.includes('athlon')) return { codename: 'Athlon', year: 2005, lithography: '90nm' };
        if (b.includes('sempron')) return { codename: 'Sempron', year: 2006, lithography: '90nm' };
        if (b.includes('duron')) return { codename: 'Duron', year: 2001, lithography: '180nm' };
        if (b.includes('turion')) return { codename: 'Turion', year: 2006, lithography: '90nm' };
        if (b.includes('opteron')) return { codename: 'Opteron', year: 2006, lithography: '90nm' };
        
        return { codename: 'AMD Processor', year: 2010, lithography: 'Unknown' };
    }
    
    return { codename: 'Unknown', year: new Date().getFullYear() - 3, lithography: 'Unknown' };
}

function isIntegratedGPU(model, vendor) {
    const m = (model || '').toLowerCase();
    const v = (vendor || '').toLowerCase();
    return m.includes('intel') || m.includes('iris') || m.includes('uhd') || v.includes('intel');
}

function getCPUScore(brand, cores, speedMax) {
    let score = 20;
    if (cores) score += cores * 5;
    if (speedMax) score += speedMax * 3;
    
    const b = (brand || '').toLowerCase();
    if (b.includes('i9') || b.includes('ryzen 9')) score += 30;
    else if (b.includes('i7') || b.includes('ryzen 7')) score += 20;
    else if (b.includes('i5') || b.includes('ryzen 5')) score += 10;
    
    return Math.min(100, Math.round(score));
}

function getGPUScore(model, vendor, vram, isIntegrated) {
    const m = (model || '').toLowerCase();
    
    if (m.includes('rtx 4090')) return 100;
    if (m.includes('rtx 4080')) return 95;
    if (m.includes('rtx 3070')) return 88;
    if (m.includes('rtx 3060')) return 82;
    if (m.includes('gtx 1080')) return 85;
    if (m.includes('gtx 1060')) return 65;
    if (m.includes('iris xe')) return 45;
    if (m.includes('uhd')) return 30;
    
    return isIntegrated ? 20 : 50;
}

function getRAMScore(totalBytes) {
    const gb = totalBytes / (1024 ** 3);
    if (gb >= 32) return 100;
    if (gb >= 16) return 75;
    if (gb >= 8) return 50;
    return 30;
}

function getDefaultDriver(model, vendor) {
    const v = (vendor || '').toLowerCase();
    
    if (v.includes('intel')) return 'Intel Graphics Driver';
    if (v.includes('nvidia')) return 'NVIDIA Driver';
    if (v.includes('amd')) return 'AMD Driver';
    return 'Unknown';
}
