/// Global function for button click
function openSystemInfo() {
    console.log('Button clicked!');
    
    if (window.detectX && window.detectX.openSystemInfo) {
        console.log('Calling detectX.openSystemInfo...');
        window.detectX.openSystemInfo().then(result => {
            console.log('Result:', result);
        }).catch(error => {
            console.error('Error:', error);
        });
    } else {
        console.log('detectX not available');
        // Fallback: try direct
        if (window.openSystemInfo) {
            window.openSystemInfo();
        }
    }
}

// Make it globally accessible
window.openSystemInfo = openSystemInfo;
let systemInfo = null;
let currentFilter = 'all';
let compatibleGames = [];

// Open external links in browser
function openLink(url) {
    if (window.detectX && window.detectX.openExternal) {
        window.detectX.openExternal(url);
    } else {
        window.open(url, '_blank');
    }
}

function startDetection() {
    document.getElementById('landingPage').style.display = 'none';
    document.getElementById('loadingScreen').style.display = 'block';
    document.getElementById('statusIndicator').style.display = 'flex';
    document.getElementById('exportBtn').style.display = 'flex';
    
    detectSystem();
}

async function detectSystem() {
    try {
        // Use Electron IPC to get system info
        systemInfo = await window.detectX.getSystemInfo();
        
        console.log('System detected:', systemInfo);
        
        updateUI();
        findCompatibleGames();
        
        setTimeout(() => {
            document.getElementById('loadingScreen').style.display = 'none';
            document.getElementById('mainContent').style.display = 'block';
            updateStatus(true);
        }, 1500);
        
    } catch (error) {
        console.error('Detection error:', error);
        document.querySelector('.loading-screen h2').textContent = 'Detection Error';
        document.querySelector('.loading-screen p').textContent = 'Failed to detect system hardware';
    }
}

function updateUI() {
    updateCPUSection();
    updateIGPUSection();
    updateDGPUSection();
    updateRAMSection();
    updatePerformanceScore();
}

