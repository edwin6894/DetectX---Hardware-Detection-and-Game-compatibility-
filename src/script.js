/// Global function for button click
function openSystemInfo() {
    
    
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
// =========== GPU BENCHMARK SYSTEM ===========

const benchmarkDatabase = {
    // NVIDIA GPUs
    'rtx 4090': { expected: 100, tier: 'Ultra' },
    'rtx 4080': { expected: 95, tier: 'Ultra' },
    'rtx 4070': { expected: 90, tier: 'Ultra' },
    'rtx 4060': { expected: 85, tier: 'High' },
    'rtx 3090': { expected: 97, tier: 'Ultra' },
    'rtx 3080': { expected: 93, tier: 'Ultra' },
    'rtx 3070': { expected: 88, tier: 'High' },
    'rtx 3060': { expected: 82, tier: 'High' },
    'rtx 3050': { expected: 75, tier: 'Mid' },
    'rtx 2080': { expected: 90, tier: 'High' },
    'rtx 2070': { expected: 85, tier: 'High' },
    'rtx 2060': { expected: 80, tier: 'High' },
    'gtx 1660': { expected: 60, tier: 'Mid' },
    'gtx 1650': { expected: 55, tier: 'Mid' },
    'gtx 1080': { expected: 85, tier: 'High' },
    'gtx 1070': { expected: 75, tier: 'Mid' },
    'gtx 1060': { expected: 65, tier: 'Mid' },
    'gtx 1050 ti': { expected: 55, tier: 'Mid' },
    'gtx 1050': { expected: 50, tier: 'Entry' },
    'mx450': { expected: 35, tier: 'Entry' },
    'mx350': { expected: 30, tier: 'Entry' },
    'mx250': { expected: 25, tier: 'Entry' },
    
    // AMD GPUs
    'rx 7900': { expected: 95, tier: 'Ultra' },
    'rx 6900': { expected: 92, tier: 'Ultra' },
    'rx 6800': { expected: 88, tier: 'High' },
    'rx 6700': { expected: 82, tier: 'High' },
    'rx 6600': { expected: 75, tier: 'Mid' },
    'rx 5700': { expected: 78, tier: 'High' },
    'rx 5600': { expected: 70, tier: 'Mid' },
    'rx 580': { expected: 60, tier: 'Mid' },
    'rx 570': { expected: 55, tier: 'Mid' },
    
    // Intel GPUs
    'iris xe': { expected: 45, tier: 'Entry' },
    'uhd 770': { expected: 35, tier: 'Entry' },
    'uhd 630': { expected: 30, tier: 'Entry' },
    'uhd 620': { expected: 25, tier: 'Entry' },
    'hd 630': { expected: 28, tier: 'Entry' },
    'hd 620': { expected: 22, tier: 'Entry' }
};

function getExpectedScore(gpuModel) {
    const model = (gpuModel || '').toLowerCase();
    
    for (const [key, value] of Object.entries(benchmarkDatabase)) {
        if (model.includes(key)) {
            return value;
        }
    }
    
    return { expected: 50, tier: 'Mid' };
}

async function runBenchmark(type) {
    const buttonId = type === 'igpu' ? 'igpuBenchmarkBtn' : 'dgpuBenchmarkBtn';
    const resultsId = type === 'igpu' ? 'igpuBenchmarkResults' : 'dgpuBenchmarkResults';
    
    const button = document.getElementById(buttonId);
    const results = document.getElementById(resultsId);
    
    // Disable button during test
    button.disabled = true;
    button.textContent = 'Testing...';
    
    // Show testing animation
    results.style.display = 'block';
    results.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div class="loader" style="width: 40px; height: 40px; border: 3px solid var(--border-color); border-top: 3px solid #f59e0b; border-radius: 50%; margin: 0 auto 15px; animation: spin 1s linear infinite;"></div>
            <p>Running comprehensive benchmark test...</p>
            <p style="font-size: 12px; color: var(--text-secondary);">Testing: Rendering, Memory, Compute, Thermal</p>
        </div>
    `;
    
    // Run comprehensive benchmark
    const benchmarkData = await runComprehensiveBenchmark(type);
    
    // Get GPU info
    const gpu = type === 'igpu' ? systemInfo.igpu[0] : systemInfo.dgpu[0];
    const expected = getExpectedScore(gpu.model);
    
    // Calculate condition
    const performance = Math.min(100, (benchmarkData.totalScore / expected.expected) * 100);
const condition = getCondition(performance);
    
    // Display detailed results
    results.innerHTML = `
    <div class="benchmark-header">
        <div class="benchmark-score-circle">
            <span>${benchmarkData.totalScore}</span>
            <small>/100</small>
        </div>
        <div class="benchmark-info">
            <h4>${gpu.model}</h4>
            <span class="condition-${condition.class}">${condition.label}</span>
            <p style="font-size: 12px; color: var(--text-secondary); margin-top: 5px;">
                ${gpu.vendor} | ${gpu.vram ? gpu.vram + ' GB VRAM' : 'Shared Memory'}
            </p>
        </div>
    </div>
    
    <div class="benchmark-chart">
        <div class="chart-bar">
            <div class="chart-fill" style="width: ${benchmarkData.totalScore}%; background: linear-gradient(90deg, #ef4444, #f59e0b, #10b981);"></div>
        </div>
        <div class="chart-labels">
            <span>0</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
        </div>
    </div>
    
    <div class="benchmark-details-grid">
        <div class="benchmark-detail-card">
            <div class="detail-icon">🎨</div>
            <div class="detail-info">
                <div class="label">Basic Rendering</div>
                <div class="value">${benchmarkData.renderingScore}/100</div>
                <div class="mini-bar">
                    <div class="mini-fill" style="width: ${benchmarkData.renderingScore}%;"></div>
                </div>
            </div>
        </div>
        
        <div class="benchmark-detail-card">
            <div class="detail-icon">✨</div>
            <div class="detail-info">
                <div class="label">Complex Shaders</div>
                <div class="value">${benchmarkData.shaderScore}/100</div>
                <div class="mini-bar">
                    <div class="mini-fill" style="width: ${benchmarkData.shaderScore}%;"></div>
                </div>
            </div>
        </div>
        
        <div class="benchmark-detail-card">
            <div class="detail-icon">⚡</div>
            <div class="detail-info">
                <div class="label">Memory Bandwidth</div>
                <div class="value">${benchmarkData.memoryScore}/100</div>
                <div class="mini-bar">
                    <div class="mini-fill" style="width: ${benchmarkData.memoryScore}%;"></div>
                </div>
            </div>
        </div>
        
        <div class="benchmark-detail-card">
            <div class="detail-icon">🧮</div>
            <div class="detail-info">
                <div class="label">Compute Performance</div>
                <div class="value">${benchmarkData.computeScore}/100</div>
                <div class="mini-bar">
                    <div class="mini-fill" style="width: ${benchmarkData.computeScore}%;"></div>
                </div>
            </div>
        </div>
        
        <div class="benchmark-detail-card">
            <div class="detail-icon">🔄</div>
            <div class="detail-info">
                <div class="label">Fill Rate</div>
                <div class="value">${benchmarkData.fillRate} MP/s</div>
                <div class="mini-bar">
                    <div class="mini-fill" style="width: ${benchmarkData.fillRateScore}%;"></div>
                </div>
            </div>
        </div>
        
       <div class="benchmark-detail-card">
    <div class="detail-icon">📊</div>
    <div class="detail-info">
        <div class="label">Overall Performance</div>
        <div class="value">${Math.min(100, performance).toFixed(1)}%</div>
        <div class="mini-bar">
            <div class="mini-fill" style="width: ${Math.min(100, performance)}%;"></div>
        </div>
    </div>
</div>
    <div class="benchmark-stats">
        <div class="stat-item">
            <div class="label">Total Frames</div>
            <div class="value">${benchmarkData.frames.toLocaleString()}</div>
        </div>
        <div class="stat-item">
            <div class="label">Average FPS</div>
            <div class="value">${benchmarkData.fps} FPS</div>
        </div>
        <div class="stat-item">
            <div class="label">Test Duration</div>
            <div class="value">${benchmarkData.duration}s</div>
        </div>
        <div class="stat-item">
            <div class="label">Expected Score</div>
            <div class="value">${expected.expected}/100</div>
        </div>
    </div>
    
    <div class="benchmark-verdict">
        <div class="verdict-title">📊 Benchmark Analysis</div>
        <p>${getBenchmarkAnalysis(benchmarkData, expected, performance)}</p>
        <div class="verdict-details">
            <p><strong>Rendering:</strong> ${getScoreDescription(benchmarkData.renderingScore)}</p>
            <p><strong>Shaders:</strong> ${getScoreDescription(benchmarkData.shaderScore)}</p>
            <p><strong>Memory:</strong> ${getScoreDescription(benchmarkData.memoryScore)}</p>
            <p><strong>Compute:</strong> ${getScoreDescription(benchmarkData.computeScore)}</p>
        </div>
    </div>
`;
    
    // Re-enable button
    button.disabled = false;
    button.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        Run Benchmark Again
    `;
}
function getScoreDescription(score) {
    if (score >= 90) return 'Outstanding';
    if (score >= 75) return 'Very Good';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Average';
    if (score >= 25) return 'Below Average';
    return 'Poor';
}
async function runGPUBenchmark(type) {
    return new Promise((resolve) => {
        // Create canvas for WebGL benchmark
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        
        if (!gl) {
            resolve(20);
            return;
        }
        
        // Simple benchmark - render multiple frames
        const startTime = performance.now();
        let frames = 0;
        const duration = 2000; // 2 seconds
        
        function renderFrame() {
            gl.clearColor(Math.random(), Math.random(), Math.random(), 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            
            frames++;
            
            if (performance.now() - startTime < duration) {
                requestAnimationFrame(renderFrame);
            } else {
                const fps = (frames / duration) * 1000;
                const score = Math.min(100, Math.round(fps / 2));
                resolve(score);
            }
        }
        
        renderFrame();
    });
}

function getCondition(performance) {
    if (performance >= 90) {
        return { label: 'Excellent Condition', class: 'excellent' };
    } else if (performance >= 75) {
        return { label: 'Good Condition', class: 'good' };
    } else if (performance >= 60) {
        return { label: 'Average Condition', class: 'average' };
    } else {
        return { label: 'Poor Condition', class: 'poor' };
    }
}
async function runComprehensiveBenchmark(type) {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        canvas.width = 2048;  // Higher resolution for better accuracy
        canvas.height = 2048;
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        
        if (!gl) {
            resolve({
                totalScore: 20,
                renderingScore: 20,
                memoryScore: 20,
                computeScore: 20,
                shaderScore: 20,
                fillRate: 100,
                frames: 0,
                fps: 0,
                duration: 12,
                phaseScores: []
            });
            return;
        }
        
        // Test phases
        const phases = [
            { name: 'Basic Rendering', duration: 2000, type: 'basic' },
            { name: 'Complex Shaders', duration: 3000, type: 'shader' },
            { name: 'Memory Bandwidth', duration: 3000, type: 'memory' },
            { name: 'Compute Performance', duration: 2000, type: 'compute' },
            { name: 'Fill Rate Test', duration: 2000, type: 'fillrate' }
        ];
        
        let phaseScores = [];
        let totalFrames = 0;
        let totalFPS = 0;
        let totalFillRate = 0;
        let currentPhaseIndex = 0;
        
        // Create shaders for different tests
        const basicVertexShader = createShader(gl, gl.VERTEX_SHADER, `
            attribute vec2 position;
            void main() {
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `);
        
        const basicFragmentShader = createShader(gl, gl.FRAGMENT_SHADER, `
            precision mediump float;
            void main() {
                gl_FragColor = vec4(0.5, 0.5, 0.5, 1.0);
            }
        `);
        
        const complexFragmentShader = createShader(gl, gl.FRAGMENT_SHADER, `
            precision highp float;
            uniform float time;
            
            void main() {
                vec2 uv = gl_FragCoord.xy / 2048.0;
                float noise = sin(uv.x * 50.0 + time) * cos(uv.y * 50.0 - time);
                float noise2 = sin((uv.x + uv.y) * 100.0 + time * 2.0);
                float pattern = sin(uv.x * 200.0 + noise * 10.0) * cos(uv.y * 200.0 + noise2 * 10.0);
                float color = (noise + noise2 + pattern) / 3.0;
                gl_FragColor = vec4(color, color * 0.7, 1.0 - color, 1.0);
            }
        `);
        
        const memoryFragmentShader = createShader(gl, gl.FRAGMENT_SHADER, `
            precision highp float;
            uniform float time;
            uniform sampler2D texture;
            
            void main() {
                vec2 uv = gl_FragCoord.xy / 2048.0;
                float value = 0.0;
                for(int i = 0; i < 10; i++) {
                    value += sin(uv.x * 500.0 + float(i) * 0.5 + time) * cos(uv.y * 500.0 + float(i) * 0.3);
                }
                gl_FragColor = vec4(value, value * 0.5, value * 0.25, 1.0);
            }
        `);
        
        const computeFragmentShader = createShader(gl, gl.FRAGMENT_SHADER, `
            precision highp float;
            uniform float time;
            
            void main() {
                vec2 uv = gl_FragCoord.xy / 2048.0;
                float result = 0.0;
                for(int i = 0; i < 50; i++) {
                    result += sin(uv.x * 1000.0 + float(i) * time) * cos(uv.y * 1000.0 - float(i) * time);
                }
                gl_FragColor = vec4(result, result * 0.5, 1.0 - result, 1.0);
            }
        `);
        
        function createShader(gl, type, source) {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            return shader;
        }
        
        function createProgram(vertexShader, fragmentShader) {
            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            return program;
        }
        
        // Create programs for each phase
        const basicProgram = createProgram(basicVertexShader, basicFragmentShader);
        const complexProgram = createProgram(basicVertexShader, complexFragmentShader);
        const memoryProgram = createProgram(basicVertexShader, memoryFragmentShader);
        const computeProgram = createProgram(basicVertexShader, computeFragmentShader);
        
        // Set up vertex buffer
        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1, -1, 1, -1, -1, 1, 1, 1
        ]), gl.STATIC_DRAW);
        
        function setupVertexAttrib(program) {
            const positionLocation = gl.getAttribLocation(program, 'position');
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
        }
        
        function runPhase(phaseIndex) {
            if (phaseIndex >= phases.length) {
                // Calculate final scores
                const renderingScore = Math.round(phaseScores[0] || 0);
                const shaderScore = Math.round(phaseScores[1] || 0);
                const memoryScore = Math.round(phaseScores[2] || 0);
                const computeScore = Math.round(phaseScores[3] || 0);
                const fillRateScore = Math.round(phaseScores[4] || 0);
                
                // Weighted total score (more accurate)
                const totalScore = Math.round(
                    (renderingScore * 0.25) +
                    (shaderScore * 0.25) +
                    (memoryScore * 0.20) +
                    (computeScore * 0.20) +
                    (fillRateScore * 0.10)
                );
                
                resolve({
                    totalScore: totalScore,
                    renderingScore: renderingScore,
                    shaderScore: shaderScore,
                    memoryScore: memoryScore,
                    computeScore: computeScore,
                    fillRateScore: fillRateScore,
                    fillRate: Math.round(totalFillRate / phases.length),
                    frames: totalFrames,
                    fps: Math.round(totalFPS / phases.length),
                    duration: 12,
                    phaseScores: phaseScores
                });
                return;
            }
            
            const phase = phases[phaseIndex];
            const phaseStartTime = performance.now();
            let phaseFrames = 0;
            let phasePixels = 0;
            
            // Select program based on phase
            let currentProgram;
            switch(phase.type) {
                case 'basic':
                    currentProgram = basicProgram;
                    break;
                case 'shader':
                    currentProgram = complexProgram;
                    break;
                case 'memory':
                    currentProgram = memoryProgram;
                    break;
                case 'compute':
                    currentProgram = computeProgram;
                    break;
                case 'fillrate':
                    currentProgram = basicProgram;
                    break;
                default:
                    currentProgram = basicProgram;
            }
            
            gl.useProgram(currentProgram);
            setupVertexAttrib(currentProgram);
            const timeLocation = gl.getUniformLocation(currentProgram, 'time');
            
            function renderPhase() {
                if (timeLocation) {
                    gl.uniform1f(timeLocation, (performance.now() - phaseStartTime) / 1000);
                }
                
                gl.clearColor(Math.random() * 0.1, Math.random() * 0.1, Math.random() * 0.2, 1.0);
                gl.clear(gl.COLOR_BUFFER_BIT);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                
                phaseFrames++;
                phasePixels += 2048 * 2048;
                totalFrames++;
                
                if (performance.now() - phaseStartTime < phase.duration) {
                    requestAnimationFrame(renderPhase);
                } else {
                    // Calculate phase score
                    const phaseFPS = (phaseFrames / phase.duration) * 1000;
                    const phaseFillRate = Math.round((phasePixels / phase.duration) / 1000000);
                    
                    totalFPS += phaseFPS;
                    totalFillRate += phaseFillRate;
                    
                    // Score calculation based on phase type
                    let phaseScore;
                    switch(phase.type) {
                        case 'basic':
                            phaseScore = Math.min(100, phaseFPS / 2);
                            break;
                        case 'shader':
                            phaseScore = Math.min(100, phaseFPS * 1.5);
                            break;
                        case 'memory':
                            phaseScore = Math.min(100, phaseFillRate / 100);
                            break;
                        case 'compute':
                            phaseScore = Math.min(100, phaseFPS * 1.2);
                            break;
                        case 'fillrate':
                            phaseScore = Math.min(100, phaseFillRate / 50);
                            break;
                        default:
                            phaseScore = Math.min(100, phaseFPS);
                    }
                    
                    phaseScores.push(phaseScore);
                    currentPhaseIndex++;
                    
                    // Small delay between phases
                    setTimeout(() => runPhase(currentPhaseIndex), 500);
                }
            }
            
            renderPhase();
        }
        
        // Start first phase
        runPhase(0);
    });
}

