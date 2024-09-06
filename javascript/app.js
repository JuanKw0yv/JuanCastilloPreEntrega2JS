function mostrarProcesadores() {
    let respuestaProcesador = prompt("¿INTEL o AMD?");
    let respuestaProcesadorLower = respuestaProcesador.toLowerCase();
    const resultado = document.getElementById("resultado");

    if (respuestaProcesadorLower === "intel") {
        resultado.innerHTML = "<h2>Mejores procesadores Intel actualmente:</h2>";
        procesadoresIntel.forEach(Procesador => {
            resultado.innerHTML += `<p>${Procesador.nombre} - $${Procesador.precio}</p>`;
        })
    } else if (respuestaProcesadorLower === "amd") {
        resultado.innerHTML = "<h2>Mejores procesadores AMD actualmente:</h2>";
        procesadoresAMD.forEach(Procesador => {
            resultado.innerHTML += `<p>${Procesador.nombre} - $${Procesador.precio}</p>`;
        });
    } else {
        resultado.innerHTML = "Opción no válida para procesadores.";
    }

}


function mostrarMotherboards() {
    let respuestaMotherboard = prompt("¿INTEL o AMD?");
    let respuestaMotherboardLower = respuestaMotherboard.toLocaleLowerCase();
    const resultado = document.getElementById("resultado");

    if (respuestaMotherboardLower === "intel") {
        resultado.innerHTML = "<h2>Motherboards compatibles con procesadores Intel:</h2>";
        motherboardsIntel.forEach(Motherboard => {
            resultado.innerHTML += `<p>${Motherboard.nombre} -${Motherboard.marca} -${Motherboard.socket} -${Motherboard.chipset} -$${Motherboard.precio}</p>`;
        });
    } else if (respuestaMotherboardLower === "amd") {
        resultado.innerHTML = "<h2>Motherboards compatibles con procesadores AMD</h2>";
        motherboardsAMD.forEach(Motherboard => {
            resultado.innerHTML += `<p>${Motherboard.nombre} -${Motherboard.marca} -${Motherboard.socket} -${Motherboard.chipset} -$${Motherboard.precio}</p>`;
        })
    } else {
        resultado.innerHTML = "Opción no válida para motherboards.";
    }
}

function mostrarTarjetasDeVideo() {
    let respuestaTarjeta = prompt("¿NVIDIA o RADEON?");
    let respuestaTarjetaLower = respuestaTarjeta.toLowerCase();
    const resultado = document.getElementById("resultado");

    if (respuestaTarjetaLower === "nvidia") {
        resultado.innerHTML = "<h2>Tarjetas de video de NVIDIA:</h2>";
        tarjetaGraficasNvidia.forEach(tarjeta => {
            resultado.innerHTML += `<p>${tarjeta.nombre} - ${tarjeta.marca} -$${tarjeta.precio}</p>`;
        });
    } else if (respuestaTarjetaLower === "radeon") {
        resultado.innerHTML = "<h2>Tarjetas de video de RADEON:</h2>";
        tarjetaGraficasAMD.forEach(tarjeta => {
            resultado.innerHTML += `<p>${tarjeta.nombre} - ${tarjeta.marca} -$${tarjeta.precio}</p>`;
        });
    } else {
        resultado.innerHTML = "Opción no válida para tarjetas de video.";
    }
}

function mostrarFuentesDePoder() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "<h2>Lista de fuentes de poder:</h2>";
    fuentesDePoder.forEach(fuenteDePoder => {
        resultado.innerHTML += `<p>${fuenteDePoder.nombre} - ${fuenteDePoder.marca} - ${fuenteDePoder.potencia} - ${fuenteDePoder.certificacion} - $${fuenteDePoder.precio}</p>`;
    })
}

function mostrarMemoriasRAM() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "<h2>Lista de memoria RAM:</h2>";
    memoriasRAM.forEach(memoriaRAM => {
        resultado.innerHTML += `<p>${memoriaRAM.nombre} - ${memoriaRAM.marca} - ${memoriaRAM.capacidad} - ${memoriaRAM.frecuencia} - ${memoriaRAM.tipo} - $${memoriaRAM.precio}</p>`;
    })
}