function updateCPUSection() {
    const cpu = systemInfo.cpu;
    
    // Vendor Logo
    const vendorLogo = document.getElementById('cpuVendorLogo');
    if (cpu.manufacturer && cpu.manufacturer.toLowerCase().includes('intel')) {
        vendorLogo.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg" alt="Intel" style="width: 100%; height: 100%; object-fit: contain;">`;
    } else if (cpu.manufacturer && cpu.manufacturer.toLowerCase().includes('amd')) {
        vendorLogo.innerHTML = `<img src="https://images.seeklogo.com/logo-png/17/1/amd-logo-png_seeklogo-175858.png" alt="AMD" style="width: 100%; height: 100%; object-fit: contain;">`;
    } else {
        vendorLogo.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>`;
    }
    
    document.getElementById('cpuName').textContent = cpu.brand || 'Unknown CPU';
    document.getElementById('cpuFullDetails').textContent = 
        `Code Name: ${cpu.codename || 'Unknown'} | Released: ${cpu.year || 'N/A'} | ${cpu.lithography || 'Unknown'}`;
    
    document.getElementById('cpuScoreBadge').textContent = `Score: ${cpu.score || 0}/100`;
    document.getElementById('cpuScoreBadge').className = `badge ${cpu.score > 70 ? 'compatibility-high' : cpu.score > 40 ? 'compatibility-medium' : 'compatibility-low'}`;
    
    document.getElementById('cpuDetailsGrid').innerHTML = `
        <div class="detail-item"><div class="label">Physical Cores</div><div class="value">${cpu.physicalCores || 'N/A'}</div></div>
        <div class="detail-item"><div class="label">Total Cores</div><div class="value">${cpu.cores || 'N/A'}</div></div>
        <div class="detail-item"><div class="label">Threads</div><div class="value">${cpu.threads || 'N/A'}</div></div>
        <div class="detail-item"><div class="label">Base Clock</div><div class="value">${cpu.speed ? cpu.speed + ' GHz' : 'N/A'}</div></div>
        <div class="detail-item"><div class="label">Boost Clock</div><div class="value">${cpu.speedMax ? cpu.speedMax + ' GHz' : 'N/A'}</div></div>
        <div class="detail-item"><div class="label">Cache</div><div class="value">${cpu.cache || 'N/A'}</div></div>
        <div class="detail-item"><div class="label">Socket</div><div class="value">${cpu.socket || 'N/A'}</div></div>
        <div class="detail-item"><div class="label">Virtualization</div><div class="value">${cpu.virtualization ? 'Enabled' : 'Disabled'}</div></div>
    `;
}

function updateIGPUSection() {
    const igpus = systemInfo.igpu;
    const section = document.getElementById('igpuSection');
    
    if (!igpus || igpus.length === 0) {
        section.style.display = 'none';
        return;
    }
    
    section.style.display = 'block';
    const igpu = igpus[0];
    
    // Vendor Logo
    const vendorLogo = document.getElementById('igpuVendorLogo');
    if (igpu.vendor && igpu.vendor.toLowerCase().includes('intel')) {
        vendorLogo.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg" alt="Intel" style="width: 100%; height: 100%; object-fit: contain;">`;
    } else if (igpu.vendor && igpu.vendor.toLowerCase().includes('amd')) {
        vendorLogo.innerHTML = `<img src="https://images.seeklogo.com/logo-png/17/1/amd-logo-png_seeklogo-175858.png" alt="AMD" style="width: 100%; height: 100%; object-fit: contain;">`;
    } else {
        vendorLogo.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`;
    }
    
    document.getElementById('igpuName').textContent = igpu.model || 'Unknown iGPU';
    document.getElementById('igpuDetails').textContent = 
        `${igpu.vendor || 'Unknown'} | Shared Memory | Driver: ${igpu.driverVersion || 'N/A'}`;
    
    document.getElementById('igpuDetailsGrid').innerHTML = `
        <div class="detail-item"><div class="label">VRAM</div><div class="value">Shared System RAM</div></div>
        <div class="detail-item"><div class="label">Bus Type</div><div class="value">Integrated</div></div>
        <div class="detail-item"><div class="label">Driver Version</div><div class="value">${igpu.driverVersion || 'N/A'}</div></div>
        <div class="detail-item"><div class="label">Driver Date</div><div class="value">${igpu.driverDate || 'N/A'}</div></div>
        <div class="detail-item"><div class="label">Performance Score</div><div class="value">${igpu.score || 0}/100</div></div>
    `;
}

function updateDGPUSection() {
    const dgpus = systemInfo.dgpu;
    const section = document.getElementById('dgpuSection');
    
    if (!dgpus || dgpus.length === 0) {
        section.style.display = 'none';
        return;
    }
    
    section.style.display = 'block';
    const dgpu = dgpus[0];
    
    // NVIDIA Logo
    const vendorLogo = document.getElementById('dgpuVendorLogo');
    if (dgpu.vendor && dgpu.vendor.toLowerCase().includes('nvidia')) {
        vendorLogo.innerHTML = `<img src="https://iprsoftwaremedia.com/219/files/202512/692f50633d6332b6efbbc605_nvidia-logo-vert-wht/nvidia-logo-vert-wht_prv.png?v=0a06dca9-ab55-462d-97ea-f90ed9844e39" alt="nvidia" style="width: 100%; height: 100%; object-fit: fill;">
           
        `;
    } else if (dgpu.vendor && dgpu.vendor.toLowerCase().includes('amd')) {
        vendorLogo.innerHTML = `<img src="https://gladiatorpc.co.uk/assets/img/special/logos/AMDRadeon.webp" alt="AMD" style="width: 100%; height: 100%; object-fit: fill;">`;
    } else {
        vendorLogo.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`;
    }
    
    document.getElementById('dgpuName').textContent = dgpu.model || 'Unknown dGPU';
    document.getElementById('dgpuDetails').textContent = 
        `${dgpu.vendor || 'Unknown'} | Dedicated ${dgpu.vram || 0} GB VRAM`;
    
    document.getElementById('dgpuDetailsGrid').innerHTML = `
        <div class="detail-item"><div class="label">VRAM</div><div class="value">${dgpu.vram || 0} GB GDDR</div></div>
        <div class="detail-item"><div class="label">Bus Interface</div><div class="value">${dgpu.bus || 'PCIe'}</div></div>
        <div class="detail-item"><div class="label">Driver Version</div><div class="value">${dgpu.driverVersion || 'N/A'}</div></div>
        <div class="detail-item"><div class="label">Driver Date</div><div class="value">${dgpu.driverDate || 'N/A'}</div></div>
        <div class="detail-item"><div class="label">Performance Score</div><div class="value">${dgpu.score || 0}/100</div></div>
    `;
}

