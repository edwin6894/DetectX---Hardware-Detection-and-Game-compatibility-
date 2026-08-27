const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const si = require('systeminformation');
const { exec } = require('child_process');

let mainWindow;

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

// Open Windows System Information
ipcMain.handle('open-system-info', async () => {
    console.log('=== open-system-info handler called ===');
    
    const { exec } = require('child_process');
    
    return new Promise((resolve) => {
        exec('cmd /c start msinfo32', (error) => {
            if (error) {
                console.error('Exec error:', error);
                resolve({ success: false, error: error.message });
            } else {
                console.log('msinfo32 command executed');
                resolve({ success: true });
            }
        });
    });
});
// Get System Information
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
        console.error('Error getting system info:', error);
        throw error;
    }
});

// Helper functions
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
        { pattern: /i7-1185G7|i7-1165G7|i5-1135G7|i5-1145G7|i3-1115G4|i3-1125G4/i, codename: 'Tiger Lake', year: 2020, lithography: '10nm SuperFin' },
        { pattern: /i7-11800H|i7-11850H|i5-11400H|i5-11260H|i7-11370H|i5-11300H/i, codename: 'Tiger Lake-H', year: 2021, lithography: '10nm SuperFin' },
        { pattern: /i9-12900K|i9-12900|i7-12700K|i7-12700|i5-12600K|i5-12600|i5-12400|i3-12100/i, codename: 'Alder Lake', year: 2021, lithography: 'Intel 7' },
        { pattern: /i9-12900H|i7-12700H|i5-12500H|i5-12450H/i, codename: 'Alder Lake-H', year: 2022, lithography: 'Intel 7' },
        { pattern: /i9-13900K|i9-13900|i7-13700K|i7-13700|i5-13600K|i5-13600|i5-13400|i3-13100/i, codename: 'Raptor Lake', year: 2022, lithography: 'Intel 7' },
        { pattern: /i9-13900H|i7-13700H|i5-13500H|i5-13450H/i, codename: 'Raptor Lake-H', year: 2023, lithography: 'Intel 7' },
        { pattern: /i9-14900K|i7-14700K|i5-14600K/i, codename: 'Raptor Lake Refresh', year: 2023, lithography: 'Intel 7' },
        { pattern: /i9-11900K|i7-11700K|i5-11600K|i5-11400/i, codename: 'Rocket Lake', year: 2021, lithography: '14nm' },
        { pattern: /i9-10900K|i7-10700K|i5-10600K|i5-10400|i3-10100/i, codename: 'Comet Lake', year: 2020, lithography: '14nm' },
        { pattern: /i7-10750H|i5-10300H|i7-10870H/i, codename: 'Comet Lake-H', year: 2020, lithography: '14nm' },
        { pattern: /i7-1065G7|i5-1035G4|i3-1005G1/i, codename: 'Ice Lake', year: 2019, lithography: '10nm' },
        { pattern: /i9-9900K|i7-9700K|i5-9600K|i5-9400|i3-9100/i, codename: 'Coffee Lake Refresh', year: 2018, lithography: '14nm' },
        { pattern: /i7-8700K|i5-8600K|i5-8400|i3-8100/i, codename: 'Coffee Lake', year: 2017, lithography: '14nm' },
        { pattern: /i7-8750H|i5-8300H|i7-8850H/i, codename: 'Coffee Lake-H', year: 2018, lithography: '14nm' },
        { pattern: /i7-7700K|i5-7600K|i5-7400|i3-7100/i, codename: 'Kaby Lake', year: 2017, lithography: '14nm' },
        { pattern: /i7-7500U|i5-7200U|i7-7700HQ|i5-7300HQ/i, codename: 'Kaby Lake', year: 2016, lithography: '14nm' },
        { pattern: /i7-6700K|i5-6600K|i5-6400|i3-6100/i, codename: 'Skylake', year: 2015, lithography: '14nm' },
        { pattern: /i7-4790K|i5-4690K|i5-4460|i3-4130/i, codename: 'Haswell', year: 2014, lithography: '22nm' },
        { pattern: /i7-4700HQ|i5-4200U|i7-4500U/i, codename: 'Haswell', year: 2013, lithography: '22nm' },
        { pattern: /Ryzen 9 7950X|Ryzen 9 7900X|Ryzen 7 7700X|Ryzen 5 7600X/i, codename: 'Raphael', year: 2022, lithography: '5nm' },
        { pattern: /Ryzen 9 5950X|Ryzen 9 5900X|Ryzen 7 5800X|Ryzen 5 5600X/i, codename: 'Vermeer', year: 2020, lithography: '7nm' },
        { pattern: /Ryzen 9 5900HX|Ryzen 7 5800H|Ryzen 5 5600H/i, codename: 'Cezanne', year: 2021, lithography: '7nm' },
        { pattern: /Ryzen 9 3950X|Ryzen 7 3800X|Ryzen 5 3600|Ryzen 5 3600X/i, codename: 'Matisse', year: 2019, lithography: '7nm' },
        { pattern: /Ryzen 7 2700X|Ryzen 5 2600|Ryzen 5 2600X/i, codename: 'Pinnacle Ridge', year: 2018, lithography: '12nm' },
        { pattern: /Ryzen 7 1700X|Ryzen 5 1600|Ryzen 5 1600X/i, codename: 'Summit Ridge', year: 2017, lithography: '14nm' }
    ];
    
    for (const cpu of cpuDatabase) {
        if (cpu.pattern.test(brand)) {
            return cpu;
        }
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