function getBenchmarkAnalysis(benchmarkData, expected, performance) {
    const cappedPerformance = Math.min(100, performance);
    
    if (cappedPerformance >= 90) {
        return `Excellent! Your GPU is performing at ${cappedPerformance.toFixed(1)}% of expected performance. It's in top condition and running optimally.`;
    } else if (cappedPerformance >= 75) {
        return `Good! Your GPU is performing at ${cappedPerformance.toFixed(1)}% of expected performance. Minor optimization possible but overall healthy.`;
    } else if (cappedPerformance >= 60) {
        return `Average. Your GPU is performing at ${cappedPerformance.toFixed(1)}% of expected performance. Consider updating drivers or checking for thermal throttling.`;
    } else {
        return `Poor. Your GPU is performing at ${cappedPerformance.toFixed(1)}% of expected performance. Check for driver issues, thermal problems, or hardware degradation.`;
    }
}

function getExpectedScore(gpuModel) {
    const model = (gpuModel || '').toLowerCase();
    
    const benchmarkDatabase = {
        // NVIDIA
        'rtx 4090': { expected: 100, tier: 'Ultra' },
        'rtx 4080': { expected: 95, tier: 'Ultra' },
        'rtx 4070 ti': { expected: 92, tier: 'Ultra' },
        'rtx 4070': { expected: 90, tier: 'Ultra' },
        'rtx 4060 ti': { expected: 87, tier: 'High' },
        'rtx 4060': { expected: 85, tier: 'High' },
        'rtx 3090': { expected: 97, tier: 'Ultra' },
        'rtx 3080 ti': { expected: 94, tier: 'Ultra' },
        'rtx 3080': { expected: 93, tier: 'Ultra' },
        'rtx 3070 ti': { expected: 89, tier: 'High' },
        'rtx 3070': { expected: 88, tier: 'High' },
        'rtx 3060 ti': { expected: 83, tier: 'High' },
        'rtx 3060': { expected: 82, tier: 'High' },
        'rtx 3050': { expected: 75, tier: 'Mid' },
        'rtx 2080 ti': { expected: 91, tier: 'Ultra' },
        'rtx 2080': { expected: 90, tier: 'High' },
        'rtx 2070 super': { expected: 86, tier: 'High' },
        'rtx 2070': { expected: 85, tier: 'High' },
        'rtx 2060 super': { expected: 82, tier: 'High' },
        'rtx 2060': { expected: 80, tier: 'High' },
        'gtx 1660 ti': { expected: 65, tier: 'Mid' },
        'gtx 1660 super': { expected: 62, tier: 'Mid' },
        'gtx 1660': { expected: 60, tier: 'Mid' },
        'gtx 1650 super': { expected: 58, tier: 'Mid' },
        'gtx 1650': { expected: 55, tier: 'Mid' },
        'gtx 1080 ti': { expected: 87, tier: 'High' },
        'gtx 1080': { expected: 85, tier: 'High' },
        'gtx 1070 ti': { expected: 78, tier: 'Mid' },
        'gtx 1070': { expected: 75, tier: 'Mid' },
        'gtx 1060 6gb': { expected: 68, tier: 'Mid' },
        'gtx 1060': { expected: 65, tier: 'Mid' },
        'gtx 1050 ti': { expected: 55, tier: 'Mid' },
        'gtx 1050': { expected: 50, tier: 'Entry' },
        'mx450': { expected: 40, tier: 'Entry' },
        'mx350': { expected: 35, tier: 'Entry' },
        'mx250': { expected: 25, tier: 'Entry' },
        'mx150': { expected: 20, tier: 'Entry' },
        
        // AMD
        'rx 7900 xtx': { expected: 96, tier: 'Ultra' },
        'rx 7900 xt': { expected: 94, tier: 'Ultra' },
        'rx 6900 xt': { expected: 92, tier: 'Ultra' },
        'rx 6800 xt': { expected: 88, tier: 'High' },
        'rx 6800': { expected: 86, tier: 'High' },
        'rx 6700 xt': { expected: 82, tier: 'High' },
        'rx 6600 xt': { expected: 78, tier: 'High' },
        'rx 6600': { expected: 75, tier: 'Mid' },
        'rx 5700 xt': { expected: 78, tier: 'High' },
        'rx 5700': { expected: 74, tier: 'Mid' },
        'rx 5600 xt': { expected: 70, tier: 'Mid' },
        'rx 580': { expected: 60, tier: 'Mid' },
        'rx 570': { expected: 55, tier: 'Mid' },
        'rx 560': { expected: 45, tier: 'Entry' },
        'rx 550': { expected: 35, tier: 'Entry' },
        
        // Intel
        'iris xe': { expected: 45, tier: 'Entry' },
        'iris plus': { expected: 40, tier: 'Entry' },
        'iris pro': { expected: 38, tier: 'Entry' },
        'uhd 770': { expected: 35, tier: 'Entry' },
        'uhd 750': { expected: 33, tier: 'Entry' },
        'uhd 730': { expected: 32, tier: 'Entry' },
        'uhd 630': { expected: 30, tier: 'Entry' },
        'uhd 620': { expected: 25, tier: 'Entry' },
        'hd 630': { expected: 28, tier: 'Entry' },
        'hd 620': { expected: 22, tier: 'Entry' },
        'hd 520': { expected: 18, tier: 'Entry' },
        'hd 4600': { expected: 20, tier: 'Entry' },
        'hd 4000': { expected: 15, tier: 'Entry' }
    };
    
    for (const [key, value] of Object.entries(benchmarkDatabase)) {
        if (model.includes(key)) {
            return value;
        }
    }
    
    return { expected: 50, tier: 'Mid' };
}

