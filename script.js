// ====================== BASE DE DATOS DE PRODUCTOS (Inventario) ======================
const PRODUCTS_CATALOG = [
    { id: "CCR-001", name: "Galletas", cost: 15.00 },
{ id: "CCR-002", name: "Papas Sol", cost: 18.00 },
{ id: "CCR-003", name: "Skwinkles", cost: 15.00 },
{ id: "CCR-004", name: "Bocadines", cost: 3.00 },
{ id: "CCR-005", name: "Boing 500 ml", cost: 18.00 },
{ id: "CCR-006", name: "Tamarroca", cost: 5.00 },
{ id: "CCR-007", name: "Shersheys", cost: 10.00 },
{ id: "CCR-008", name: "Refreco de sabor", cost: 18.00 },
{ id: "CCR-009", name: "Skittles", cost: 12.00 },
{ id: "CCR-010", name: "Coca Cola 600 ml", cost: 25.00 },
{ id: "CCR-011", name: "Tupsi-Pop", cost: 5.00 },
{ id: "CCR-012", name: "Agua", cost: 12.00 },
{ id: "CCR-013", name: "Nito", cost: 20.00 },
{ id: "CCR-014", name: "Picafresas", cost: 2.00 },
{ id: "CCR-015", name: "Pelon", cost: 10.00 },
{ id: "CCR-016", name: "Chocorrol", cost: 20.00 },
{ id: "CCR-017", name: "Gansito", cost: 18.00 },
{ id: "CCR-018", name: "Panque Chocolate", cost: 20.00 },
{ id: "CCR-019", name: "Cafe Chico", cost: 20.00 },
{ id: "CCR-020", name: "Cafe Grande", cost: 25.00 },
{ id: "CCR-021", name: "Te", cost: 15.00 },
{ id: "CCR-022", name: "Chocolatin", cost: 20.00 },
{ id: "CCR-023", name: "Panque Chico", cost: 15.00 },
{ id: "CCR-024", name: "Palomitas Charly", cost: 15.00 },
{ id: "CCR-025", name: "Mirinda 600 ml", cost: 20.00 },
{ id: "CCR-026", name: "galleta giro 95 g", cost: 18.00 },
{ id: "CCR-027", name: "Chokis 57g", cost: 18.00 },
{ id: "CCR-028", name: "Ritz 89g", cost: 15.00 },
{ id: "CCR-029", name: "Canelitas 30g", cost: 8.00 },
{ id: "CCR-030", name: "Principe 42g", cost: 8.00 },
{ id: "CCR-031", name: "Nikolo", cost: 8.00 },
{ id: "CCR-032", name: "Agua Bonafon 1lt", cost: 12.00 },
{ id: "CCR-033", name: "Pastelitos Shersheys", cost: 15.00 },
{ id: "CCR-034", name: "Galletas de cereal 3pzas", cost: 15.00 },
{ id: "CCR-035", name: "Churritos Charly", cost: 15.00 },
{ id: "CCR-036", name: "Mentos", cost: 12.00 },
{ id: "CCR-037", name: "Cacahuate Japones", cost: 15.00 },
{ id: "CCR-038", name: "Cacahuate Surtido", cost: 15.00 },
{ id: "CCR-039", name: "Palanqueta", cost: 10.00 },
{ id: "CCR-040", name: "Alegrias", cost: 10.00 },
{ id: "CCR-041", name: "Paleta de menta", cost: 7.00 },
{ id: "CCR-042", name: "Coca Cola 300 ml", cost: 20.00 },
{ id: "CCR-043", name: "Refresco pascual 600 ml", cost: 17.00 },
{ id: "CCR-044", name: "Barritas de fresa", cost: 8.00 },
{ id: "CCR-045", name: "Chicles Trident", cost: 12.00 },
{ id: "CCR-046", name: "Agua Pascual", cost: 15.00 },
{ id: "CCR-047", name: "Café capuchino chico", cost: 25.00 },
{ id: "CCR-048", name: "Café capuchino grande", cost: 30.00 },
{ id: "CCR-049", name: "Coca Cola Zero", cost: 20.00 },
{ id: "CCR-050", name: "Boing trinagulo", cost: 12.00 },
{ id: "CCR-051", name: "Mazapan Natural", cost: 15.00 },
{ id: "CCR-052", name: "Alegria de sabor", cost: 7.00 },
{ id: "CCR-053", name: "Palomitas saborizadas", cost: 15.00 },
{ id: "CCR-054", name: "Triki - Trakes", cost: 8.00 },
{ id: "CCR-055", name: "Winnies", cost: 5.00 },
{ id: "CCR-056", name: "Polvoron naranja", cost: 8.00 },
{ id: "CCR-057", name: "Oreo 47 gr", cost: 12.00 },
{ id: "CCR-058", name: "principe 378 gr", cost: 12.00 },
{ id: "CCR-059", name: "Agua Vita 500 ml", cost: 10.00 },
{ id: "CCR-060", name: "Paletas de dulce", cost: 5.00 },
{ id: "CCR-061", name: "Bombon de la Rosa", cost: 15.00 },
{ id: "CCR-062", name: "canels", cost: 4.00 },
{ id: "CCR-063", name: "pulparindo", cost: 8.00 },
{ id: "CCR-064", name: "trueno huevito", cost: 7.00 },
{ id: "CCR-065", name: "buñuelos - mueganos", cost: 12.00 },
{ id: "CCR-066", name: "Yakult", cost: 12.00 },
{ id: "F-1", name: "Portavasos", cost: 55.00 },
{ id: "F-2", name: "Separador", cost: 35.00 },
{ id: "F-3", name: "Portacelular", cost: 60.00 },
{ id: "F-4", name: "Organizador de escritorio", cost: 175.00 },
{ id: "F-5", name: "Joyero", cost: 170.00 },
{ id: "F-6", name: "Libreta Madera Personalizada", cost: 70.00 },
{ id: "F-7", name: "Llaveros MDF", cost: 25.00 },
{ id: "F-8", name: "Juego gato G", cost: 60.00 },
{ id: "F-9", name: "Juego gato M", cost: 35.00 },
{ id: "F-10", name: "Ofrenda de Dia de Muertos", cost: 385.00 },
{ id: "F-11", name: "Lámparas solares", cost: 0.00 },
{ id: "N-1", name: "Jabón artesanales 70g", cost: 50.00 },
{ id: "N-2", name: "Jabón atesanales 100g", cost: 55.00 },
{ id: "N-3", name: "velas de masaje negras", cost: 125.00 },
{ id: "N-4", name: "velas de masaje doradas", cost: 125.00 },
{ id: "N-5", name: "velas tarro grande aromática", cost: 115.00 },
{ id: "N-6", name: "Vela de cera de abeja", cost: 95.00 },
{ id: "N-7", name: "Velas decorativas", cost: 50.00 },
{ id: "N-8", name: "Vela tarro dorado", cost: null },
{ id: "N-9", name: "Cuchara de bambú", cost: 20.00 },
{ id: "N-10", name: "Miel multifloral 70", cost: 40.00 },
{ id: "N-11", name: "Miel multifloral 300", cost: 110.00 },
{ id: "N-12", name: "Miel multifloral 500", cost: 185.00 },
{ id: "N-13", name: "Miel multifloral 1200", cost: 365.00 },
{ id: "N-14", name: "Abejorro Amigurumis", cost: 55.00 },
{ id: "N-15", name: "cuchara panal", cost: 30.00 },
{ id: "N-16", name: "Miel Mezquite 70", cost: 40.00 },
{ id: "N-16.1", name: "Miel Mezquite 70 adornada", cost: 50.00 },
{ id: "N-17", name: "Miel Mezquite 300", cost: 110.00 },
{ id: "N-18", name: "Miel Mezquite de 500", cost: 185.00 },
{ id: "N-19", name: "Miel Mezquite de 1200", cost: 365.00 },
{ id: "N-20", name: "Propoleo liquido 30ml", cost: 125.00 },
{ id: "N-21", name: "Penca de Miel", cost: 70.00 },
{ id: "N-22", name: "Balsamo Labial Tapa Negra", cost: 40.00 },
{ id: "N-23", name: "", cost: null },
{ id: "T-1", name: "Funda de laptop", cost: 255.00 },
{ id: "T-2", name: "Kit desmaquillantes", cost: 140.00 },
{ id: "T-3", name: "Portacubiertos", cost: 140.00 },
{ id: "T-4", name: "Cosmetiqueras", cost: 140.00 },
{ id: "T-5", name: "Totebag", cost: 175.00 },
{ id: "TC-1", name: "Gomitas 50gr", cost: 15.00 },
{ id: "TC-2", name: "Paletas", cost: 10.00 },
{ id: "TC-3", name: "tónico", cost: 100.00 },
{ id: "TC-4", name: "Bálsamos", cost: 25.00 },
{ id: "TC-5", name: "crema 50ml", cost: 40.00 },
{ id: "TC-6", name: "crema 150 ml", cost: 65.00 },
{ id: "TC-7", name: "Crema 250ml", cost: 115.00 },
{ id: "TC-8", name: "Crema de 500ml", cost: 145.00 },
{ id: "TC-9", name: "Stickers", cost: 15.00 },
{ id: "TC-10", name: "Pines", cost: 20.00 },
{ id: "TC-11", name: "Pulseras chica", cost: 25.00 },
{ id: "TC-12", name: "Pulsera mediana", cost: 35.00 },
{ id: "TC-13", name: "Pulsera grande", cost: 40.00 },
{ id: "TC-14", name: "Pulsera mega", cost: 60.00 },
{ id: "TC-15", name: "Gargantilla", cost: 80.00 },
{ id: "TC-16", name: "Pomada", cost: 35.00 },
{ id: "TC-17", name: "Serúm facial", cost: 155.00 },
{ id: "TC-18", name: "Crema facial", cost: 145.00 },
{ id: "TC-19", name: "Desmaquillante y limpiador facial", cost: 80.00 },
{ id: "TC-20", name: "Crema con protección solar", cost: 50.00 },
{ id: "TC-21", name: "Spray de propoleo", cost: 70.00 },
{ id: "TC-22", name: "crema 50ml cacao", cost: 40.00 },
{ id: "TC-24", name: "Crema 250ml cacao", cost: 115.00 },
{ id: "TC-25", name: "Crema de 500ml cacao", cost: 145.00 },
{ id: "TC-26", name: "Caramelos 50gr", cost: 15.00 }
];

