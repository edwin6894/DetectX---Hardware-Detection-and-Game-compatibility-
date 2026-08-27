const gamesDatabase = [
    // ========== AAA TITLES (2020-2025) ==========
    {
        name: "Cyberpunk 2077",
        genre: "Action RPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
        minRequirements: { cpu: "Intel Core i5-3570K", gpu: "NVIDIA GTX 780", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-4790", gpu: "NVIDIA GTX 1060 6GB", ram: 12 },
        cpuScore: 65, gpuScore: 70, ramScore: 50
    },
    {
        name: "Red Dead Redemption 2",
        genre: "Action Adventure",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
        minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 770", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-4770K", gpu: "NVIDIA GTX 1060 6GB", ram: 12 },
        cpuScore: 55, gpuScore: 60, ramScore: 50
    },
    {
        name: "The Witcher 3: Wild Hunt",
        genre: "RPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
        minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 660", ram: 6 },
        recRequirements: { cpu: "Intel Core i7-3770", gpu: "NVIDIA GTX 770", ram: 8 },
        cpuScore: 40, gpuScore: 35, ramScore: 40
    },
    {
        name: "Grand Theft Auto V",
        genre: "Action",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
        minRequirements: { cpu: "Intel Core 2 Quad Q6600", gpu: "NVIDIA 9800 GT", ram: 4 },
        recRequirements: { cpu: "Intel Core i5-3470", gpu: "NVIDIA GTX 660", ram: 8 },
        cpuScore: 25, gpuScore: 25, ramScore: 30
    },
    {
        name: "Elden Ring",
        genre: "Action RPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
        minRequirements: { cpu: "Intel Core i5-8400", gpu: "NVIDIA GTX 1060 3GB", ram: 12 },
        recRequirements: { cpu: "Intel Core i7-8700K", gpu: "NVIDIA GTX 1070", ram: 16 },
        cpuScore: 60, gpuScore: 60, ramScore: 60
    },
    {
        name: "God of War",
        genre: "Action Adventure",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg",
        minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 960", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-4770K", gpu: "NVIDIA GTX 1060 6GB", ram: 16 },
        cpuScore: 50, gpuScore: 50, ramScore: 50
    },
    {
        name: "Horizon Zero Dawn",
        genre: "Action RPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1151640/header.jpg",
        minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 780", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-4770K", gpu: "NVIDIA GTX 1060 6GB", ram: 16 },
        cpuScore: 55, gpuScore: 55, ramScore: 50
    },
    {
        name: "Forza Horizon 5",
        genre: "Racing",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg",
        minRequirements: { cpu: "Intel Core i5-4460", gpu: "NVIDIA GTX 970", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-7700K", gpu: "NVIDIA GTX 1070", ram: 16 },
        cpuScore: 55, gpuScore: 60, ramScore: 50
    },
    {
        name: "Assassin's Creed Valhalla",
        genre: "Action RPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg",
        minRequirements: { cpu: "Intel Core i5-4460", gpu: "NVIDIA GTX 960", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-6700", gpu: "NVIDIA GTX 1080", ram: 16 },
        cpuScore: 60, gpuScore: 65, ramScore: 60
    },
    {
        name: "Call of Duty: Modern Warfare III",
        genre: "FPS",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2519060/header.jpg",
        minRequirements: { cpu: "Intel Core i5-6600", gpu: "NVIDIA GTX 960", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-8700K", gpu: "NVIDIA RTX 2070", ram: 16 },
        cpuScore: 70, gpuScore: 75, ramScore: 60
    },
    {
        name: "Counter-Strike 2",
        genre: "FPS",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
        minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 660", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-4790", gpu: "NVIDIA GTX 1060", ram: 16 },
        cpuScore: 40, gpuScore: 40, ramScore: 40
    },
    {
        name: "Apex Legends",
        genre: "Battle Royale",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg",
        minRequirements: { cpu: "Intel Core i3-6300", gpu: "NVIDIA GTX 640", ram: 6 },
        recRequirements: { cpu: "Intel Core i5-3570K", gpu: "NVIDIA GTX 970", ram: 8 },
        cpuScore: 30, gpuScore: 35, ramScore: 30
    },
    {
        name: "Fortnite",
        genre: "Battle Royale",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2775840/header.jpg",
        minRequirements: { cpu: "Intel Core i3-3225", gpu: "Intel HD 4000", ram: 4 },
        recRequirements: { cpu: "Intel Core i5-7300U", gpu: "NVIDIA GTX 660", ram: 8 },
        cpuScore: 15, gpuScore: 15, ramScore: 20
    },
    {
        name: "Minecraft",
        genre: "Sandbox",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/204100/header.jpg",
        minRequirements: { cpu: "Intel Core i3-3210", gpu: "Intel HD 4000", ram: 4 },
        recRequirements: { cpu: "Intel Core i5-4690", gpu: "NVIDIA GTX 660", ram: 8 },
        cpuScore: 10, gpuScore: 10, ramScore: 20
    },
    {
        name: "League of Legends",
        genre: "MOBA",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/20590/header.jpg",
        minRequirements: { cpu: "Intel Core i3-530", gpu: "Intel HD 3000", ram: 2 },
        recRequirements: { cpu: "Intel Core i5-3300", gpu: "NVIDIA GTX 560", ram: 4 },
        cpuScore: 10, gpuScore: 10, ramScore: 15
    },
    {
        name: "Valorant",
        genre: "FPS",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2161440/header.jpg",
        minRequirements: { cpu: "Intel Core 2 Duo E8400", gpu: "Intel HD 3000", ram: 4 },
        recRequirements: { cpu: "Intel Core i3-4150", gpu: "NVIDIA GTX 730", ram: 4 },
        cpuScore: 10, gpuScore: 10, ramScore: 20
    },
    {
        name: "Dota 2",
        genre: "MOBA",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg",
        minRequirements: { cpu: "Intel Dual Core", gpu: "Intel HD 3000", ram: 4 },
        recRequirements: { cpu: "Intel Core i3", gpu: "NVIDIA GTX 650", ram: 8 },
        cpuScore: 10, gpuScore: 10, ramScore: 20
    },
    {
        name: "Overwatch 2",
        genre: "FPS",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2357570/header.jpg",
        minRequirements: { cpu: "Intel Core i3-560", gpu: "Intel HD 4400", ram: 6 },
        recRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 660", ram: 8 },
        cpuScore: 25, gpuScore: 25, ramScore: 30
    },
    {
        name: "Resident Evil 4 Remake",
        genre: "Horror",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg",
        minRequirements: { cpu: "Intel Core i5-7500", gpu: "NVIDIA GTX 1050 Ti", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-8700", gpu: "NVIDIA GTX 1070", ram: 16 },
        cpuScore: 65, gpuScore: 65, ramScore: 60
    },
    {
        name: "Hogwarts Legacy",
        genre: "Action RPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg",
        minRequirements: { cpu: "Intel Core i5-6600", gpu: "NVIDIA GTX 960", ram: 16 },
        recRequirements: { cpu: "Intel Core i7-8700", gpu: "NVIDIA GTX 1080 Ti", ram: 16 },
        cpuScore: 70, gpuScore: 75, ramScore: 70
    },
    {
        name: "Starfield",
        genre: "RPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg",
        minRequirements: { cpu: "AMD Ryzen 5 2600X", gpu: "AMD RX 5700", ram: 16 },
        recRequirements: { cpu: "AMD Ryzen 5 3600X", gpu: "AMD RX 6800 XT", ram: 16 },
        cpuScore: 75, gpuScore: 80, ramScore: 70
    },
    {
        name: "Baldur's Gate 3",
        genre: "RPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg",
        minRequirements: { cpu: "Intel Core i5-4690", gpu: "NVIDIA GTX 970", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-8700K", gpu: "NVIDIA RTX 2060 Super", ram: 16 },
        cpuScore: 70, gpuScore: 70, ramScore: 60
    },
    {
        name: "Diablo IV",
        genre: "Action RPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2344520/header.jpg",
        minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 660", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-8700K", gpu: "NVIDIA RTX 2060", ram: 16 },
        cpuScore: 60, gpuScore: 60, ramScore: 60
    },

    // ========== 2024-2025 UPCOMING ==========
    {
        name: "GTA VI",
        genre: "Action Adventure",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg",
        minRequirements: { cpu: "Intel Core i7-8700K", gpu: "NVIDIA RTX 2070", ram: 16 },
        recRequirements: { cpu: "Intel Core i9-10900K", gpu: "NVIDIA RTX 3080", ram: 32 },
        cpuScore: 80, gpuScore: 85, ramScore: 80
    },
    {
        name: "Assassin's Creed Shadows",
        genre: "Action RPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg",
        minRequirements: { cpu: "Intel Core i7-6700", gpu: "NVIDIA GTX 1070", ram: 16 },
        recRequirements: { cpu: "Intel Core i7-9700K", gpu: "NVIDIA RTX 2070", ram: 16 },
        cpuScore: 75, gpuScore: 75, ramScore: 70
    },
    {
        name: "Star Wars Outlaws",
        genre: "Action Adventure",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2842040/header.jpg",
        minRequirements: { cpu: "Intel Core i7-8700K", gpu: "NVIDIA RTX 2060", ram: 16 },
        recRequirements: { cpu: "Intel Core i7-10700K", gpu: "NVIDIA RTX 3070", ram: 16 },
        cpuScore: 78, gpuScore: 80, ramScore: 75
    },
    {
        name: "Monster Hunter Wilds",
        genre: "Action RPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2246340/header.jpg",
        minRequirements: { cpu: "Intel Core i5-10600", gpu: "NVIDIA GTX 1660 Super", ram: 16 },
        recRequirements: { cpu: "Intel Core i7-10700K", gpu: "NVIDIA RTX 3060 Ti", ram: 16 },
        cpuScore: 72, gpuScore: 75, ramScore: 70
    },
    {
        name: "Kingdom Come: Deliverance II",
        genre: "RPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1771300/header.jpg",
        minRequirements: { cpu: "Intel Core i5-8400", gpu: "NVIDIA GTX 1060", ram: 16 },
        recRequirements: { cpu: "Intel Core i7-9700K", gpu: "NVIDIA RTX 2070", ram: 16 },
        cpuScore: 70, gpuScore: 72, ramScore: 70
    },
    {
        name: "Hellblade II: Senua's Saga",
        genre: "Action Adventure",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2461850/header.jpg",
        minRequirements: { cpu: "Intel Core i5-8400", gpu: "NVIDIA GTX 1070", ram: 16 },
        recRequirements: { cpu: "Intel Core i7-9700K", gpu: "NVIDIA RTX 2070", ram: 16 },
        cpuScore: 72, gpuScore: 75, ramScore: 70
    },
    {
        name: "Dragon Age: The Veilguard",
        genre: "RPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1845910/header.jpg",
        minRequirements: { cpu: "Intel Core i5-8400", gpu: "NVIDIA GTX 1060", ram: 16 },
        recRequirements: { cpu: "Intel Core i7-9700K", gpu: "NVIDIA RTX 2070", ram: 16 },
        cpuScore: 70, gpuScore: 72, ramScore: 70
    },
    {
        name: "Avowed",
        genre: "RPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2457220/header.jpg",
        minRequirements: { cpu: "Intel Core i5-8400", gpu: "NVIDIA GTX 1070", ram: 16 },
        recRequirements: { cpu: "Intel Core i7-9700K", gpu: "NVIDIA RTX 2070", ram: 16 },
        cpuScore: 72, gpuScore: 75, ramScore: 70
    },
    {
        name: "Fable",
        genre: "Action RPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1134730/header.jpg",
        minRequirements: { cpu: "Intel Core i5-8400", gpu: "NVIDIA GTX 1060", ram: 16 },
        recRequirements: { cpu: "Intel Core i7-9700K", gpu: "NVIDIA RTX 2070", ram: 16 },
        cpuScore: 70, gpuScore: 72, ramScore: 70
    },
    {
        name: "Marvel's Wolverine",
        genre: "Action Adventure",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg",
        minRequirements: { cpu: "Intel Core i7-8700K", gpu: "NVIDIA RTX 2060", ram: 16 },
        recRequirements: { cpu: "Intel Core i7-10700K", gpu: "NVIDIA RTX 3070", ram: 16 },
        cpuScore: 78, gpuScore: 80, ramScore: 75
    },
    {
        name: "Death Stranding 2",
        genre: "Action",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2625460/header.jpg",
        minRequirements: { cpu: "Intel Core i5-8400", gpu: "NVIDIA GTX 1060", ram: 16 },
        recRequirements: { cpu: "Intel Core i7-9700K", gpu: "NVIDIA RTX 2070", ram: 16 },
        cpuScore: 70, gpuScore: 72, ramScore: 70
    },
    {
        name: "Black Myth: Wukong",
        genre: "Action RPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/header.jpg",
        minRequirements: { cpu: "Intel Core i5-8400", gpu: "NVIDIA GTX 1060 6GB", ram: 16 },
        recRequirements: { cpu: "Intel Core i7-9700", gpu: "NVIDIA RTX 2060", ram: 16 },
        cpuScore: 70, gpuScore: 70, ramScore: 70
    },
    {
        name: "Silent Hill 2 Remake",
        genre: "Horror",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2124490/header.jpg",
        minRequirements: { cpu: "Intel Core i5-8400", gpu: "NVIDIA GTX 1070", ram: 16 },
        recRequirements: { cpu: "Intel Core i7-9700K", gpu: "NVIDIA RTX 2070", ram: 16 },
        cpuScore: 72, gpuScore: 75, ramScore: 70
    },
    {
        name: "Metal Gear Solid Delta",
        genre: "Action",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2646460/header.jpg",
        minRequirements: { cpu: "Intel Core i5-8400", gpu: "NVIDIA GTX 1060", ram: 16 },
        recRequirements: { cpu: "Intel Core i7-9700K", gpu: "NVIDIA RTX 2070", ram: 16 },
        cpuScore: 70, gpuScore: 72, ramScore: 70
    },
    {
        name: "S.T.A.L.K.E.R. 2",
        genre: "FPS",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1643320/header.jpg",
        minRequirements: { cpu: "Intel Core i5-7600K", gpu: "NVIDIA GTX 1060 6GB", ram: 16 },
        recRequirements: { cpu: "Intel Core i7-9700K", gpu: "NVIDIA RTX 2070 Super", ram: 16 },
        cpuScore: 75, gpuScore: 78, ramScore: 70
    },
    {
        name: "Tekken 8",
        genre: "Fighting",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1778820/header.jpg",
        minRequirements: { cpu: "Intel Core i5-6600K", gpu: "NVIDIA GTX 1050 Ti", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-7700K", gpu: "NVIDIA GTX 1070", ram: 16 },
        cpuScore: 60, gpuScore: 60, ramScore: 50
    },
    {
        name: "Street Fighter 6",
        genre: "Fighting",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1364780/header.jpg",
        minRequirements: { cpu: "Intel Core i5-7500", gpu: "NVIDIA GTX 1060", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-8700", gpu: "NVIDIA GTX 1070", ram: 16 },
        cpuScore: 60, gpuScore: 60, ramScore: 50
    },
    {
        name: "Mortal Kombat 1",
        genre: "Fighting",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1971870/header.jpg",
        minRequirements: { cpu: "Intel Core i5-6600", gpu: "NVIDIA GTX 980", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-6700", gpu: "NVIDIA GTX 1080", ram: 16 },
        cpuScore: 65, gpuScore: 65, ramScore: 50
    },
    {
        name: "Lies of P",
        genre: "Action RPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1627720/header.jpg",
        minRequirements: { cpu: "Intel Core i5-7500", gpu: "NVIDIA GTX 1050 Ti", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-8700", gpu: "NVIDIA GTX 1060 6GB", ram: 16 },
        cpuScore: 60, gpuScore: 60, ramScore: 50
    },

    // ========== FPS GAMES ==========
    {
        name: "Battlefield 2042",
        genre: "FPS",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1517290/header.jpg",
        minRequirements: { cpu: "Intel Core i5-6600K", gpu: "NVIDIA GTX 1050 Ti", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-4790", gpu: "NVIDIA RTX 2060", ram: 16 },
        cpuScore: 60, gpuScore: 65, ramScore: 60
    },
    {
        name: "Rainbow Six Siege",
        genre: "FPS",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/359550/header.jpg",
        minRequirements: { cpu: "Intel Core i3-560", gpu: "NVIDIA GTX 460", ram: 6 },
        recRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 670", ram: 8 },
        cpuScore: 25, gpuScore: 25, ramScore: 30
    },
    {
        name: "DOOM Eternal",
        genre: "FPS",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/782330/header.jpg",
        minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 970", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-6700K", gpu: "NVIDIA GTX 1060 6GB", ram: 8 },
        cpuScore: 50, gpuScore: 55, ramScore: 40
    },
    {
        name: "Far Cry 6",
        genre: "FPS",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2369390/header.jpg",
        minRequirements: { cpu: "Intel Core i5-4460", gpu: "NVIDIA GTX 960", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-7700", gpu: "NVIDIA GTX 1080", ram: 16 },
        cpuScore: 60, gpuScore: 65, ramScore: 60
    },
    {
        name: "Halo Infinite",
        genre: "FPS",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1240440/header.jpg",
        minRequirements: { cpu: "Intel Core i5-4440", gpu: "NVIDIA GTX 1050 Ti", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-9700K", gpu: "NVIDIA RTX 2070", ram: 16 },
        cpuScore: 65, gpuScore: 70, ramScore: 60
    },
    {
        name: "Destiny 2",
        genre: "FPS",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/header.jpg",
        minRequirements: { cpu: "Intel Core i3-3250", gpu: "NVIDIA GTX 660", ram: 6 },
        recRequirements: { cpu: "Intel Core i5-7400", gpu: "NVIDIA GTX 1060 6GB", ram: 8 },
        cpuScore: 35, gpuScore: 40, ramScore: 30
    },

    // ========== RACING GAMES ==========
    {
        name: "Forza Motorsport",
        genre: "Racing",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2440510/header.jpg",
        minRequirements: { cpu: "Intel Core i5-8400", gpu: "NVIDIA GTX 1060", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-8700K", gpu: "NVIDIA RTX 2070", ram: 16 },
        cpuScore: 65, gpuScore: 70, ramScore: 60
    },
    {
        name: "Need for Speed Heat",
        genre: "Racing",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1222680/header.jpg",
        minRequirements: { cpu: "Intel Core i5-3570", gpu: "NVIDIA GTX 760", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-4790", gpu: "NVIDIA GTX 1060", ram: 16 },
        cpuScore: 45, gpuScore: 50, ramScore: 50
    },
    {
        name: "F1 2024",
        genre: "Racing",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2488620/header.jpg",
        minRequirements: { cpu: "Intel Core i5-6600K", gpu: "NVIDIA GTX 1050 Ti", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-8700", gpu: "NVIDIA GTX 1070", ram: 16 },
        cpuScore: 60, gpuScore: 60, ramScore: 50
    },
    {
        name: "Dirt 5",
        genre: "Racing",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1038250/header.jpg",
        minRequirements: { cpu: "Intel Core i3-2130", gpu: "NVIDIA GTX 660", ram: 8 },
        recRequirements: { cpu: "Intel Core i5-8600K", gpu: "NVIDIA GTX 1060", ram: 16 },
        cpuScore: 40, gpuScore: 45, ramScore: 50
    },

    // ========== SPORTS GAMES ==========
    {
        name: "EA Sports FC 25",
        genre: "Sports",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2669320/header.jpg",
        minRequirements: { cpu: "Intel Core i5-6600K", gpu: "NVIDIA GTX 1050 Ti", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-6700", gpu: "NVIDIA GTX 1060", ram: 12 },
        cpuScore: 55, gpuScore: 55, ramScore: 50
    },
    {
        name: "NBA 2K25",
        genre: "Sports",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2878980/header.jpg",
        minRequirements: { cpu: "Intel Core i3-2100", gpu: "NVIDIA GTX 450", ram: 4 },
        recRequirements: { cpu: "Intel Core i5-4430", gpu: "NVIDIA GTX 770", ram: 8 },
        cpuScore: 30, gpuScore: 35, ramScore: 30
    },
    {
        name: "WWE 2K24",
        genre: "Sports",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2315690/header.jpg",
        minRequirements: { cpu: "Intel Core i5-3550", gpu: "NVIDIA GTX 670", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-4790", gpu: "NVIDIA GTX 1060", ram: 16 },
        cpuScore: 45, gpuScore: 50, ramScore: 50
    },

    // ========== RPG GAMES ==========
    {
        name: "Final Fantasy XVI",
        genre: "RPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2515020/header.jpg",
        minRequirements: { cpu: "Intel Core i5-8400", gpu: "NVIDIA GTX 1070", ram: 16 },
        recRequirements: { cpu: "Intel Core i7-9700K", gpu: "NVIDIA RTX 2070", ram: 16 },
        cpuScore: 72, gpuScore: 75, ramScore: 70
    },
    {
        name: "Persona 5 Royal",
        genre: "JRPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1687950/header.jpg",
        minRequirements: { cpu: "Intel Core i5-3470", gpu: "NVIDIA GTX 650", ram: 8 },
        recRequirements: { cpu: "Intel Core i5-6600", gpu: "NVIDIA GTX 960", ram: 8 },
        cpuScore: 35, gpuScore: 35, ramScore: 40
    },
    {
        name: "Dragon Quest XI",
        genre: "JRPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1295510/header.jpg",
        minRequirements: { cpu: "Intel Core i3-2100", gpu: "NVIDIA GTX 650", ram: 8 },
        recRequirements: { cpu: "Intel Core i5-4670", gpu: "NVIDIA GTX 960", ram: 8 },
        cpuScore: 25, gpuScore: 25, ramScore: 30
    },
    {
        name: "The Elder Scrolls V: Skyrim",
        genre: "RPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/489830/header.jpg",
        minRequirements: { cpu: "Intel Dual Core 2.0GHz", gpu: "NVIDIA GTX 260", ram: 4 },
        recRequirements: { cpu: "Intel Quad Core", gpu: "NVIDIA GTX 550 Ti", ram: 8 },
        cpuScore: 15, gpuScore: 15, ramScore: 20
    },

    // ========== HORROR GAMES ==========
    {
        name: "Resident Evil Village",
        genre: "Horror",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1196590/header.jpg",
        minRequirements: { cpu: "Intel Core i5-7500", gpu: "NVIDIA GTX 1050 Ti", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-8700", gpu: "NVIDIA GTX 1070", ram: 16 },
        cpuScore: 60, gpuScore: 60, ramScore: 50
    },
    {
        name: "Dead Space Remake",
        genre: "Horror",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1693980/header.jpg",
        minRequirements: { cpu: "Intel Core i5-8600", gpu: "NVIDIA GTX 1070", ram: 16 },
        recRequirements: { cpu: "Intel Core i7-9700", gpu: "NVIDIA RTX 2070", ram: 16 },
        cpuScore: 70, gpuScore: 72, ramScore: 70
    },
    {
        name: "The Last of Us Part I",
        genre: "Horror",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/header.jpg",
        minRequirements: { cpu: "Intel Core i5-8400", gpu: "NVIDIA GTX 1070", ram: 16 },
        recRequirements: { cpu: "Intel Core i7-9700K", gpu: "NVIDIA RTX 2070 Super", ram: 16 },
        cpuScore: 72, gpuScore: 75, ramScore: 70
    },
    {
        name: "Alan Wake 2",
        genre: "Horror",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2324650/header.jpg",
        minRequirements: { cpu: "Intel Core i5-7600K", gpu: "NVIDIA GTX 1070", ram: 16 },
        recRequirements: { cpu: "Intel Core i7-9700K", gpu: "NVIDIA RTX 3070", ram: 16 },
        cpuScore: 75, gpuScore: 78, ramScore: 70
    },

    // ========== INDIE GAMES ==========
    {
        name: "Hades",
        genre: "Roguelike",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg",
        minRequirements: { cpu: "Intel Dual Core 2.4GHz", gpu: "Intel HD 4000", ram: 4 },
        recRequirements: { cpu: "Intel Dual Core 3.0GHz", gpu: "NVIDIA GTX 650", ram: 8 },
        cpuScore: 10, gpuScore: 10, ramScore: 20
    },
    {
        name: "Hollow Knight",
        genre: "Metroidvania",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg",
        minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 },
        recRequirements: { cpu: "Intel Core i3", gpu: "NVIDIA GTX 560", ram: 8 },
        cpuScore: 10, gpuScore: 10, ramScore: 15
    },
    {
        name: "Stardew Valley",
        genre: "Simulation",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg",
        minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 },
        recRequirements: { cpu: "Intel Core i3", gpu: "Intel HD 4000", ram: 4 },
        cpuScore: 5, gpuScore: 5, ramScore: 10
    },
    {
        name: "Celeste",
        genre: "Platformer",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/504230/header.jpg",
        minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 },
        recRequirements: { cpu: "Intel Core i3", gpu: "Intel HD 4000", ram: 4 },
        cpuScore: 5, gpuScore: 5, ramScore: 10
    },
    {
        name: "Dead Cells",
        genre: "Roguelike",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/588650/header.jpg",
        minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 },
        recRequirements: { cpu: "Intel Core i3", gpu: "Intel HD 4000", ram: 4 },
        cpuScore: 5, gpuScore: 5, ramScore: 10
    },
    {
        name: "Terraria",
        genre: "Sandbox",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg",
        minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 },
        recRequirements: { cpu: "Intel Core i3", gpu: "Intel HD 4000", ram: 4 },
        cpuScore: 5, gpuScore: 5, ramScore: 10
    },
    {
        name: "Among Us",
        genre: "Party",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg",
        minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 1 },
        recRequirements: { cpu: "Intel Core i3", gpu: "Intel HD 4000", ram: 4 },
        cpuScore: 5, gpuScore: 5, ramScore: 5
    },
    {
        name: "Cuphead",
        genre: "Platformer",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/268910/header.jpg",
        minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 3 },
        recRequirements: { cpu: "Intel Core i3", gpu: "NVIDIA GTX 650", ram: 8 },
        cpuScore: 10, gpuScore: 10, ramScore: 15
    },
    {
        name: "Ori and the Will of the Wisps",
        genre: "Platformer",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1057090/header.jpg",
        minRequirements: { cpu: "Intel Core i3-3220", gpu: "NVIDIA GTX 650", ram: 4 },
        recRequirements: { cpu: "Intel Core i5-4460", gpu: "NVIDIA GTX 960", ram: 8 },
        cpuScore: 20, gpuScore: 20, ramScore: 20
    },
    {
        name: "Undertale",
        genre: "RPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/391540/header.jpg",
        minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 },
        recRequirements: { cpu: "Intel Core i3", gpu: "Intel HD 4000", ram: 4 },
        cpuScore: 5, gpuScore: 5, ramScore: 10
    },

    // ========== STRATEGY GAMES ==========
    {
        name: "Age of Empires IV",
        genre: "Strategy",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1466860/header.jpg",
        minRequirements: { cpu: "Intel Core i5-6300U", gpu: "Intel HD 520", ram: 8 },
        recRequirements: { cpu: "Intel Core i5-6600", gpu: "NVIDIA GTX 970", ram: 16 },
        cpuScore: 30, gpuScore: 35, ramScore: 40
    },
    {
        name: "Civilization VI",
        genre: "Strategy",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/289070/header.jpg",
        minRequirements: { cpu: "Intel Core i3-2100", gpu: "Intel HD 3000", ram: 4 },
        recRequirements: { cpu: "Intel Core i5-3470", gpu: "NVIDIA GTX 770", ram: 8 },
        cpuScore: 20, gpuScore: 25, ramScore: 30
    },
    {
        name: "Total War: Warhammer III",
        genre: "Strategy",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1142710/header.jpg",
        minRequirements: { cpu: "Intel Core i3-2100", gpu: "NVIDIA GTX 460", ram: 8 },
        recRequirements: { cpu: "Intel Core i5-6600", gpu: "NVIDIA GTX 1070", ram: 16 },
        cpuScore: 45, gpuScore: 50, ramScore: 50
    },
    {
        name: "Crusader Kings III",
        genre: "Strategy",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1158310/header.jpg",
        minRequirements: { cpu: "Intel Core i3-2120", gpu: "Intel HD 4000", ram: 6 },
        recRequirements: { cpu: "Intel Core i5-4670K", gpu: "NVIDIA GTX 660", ram: 8 },
        cpuScore: 25, gpuScore: 25, ramScore: 30
    },

    // ========== BATTLE ROYALE ==========
    {
        name: "PUBG: Battlegrounds",
        genre: "Battle Royale",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg",
        minRequirements: { cpu: "Intel Core i5-4430", gpu: "NVIDIA GTX 960", ram: 8 },
        recRequirements: { cpu: "Intel Core i5-6600K", gpu: "NVIDIA GTX 1060", ram: 16 },
        cpuScore: 40, gpuScore: 45, ramScore: 50
    },
    {
        name: "Call of Duty: Warzone",
        genre: "Battle Royale",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1962663/header.jpg",
        minRequirements: { cpu: "Intel Core i3-4340", gpu: "NVIDIA GTX 670", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-8700K", gpu: "NVIDIA RTX 2070", ram: 16 },
        cpuScore: 55, gpuScore: 60, ramScore: 60
    },

    // ========== SURVIVAL GAMES ==========
    {
        name: "Rust",
        genre: "Survival",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg",
        minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 670", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-4790K", gpu: "NVIDIA GTX 980", ram: 16 },
        cpuScore: 45, gpuScore: 50, ramScore: 50
    },
    {
        name: "ARK: Survival Evolved",
        genre: "Survival",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/346110/header.jpg",
        minRequirements: { cpu: "Intel Core i5-2400", gpu: "NVIDIA GTX 670", ram: 8 },
        recRequirements: { cpu: "Intel Core i5-4670", gpu: "NVIDIA GTX 970", ram: 16 },
        cpuScore: 40, gpuScore: 45, ramScore: 50
    },
    {
        name: "Valheim",
        genre: "Survival",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/892970/header.jpg",
        minRequirements: { cpu: "Intel Core i3-2100", gpu: "NVIDIA GTX 660", ram: 4 },
        recRequirements: { cpu: "Intel Core i5-4460", gpu: "NVIDIA GTX 960", ram: 8 },
        cpuScore: 25, gpuScore: 25, ramScore: 20
    },
    {
        name: "The Forest",
        genre: "Survival",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/242760/header.jpg",
        minRequirements: { cpu: "Intel Dual Core 2.4GHz", gpu: "NVIDIA GTX 550 Ti", ram: 4 },
        recRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 970", ram: 8 },
        cpuScore: 20, gpuScore: 25, ramScore: 30
    },

    // ========== OPEN WORLD ==========
    {
        name: "Ghost of Tsushima",
        genre: "Open World",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2215430/header.jpg",
        minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 960", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-8700", gpu: "NVIDIA RTX 2070", ram: 16 },
        cpuScore: 70, gpuScore: 72, ramScore: 60
    },
    {
        name: "Spider-Man Remastered",
        genre: "Open World",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg",
        minRequirements: { cpu: "Intel Core i5-4670", gpu: "NVIDIA GTX 1060", ram: 16 },
        recRequirements: { cpu: "Intel Core i7-8700K", gpu: "NVIDIA RTX 2080", ram: 16 },
        cpuScore: 70, gpuScore: 72, ramScore: 70
    },
    {
        name: "Days Gone",
        genre: "Open World",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1259420/header.jpg",
        minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 960", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-6700K", gpu: "NVIDIA GTX 1070", ram: 16 },
        cpuScore: 60, gpuScore: 60, ramScore: 50
    },
    {
        name: "Watch Dogs: Legion",
        genre: "Open World",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2239550/header.jpg",
        minRequirements: { cpu: "Intel Core i5-4460", gpu: "NVIDIA GTX 960", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-6700", gpu: "NVIDIA GTX 1060", ram: 16 },
        cpuScore: 60, gpuScore: 60, ramScore: 50
    },

    // ========== SIMULATION ==========
    {
        name: "Microsoft Flight Simulator",
        genre: "Simulation",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1250410/header.jpg",
        minRequirements: { cpu: "Intel Core i5-4460", gpu: "NVIDIA GTX 770", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-9700K", gpu: "NVIDIA RTX 2070", ram: 16 },
        cpuScore: 75, gpuScore: 78, ramScore: 60
    },
    {
        name: "Cities: Skylines II",
        genre: "Simulation",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/949230/header.jpg",
        minRequirements: { cpu: "Intel Core i5-6600K", gpu: "NVIDIA GTX 970", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-9700K", gpu: "NVIDIA RTX 2070", ram: 16 },
        cpuScore: 65, gpuScore: 70, ramScore: 60
    },
    {
        name: "The Sims 4",
        genre: "Simulation",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/header.jpg",
        minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 },
        recRequirements: { cpu: "Intel Core i5", gpu: "NVIDIA GTX 650", ram: 8 },
        cpuScore: 10, gpuScore: 10, ramScore: 20
    },

    // ========== ANIME GAMES ==========
    {
        name: "Genshin Impact",
        genre: "Anime RPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1902490/header.jpg",
        minRequirements: { cpu: "Intel Core i5-6500", gpu: "NVIDIA GTX 660", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-6700", gpu: "NVIDIA GTX 1060", ram: 16 },
        cpuScore: 45, gpuScore: 45, ramScore: 40
    },
    {
        name: "Naruto Shippuden: Ultimate Ninja Storm 4",
        genre: "Anime Fighting",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/349040/header.jpg",
        minRequirements: { cpu: "Intel Core 2 Duo", gpu: "NVIDIA GTX 460", ram: 2 },
        recRequirements: { cpu: "Intel Core i5", gpu: "NVIDIA GTX 660", ram: 8 },
        cpuScore: 15, gpuScore: 15, ramScore: 15
    },
    {
        name: "Dragon Ball Z: Kakarot",
        genre: "Anime RPG",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/851850/header.jpg",
        minRequirements: { cpu: "Intel Core i5-2400", gpu: "NVIDIA GTX 660", ram: 4 },
        recRequirements: { cpu: "Intel Core i5-3470", gpu: "NVIDIA GTX 960", ram: 8 },
        cpuScore: 25, gpuScore: 25, ramScore: 20
    },

    // ========== FREE TO PLAY ==========
    {
        name: "Warframe",
        genre: "Free to Play",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/230410/header.jpg",
        minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 },
        recRequirements: { cpu: "Intel Core i5", gpu: "NVIDIA GTX 660", ram: 8 },
        cpuScore: 15, gpuScore: 15, ramScore: 15
    },
    {
        name: "Path of Exile",
        genre: "Free to Play",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/238960/header.jpg",
        minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 },
        recRequirements: { cpu: "Intel Core i5", gpu: "NVIDIA GTX 660", ram: 8 },
        cpuScore: 15, gpuScore: 15, ramScore: 20
    },
    {
        name: "Guild Wars 2",
        genre: "Free to Play",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1284210/header.jpg",
        minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 },
        recRequirements: { cpu: "Intel Core i5", gpu: "NVIDIA GTX 660", ram: 8 },
        cpuScore: 15, gpuScore: 15, ramScore: 20
    },
    {
        name: "Smite",
        genre: "Free to Play",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/386360/header.jpg",
        minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 },
        recRequirements: { cpu: "Intel Core i5", gpu: "NVIDIA GTX 660", ram: 8 },
        cpuScore: 15, gpuScore: 15, ramScore: 20
    },
    {
        name: "Paladins",
        genre: "Free to Play",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/444090/header.jpg",
        minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 },
        recRequirements: { cpu: "Intel Core i5", gpu: "NVIDIA GTX 660", ram: 8 },
        cpuScore: 15, gpuScore: 15, ramScore: 20
    },
    {
        name: "Team Fortress 2",
        genre: "Free to Play",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/440/header.jpg",
        minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 2 },
        recRequirements: { cpu: "Intel Core i3", gpu: "NVIDIA GTX 660", ram: 8 },
        cpuScore: 10, gpuScore: 10, ramScore: 15
    },

    // ========== CLASSIC GAMES ==========
    {
        name: "Half-Life 2",
        genre: "Classic FPS",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/220/header.jpg",
        minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 1 },
        recRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 4000", ram: 4 },
        cpuScore: 5, gpuScore: 5, ramScore: 10
    },
    {
        name: "Portal 2",
        genre: "Puzzle",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/620/header.jpg",
        minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 2 },
        recRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 4000", ram: 4 },
        cpuScore: 5, gpuScore: 5, ramScore: 10
    },
    {
        name: "Left 4 Dead 2",
        genre: "Classic FPS",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/550/header.jpg",
        minRequirements: { cpu: "Intel Pentium 4", gpu: "Intel HD 3000", ram: 2 },
        recRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 4000", ram: 4 },
        cpuScore: 5, gpuScore: 5, ramScore: 10
    },

    // ========== VR GAMES ==========
    {
        name: "Half-Life: Alyx",
        genre: "VR FPS",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/546560/header.jpg",
        minRequirements: { cpu: "Intel Core i5-7500", gpu: "NVIDIA GTX 1060", ram: 12 },
        recRequirements: { cpu: "Intel Core i7-9700K", gpu: "NVIDIA RTX 2070", ram: 16 },
        cpuScore: 70, gpuScore: 72, ramScore: 60
    },
    {
        name: "Beat Saber",
        genre: "VR Rhythm",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/620980/header.jpg",
        minRequirements: { cpu: "Intel Core i5-4590", gpu: "NVIDIA GTX 960", ram: 4 },
        recRequirements: { cpu: "Intel Core i5-6600", gpu: "NVIDIA GTX 1060", ram: 8 },
        cpuScore: 40, gpuScore: 40, ramScore: 30
    },

    // ========== ESPORTS ==========
    {
        name: "Rocket League",
        genre: "Esports",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg",
        minRequirements: { cpu: "Intel Core 2 Duo", gpu: "Intel HD 3000", ram: 4 },
        recRequirements: { cpu: "Intel Core i5", gpu: "NVIDIA GTX 660", ram: 8 },
        cpuScore: 10, gpuScore: 10, ramScore: 20
    },
    {
        name: "Rainbow Six Extraction",
        genre: "Esports FPS",
        cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1846380/header.jpg",
        minRequirements: { cpu: "Intel Core i5-2500K", gpu: "NVIDIA GTX 960", ram: 8 },
        recRequirements: { cpu: "Intel Core i7-4790", gpu: "NVIDIA GTX 1060", ram: 16 },
        cpuScore: 50, gpuScore: 50, ramScore: 50
    }
];