function mostrarDiscosDuros() {
    let respuestaMemoria = prompt("¿SSD o HDD?");
    let respuestaMemoriaLower = respuestaMemoria.toLowerCase();
    const resultado = document.getElementById("resultado");

    if (respuestaMemoriaLower === "ssd") {
        resultado.innerHTML = "<h2>Lista de memorias SSD:</h2>";
        ssds.forEach(SSD => {
            resultado.innerHTML += `<p>${SSD.nombre} - ${SSD.marca} - ${SSD.capacidad} - ${SSD.tipo} - ${SSD.velocidadLectura} - ${SSD.velocidadEscritura} - $${SSD.precio}</p>`;
        })
    } else if (respuestaMemoriaLower === "hdd") {
        resultado.innerHTML = "<h2>Lista de memorias HDD:</h2>";
        hdds.forEach(HDD => {
            resultado.innerHTML += `<p>${HDD.nombre} - ${HDD.marca} - ${HDD.capacidad} - ${HDD.velocidadRPM} - ${HDD.interfaz} - $${HDD.precio}</p>`;
        })
    } else {
        resultado.innerHTML = "Opción no válida para discos duros.";
    }
}

function mostrarGabinetes() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "<h2>Lista de Gabinetes:</h2>";
    gabinetes.forEach(gabinete => {
        resultado.innerHTML += `<p>${gabinete.nombre} - ${gabinete.marca} - Tipo: ${gabinete.tipo} - Compatible con: ${gabinete.compatibilidadMotherboard} - $${gabinete.precio}</p>`;
    });
}

function Procesador(nombre, marca, precio) {
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
}

const procesadoresIntel = [
    new Procesador("Core i3-10100", "Intel", 120),
    new Procesador("Core i3-10300", "Intel", 140),
    new Procesador("Core i3-10105", "Intel", 130),
    new Procesador("Core i5-10400", "Intel", 160),
    new Procesador("Core i5-10500", "Intel", 180),
    new Procesador("Core i5-10600K", "Intel", 220),
    new Procesador("Core i5-11400", "Intel", 190),
    new Procesador("Core i5-11600K", "Intel", 240),
    new Procesador("Core i7-10700", "Intel", 320),
    new Procesador("Core i7-10700K", "Intel", 350),
    new Procesador("Core i7-11700", "Intel", 330),
    new Procesador("Core i7-11700K", "Intel", 370),
    new Procesador("Core i9-10900", "Intel", 450),
    new Procesador("Core i9-10900K", "Intel", 500),
    new Procesador("Core i9-11900", "Intel", 470),
    new Procesador("Core i9-11900K", "Intel", 520),
    new Procesador("Core i3-12100", "Intel", 130),
    new Procesador("Core i3-12100F", "Intel", 110),
    new Procesador("Core i5-12400", "Intel", 190),
    new Procesador("Core i5-12400F", "Intel", 170),
    new Procesador("Core i5-12600K", "Intel", 290),
    new Procesador("Core i7-12700", "Intel", 350),
    new Procesador("Core i7-12700K", "Intel", 410),
    new Procesador("Core i9-12900", "Intel", 520),
    new Procesador("Core i9-12900K", "Intel", 570),
    new Procesador("Core i5-13600K", "Intel", 320),
    new Procesador("Core i7-13700K", "Intel", 420),
    new Procesador("Core i9-13900K", "Intel", 580),
    new Procesador("Core i9-13900KS", "Intel", 700)
];



