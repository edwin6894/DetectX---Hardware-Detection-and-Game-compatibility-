// ============================================
// DETECTX - COMPREHENSIVE GAME DATABASE
// Organized by GPU Performance Tiers
// © 2026 Edwin Thomas. All Rights Reserved.
// ============================================

const gamesDatabase = [
    // ============================================
    // TIER 0 - INTEGRATED GRAPHICS (Intel HD/UHD)
    // Score: 0-20
    // ============================================
    
    // Indie & Light Games
    { name: "Minecraft", genre: "Sandbox", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/204100/header.jpg", minRequirements: { cpu: "Intel Core i3", gpu: "Intel HD 4000", ram: 4 }, cpuScore: 10, gpuScore: 10, ramScore: 20 },
    { name: "Terraria", genre: "Sandbox", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Stardew Valley", genre: "Simulation", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Undertale", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/391540/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Celeste", genre: "Platformer", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/504230/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Hollow Knight", genre: "Metroidvania", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 }, cpuScore: 10, gpuScore: 10, ramScore: 15 },
    { name: "Dead Cells", genre: "Roguelike", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/588650/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Among Us", genre: "Party", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 5 },
    { name: "Cuphead", genre: "Platformer", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/268910/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 3 }, cpuScore: 10, gpuScore: 10, ramScore: 15 },
    { name: "Papers, Please", genre: "Simulation", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/239030/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "FTL: Faster Than Light", genre: "Strategy", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/212680/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Hotline Miami", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/219150/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Braid", genre: "Puzzle", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/26800/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Limbo", genre: "Puzzle", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/48000/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Super Meat Boy", genre: "Platformer", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/40800/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "The Binding of Isaac", genre: "Roguelike", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/113200/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Don't Starve", genre: "Survival", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/219740/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Factorio", genre: "Strategy", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/427520/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 }, cpuScore: 10, gpuScore: 10, ramScore: 15 },
    { name: "RimWorld", genre: "Strategy", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/294100/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 }, cpuScore: 10, gpuScore: 10, ramScore: 15 },
    { name: "Prison Architect", genre: "Simulation", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/233450/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 }, cpuScore: 10, gpuScore: 10, ramScore: 15 },
    { name: "Game Dev Tycoon", genre: "Simulation", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/239820/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "This War of Mine", genre: "Survival", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/282070/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Darkest Dungeon", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/262060/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Slay the Spire", genre: "Strategy", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/646570/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Into the Breach", genre: "Strategy", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/590380/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Return of the Obra Dinn", genre: "Puzzle", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/653530/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 }, cpuScore: 10, gpuScore: 10, ramScore: 15 },
    { name: "Baba Is You", genre: "Puzzle", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/736260/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Disco Elysium", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/632470/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 4000", ram: 4 }, cpuScore: 10, gpuScore: 10, ramScore: 15 },
    { name: "Hades", genre: "Roguelike", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg", minRequirements: { cpu: "Intel Dual Core 2.4GHz", gpu: "Intel HD 4000", ram: 4 }, cpuScore: 10, gpuScore: 10, ramScore: 20 },
    { name: "Ori and the Blind Forest", genre: "Platformer", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/261570/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 }, cpuScore: 10, gpuScore: 10, ramScore: 15 },
    { name: "Bastion", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/107100/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Transistor", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/237930/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 }, cpuScore: 10, gpuScore: 10, ramScore: 15 },
    { name: "Pyre", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/462770/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 }, cpuScore: 10, gpuScore: 10, ramScore: 15 },
    { name: "Mark of the Ninja", genre: "Stealth", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/214560/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Invisible, Inc.", genre: "Strategy", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/243970/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Shadowrun Returns", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/234650/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Wasteland 2", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/240760/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 }, cpuScore: 10, gpuScore: 10, ramScore: 15 },
    { name: "Pillars of Eternity", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/291650/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 }, cpuScore: 10, gpuScore: 10, ramScore: 15 },
    { name: "Tyranny", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/362960/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 }, cpuScore: 10, gpuScore: 10, ramScore: 15 },
    { name: "Torchlight II", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/200710/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Path of Exile", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/238960/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 }, cpuScore: 15, gpuScore: 15, ramScore: 20 },
    { name: "Grim Dawn", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/219990/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Titan Quest", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/475150/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Victor Vran", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/345180/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 }, cpuScore: 10, gpuScore: 10, ramScore: 15 },
    { name: "The Incredible Adventures of Van Helsing", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/215530/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Book of Demons", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/449960/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    
    // Classic games that work on iGPU
    { name: "Half-Life 2", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/220/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Portal", genre: "Puzzle", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/400/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Portal 2", genre: "Puzzle", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/620/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Left 4 Dead 2", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/550/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Counter-Strike 1.6", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/10/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 5 },
    { name: "Team Fortress 2", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/440/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Garry's Mod", genre: "Sandbox", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/4000/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Age of Empires II", genre: "Strategy", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/813780/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "StarCraft", genre: "Strategy", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/228180/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Warcraft III", genre: "Strategy", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1266820/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Diablo II", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1266820/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "RollerCoaster Tycoon 2", genre: "Simulation", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/285330/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "SimCity 4", genre: "Simulation", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/24780/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "The Sims 2", genre: "Simulation", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/331870/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Grand Theft Auto: San Andreas", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/12120/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Grand Theft Auto: Vice City", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/12110/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Max Payne", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/12140/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Max Payne 2", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/12150/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Deus Ex", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/6910/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "System Shock 2", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/238210/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Thief: Deadly Shadows", genre: "Stealth", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/6980/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Beyond Good & Evil", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/15130/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Psychonauts", genre: "Platformer", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/3830/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Jade Empire", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/7110/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Star Wars: Knights of the Old Republic", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/32370/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Fable: The Lost Chapters", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/204030/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "The Elder Scrolls III: Morrowind", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/22320/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Fallout", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/38400/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Fallout 2", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/38410/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Baldur's Gate", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/228280/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Planescape: Torment", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/466300/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Icewind Dale", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/321800/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Neverwinter Nights", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/704450/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    
    // ============================================
    // TIER 1 - LOW-END GPUS (GT 710, GT 1030, MX150)
    // Score: 20-35
    // ============================================
    
    { name: "League of Legends", genre: "MOBA", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/20590/header.jpg", minRequirements: { cpu: "Intel Core i3", gpu: "NVIDIA GT 710", ram: 2 }, cpuScore: 10, gpuScore: 10, ramScore: 15 },
    { name: "Dota 2", genre: "MOBA", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg", minRequirements: { cpu: "Intel Core i3", gpu: "NVIDIA GT 710", ram: 4 }, cpuScore: 10, gpuScore: 10, ramScore: 20 },
    { name: "Valorant", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2161440/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 }, cpuScore: 10, gpuScore: 10, ramScore: 20 },
    { name: "CS:GO", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GT 710", ram: 2 }, cpuScore: 10, gpuScore: 10, ramScore: 15 },
    { name: "Fortnite", genre: "Battle Royale", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2775840/header.jpg", minRequirements: { cpu: "Intel Core i3", gpu: "Intel HD 4000", ram: 4 }, cpuScore: 15, gpuScore: 15, ramScore: 20 },
    { name: "Rocket League", genre: "Sports", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GT 710", ram: 4 }, cpuScore: 10, gpuScore: 10, ramScore: 20 },
    { name: "Minecraft", genre: "Sandbox", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/204100/header.jpg", minRequirements: { cpu: "Intel Core i3", gpu: "Intel HD 4000", ram: 4 }, cpuScore: 10, gpuScore: 10, ramScore: 20 },
    { name: "Roblox", genre: "Sandbox", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2547860/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "World of Warcraft", genre: "MMORPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1250/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GT 710", ram: 4 }, cpuScore: 15, gpuScore: 15, ramScore: 20 },
    { name: "Old School RuneScape", genre: "MMORPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1343370/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "MapleStory", genre: "MMORPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/216150/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Albion Online", genre: "MMORPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/761890/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 }, cpuScore: 10, gpuScore: 10, ramScore: 15 },
    { name: "EVE Online", genre: "MMORPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/8500/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 }, cpuScore: 10, gpuScore: 10, ramScore: 15 },
    { name: "Guild Wars 2", genre: "MMORPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1284210/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 }, cpuScore: 15, gpuScore: 15, ramScore: 20 },
    { name: "Star Wars: The Old Republic", genre: "MMORPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1286830/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 }, cpuScore: 10, gpuScore: 10, ramScore: 15 },
    { name: "The Elder Scrolls Online", genre: "MMORPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/306130/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GT 710", ram: 4 }, cpuScore: 15, gpuScore: 15, ramScore: 20 },
    { name: "Warframe", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/230410/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 15, gpuScore: 15, ramScore: 15 },
    { name: "Paladins", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/444090/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 }, cpuScore: 15, gpuScore: 15, ramScore: 20 },
    { name: "Smite", genre: "MOBA", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/386360/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 }, cpuScore: 15, gpuScore: 15, ramScore: 20 },
    { name: "Brawlhalla", genre: "Fighting", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/291550/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Skullgirls", genre: "Fighting", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/245170/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Guilty Gear XX Accent Core Plus R", genre: "Fighting", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/348550/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "BlazBlue: Calamity Trigger", genre: "Fighting", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/263300/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Melty Blood: Actress Again", genre: "Fighting", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/411370/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Under Night In-Birth", genre: "Fighting", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/801630/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Them's Fightin' Herds", genre: "Fighting", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/574980/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Lethal League Blaze", genre: "Fighting", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/553280/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    { name: "Rivals of Aether", genre: "Fighting", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/383980/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 }, cpuScore: 5, gpuScore: 5, ramScore: 10 },
    
    // ============================================
    // TIER 2 - MID-LOW GPUS (GTX 1050, GTX 1050 Ti, MX250)
    // Score: 35-50
    // ============================================
    
    { name: "GTA V", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg", minRequirements: { cpu: "Intel Core i5-3470", gpu: "NVIDIA GTX 660", ram: 8 }, cpuScore: 25, gpuScore: 25, ramScore: 30 },
    { name: "The Witcher 3", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg", minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 660", ram: 6 }, cpuScore: 40, gpuScore: 35, ramScore: 40 },
    { name: "Skyrim", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/489830/header.jpg", minRequirements: { cpu: "Intel Dual Core", gpu: "NVIDIA GTX 260", ram: 4 }, cpuScore: 15, gpuScore: 15, ramScore: 20 },
    { name: "Fallout 4", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/377160/header.jpg", minRequirements: { cpu: "Intel Core i5-2300", gpu: "NVIDIA GTX 550 Ti", ram: 8 }, cpuScore: 30, gpuScore: 30, ramScore: 40 },
    { name: "Dark Souls III", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg", minRequirements: { cpu: "Intel Core i3-2100", gpu: "NVIDIA GTX 750 Ti", ram: 4 }, cpuScore: 35, gpuScore: 35, ramScore: 30 },
    { name: "Sekiro: Shadows Die Twice", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/header.jpg", minRequirements: { cpu: "Intel Core i3-2100", gpu: "NVIDIA GTX 760", ram: 4 }, cpuScore: 40, gpuScore: 40, ramScore: 30 },
    { name: "Resident Evil 2 Remake", genre: "Horror", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/883710/header.jpg", minRequirements: { cpu: "Intel Core i5-4460", gpu: "NVIDIA GTX 960", ram: 8 }, cpuScore: 45, gpuScore: 45, ramScore: 40 },
    { name: "Devil May Cry 5", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/601150/header.jpg", minRequirements: { cpu: "Intel Core i5-4460", gpu: "NVIDIA GTX 760", ram: 8 }, cpuScore: 40, gpuScore: 40, ramScore: 40 },
    { name: "Monster Hunter: World", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/582010/header.jpg", minRequirements: { cpu: "Intel Core i5-4460", gpu: "NVIDIA GTX 760", ram: 8 }, cpuScore: 45, gpuScore: 45, ramScore: 40 },
    { name: "Destiny 2", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/header.jpg", minRequirements: { cpu: "Intel Core i3-3250", gpu: "NVIDIA GTX 660", ram: 6 }, cpuScore: 35, gpuScore: 40, ramScore: 30 },
    { name: "Apex Legends", genre: "Battle Royale", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg", minRequirements: { cpu: "Intel Core i3-6300", gpu: "NVIDIA GT 640", ram: 6 }, cpuScore: 30, gpuScore: 35, ramScore: 30 },
    { name: "Rainbow Six Siege", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/359550/header.jpg", minRequirements: { cpu: "Intel Core i3-560", gpu: "NVIDIA GTX 460", ram: 6 }, cpuScore: 25, gpuScore: 25, ramScore: 30 },
    { name: "Overwatch 2", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2357570/header.jpg", minRequirements: { cpu: "Intel Core i3-560", gpu: "Intel HD 4400", ram: 6 }, cpuScore: 25, gpuScore: 25, ramScore: 30 },
    { name: "PUBG", genre: "Battle Royale", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg", minRequirements: { cpu: "Intel Core i5-4430", gpu: "NVIDIA GTX 960", ram: 8 }, cpuScore: 40, gpuScore: 45, ramScore: 50 },
    { name: "Borderlands 3", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/397540/header.jpg", minRequirements: { cpu: "Intel Core i5-3570", gpu: "NVIDIA GTX 680", ram: 6 }, cpuScore: 40, gpuScore: 40, ramScore: 30 },
    { name: "Far Cry 5", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/552520/header.jpg", minRequirements: { cpu: "Intel Core i5-2400", gpu: "NVIDIA GTX 670", ram: 8 }, cpuScore: 40, gpuScore: 40, ramScore: 40 },
    { name: "Assassin's Creed Origins", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/582160/header.jpg", minRequirements: { cpu: "Intel Core i5-2400", gpu: "NVIDIA GTX 660", ram: 6 }, cpuScore: 40, gpuScore: 40, ramScore: 30 },
    { name: "Watch Dogs 2", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/447040/header.jpg", minRequirements: { cpu: "Intel Core i5-2400S", gpu: "NVIDIA GTX 660", ram: 6 }, cpuScore: 40, gpuScore: 40, ramScore: 30 },
    { name: "For Honor", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/304390/header.jpg", minRequirements: { cpu: "Intel Core i3-550", gpu: "NVIDIA GTX 660", ram: 4 }, cpuScore: 35, gpuScore: 35, ramScore: 30 },
    { name: "Mortal Kombat X", genre: "Fighting", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/307780/header.jpg", minRequirements: { cpu: "Intel Core i5-750", gpu: "NVIDIA GTX 660", ram: 4 }, cpuScore: 35, gpuScore: 35, ramScore: 30 },
    { name: "Street Fighter V", genre: "Fighting", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/310950/header.jpg", minRequirements: { cpu: "Intel Core i3-4160", gpu: "NVIDIA GTX 480", ram: 6 }, cpuScore: 35, gpuScore: 35, ramScore: 30 },
    { name: "Tekken 7", genre: "Fighting", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/389730/header.jpg", minRequirements: { cpu: "Intel Core i3-4160", gpu: "NVIDIA GTX 660", ram: 6 }, cpuScore: 35, gpuScore: 35, ramScore: 30 },
    { name: "Dragon Ball FighterZ", genre: "Fighting", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/678950/header.jpg", minRequirements: { cpu: "Intel Core i5-3470", gpu: "NVIDIA GTX 650 Ti", ram: 4 }, cpuScore: 30, gpuScore: 30, ramScore: 30 },
    { name: "Soulcalibur VI", genre: "Fighting", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/544750/header.jpg", minRequirements: { cpu: "Intel Core i3-4160", gpu: "NVIDIA GTX 660", ram: 6 }, cpuScore: 35, gpuScore: 35, ramScore: 30 },
    { name: "Nier: Automata", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/524220/header.jpg", minRequirements: { cpu: "Intel Core i3-2100", gpu: "NVIDIA GTX 770", ram: 4 }, cpuScore: 40, gpuScore: 40, ramScore: 30 },
    { name: "Metal Gear Solid V", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/287700/header.jpg", minRequirements: { cpu: "Intel Core i5-4460", gpu: "NVIDIA GTX 650", ram: 4 }, cpuScore: 35, gpuScore: 35, ramScore: 30 },
    { name: "Batman: Arkham Knight", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/208650/header.jpg", minRequirements: { cpu: "Intel Core i5-750", gpu: "NVIDIA GTX 660", ram: 6 }, cpuScore: 35, gpuScore: 35, ramScore: 30 },
    { name: "Mad Max", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/234140/header.jpg", minRequirements: { cpu: "Intel Core i5-650", gpu: "NVIDIA GTX 660", ram: 6 }, cpuScore: 35, gpuScore: 35, ramScore: 30 },
    { name: "Dying Light", genre: "Horror", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/239140/header.jpg", minRequirements: { cpu: "Intel Core i5-2500", gpu: "NVIDIA GTX 560", ram: 4 }, cpuScore: 35, gpuScore: 35, ramScore: 30 },
    { name: "Alien: Isolation", genre: "Horror", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/214490/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo E8500", gpu: "NVIDIA GT 430", ram: 4 }, cpuScore: 25, gpuScore: 25, ramScore: 30 },
    { name: "Outlast", genre: "Horror", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/238320/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GTX 260", ram: 2 }, cpuScore: 20, gpuScore: 20, ramScore: 20 },
    { name: "Amnesia: The Dark Descent", genre: "Horror", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/57300/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GT 430", ram: 2 }, cpuScore: 20, gpuScore: 20, ramScore: 20 },
    { name: "Layers of Fear", genre: "Horror", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/391720/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GTX 460", ram: 4 }, cpuScore: 25, gpuScore: 25, ramScore: 30 },
    { name: "SOMA", genre: "Horror", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/282140/header.jpg", minRequirements: { cpu: "Intel Core i3", gpu: "NVIDIA GTX 460", ram: 4 }, cpuScore: 25, gpuScore: 25, ramScore: 30 },
    { name: "The Evil Within", genre: "Horror", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/268050/header.jpg", minRequirements: { cpu: "Intel Core i5-2400", gpu: "NVIDIA GTX 460", ram: 4 }, cpuScore: 30, gpuScore: 30, ramScore: 30 },
    { name: "Dead Space 2", genre: "Horror", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/47780/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GT 430", ram: 2 }, cpuScore: 20, gpuScore: 20, ramScore: 20 },
    { name: "Dead Space 3", genre: "Horror", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1238060/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GTX 260", ram: 2 }, cpuScore: 20, gpuScore: 20, ramScore: 20 },
    { name: "F.E.A.R.", genre: "Horror", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/21090/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "NVIDIA GT 430", ram: 1 }, cpuScore: 15, gpuScore: 15, ramScore: 15 },
    { name: "F.E.A.R. 2", genre: "Horror", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/16450/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GTX 260", ram: 2 }, cpuScore: 20, gpuScore: 20, ramScore: 20 },
    { name: "Condemned: Criminal Origins", genre: "Horror", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/4720/header.jpg", minRequirements: { cpu: "Intel Pentium 4", gpu: "NVIDIA GT 430", ram: 1 }, cpuScore: 15, gpuScore: 15, ramScore: 15 },
    { name: "Crysis", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/17300/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GTX 260", ram: 2 }, cpuScore: 25, gpuScore: 25, ramScore: 20 },
    { name: "Crysis 2", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/108800/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GTX 260", ram: 2 }, cpuScore: 25, gpuScore: 25, ramScore: 20 },
    { name: "Crysis 3", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1282690/header.jpg", minRequirements: { cpu: "Intel Core i3-530", gpu: "NVIDIA GTX 560", ram: 4 }, cpuScore: 35, gpuScore: 35, ramScore: 30 },
    { name: "Far Cry 3", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/220240/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GTX 260", ram: 2 }, cpuScore: 25, gpuScore: 25, ramScore: 20 },
    { name: "Battlefield 4", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1238860/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GTX 260", ram: 4 }, cpuScore: 30, gpuScore: 30, ramScore: 30 },
    { name: "Call of Duty: Modern Warfare 2", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/10180/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GTX 260", ram: 2 }, cpuScore: 25, gpuScore: 25, ramScore: 20 },
    { name: "Call of Duty: Black Ops", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/42700/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GTX 260", ram: 2 }, cpuScore: 25, gpuScore: 25, ramScore: 20 },
    { name: "Bioshock", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/7670/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GTX 260", ram: 2 }, cpuScore: 25, gpuScore: 25, ramScore: 20 },
    { name: "Bioshock 2", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/8850/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GTX 260", ram: 2 }, cpuScore: 25, gpuScore: 25, ramScore: 20 },
    { name: "Bioshock Infinite", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/8870/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GTX 260", ram: 2 }, cpuScore: 30, gpuScore: 30, ramScore: 20 },
    { name: "Borderlands 2", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/49520/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GTX 260", ram: 2 }, cpuScore: 25, gpuScore: 25, ramScore: 20 },
    { name: "Left 4 Dead", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/500/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GTX 260", ram: 1 }, cpuScore: 20, gpuScore: 20, ramScore: 15 },
    { name: "Killing Floor", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1250/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GTX 260", ram: 2 }, cpuScore: 20, gpuScore: 20, ramScore: 20 },
    { name: "Payday 2", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/218620/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GTX 260", ram: 4 }, cpuScore: 25, gpuScore: 25, ramScore: 30 },
    { name: "Insurgency", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/222880/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GTX 260", ram: 4 }, cpuScore: 25, gpuScore: 25, ramScore: 30 },
    { name: "Red Orchestra 2", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/35450/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GTX 260", ram: 2 }, cpuScore: 25, gpuScore: 25, ramScore: 20 },
    { name: "Rising Storm 2: Vietnam", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/418460/header.jpg", minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GTX 460", ram: 4 }, cpuScore: 30, gpuScore: 30, ramScore: 30 },
    
    // ============================================
    // TIER 3 - MID-RANGE GPUS (GTX 1060, GTX 1660, RX 580)
    // Score: 50-70
    // ============================================
    
    { name: "Cyberpunk 2077", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg", minRequirements: { cpu: "Intel Core i5-3570K", gpu: "NVIDIA GTX 780", ram: 8 }, cpuScore: 65, gpuScore: 70, ramScore: 50 },
    { name: "Red Dead Redemption 2", genre: "Action Adventure", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg", minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 770", ram: 8 }, cpuScore: 55, gpuScore: 60, ramScore: 50 },
    { name: "Elden Ring", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg", minRequirements: { cpu: "Intel Core i5-8400", gpu: "NVIDIA GTX 1060", ram: 12 }, cpuScore: 60, gpuScore: 60, ramScore: 60 },
    { name: "God of War", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg", minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 960", ram: 8 }, cpuScore: 50, gpuScore: 50, ramScore: 50 },
    { name: "Horizon Zero Dawn", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg", minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 780", ram: 8 }, cpuScore: 55, gpuScore: 55, ramScore: 50 },
    { name: "Forza Horizon 5", genre: "Racing", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg", minRequirements: { cpu: "Intel Core i5-4460", gpu: "NVIDIA GTX 970", ram: 8 }, cpuScore: 55, gpuScore: 60, ramScore: 50 },
    { name: "Assassin's Creed Valhalla", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg", minRequirements: { cpu: "Intel Core i5-4460", gpu: "NVIDIA GTX 960", ram: 8 }, cpuScore: 60, gpuScore: 65, ramScore: 60 },
    { name: "Hogwarts Legacy", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg", minRequirements: { cpu: "Intel Core i5-6600", gpu: "NVIDIA GTX 960", ram: 16 }, cpuScore: 70, gpuScore: 75, ramScore: 70 },
    { name: "Baldur's Gate 3", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg", minRequirements: { cpu: "Intel Core i5-4690", gpu: "NVIDIA GTX 970", ram: 8 }, cpuScore: 70, gpuScore: 70, ramScore: 60 },
    { name: "Resident Evil 4 Remake", genre: "Horror", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg", minRequirements: { cpu: "Intel Core i5-7500", gpu: "NVIDIA GTX 1050 Ti", ram: 8 }, cpuScore: 65, gpuScore: 65, ramScore: 60 },
    { name: "Star Wars Jedi: Survivor", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1774580/header.jpg", minRequirements: { cpu: "Intel Core i7-7700", gpu: "NVIDIA GTX 1070", ram: 8 }, cpuScore: 70, gpuScore: 70, ramScore: 60 },
    { name: "Dead Space Remake", genre: "Horror", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1693980/header.jpg", minRequirements: { cpu: "Intel Core i5-8600", gpu: "NVIDIA GTX 1070", ram: 16 }, cpuScore: 70, gpuScore: 72, ramScore: 70 },
    { name: "The Last of Us Part I", genre: "Horror", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/header.jpg", minRequirements: { cpu: "Intel Core i5-8400", gpu: "NVIDIA GTX 1070", ram: 16 }, cpuScore: 72, gpuScore: 75, ramScore: 70 },
    { name: "Spider-Man Remastered", genre: "Open World", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg", minRequirements: { cpu: "Intel Core i5-4670", gpu: "NVIDIA GTX 1060", ram: 16 }, cpuScore: 70, gpuScore: 72, ramScore: 70 },
    { name: "Ghost of Tsushima", genre: "Open World", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/header.jpg", minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 960", ram: 8 }, cpuScore: 70, gpuScore: 72, ramScore: 60 },
    { name: "Days Gone", genre: "Open World", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1259420/header.jpg", minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 960", ram: 8 }, cpuScore: 60, gpuScore: 60, ramScore: 50 },
    { name: "Death Stranding", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1190460/header.jpg", minRequirements: { cpu: "Intel Core i5-3470", gpu: "NVIDIA GTX 1050", ram: 8 }, cpuScore: 60, gpuScore: 60, ramScore: 50 },
    { name: "Control", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/870780/header.jpg", minRequirements: { cpu: "Intel Core i5-4690", gpu: "NVIDIA GTX 780", ram: 8 }, cpuScore: 60, gpuScore: 60, ramScore: 50 },
    { name: "Metro Exodus", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/412020/header.jpg", minRequirements: { cpu: "Intel Core i5-4440", gpu: "NVIDIA GTX 670", ram: 8 }, cpuScore: 60, gpuScore: 60, ramScore: 50 },
    { name: "Shadow of the Tomb Raider", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/750920/header.jpg", minRequirements: { cpu: "Intel Core i3-3220", gpu: "NVIDIA GTX 660", ram: 8 }, cpuScore: 50, gpuScore: 50, ramScore: 50 },
    { name: "Rise of the Tomb Raider", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/391220/header.jpg", minRequirements: { cpu: "Intel Core i3-2100", gpu: "NVIDIA GTX 650", ram: 6 }, cpuScore: 45, gpuScore: 45, ramScore: 40 },
    { name: "Doom Eternal", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/782330/header.jpg", minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 970", ram: 8 }, cpuScore: 50, gpuScore: 55, ramScore: 40 },
    { name: "Wolfenstein II", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/612880/header.jpg", minRequirements: { cpu: "Intel Core i5-2400", gpu: "NVIDIA GTX 770", ram: 8 }, cpuScore: 50, gpuScore: 50, ramScore: 40 },
    { name: "Battlefield V", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1238810/header.jpg", minRequirements: { cpu: "Intel Core i5-6600K", gpu: "NVIDIA GTX 660", ram: 8 }, cpuScore: 50, gpuScore: 50, ramScore: 40 },
    { name: "Call of Duty: Modern Warfare", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2000950/header.jpg", minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 670", ram: 8 }, cpuScore: 50, gpuScore: 50, ramScore: 40 },
    { name: "Star Wars Battlefront II", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1237950/header.jpg", minRequirements: { cpu: "Intel Core i5-6600K", gpu: "NVIDIA GTX 660", ram: 8 }, cpuScore: 50, gpuScore: 50, ramScore: 40 },
    { name: "Titanfall 2", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1237970/header.jpg", minRequirements: { cpu: "Intel Core i3-3600t", gpu: "NVIDIA GTX 660", ram: 8 }, cpuScore: 50, gpuScore: 50, ramScore: 40 },
    { name: "Gears 5", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1097840/header.jpg", minRequirements: { cpu: "Intel Core i5-3470", gpu: "NVIDIA GTX 760", ram: 8 }, cpuScore: 50, gpuScore: 50, ramScore: 40 },
    { name: "Halo: The Master Chief Collection", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/976730/header.jpg", minRequirements: { cpu: "Intel Core i5-3450", gpu: "NVIDIA GTX 770", ram: 8 }, cpuScore: 50, gpuScore: 50, ramScore: 40 },
    { name: "Dishonored 2", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/403640/header.jpg", minRequirements: { cpu: "Intel Core i5-2400", gpu: "NVIDIA GTX 660", ram: 8 }, cpuScore: 50, gpuScore: 50, ramScore: 40 },
    { name: "Prey", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/480490/header.jpg", minRequirements: { cpu: "Intel Core i5-2400", gpu: "NVIDIA GTX 660", ram: 8 }, cpuScore: 50, gpuScore: 50, ramScore: 40 },
    { name: "Deus Ex: Mankind Divided", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/337000/header.jpg", minRequirements: { cpu: "Intel Core i3-2100", gpu: "NVIDIA GTX 660", ram: 8 }, cpuScore: 50, gpuScore: 50, ramScore: 40 },
    { name: "Mass Effect: Andromeda", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1238000/header.jpg", minRequirements: { cpu: "Intel Core i5-3570", gpu: "NVIDIA GTX 660", ram: 8 }, cpuScore: 50, gpuScore: 50, ramScore: 40 },
    { name: "Final Fantasy XV", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/637650/header.jpg", minRequirements: { cpu: "Intel Core i5-2500", gpu: "NVIDIA GTX 760", ram: 8 }, cpuScore: 50, gpuScore: 50, ramScore: 40 },
    { name: "Dragon Age: Inquisition", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1222690/header.jpg", minRequirements: { cpu: "Intel Core i5-2500", gpu: "NVIDIA GTX 660", ram: 4 }, cpuScore: 45, gpuScore: 45, ramScore: 30 },
    { name: "Kingdom Come: Deliverance", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/379430/header.jpg", minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 660", ram: 8 }, cpuScore: 50, gpuScore: 50, ramScore: 40 },
    { name: "Vampyr", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/427290/header.jpg", minRequirements: { cpu: "Intel Core i3-2130", gpu: "NVIDIA GTX 660", ram: 8 }, cpuScore: 50, gpuScore: 50, ramScore: 40 },
    { name: "GreedFall", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/606880/header.jpg", minRequirements: { cpu: "Intel Core i5-3450", gpu: "NVIDIA GTX 660", ram: 8 }, cpuScore: 50, gpuScore: 50, ramScore: 40 },
    { name: "The Outer Worlds", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/578650/header.jpg", minRequirements: { cpu: "Intel Core i3-3225", gpu: "NVIDIA GTX 650 Ti", ram: 4 }, cpuScore: 45, gpuScore: 45, ramScore: 30 },
    { name: "Wasteland 3", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/719040/header.jpg", minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 660", ram: 8 }, cpuScore: 50, gpuScore: 50, ramScore: 40 },
    
    // ============================================
    // TIER 4 - HIGH-END GPUS (RTX 3060, RTX 3070, RX 6800)
    // Score: 70-85
    // ============================================
    
    { name: "Starfield", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg", minRequirements: { cpu: "AMD Ryzen 5 2600X", gpu: "AMD RX 5700", ram: 16 }, cpuScore: 75, gpuScore: 80, ramScore: 70 },
    { name: "Call of Duty: Modern Warfare III", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2519060/header.jpg", minRequirements: { cpu: "Intel Core i5-6600", gpu: "NVIDIA GTX 960", ram: 8 }, cpuScore: 70, gpuScore: 75, ramScore: 60 },
    { name: "Alan Wake 2", genre: "Horror", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2324650/header.jpg", minRequirements: { cpu: "Intel Core i5-7600K", gpu: "NVIDIA GTX 1070", ram: 16 }, cpuScore: 75, gpuScore: 78, ramScore: 70 },
    { name: "Black Myth: Wukong", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/header.jpg", minRequirements: { cpu: "Intel Core i5-8400", gpu: "NVIDIA GTX 1060", ram: 16 }, cpuScore: 70, gpuScore: 70, ramScore: 70 },
    { name: "Silent Hill 2 Remake", genre: "Horror", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2124490/header.jpg", minRequirements: { cpu: "Intel Core i5-8400", gpu: "NVIDIA GTX 1070", ram: 16 }, cpuScore: 72, gpuScore: 75, ramScore: 70 },
    { name: "S.T.A.L.K.E.R. 2", genre: "FPS", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1643320/header.jpg", minRequirements: { cpu: "Intel Core i5-7600K", gpu: "NVIDIA GTX 1060", ram: 16 }, cpuScore: 75, gpuScore: 78, ramScore: 70 },
    { name: "GTA VI", genre: "Action Adventure", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg", minRequirements: { cpu: "Intel Core i7-8700K", gpu: "NVIDIA RTX 2070", ram: 16 }, cpuScore: 80, gpuScore: 85, ramScore: 80 },
    { name: "Assassin's Creed Shadows", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg", minRequirements: { cpu: "Intel Core i7-6700", gpu: "NVIDIA GTX 1070", ram: 16 }, cpuScore: 75, gpuScore: 75, ramScore: 70 },
    { name: "Star Wars Outlaws", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2842040/header.jpg", minRequirements: { cpu: "Intel Core i7-8700K", gpu: "NVIDIA RTX 2060", ram: 16 }, cpuScore: 78, gpuScore: 80, ramScore: 75 },
    { name: "Monster Hunter Wilds", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2246340/header.jpg", minRequirements: { cpu: "Intel Core i5-10600", gpu: "NVIDIA GTX 1660 Super", ram: 16 }, cpuScore: 72, gpuScore: 75, ramScore: 70 },
    { name: "Hellblade II", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2461850/header.jpg", minRequirements: { cpu: "Intel Core i5-8400", gpu: "NVIDIA GTX 1070", ram: 16 }, cpuScore: 72, gpuScore: 75, ramScore: 70 },
    { name: "Dragon Age: The Veilguard", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1845910/header.jpg", minRequirements: { cpu: "Intel Core i5-8400", gpu: "NVIDIA GTX 1060", ram: 16 }, cpuScore: 70, gpuScore: 72, ramScore: 70 },
    { name: "Avowed", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2457220/header.jpg", minRequirements: { cpu: "Intel Core i5-8400", gpu: "NVIDIA GTX 1070", ram: 16 }, cpuScore: 72, gpuScore: 75, ramScore: 70 },
    { name: "Marvel's Wolverine", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg", minRequirements: { cpu: "Intel Core i7-8700K", gpu: "NVIDIA RTX 2060", ram: 16 }, cpuScore: 78, gpuScore: 80, ramScore: 75 },
    { name: "Death Stranding 2", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2625460/header.jpg", minRequirements: { cpu: "Intel Core i5-8400", gpu: "NVIDIA GTX 1060", ram: 16 }, cpuScore: 70, gpuScore: 72, ramScore: 70 },
    { name: "Final Fantasy XVI", genre: "RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2515020/header.jpg", minRequirements: { cpu: "Intel Core i5-8400", gpu: "NVIDIA GTX 1070", ram: 16 }, cpuScore: 72, gpuScore: 75, ramScore: 70 },
    
    // ============================================
    // TIER 5 - ULTRA GPUS (RTX 4080, RTX 4090, RX 7900)
    // Score: 85-100
    // ============================================
    
    { name: "Cyberpunk 2077: Phantom Liberty", genre: "Action RPG", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg", minRequirements: { cpu: "Intel Core i7-4790", gpu: "NVIDIA RTX 2060", ram: 12 }, cpuScore: 85, gpuScore: 90, ramScore: 80 },
    { name: "Red Dead Redemption 2 (Ultra)", genre: "Action", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg", minRequirements: { cpu: "Intel Core i7-4770K", gpu: "NVIDIA GTX 1060", ram: 12 }, cpuScore: 80, gpuScore: 85, ramScore: 70 },
    { name: "Microsoft Flight Simulator", genre: "Simulation", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1250410/header.jpg", minRequirements: { cpu: "Intel Core i5-4460", gpu: "NVIDIA GTX 770", ram: 8 }, cpuScore: 85, gpuScore: 90, ramScore: 70 },

    // ========== WWE GAMES ==========
{
    name: "WWE 2K24",
    genre: "Wrestling",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2315690/header.jpg",
    minRequirements: { cpu: "Intel Core i5-3550", gpu: "NVIDIA GTX 670", ram: 8 },
    cpuScore: 45, gpuScore: 50, ramScore: 50
},
{
    name: "WWE 2K23",
    genre: "Wrestling",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1942660/header.jpg",
    minRequirements: { cpu: "Intel Core i5-3550", gpu: "NVIDIA GTX 670", ram: 8 },
    cpuScore: 45, gpuScore: 50, ramScore: 50
},
{
    name: "WWE 2K22",
    genre: "Wrestling",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1255630/header.jpg",
    minRequirements: { cpu: "Intel Core i5-3550", gpu: "NVIDIA GTX 670", ram: 8 },
    cpuScore: 40, gpuScore: 45, ramScore: 50
},
{
    name: "WWE 2K19",
    genre: "Wrestling",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/817130/header.jpg",
    minRequirements: { cpu: "Intel Core i5-3550", gpu: "NVIDIA GTX 670", ram: 8 },
    cpuScore: 35, gpuScore: 40, ramScore: 40
},
{
    name: "WWE 2K18",
    genre: "Wrestling",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/664430/header.jpg",
    minRequirements: { cpu: "Intel Core i5-3550", gpu: "NVIDIA GTX 660", ram: 4 },
    cpuScore: 30, gpuScore: 35, ramScore: 30
},

// ========== SPORTS GAMES ==========
{
    name: "EA Sports FC 25",
    genre: "Football",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2669320/header.jpg",
    minRequirements: { cpu: "Intel Core i5-6600K", gpu: "NVIDIA GTX 1050 Ti", ram: 8 },
    cpuScore: 55, gpuScore: 55, ramScore: 50
},
{
    name: "EA Sports FC 24",
    genre: "Football",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/header.jpg",
    minRequirements: { cpu: "Intel Core i5-6600K", gpu: "NVIDIA GTX 1050 Ti", ram: 8 },
    cpuScore: 55, gpuScore: 55, ramScore: 50
},
{
    name: "FIFA 23",
    genre: "Football",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1811260/header.jpg",
    minRequirements: { cpu: "Intel Core i5-6600K", gpu: "NVIDIA GTX 1050 Ti", ram: 8 },
    cpuScore: 50, gpuScore: 50, ramScore: 50
},
{
    name: "FIFA 22",
    genre: "Football",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1506830/header.jpg",
    minRequirements: { cpu: "Intel Core i5-3550", gpu: "NVIDIA GTX 660", ram: 8 },
    cpuScore: 45, gpuScore: 45, ramScore: 40
},
{
    name: "NBA 2K25",
    genre: "Basketball",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2878980/header.jpg",
    minRequirements: { cpu: "Intel Core i3-2100", gpu: "NVIDIA GTX 450", ram: 4 },
    cpuScore: 30, gpuScore: 35, ramScore: 30
},
{
    name: "NBA 2K24",
    genre: "Basketball",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2338770/header.jpg",
    minRequirements: { cpu: "Intel Core i3-2100", gpu: "NVIDIA GTX 450", ram: 4 },
    cpuScore: 30, gpuScore: 35, ramScore: 30
},
{
    name: "NBA 2K23",
    genre: "Basketball",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1919590/header.jpg",
    minRequirements: { cpu: "Intel Core i3-2100", gpu: "NVIDIA GTX 450", ram: 4 },
    cpuScore: 30, gpuScore: 35, ramScore: 30
},
{
    name: "Madden NFL 25",
    genre: "American Football",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2604890/header.jpg",
    minRequirements: { cpu: "Intel Core i5-6600K", gpu: "NVIDIA GTX 1050 Ti", ram: 8 },
    cpuScore: 55, gpuScore: 55, ramScore: 50
},
{
    name: "Madden NFL 24",
    genre: "American Football",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2338600/header.jpg",
    minRequirements: { cpu: "Intel Core i5-6600K", gpu: "NVIDIA GTX 1050 Ti", ram: 8 },
    cpuScore: 55, gpuScore: 55, ramScore: 50
},
{
    name: "EA Sports UFC 5",
    genre: "Fighting",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2669330/header.jpg",
    minRequirements: { cpu: "Intel Core i5-6600K", gpu: "NVIDIA GTX 1050 Ti", ram: 8 },
    cpuScore: 55, gpuScore: 55, ramScore: 50
},
{
    name: "EA Sports UFC 4",
    genre: "Fighting",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1328670/header.jpg",
    minRequirements: { cpu: "Intel Core i5-3550", gpu: "NVIDIA GTX 660", ram: 8 },
    cpuScore: 45, gpuScore: 45, ramScore: 40
},
{
    name: "Cricket 24",
    genre: "Cricket",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2488680/header.jpg",
    minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 660", ram: 8 },
    cpuScore: 40, gpuScore: 40, ramScore: 40
},
{
    name: "Cricket 22",
    genre: "Cricket",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1702310/header.jpg",
    minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 660", ram: 8 },
    cpuScore: 40, gpuScore: 40, ramScore: 40
},
{
    name: "Don Bradman Cricket 17",
    genre: "Cricket",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/464850/header.jpg",
    minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 660", ram: 4 },
    cpuScore: 35, gpuScore: 35, ramScore: 30
},
{
    name: "Ashes Cricket",
    genre: "Cricket",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/649640/header.jpg",
    minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 660", ram: 4 },
    cpuScore: 35, gpuScore: 35, ramScore: 30
},
{
    name: "Tennis World Tour 2",
    genre: "Tennis",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1221540/header.jpg",
    minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 660", ram: 8 },
    cpuScore: 40, gpuScore: 40, ramScore: 40
},
{
    name: "AO Tennis 2",
    genre: "Tennis",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1072500/header.jpg",
    minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 660", ram: 8 },
    cpuScore: 40, gpuScore: 40, ramScore: 40
},
{
    name: "PGA Tour 2K23",
    genre: "Golf",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1588010/header.jpg",
    minRequirements: { cpu: "Intel Core i5-6600K", gpu: "NVIDIA GTX 1050 Ti", ram: 8 },
    cpuScore: 50, gpuScore: 50, ramScore: 50
},
{
    name: "The Golf Club 2019",
    genre: "Golf",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/883130/header.jpg",
    minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 660", ram: 4 },
    cpuScore: 35, gpuScore: 35, ramScore: 30
},
{
    name: "Rugby 22",
    genre: "Rugby",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1469540/header.jpg",
    minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 660", ram: 8 },
    cpuScore: 40, gpuScore: 40, ramScore: 40
},
{
    name: "Pro Evolution Soccer 2021",
    genre: "Football",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1259970/header.jpg",
    minRequirements: { cpu: "Intel Core i5-3470", gpu: "NVIDIA GTX 670", ram: 8 },
    cpuScore: 45, gpuScore: 45, ramScore: 40
},
{
    name: "Football Manager 2024",
    genre: "Football Management",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2252570/header.jpg",
    minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 },
    cpuScore: 20, gpuScore: 10, ramScore: 30
},
{
    name: "Football Manager 2023",
    genre: "Football Management",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1904540/header.jpg",
    minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 },
    cpuScore: 20, gpuScore: 10, ramScore: 30
},
{
    name: "F1 Manager 2024",
    genre: "Racing Management",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2591280/header.jpg",
    minRequirements: { cpu: "Intel Core i5-6600K", gpu: "NVIDIA GTX 1050 Ti", ram: 8 },
    cpuScore: 55, gpuScore: 55, ramScore: 50
},
{
    name: "F1 Manager 2023",
    genre: "Racing Management",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2287220/header.jpg",
    minRequirements: { cpu: "Intel Core i5-6600K", gpu: "NVIDIA GTX 1050 Ti", ram: 8 },
    cpuScore: 55, gpuScore: 55, ramScore: 50
},
{
    name: "Motorsport Manager",
    genre: "Racing Management",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/415200/header.jpg",
    minRequirements: { cpu: "Intel Core i3", gpu: "Intel HD 3000", ram: 4 },
    cpuScore: 15, gpuScore: 10, ramScore: 30
},
{
    name: "Skate 4",
    genre: "Skateboarding",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2669330/header.jpg",
    minRequirements: { cpu: "Intel Core i5-6600K", gpu: "NVIDIA GTX 1050 Ti", ram: 8 },
    cpuScore: 55, gpuScore: 55, ramScore: 50
},
{
    name: "Tony Hawk's Pro Skater 1+2",
    genre: "Skateboarding",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1081900/header.jpg",
    minRequirements: { cpu: "Intel Core i3-4340", gpu: "NVIDIA GTX 660", ram: 8 },
    cpuScore: 40, gpuScore: 40, ramScore: 40
},
{
    name: "Session: Skate Sim",
    genre: "Skateboarding",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/861650/header.jpg",
    minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 660", ram: 8 },
    cpuScore: 40, gpuScore: 40, ramScore: 40
},
{
    name: "Riders Republic",
    genre: "Extreme Sports",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2290180/header.jpg",
    minRequirements: { cpu: "Intel Core i5-4460", gpu: "NVIDIA GTX 970", ram: 8 },
    cpuScore: 55, gpuScore: 55, ramScore: 50
},
{
    name: "Steep",
    genre: "Extreme Sports",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/460930/header.jpg",
    minRequirements: { cpu: "Intel Core i5-2400S", gpu: "NVIDIA GTX 560Ti", ram: 6 },
    cpuScore: 40, gpuScore: 40, ramScore: 30
},
{
    name: "MXGP 2024",
    genre: "Motocross",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2488680/header.jpg",
    minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 660", ram: 8 },
    cpuScore: 40, gpuScore: 40, ramScore: 40
},
{
    name: "MotoGP 24",
    genre: "Motorcycle Racing",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2488680/header.jpg",
    minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 660", ram: 8 },
    cpuScore: 40, gpuScore: 40, ramScore: 40
},
{
    name: "WRC 24",
    genre: "Rally Racing",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2488680/header.jpg",
    minRequirements: { cpu: "Intel Core i5-6600K", gpu: "NVIDIA GTX 1050 Ti", ram: 8 },
    cpuScore: 55, gpuScore: 55, ramScore: 50
},
{
    name: "Dakar Desert Rally",
    genre: "Rally Racing",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1293830/header.jpg",
    minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 660", ram: 8 },
    cpuScore: 40, gpuScore: 40, ramScore: 40
}
];

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = gamesDatabase;
}