function updateRAMSection() {
    const ram = systemInfo.ram;
    
    document.getElementById('ramName').textContent = `${ram.total || 0} GB ${ram.type || 'DDR4'}`;
    document.getElementById('ramDetails').textContent = 
        `${ram.modules || 0} module(s) | ${ram.speed ? ram.speed + ' MHz' : 'Speed N/A'} | ${ram.available || 0} GB available`;
    
    document.getElementById('ramDetailsGrid').innerHTML = `
        <div class="detail-item"><div class="label">Total Capacity</div><div class="value">${ram.total || 0} GB</div></div>
        <div class="detail-item"><div class="label">Memory Type</div><div class="value">${ram.type || 'DDR4'}</div></div>
        <div class="detail-item"><div class="label">Speed</div><div class="value">${ram.speed ? ram.speed + ' MHz' : 'N/A'}</div></div>
        <div class="detail-item"><div class="label">Modules</div><div class="value">${ram.modules || 0}</div></div>
        <div class="detail-item"><div class="label">Available</div><div class="value">${ram.available || 0} GB</div></div>
        <div class="detail-item"><div class="label">Used</div><div class="value">${ram.used || 0} GB</div></div>
    `;
}

function updatePerformanceScore() {
    const score = systemInfo.performanceScore || 0;
    
    let current = 0;
    const target = score;
    const interval = setInterval(() => {
        current += 1;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        document.getElementById('scoreValue').textContent = current;
        document.getElementById('scoreFill').style.width = current + '%';
    }, 20);
}

function findCompatibleGames() {
    compatibleGames = [];
    
    const cpuScore = systemInfo.cpu.score || 50;
    const ramTotal = systemInfo.ram.total || 8;
    
    let bestGPUScore = 0;
    let hasDedicated = systemInfo.dgpu && systemInfo.dgpu.length > 0;
    
    if (hasDedicated) {
        bestGPUScore = Math.max(...systemInfo.dgpu.map(g => g.score || 0));
    } else if (systemInfo.igpu && systemInfo.igpu.length > 0) {
        bestGPUScore = Math.max(...systemInfo.igpu.map(g => g.score || 0));
    }
    
    gamesDatabase.forEach(game => {
        const cpuCompatible = cpuScore >= game.cpuScore * 0.8;
        const gpuCompatible = bestGPUScore >= game.gpuScore * 0.7;
        const ramCompatible = ramTotal >= game.minRequirements.ram;
        
        if (cpuCompatible && gpuCompatible && ramCompatible) {
            game.compatibilityLevel = Math.round(
                ((cpuScore / game.cpuScore) + (bestGPUScore / game.gpuScore) + (ramTotal / game.minRequirements.ram)) / 3 * 100
            );
            game.requiresDedicated = game.gpuScore > 30;
            compatibleGames.push(game);
        }
    });
    
    compatibleGames.sort((a, b) => b.compatibilityLevel - a.compatibilityLevel);
    displayGames(compatibleGames);
}

function displayGames(games) {
    const grid = document.getElementById('gamesGrid');
    
    if (games.length === 0) {
        grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">No compatible games found.</p>';
        return;
    }
    
    grid.innerHTML = games.map(game => {
        const compatClass = game.compatibilityLevel > 80 ? 'compatibility-high' : 
                           game.compatibilityLevel > 50 ? 'compatibility-medium' : 'compatibility-low';
        
        return `
            <div class="game-card">
                <div class="game-cover">
                    <img src="${game.cover}" alt="${game.name}" onerror="this.style.display='none'">
                </div>
                <div class="game-info">
                    <h4>${game.name}</h4>
                    <div class="game-meta">
                        <span class="game-tag">${game.genre}</span>
                        <span class="game-tag">${game.requiresDedicated ? 'dGPU' : 'iGPU'}</span>
                    </div>
                    <span class="compatibility-badge ${compatClass}">${game.compatibilityLevel}% Compatible</span>
                </div>
            </div>
        `;
    }).join('');
}

function filterGames(filter) {
    currentFilter = filter;
    
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    let filtered = compatibleGames;
    if (filter === 'igpu') filtered = compatibleGames.filter(g => !g.requiresDedicated);
    else if (filter === 'dgpu') filtered = compatibleGames.filter(g => g.requiresDedicated);
    
    displayGames(filtered);
}