const procesadoresAMD = [
    new Procesador("Ryzen 3 3100", "AMD", 100),
    new Procesador("Ryzen 3 3300X", "AMD", 120),
    new Procesador("Ryzen 3 4100", "AMD", 110),
    new Procesador("Ryzen 5 3600", "AMD", 200),
    new Procesador("Ryzen 5 3600X", "AMD", 220),
    new Procesador("Ryzen 5 4600G", "AMD", 170),
    new Procesador("Ryzen 5 5600", "AMD", 190),
    new Procesador("Ryzen 5 5600X", "AMD", 210),
    new Procesador("Ryzen 5 7600", "AMD", 230),
    new Procesador("Ryzen 5 7600X", "AMD", 250),
    new Procesador("Ryzen 7 3700X", "AMD", 300),
    new Procesador("Ryzen 7 3800X", "AMD", 320),
    new Procesador("Ryzen 7 5700G", "AMD", 300),
    new Procesador("Ryzen 7 5800X", "AMD", 350),
    new Procesador("Ryzen 7 5800X3D", "AMD", 400),
    new Procesador("Ryzen 7 7700", "AMD", 360),
    new Procesador("Ryzen 7 7700X", "AMD", 380),
    new Procesador("Ryzen 9 3900X", "AMD", 500),
    new Procesador("Ryzen 9 3950X", "AMD", 750),
    new Procesador("Ryzen 9 5900X", "AMD", 550),
    new Procesador("Ryzen 9 5950X", "AMD", 800),
    new Procesador("Ryzen 9 7900", "AMD", 420),
    new Procesador("Ryzen 9 7900X", "AMD", 500),
    new Procesador("Ryzen 9 7950X", "AMD", 700),
];

function TarjetaGrafica(nombre, marca, precio) {
    this.nombre = nombre;
    this.marca = marca;
    this.precio = precio;
}

const tarjetaGraficasNvidia = [
    new TarjetaGrafica("RTX 2060", "NVIDIA", 349),
    new TarjetaGrafica("RTX 2060 Super", "NVIDIA", 399),
    new TarjetaGrafica("RTX 2070", "NVIDIA", 499),
    new TarjetaGrafica("RTX 2070 Super", "NVIDIA", 599),
    new TarjetaGrafica("RTX 2080", "NVIDIA", 699),
    new TarjetaGrafica("RTX 2080 Super", "NVIDIA", 799),
    new TarjetaGrafica("RTX 2080 Ti", "NVIDIA", 999),
    new TarjetaGrafica("RTX 3060", "NVIDIA", 329),
    new TarjetaGrafica("RTX 3060 Ti", "NVIDIA", 399),
    new TarjetaGrafica("RTX 3070", "NVIDIA", 499),
    new TarjetaGrafica("RTX 3070 Ti", "NVIDIA", 599),
    new TarjetaGrafica("RTX 3080", "NVIDIA", 699),
    new TarjetaGrafica("RTX 3080 Ti", "NVIDIA", 1199),
    new TarjetaGrafica("RTX 3090", "NVIDIA", 1499),
    new TarjetaGrafica("RTX 3090 Ti", "NVIDIA", 1999),
    new TarjetaGrafica("RTX 4060", "NVIDIA", 299),
    new TarjetaGrafica("RTX 4060 Ti", "NVIDIA", 399),
    new TarjetaGrafica("RTX 4070", "NVIDIA", 599),
    new TarjetaGrafica("RTX 4070 Ti", "NVIDIA", 799),
    new TarjetaGrafica("RTX 4080", "NVIDIA", 1199),
    new TarjetaGrafica("RTX 4090", "NVIDIA", 1599)
];

const tarjetaGraficasAMD = [
    new TarjetaGrafica("RX 5500 XT", "AMD", 199),
    new TarjetaGrafica("RX 5600 XT", "AMD", 279),
    new TarjetaGrafica("RX 5700", "AMD", 349),
    new TarjetaGrafica("RX 5700 XT", "AMD", 399),
    new TarjetaGrafica("RX 6600", "AMD", 329),
    new TarjetaGrafica("RX 6600 XT", "AMD", 379),
    new TarjetaGrafica("RX 6650 XT", "AMD", 399),
    new TarjetaGrafica("RX 6700 XT", "AMD", 479),
    new TarjetaGrafica("RX 6750 XT", "AMD", 549),
    new TarjetaGrafica("RX 6800", "AMD", 579),
    new TarjetaGrafica("RX 6800 XT", "AMD", 649),
    new TarjetaGrafica("RX 6900 XT", "AMD", 999),
    new TarjetaGrafica("RX 6950 XT", "AMD", 1099),
    new TarjetaGrafica("RX 7600", "AMD", 269),
    new TarjetaGrafica("RX 7700 XT", "AMD", 449),
    new TarjetaGrafica("RX 7800 XT", "AMD", 499),
    new TarjetaGrafica("RX 7900 XT", "AMD", 849),
    new TarjetaGrafica("RX 7900 XTX", "AMD", 999)
];