// Almacenamiento de ventas (en memoria)
let salesRegistry = [];
const RESET_PASSWORD = "Fany";
const STORAGE_KEY = "ventas_registry"; // Clave para localStorage

// Referencias DOM
const inventoryBody = document.getElementById("inventoryBody");
const salesBody = document.getElementById("salesBody");
const productIdInput = document.getElementById("productId");
const quantityInput = document.getElementById("quantity");
const addSaleBtn = document.getElementById("addSaleBtn");
const totalSalesSpan = document.getElementById("totalSalesAmount");
const totalItemsSpan = document.getElementById("totalItemsCount");
const sortByIdBtn = document.getElementById("sortByIdBtn");
const sortByDateBtn = document.getElementById("sortByDateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const resetBtn = document.getElementById("resetBtn");
const previewInfo = document.getElementById("previewInfo");
const previewText = document.getElementById("previewText");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const productCountSpan = document.getElementById("productCount");

// Elementos colapsables
const inventoryHeader = document.getElementById("inventoryHeader");
const inventoryContent = document.getElementById("inventoryContent");
const collapseIcon = document.getElementById("collapseIcon");

// Modal Elements
const modal = document.getElementById("passwordModal");
const closeModalSpan = document.querySelector(".close");
const confirmResetBtn = document.getElementById("confirmResetBtn");
const cancelModalBtn = document.getElementById("cancelModalBtn");
const resetPasswordInput = document.getElementById("resetPassword");
const passErrorSpan = document.getElementById("passError");

// Estado del catálogo colapsado
let isCatalogCollapsed = false;

// ====================== FUNCIONES DE PERSISTENCIA ======================

// Guardar ventas en localStorage
function saveSalesToLocalStorage() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(salesRegistry));
        console.log("✅ Ventas guardadas en localStorage");
    } catch (error) {
        console.error("Error al guardar ventas:", error);
    }
}