function updateStatus(success) {
    const dot = document.querySelector('.status-dot');
    const text = document.querySelector('.status-text');
    const exportBtn = document.getElementById('exportBtn');
    const sysinfoBtn = document.getElementById('sysinfoBtn');
    
    if (success) {
        dot.classList.add('active');
        text.textContent = 'System Detected';
        
        if (exportBtn) {
            exportBtn.style.display = 'flex';
        }
        if (sysinfoBtn) {
            sysinfoBtn.style.display = 'flex';
        }
    }
}
function exportData() {
    const data = {
        exportDate: new Date().toISOString(),
        system: systemInfo,
        games: compatibleGames
    };
    
    // Create JSON file
    const json = JSON.stringify(data, null, 2);
    const jsonBlob = new Blob([json], { type: 'application/json' });
    const jsonUrl = URL.createObjectURL(jsonBlob);
    
    const jsonLink = document.createElement('a');
    jsonLink.href = jsonUrl;
    jsonLink.download = `DetectX_Report_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(jsonLink);
    jsonLink.click();
    document.body.removeChild(jsonLink);
    URL.revokeObjectURL(jsonUrl);
    
    // Create text report
    const textReport = generateTextReport(data);
    const textBlob = new Blob([textReport], { type: 'text/plain' });
    const textUrl = URL.createObjectURL(textBlob);
    
    const textLink = document.createElement('a');
    textLink.href = textUrl;
    textLink.download = `DetectX_Report_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(textLink);
    textLink.click();
    document.body.removeChild(textLink);
    URL.revokeObjectURL(textUrl);
    
    alert('✅ Reports exported successfully!\n\nFiles downloaded:\n- JSON report\n- Text report');
}

function generateTextReport(data) {
    let report = "🔍 DetectX - System Report\n";
    report += "=".repeat(50) + "\n\n";
    report += "📅 Export Date: " + new Date(data.exportDate).toLocaleString() + "\n\n";
    
    report += "🖥️ System Specifications\n";
    report += "-".repeat(30) + "\n";
    
    // CPU Info
    report += `CPU: ${data.system.cpu.brand}\n`;
    report += `Codename: ${data.system.cpu.codename}\n`;
    report += `Year: ${data.system.cpu.year}\n`;
    report += `Cores/Threads: ${data.system.cpu.cores}/${data.system.cpu.threads}\n`;
    report += `Base/Boost Clock: ${data.system.cpu.speed}/${data.system.cpu.speedMax} GHz\n`;
    report += `Cache: ${data.system.cpu.cache}\n\n`;
    
    // GPU Info
    report += "GPU(s):\n";
    if (data.system.igpu && data.system.igpu.length > 0) {
        report += `  iGPU: ${data.system.igpu[0].model}\n`;
        report += `  Driver: ${data.system.igpu[0].driverVersion}\n\n`;
    }
    if (data.system.dgpu && data.system.dgpu.length > 0) {
        report += `  dGPU: ${data.system.dgpu[0].model}\n`;
        report += `  VRAM: ${data.system.dgpu[0].vram} GB\n`;
        report += `  Driver: ${data.system.dgpu[0].driverVersion}\n\n`;
    }
    
    // RAM Info
    report += `RAM: ${data.system.ram.total} GB ${data.system.ram.type}\n`;
    report += `Speed: ${data.system.ram.speed || 'N/A'} MHz\n`;
    report += `Modules: ${data.system.ram.modules}\n\n`;
    
    // Performance
    report += `Performance Score: ${data.system.performanceScore}/100\n\n`;
    
    // Games
    report += "🎯 Compatible Games\n";
    report += "-".repeat(30) + "\n";
    
    data.games.forEach((game, index) => {
        report += `${index + 1}. ${game.name} (${game.genre}) - ${game.compatibilityLevel}% compatible\n`;
        report += `   Min CPU: ${game.minRequirements.cpu}\n`;
        report += `   Min GPU: ${game.minRequirements.gpu}\n`;
        report += `   Min RAM: ${game.minRequirements.ram} GB\n\n`;
    });
    
    return report;
}
// Hide scrollbar on landing page
function startDetection() {
    document.getElementById('landingPage').style.display = 'none';
    document.getElementById('loadingScreen').style.display = 'block';
    document.getElementById('statusIndicator').style.display = 'flex';
    document.getElementById('exportBtn').style.display = 'flex';
    
    // Enable scrollbar for main content
    document.body.style.overflow = 'auto';
    
    detectSystem();
}

// Disable scrollbar initially
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.overflow = 'hidden';
});

// When main content shows, enable scrollbar
function showMainContent() {
    document.getElementById('loadingScreen').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    document.body.style.overflow = 'auto';
    updateStatus(true);
}
function openSystemInfo() {
    if (window.detectX && window.detectX.openSystemInfo) {
        window.detectX.openSystemInfo();
    }
}
// Ensure openSystemInfo is global
if (typeof window !== 'undefined') {
    window.openSystemInfo = openSystemInfo;
}