function Motherboard(nombre, marca, socket, chipset, precio) {
    this.nombre = nombre;
    this.marca = marca;
    this.socket = socket;
    this.chipset = chipset;
    this.precio = precio;
}

const motherboardsIntel = [
    new Motherboard("ASUS ROG Strix Z690-E Gaming WiFi", "ASUS", "LGA 1700", "Z690", 380),
    new Motherboard("MSI MPG Z690 Carbon WiFi", "MSI", "LGA 1700", "Z690", 350),
    new Motherboard("Gigabyte Z690 AORUS Elite AX", "Gigabyte", "LGA 1700", "Z690", 320),
    new Motherboard("ASRock Z690 Extreme", "ASRock", "LGA 1700", "Z690", 270),

    new Motherboard("ASUS ROG Strix Z490-E Gaming", "ASUS", "LGA 1200", "Z490", 280),
    new Motherboard("MSI MPG Z490 Gaming Edge WiFi", "MSI", "LGA 1200", "Z490", 200),
    new Motherboard("Gigabyte Z490 AORUS Master", "Gigabyte", "LGA 1200", "Z490", 300),
    new Motherboard("ASRock Z490 Taichi", "ASRock", "LGA 1200", "Z490", 370),
    new Motherboard("ASUS Prime Z590-A", "ASUS", "LGA 1200", "Z590", 250),
    new Motherboard("MSI MEG Z590 ACE", "MSI", "LGA 1200", "Z590", 400),
    new Motherboard("Gigabyte Z590 AORUS Elite", "Gigabyte", "LGA 1200", "Z590", 230),
    new Motherboard("ASRock Z590 Extreme WiFi 6E", "ASRock", "LGA 1200", "Z590", 220),

    new Motherboard("MSI Z390-A PRO", "MSI", "LGA 1151", "Z390", 140),
    new Motherboard("Gigabyte Z390 AORUS Ultra", "Gigabyte", "LGA 1151", "Z390", 260),
    new Motherboard("ASUS ROG Maximus XI Hero (Wi-Fi)", "ASUS", "LGA 1151", "Z390", 290),
    new Motherboard("ASRock Z390 Phantom Gaming 4", "ASRock", "LGA 1151", "Z390", 150),
    new Motherboard("MSI MPG Z390 Gaming Pro Carbon", "MSI", "LGA 1151", "Z390", 200),
    new Motherboard("ASUS TUF Z370-PLUS Gaming", "ASUS", "LGA 1151", "Z370", 160),

    new Motherboard("ASUS Z97-A", "ASUS", "LGA 1150", "Z97", 180),
    new Motherboard("MSI Z97 Gaming 5", "MSI", "LGA 1150", "Z97", 160),
    new Motherboard("Gigabyte Z97X-UD3H-BK", "Gigabyte", "LGA 1150", "Z97", 150),
    new Motherboard("ASRock Z97 Extreme4", "ASRock", "LGA 1150", "Z97", 140)
];

const motherboardsAMD = [
    new Motherboard("ASUS ROG Crosshair X670E Hero", "ASUS", "AM5", "X670E", 500),
    new Motherboard("MSI MEG X670E Ace", "MSI", "AM5", "X670E", 550),
    new Motherboard("Gigabyte X670 AORUS Master", "Gigabyte", "AM5", "X670", 450),
    new Motherboard("ASRock X670E Taichi", "ASRock", "AM5", "X670E", 480),

    new Motherboard("ASUS ROG Strix X570-E Gaming WiFi II", "ASUS", "AM4", "X570", 320),
    new Motherboard("MSI MPG B550 Gaming Edge WiFi", "MSI", "AM4", "B550", 180),
    new Motherboard("Gigabyte B550 AORUS Elite V2", "Gigabyte", "AM4", "B550", 160),
    new Motherboard("ASRock B450 Steel Legend", "ASRock", "AM4", "B450", 100),
    new Motherboard("ASUS TUF Gaming X570-Plus WiFi", "ASUS", "AM4", "X570", 200),
    new Motherboard("MSI B450 Tomahawk Max", "MSI", "AM4", "B450", 110),
    new Motherboard("Gigabyte X570 AORUS Elite", "Gigabyte", "AM4", "X570", 200),
    new Motherboard("ASRock B550 Taichi", "ASRock", "AM4", "B550", 240),

    new Motherboard("ASUS ROG Crosshair V Formula-Z", "ASUS", "AM3+", "990FX", 200),
    new Motherboard("MSI 970 Gaming", "MSI", "AM3+", "970", 130),
    new Motherboard("Gigabyte GA-990FXA-UD3", "Gigabyte", "AM3+", "990FX", 150),
    new Motherboard("ASRock 970 Extreme4", "ASRock", "AM3+", "970", 110)
];