function getCondition(performance) {
    const cappedPerformance = Math.min(100, performance);
    
    if (cappedPerformance >= 90) {
        return { label: 'Excellent Condition', class: 'excellent' };
    } else if (cappedPerformance >= 75) {
        return { label: 'Good Condition', class: 'good' };
    } else if (cappedPerformance >= 60) {
        return { label: 'Average Condition', class: 'average' };
    } else {
        return { label: 'Poor Condition', class: 'poor' };
    }
}

// =========== FPS PREDICTION SYSTEM ===========

function predictFPS(gpuScore, gameScore) {
    const ratio = gpuScore / gameScore;
    
    if (ratio >= 1.5) return 60 + Math.round((ratio - 1.5) * 40);
    if (ratio >= 1.0) return 45 + Math.round((ratio - 1.0) * 15);
    if (ratio >= 0.8) return 30 + Math.round((ratio - 0.8) * 15);
    if (ratio >= 0.5) return 20 + Math.round((ratio - 0.5) * 10);
    return 15;
}

function updateGameFPSDisplay() {
    const igpuScore = systemInfo.igpu.length > 0 ? systemInfo.igpu[0].score : 0;
    const dgpuScore = systemInfo.dgpu.length > 0 ? systemInfo.dgpu[0].score : 0;
    
    gamesDatabase.forEach(game => {
        game.fpsIGPU = predictFPS(igpuScore, game.gpuScore);
        game.fpsDGPU = predictFPS(dgpuScore, game.gpuScore);
    });
}