// Cargar ventas desde localStorage
function loadSalesFromLocalStorage() {
    try {
        const savedSales = localStorage.getItem(STORAGE_KEY);
        if (savedSales) {
            salesRegistry = JSON.parse(savedSales);
            // Restaurar las fechas correctamente (los objetos Date se convierten a string al guardar)
            salesRegistry.forEach(sale => {
                if (typeof sale.timestamp === "string") {
                    sale.timestamp = parseInt(sale.timestamp);
                }
            });
            console.log(`📦 Ventas cargadas: ${salesRegistry.length} registros`);
        } else {
            console.log("No hay ventas guardadas previamente");
            salesRegistry = [];
        }
    } catch (error) {
        console.error("Error al cargar ventas:", error);
        salesRegistry = [];
    }
}

// ====================== FUNCIONES DE INTERFAZ ======================

// Cargar tabla de productos
function renderInventory() {
    inventoryBody.innerHTML = "";
    PRODUCTS_CATALOG.forEach(product => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><strong>${product.id}</strong></td>
            <td>${product.name}</td>
            <td>${product.cost.toFixed(2)} €</td>
        `;
        inventoryBody.appendChild(row);
    });
    productCountSpan.textContent = `${PRODUCTS_CATALOG.length} productos`;
}

// Actualizar tabla de ventas
function renderSales() {
    if (!salesBody) return;
    
    if (salesRegistry.length === 0) {
        salesBody.innerHTML = `<tr class="empty-row"><td colspan="6">No hay ventas registradas</td></tr>`;
        totalSalesSpan.innerText = "0.00 €";
        totalItemsSpan.innerText = "0 unidades vendidas";
        return;
    }
    
    salesBody.innerHTML = "";
    let totalGeneral = 0;
    let totalUnidades = 0;
    
    salesRegistry.forEach((sale) => {
        totalGeneral += sale.subtotal;
        totalUnidades += sale.quantity;
        
        const row = document.createElement("tr");
        const dateObj = new Date(sale.timestamp);
        const formattedDate = `${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}`;
        
        row.innerHTML = `
            <td><strong>${sale.id}</strong></td>
            <td>${sale.productName}</td>
            <td>${sale.unitCost.toFixed(2)} €</td>
            <td style="font-weight: 600; color: var(--btn-primary);">${sale.quantity} unidades</td>
            <td style="font-weight: 700; color: #059669;">${sale.subtotal.toFixed(2)} €</td>
            <td style="font-size:0.75rem;">${formattedDate}</td>
        `;
        salesBody.appendChild(row);
    });
    
    totalSalesSpan.innerText = `${totalGeneral.toFixed(2)} €`;
    totalItemsSpan.innerText = `${totalUnidades} unidades vendidas en ${salesRegistry.length} transacciones`;
}

// Vista previa del producto
function updatePreview() {
    const idRaw = productIdInput.value.trim();
    if (idRaw === "") {
        previewInfo.style.display = "none";
        return;
    }
    
    const foundProduct = PRODUCTS_CATALOG.find(product => product.id === idRaw);
    if (foundProduct) {
        const cantidad = parseInt(quantityInput.value) || 1;
        const subtotalPreview = foundProduct.cost * cantidad;
        previewText.innerHTML = `Producto: <strong>${foundProduct.name}</strong> | Costo unitario: <strong>${foundProduct.cost.toFixed(2)} €</strong> | Subtotal para ${cantidad} unidad(es): <strong style="color:#059669;">${subtotalPreview.toFixed(2)} €</strong>`;
        previewInfo.style.display = "block";
        previewInfo.style.background = "var(--preview-bg)";
        previewInfo.style.color = "var(--preview-text)";
    } else if (idRaw !== "") {
        previewText.innerHTML = `⚠️ No se encontró el producto con ID "${idRaw}"`;
        previewInfo.style.display = "block";
        previewInfo.style.background = "#fee2e2";
        previewInfo.style.color = "#991b1b";
    }
}

// Agregar venta
function addSale() {
    const idRaw = productIdInput.value.trim();
    const quantity = parseInt(quantityInput.value);
    
    if (!idRaw) {
        alert("⚠️ Por favor, ingrese un ID de producto.");
        productIdInput.focus();
        return;
    }
    
    if (isNaN(quantity) || quantity <= 0) {
        alert("⚠️ La cantidad debe ser un número mayor a 0.");
        quantityInput.value = "1";
        quantityInput.focus();
        return;
    }
    
    const foundProduct = PRODUCTS_CATALOG.find(product => product.id === idRaw);
    if (!foundProduct) {
        alert(`❌ No existe el producto con ID "${idRaw}". Verifique el catálogo de productos.`);
        productIdInput.value = "";
        productIdInput.focus();
        updatePreview();
        return;
    }
    
    const subtotal = foundProduct.cost * quantity;
    
    const newSale = {
        id: foundProduct.id,
        productName: foundProduct.name,
        unitCost: foundProduct.cost,
        quantity: quantity,
        subtotal: subtotal,
        timestamp: Date.now()
    };
    
    salesRegistry.push(newSale);
    renderSales();
    saveSalesToLocalStorage(); // GUARDAR AUTOMÁTICAMENTE
    
    showTemporaryMessage(`✅ Venta registrada: ${quantity} x ${foundProduct.name} = ${subtotal.toFixed(2)} €`);
    
    productIdInput.value = "";
    quantityInput.value = "1";
    productIdInput.focus();
    updatePreview();
}

// Mostrar mensaje temporal
function showTemporaryMessage(message) {
    const existingMsg = document.querySelector('.temp-message');
    if (existingMsg) existingMsg.remove();
    
    const msgDiv = document.createElement('div');
    msgDiv.className = 'temp-message';
    msgDiv.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--btn-primary);
        color: white;
        padding: 12px 20px;
        border-radius: 40px;
        font-weight: 500;
        z-index: 9999;
        animation: fadeInOut 2.5s ease forwards;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;
    msgDiv.textContent = message;
    document.body.appendChild(msgDiv);
    
    setTimeout(() => {
        if (msgDiv) msgDiv.remove();
    }, 2500);
}

// Ordenar ventas
function sortSalesById() {
    if (salesRegistry.length === 0) {
        alert("No hay ventas para ordenar.");
        return;
    }
    salesRegistry.sort((a, b) => a.id.localeCompare(b.id));
    renderSales();
    saveSalesToLocalStorage(); // Guardar el orden
    showTemporaryMessage("📋 Ventas ordenadas por ID");
}

function sortSalesByDate() {
    if (salesRegistry.length === 0) {
        alert("No hay ventas para ordenar.");
        return;
    }
    salesRegistry.sort((a, b) => b.timestamp - a.timestamp);
    renderSales();
    saveSalesToLocalStorage(); // Guardar el orden
    showTemporaryMessage("📅 Ventas ordenadas por fecha");
}

// Descargar Excel
function downloadSalesAsExcel() {
    if (salesRegistry.length === 0) {
        alert("⚠️ No hay ventas registradas para descargar.");
        return;
    }
    
    // Crear el contenido del archivo Excel (formato XLSX mediante HTML)
    let excelContent = `
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Reporte de Ventas</title>
            <style>
                th { background-color: #2c3e66; color: white; padding: 8px; border: 1px solid #ddd; }
                td { padding: 6px; border: 1px solid #ddd; }
                table { border-collapse: collapse; width: 100%; }
                .total-row { background-color: #fef9c3; font-weight: bold; }
            </style>
        </head>
        <body>
            <h2>Reporte de Ventas</h2>
            <p>Fecha de generación: ${new Date().toLocaleString()}</p>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre Producto</th>
                        <th>Costo Unitario (€)</th>
                        <th>Cantidad</th>
                        <th>Subtotal (€)</th>
                        <th>Fecha/Hora</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    // Calcular totales
    let totalGeneral = 0;
    let totalUnidades = 0;
    
    // Agregar cada venta
    salesRegistry.forEach(sale => {
        totalGeneral += sale.subtotal;
        totalUnidades += sale.quantity;
        const dateObj = new Date(sale.timestamp);
        const formattedDate = `${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}`;
        
        excelContent += `
                    <tr>
                        <td>${sale.id}</td>
                        <td>${sale.productName}</td>
                        <td>${sale.unitCost.toFixed(2)}</td>
                        <td>${sale.quantity}</td>
                        <td>${sale.subtotal.toFixed(2)}</td>
                        <td>${formattedDate}</td>
                    </tr>
        `;
    });
    
    // Agregar fila de totales
    excelContent += `
                </tbody>
                <tfoot>
                    <tr class="total-row">
                        <td colspan="3"><strong>TOTALES:</strong></td>
                        <td><strong>${totalUnidades} unidades</strong></td>
                        <td><strong>${totalGeneral.toFixed(2)} €</strong></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="6"><strong>Transacciones realizadas: ${salesRegistry.length}</strong></td>
                    </tr>
                </tfoot>
            </table>
            
            <br>
            <h3>Resumen de Ventas</h3>
            <ul>
                <li>Total de ventas: ${totalGeneral.toFixed(2)} €</li>
                <li>Total de unidades vendidas: ${totalUnidades}</li>
                <li>Número de transacciones: ${salesRegistry.length}</li>
            </ul>
        </body>
        </html>
    `;
    
    // Crear blob y descargar como archivo .xls
    const blob = new Blob([excelContent], { type: "application/vnd.ms-excel" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.href = url;
    const fecha = new Date();
    const fechaStr = `${fecha.getFullYear()}-${(fecha.getMonth()+1).toString().padStart(2,'0')}-${fecha.getDate().toString().padStart(2,'0')}_${fecha.getHours().toString().padStart(2,'0')}-${fecha.getMinutes().toString().padStart(2,'0')}`;
    link.setAttribute("download", `ventas_${fechaStr}.xls`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showTemporaryMessage("📥 Archivo Excel descargado correctamente");
}

// Resetear ventas
function openResetModal() {
    resetPasswordInput.value = "";
    passErrorSpan.innerText = "";
    modal.style.display = "flex";
    resetPasswordInput.focus();
}

function closeModal() {
    modal.style.display = "none";
}

function confirmReset() {
    const enteredPass = resetPasswordInput.value;
    if (enteredPass === RESET_PASSWORD) {
        const cantidadVentas = salesRegistry.length;
        salesRegistry = [];
        renderSales();
        saveSalesToLocalStorage(); // Limpiar también el localStorage
        closeModal();
        showTemporaryMessage(`🗑️ Se han eliminado ${cantidadVentas} ventas correctamente`);
    } else {
        passErrorSpan.innerText = "❌ Contraseña incorrecta. No se borraron los datos.";
        resetPasswordInput.value = "";
        resetPasswordInput.focus();
    }
}

// Colapsar catálogo
function toggleCatalog() {
    isCatalogCollapsed = !isCatalogCollapsed;
    if (isCatalogCollapsed) {
        inventoryContent.classList.add("collapsed");
        collapseIcon.classList.add("rotated");
    } else {
        inventoryContent.classList.remove("collapsed");
        collapseIcon.classList.remove("rotated");
    }
    localStorage.setItem("catalogCollapsed", isCatalogCollapsed);
}

// Modo oscuro/claro
function toggleTheme() {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    
    const themeIcon = themeToggleBtn.querySelector("i");
    if (newTheme === "dark") {
        themeIcon.className = "fas fa-sun";
    } else {
        themeIcon.className = "fas fa-moon";
    }
}

// Cargar preferencias guardadas
function loadPreferences() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.setAttribute("data-theme", savedTheme);
        const themeIcon = themeToggleBtn.querySelector("i");
        if (savedTheme === "dark") {
            themeIcon.className = "fas fa-sun";
        } else {
            themeIcon.className = "fas fa-moon";
        }
    }
    
    const savedCollapse = localStorage.getItem("catalogCollapsed");
    if (savedCollapse === "true") {
        isCatalogCollapsed = true;
        inventoryContent.classList.add("collapsed");
        collapseIcon.classList.add("rotated");
    }
}

// Inicializar
function init() {
    // Cargar ventas guardadas primero
    loadSalesFromLocalStorage();
    
    renderInventory();
    renderSales();
    loadPreferences();
    
    addSaleBtn.addEventListener("click", addSale);
    sortByIdBtn.addEventListener("click", sortSalesById);
    sortByDateBtn.addEventListener("click", sortSalesByDate);
    downloadBtn.addEventListener("click", downloadSalesAsExcel);
    resetBtn.addEventListener("click", openResetModal);
    themeToggleBtn.addEventListener("click", toggleTheme);
    inventoryHeader.addEventListener("click", toggleCatalog);
    
    productIdInput.addEventListener("input", updatePreview);
    quantityInput.addEventListener("input", updatePreview);
    
    closeModalSpan.addEventListener("click", closeModal);
    cancelModalBtn.addEventListener("click", closeModal);
    confirmResetBtn.addEventListener("click", confirmReset);
    
    window.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
    
    productIdInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") addSale();
    });
    quantityInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") addSale();
    });
    
    // Mostrar mensaje de bienvenida con cantidad de ventas guardadas
    if (salesRegistry.length > 0) {
        setTimeout(() => {
            showTemporaryMessage(`📊 Bienvenido de nuevo. Tienes ${salesRegistry.length} ventas registradas`);
        }, 500);
    }
}

init();