function FuenteDePoder(nombre, marca, potencia, certificacion, precio) {
    this.nombre = nombre;
    this.marca = marca;
    this.potencia = potencia;
    this.certificacion = certificacion;
    this.precio = precio;
}

const fuentesDePoder = [
    new FuenteDePoder("Corsair RM550x", "Corsair", 550, "80 Plus Gold", 90),
    new FuenteDePoder("EVGA SuperNOVA 650 G5", "EVGA", 650, "80 Plus Gold", 120),
    new FuenteDePoder("Seasonic Focus GX-750", "Seasonic", 750, "80 Plus Gold", 130),
    new FuenteDePoder("Corsair RM850x", "Corsair", 850, "80 Plus Gold", 140),
    new FuenteDePoder("Cooler Master V850", "Cooler Master", 850, "80 Plus Gold", 150),
    new FuenteDePoder("Thermaltake Toughpower GF1 650W", "Thermaltake", 650, "80 Plus Gold", 110),
    new FuenteDePoder("ASUS ROG Strix 750W", "ASUS", 750, "80 Plus Gold", 135),
    new FuenteDePoder("NZXT C850", "NZXT", 850, "80 Plus Gold", 140),
    new FuenteDePoder("be quiet! Straight Power 11 850W", "be quiet!", 850, "80 Plus Platinum", 160),
    new FuenteDePoder("Corsair AX1000", "Corsair", 1000, "80 Plus Titanium", 280),
    new FuenteDePoder("EVGA SuperNOVA 1000 T2", "EVGA", 1000, "80 Plus Titanium", 300),
    new FuenteDePoder("Seasonic Prime TX-850", "Seasonic", 850, "80 Plus Titanium", 250),
    new FuenteDePoder("Thermaltake Toughpower iRGB Plus 850W", "Thermaltake", 850, "80 Plus Platinum", 190),
    new FuenteDePoder("Cooler Master MWE Gold 650 V2", "Cooler Master", 650, "80 Plus Gold", 90),
    new FuenteDePoder("MSI MPG A850GF", "MSI", 850, "80 Plus Gold", 130),
    new FuenteDePoder("Gigabyte P750GM", "Gigabyte", 750, "80 Plus Gold", 100),
    new FuenteDePoder("be quiet! Dark Power Pro 12 1200W", "be quiet!", 1200, "80 Plus Titanium", 400),
    new FuenteDePoder("ASUS ROG Thor 1200W", "ASUS", 1200, "80 Plus Platinum", 350)
];

function MemoriaRAM(nombre, marca, capacidad, frecuencia, tipo, precio) {
    this.nombre = nombre;
    this.marca = marca;
    this.capacidad = capacidad;
    this.frecuencia = frecuencia;
    this.tipo = tipo;
    this.precio = precio;
}