// Update displayGames function to include FPS
function displayGames(games) {
    const grid = document.getElementById('gamesGrid');
    
    if (games.length === 0) {
        grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">No compatible games found.</p>';
        return;
    }
    
    grid.innerHTML = games.map(game => {
        const compatClass = game.compatibilityLevel > 80 ? 'compatibility-high' : 
                           game.compatibilityLevel > 50 ? 'compatibility-medium' : 'compatibility-low';
        
        const fpsIGPU = game.fpsIGPU || predictFPS(systemInfo.igpu[0]?.score || 0, game.gpuScore);
        const fpsDGPU = game.fpsDGPU || predictFPS(systemInfo.dgpu[0]?.score || 0, game.gpuScore);
        
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
                    <div class="fps-predictions">
                        ${systemInfo.igpu.length > 0 ? `<span class="fps-badge fps-igpu">iGPU: ~${fpsIGPU} FPS</span>` : ''}
                        ${systemInfo.dgpu.length > 0 ? `<span class="fps-badge fps-dgpu">dGPU: ~${fpsDGPU} FPS</span>` : ''}
                    </div>
                    <span class="compatibility-badge ${compatClass}">${game.compatibilityLevel}% Compatible</span>
                </div>
            </div>
        `;
    }).join('');
}

// Update findCompatibleGames to include FPS
function findCompatibleGames() {
    compatibleGames = [];
    
    const cpuScore = systemInfo.cpu.score;
    const ramTotal = systemInfo.ram.total;
    
    let bestGPUScore = 0;
    let hasDedicated = systemInfo.dgpu.length > 0;
    
    if (hasDedicated) {
        bestGPUScore = Math.max(...systemInfo.dgpu.map(g => g.score));
    } else if (systemInfo.igpu.length > 0) {
        bestGPUScore = Math.max(...systemInfo.igpu.map(g => g.score));
    }
    
    updateGameFPSDisplay();
    
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


// =========== UPDATE SYSTEM ===========

let updateAvailable = false;
let updateVersion = null;

// Auto-check on app start
setTimeout(() => {
    if (window.detectX && window.detectX.checkForUpdates) {
        window.detectX.checkForUpdates();
    }
}, 7000); // 7 seconds (after app fully loads)

function handleUpdateButtonClick() {
    if (updateAvailable) {
        document.getElementById('updateModal').style.display = 'flex';
        document.getElementById('updateMessage').textContent = `Version ${updateVersion} is available!`;
        document.getElementById('updateProgress').style.display = 'none';
        document.getElementById('updateActionBtn').style.display = 'block';
        document.getElementById('updateActionBtn').textContent = 'Download Update';
        document.getElementById('updateActionBtn').onclick = downloadUpdate;
    } else {
        if (window.detectX && window.detectX.checkForUpdates) {
            window.detectX.checkForUpdates();
            
            setTimeout(() => {
                if (!updateAvailable) {
                    document.getElementById('updateModal').style.display = 'flex';
                    document.getElementById('updateMessage').textContent = '✅ You are up to date!';
                    document.getElementById('updateProgress').style.display = 'none';
                    document.getElementById('updateActionBtn').style.display = 'none';
                }
            }, 3000);
        }
    }
}
function handleUpdateAction() {
    const btn = document.getElementById('updateActionBtn');
    const text = btn.textContent.trim();
    
    if (text === 'Download Update') {
        downloadUpdate();
    } else if (text === 'Restart Now') {
        installUpdate();
    }
}

function downloadUpdate() {
    document.getElementById('updateProgress').style.display = 'block';
    document.getElementById('updateActionBtn').style.display = 'none';
    document.getElementById('updateMessage').textContent = 'Downloading...';
    
    if (window.detectX && window.detectX.downloadUpdate) {
        window.detectX.downloadUpdate();
    }
}

function installUpdate() {
    if (window.detectX && window.detectX.installUpdate) {
        window.detectX.installUpdate();
    }
}

function closeUpdateModal() {
    document.getElementById('updateModal').style.display = 'none';
}

// Update events
if (window.detectX) {
    window.detectX.onUpdateAvailable((event, data) => {
        
        updateAvailable = true;
        updateVersion = data.version;
        
        // Update button
        const badge = document.getElementById('updateBadge');
        const btnText = document.getElementById('updateBtnText');
        const btn = document.getElementById('updateBtn');
        
        badge.style.display = 'inline-block';
        badge.textContent = '1';
        btnText.textContent = '1 Update';
        btn.classList.add('has-update');
    });
    
    window.detectX.onUpdateNotAvailable(() => {
       
        updateAvailable = false;
        updateVersion = null;
        
        const badge = document.getElementById('updateBadge');
        const btnText = document.getElementById('updateBtnText');
        const btn = document.getElementById('updateBtn');
        
        badge.style.display = 'none';
        btnText.textContent = 'Updates';
        btn.classList.remove('has-update');
    });
    
    window.detectX.onDownloadProgress((event, data) => {
        const percent = data.percent;
        const bar = document.getElementById('updateProgressBar');
        const text = document.getElementById('updateProgressText');
        
        bar.style.width = percent + '%';
        text.textContent = `Downloading... ${percent}%`;
        
        if (percent >= 100) {
            document.getElementById('updateMessage').textContent = 'Download complete! Installing...';
            text.textContent = 'Installing...';
        }
    });
    
    window.detectX.onUpdateDownloaded((event, data) => {
        document.getElementById('updateMessage').textContent = 'Download complete! Installing...';
        
        // Auto install after 2 seconds
        setTimeout(() => {
            installUpdate();
        }, 2000);
    });
    
    window.detectX.onUpdateError((event, data) => {
        console.error('Update error:', data.message);
    });
}

// Show update button
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('updateBtn');
    if (btn) btn.style.display = 'flex';
});
// Get and display app version
document.addEventListener('DOMContentLoaded', async () => {
    const versionDisplay = document.getElementById('versionDisplay');
    
    if (versionDisplay && window.detectX && window.detectX.getVersion) {
        try {
            const version = await window.detectX.getVersion();
            versionDisplay.textContent = `DetectX v${version}`;
        } catch (error) {
            console.log('Could not get version:', error);
            versionDisplay.textContent = 'DetectX';
        }
    }
});

// Ensure openSystemInfo is global
if (typeof window !== 'undefined') {
    window.openSystemInfo = openSystemInfo;
}