const memoriasRAM = [
    new MemoriaRAM("Corsair Vengeance LPX 16GB", "Corsair", "16GB (2x8GB)", 3200, "DDR4", 70),
    new MemoriaRAM("G.Skill Ripjaws V 16GB", "G.Skill", "16GB (2x8GB)", 3600, "DDR4", 80),
    new MemoriaRAM("Kingston FURY Beast 32GB", "Kingston", "32GB (2x16GB)", 3200, "DDR4", 120),
    new MemoriaRAM("Corsair Dominator Platinum RGB 32GB", "Corsair", "32GB (2x16GB)", 3600, "DDR4", 150),
    new MemoriaRAM("G.Skill Trident Z RGB 32GB", "G.Skill", "32GB (2x16GB)", 4000, "DDR4", 180),
    new MemoriaRAM("Kingston FURY Beast 64GB", "Kingston", "64GB (2x32GB)", 3200, "DDR4", 250),
    new MemoriaRAM("Corsair Vengeance DDR5 32GB", "Corsair", "32GB (2x16GB)", 5200, "DDR5", 220),
    new MemoriaRAM("G.Skill Ripjaws S5 32GB", "G.Skill", "32GB (2x16GB)", 6000, "DDR5", 250),
    new MemoriaRAM("Crucial Ballistix 16GB", "Crucial", "16GB (2x8GB)", 3200, "DDR4", 65),
    new MemoriaRAM("TeamGroup T-Force Delta RGB 32GB", "TeamGroup", "32GB (2x16GB)", 3600, "DDR4", 140),
    new MemoriaRAM("Corsair Dominator Platinum RGB 64GB", "Corsair", "64GB (2x32GB)", 5200, "DDR5", 450),
    new MemoriaRAM("G.Skill Trident Z5 RGB 32GB", "G.Skill", "32GB (2x16GB)", 6000, "DDR5", 280),
    new MemoriaRAM("TeamGroup Elite Plus 16GB", "TeamGroup", "16GB (2x8GB)", 3200, "DDR4", 60),
    new MemoriaRAM("Crucial Ballistix Max 32GB", "Crucial", "32GB (2x16GB)", 4000, "DDR4", 200),
    new MemoriaRAM("Kingston FURY Renegade 32GB", "Kingston", "32GB (2x16GB)", 6000, "DDR5", 240),
    new MemoriaRAM("Patriot Viper Steel 16GB", "Patriot", "16GB (2x8GB)", 3733, "DDR4", 75)
];

function SSD(nombre, marca, capacidad, tipo, velocidadLectura, velocidadEscritura, precio) {
    this.nombre = nombre;
    this.marca = marca;
    this.capacidad = capacidad;
    this.tipo = tipo;
    this.velocidadLectura = velocidadLectura;
    this.velocidadEscritura = velocidadEscritura;
    this.precio = precio;
}

const ssds = [
    new SSD("Samsung 970 EVO Plus", "Samsung", "1TB", "M.2 NVMe", 3500, 3300, 130),
    new SSD("WD Black SN850", "Western Digital", "1TB", "M.2 NVMe", 7000, 5300, 150),
    new SSD("Crucial MX500", "Crucial", "1TB", "SATA", 560, 510, 85),
    new SSD("Samsung 980 Pro", "Samsung", "2TB", "M.2 NVMe", 7000, 5000, 220),
    new SSD("Kingston KC2500", "Kingston", "1TB", "M.2 NVMe", 3500, 2900, 140),
    new SSD("Sabrent Rocket 4 Plus", "Sabrent", "2TB", "M.2 NVMe", 7100, 6600, 250),
    new SSD("WD Blue SN550", "Western Digital", "500GB", "M.2 NVMe", 2400, 1950, 60),
    new SSD("Crucial P5 Plus", "Crucial", "1TB", "M.2 NVMe", 6600, 5000, 150),
    new SSD("ADATA XPG SX8200 Pro", "ADATA", "1TB", "M.2 NVMe", 3500, 3000, 120),
    new SSD("Seagate FireCuda 520", "Seagate", "2TB", "M.2 NVMe", 5000, 4850, 210),
    new SSD("Samsung 870 EVO", "Samsung", "2TB", "SATA", 560, 530, 220),
    new SSD("WD Black SN770", "Western Digital", "1TB", "M.2 NVMe", 5150, 4900, 130),
    new SSD("Kingston A2000", "Kingston", "500GB", "M.2 NVMe", 2200, 2000, 70),
    new SSD("Sabrent Rocket Q", "Sabrent", "1TB", "M.2 NVMe", 3200, 2900, 110),
    new SSD("Corsair MP600 PRO", "Corsair", "2TB", "M.2 NVMe", 7000, 6800, 240),
    new SSD("Samsung 860 EVO", "Samsung", "1TB", "SATA", 550, 520, 100),
    new SSD("TeamGroup T-Force Cardea Zero Z440", "TeamGroup", "1TB", "M.2 NVMe", 5000, 4400, 140),
    new SSD("Patriot Viper VP4300", "Patriot", "2TB", "M.2 NVMe", 7400, 6800, 270)
];

function HDD(nombre, marca, capacidad, velocidadRPM, interfaz, precio) {
    this.nombre = nombre;
    this.marca = marca;
    this.capacidad = capacidad;
    this.velocidadRPM = velocidadRPM;
    this.interfaz = interfaz;
    this.precio = precio;
}

const hdds = [
    new HDD("WD Blue", "Western Digital", "1TB", 7200, "SATA", 50),
    new HDD("Seagate BarraCuda", "Seagate", "2TB", 7200, "SATA", 70),
    new HDD("Toshiba P300", "Toshiba", "2TB", 7200, "SATA", 65),
    new HDD("WD Black", "Western Digital", "4TB", 7200, "SATA", 130),
    new HDD("Seagate IronWolf", "Seagate", "4TB", 5900, "SATA", 115),
    new HDD("Toshiba X300", "Toshiba", "4TB", 7200, "SATA", 110),
    new HDD("Seagate Exos X16", "Seagate", "10TB", 7200, "SATA", 320),
    new HDD("WD Red Plus", "Western Digital", "8TB", 5400, "SATA", 240),
    new HDD("Toshiba N300", "Toshiba", "8TB", 7200, "SATA", 230),
    new HDD("Seagate BarraCuda Pro", "Seagate", "6TB", 7200, "SATA", 180),
    new HDD("WD Purple", "Western Digital", "6TB", 5400, "SATA", 160),
    new HDD("Seagate SkyHawk", "Seagate", "8TB", 7200, "SATA", 250),
    new HDD("Toshiba L200", "Toshiba", "1TB", 5400, "SATA", 45),
    new HDD("HGST Ultrastar", "HGST", "12TB", 7200, "SATA", 400),
    new HDD("Seagate IronWolf Pro", "Seagate", "12TB", 7200, "SATA", 370),
    new HDD("WD Gold", "Western Digital", "14TB", 7200, "SATA", 500),
    new HDD("Seagate BarraCuda", "Seagate", "1TB", 7200, "SATA", 45),
    new HDD("WD Red", "Western Digital", "4TB", 5400, "SATA", 110),
    new HDD("Toshiba MG Series", "Toshiba", "16TB", 7200, "SATA", 600)
];

function Gabinete(nombre, marca, tipo, compatibilidadMotherboard, precio) {
    this.nombre = nombre;
    this.marca = marca;
    this.tipo = tipo;
    this.compatibilidadMotherboard = compatibilidadMotherboard;
    this.precio = precio;
}

const gabinetes = [
    new Gabinete("NZXT H510", "NZXT", "ATX", "ATX, Micro-ATX, Mini-ITX", 100),
    new Gabinete("Corsair 4000D", "Corsair", "ATX", "ATX, Micro-ATX, Mini-ITX", 95),
    new Gabinete("Cooler Master MasterBox Q300L", "Cooler Master", "Micro-ATX", "Micro-ATX, Mini-ITX", 60),
    new Gabinete("Fractal Design Meshify C", "Fractal Design", "ATX", "ATX, Micro-ATX, Mini-ITX", 110),
    new Gabinete("Thermaltake Core P3", "Thermaltake", "ATX", "ATX, Micro-ATX, Mini-ITX", 150),
    new Gabinete("Lian Li PC-O11 Dynamic", "Lian Li", "ATX", "ATX, Micro-ATX, Mini-ITX", 140),
    new Gabinete("Phanteks Eclipse P300A", "Phanteks", "ATX", "ATX, Micro-ATX, Mini-ITX", 75),
    new Gabinete("be quiet! Pure Base 500", "be quiet!", "ATX", "ATX, Micro-ATX, Mini-ITX", 90),
    new Gabinete("Thermaltake V200", "Thermaltake", "ATX", "ATX, Micro-ATX, Mini-ITX", 70),
    new Gabinete("SilverStone SG13", "SilverStone", "Mini-ITX", "Mini-ITX", 55)
];