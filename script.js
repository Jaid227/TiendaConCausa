// ====================== BASE DE DATOS DE PRODUCTOS (Inventario) ======================
const PRODUCTS_CATALOG = [
    { id: "PROD-001", name: "Laptop Ultrabook 14", cost: 899.99 },
    { id: "PROD-002", name: "Mouse Inalámbrico", cost: 24.99 },
    { id: "PROD-003", name: "Teclado Mecánico RGB", cost: 79.50 },
    { id: "PROD-004", name: "Monitor 24\" 4K", cost: 349.00 },
    { id: "PROD-005", name: "Audífonos Bluetooth", cost: 59.90 },
    { id: "PROD-006", name: "SSD 1TB Portable", cost: 129.99 },
    { id: "PROD-007", name: "Cargador Universal", cost: 19.99 },
    { id: "PROD-008", name: "Webcam HD", cost: 45.50 },
    { id: "PROD-009", name: "Silla Gamer", cost: 289.00 },
    { id: "PROD-010", name: "Smartwatch Pro", cost: 199.99 }
];

// Almacenamiento de ventas (en memoria)
let salesRegistry = [];

// Clave para reset
const RESET_PASSWORD = "Fany";

// Estado del catálogo colapsado
let isInventoryCollapsed = false;

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
const toggleInventoryBtn = document.getElementById("toggleInventoryBtn");
const inventoryContent = document.getElementById("inventoryContent");

// Modal Elements
const modal = document.getElementById("passwordModal");
const closeModalSpan = document.querySelector(".close");
const confirmResetBtn = document.getElementById("confirmResetBtn");
const cancelModalBtn = document.getElementById("cancelModalBtn");
const resetPasswordInput = document.getElementById("resetPassword");
const passErrorSpan = document.getElementById("passError");

// ---------- FUNCIONES DE TEMA (MODO CLARO/OSCURO) ----------
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);
}

function updateThemeButton(theme) {
    const icon = themeToggleBtn.querySelector('i');
    const text = themeToggleBtn.querySelector('span');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
        text.textContent = 'Modo Claro';
    } else {
        icon.className = 'fas fa-moon';
        text.textContent = 'Modo Oscuro';
    }
}

function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
}

// ---------- FUNCIONES DE COLABSADO ----------
function toggleInventory() {
    isInventoryCollapsed = !isInventoryCollapsed;
    const icon = toggleInventoryBtn.querySelector('i');
    
    if (isInventoryCollapsed) {
        inventoryContent.classList.add('collapsed');
        icon.className = 'fas fa-chevron-down';
    } else {
        inventoryContent.classList.remove('collapsed');
        icon.className = 'fas fa-chevron-up';
    }
    
    localStorage.setItem('inventoryCollapsed', isInventoryCollapsed);
}

function loadInventoryState() {
    const savedState = localStorage.getItem('inventoryCollapsed');
    if (savedState === 'true') {
        isInventoryCollapsed = true;
        inventoryContent.classList.add('collapsed');
        const icon = toggleInventoryBtn.querySelector('i');
        icon.className = 'fas fa-chevron-down';
    }
}

// ---------- FUNCIONES PRINCIPALES ----------
function renderInventory() {
    inventoryBody.innerHTML = "";
    PRODUCTS_CATALOG.forEach(product => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><strong>${product.id}</strong></td>
            <td>${product.name}</td>
            <td>${product.cost.toFixed(2)} MXN</td>
        `;
        inventoryBody.appendChild(row);
    });
}

function renderSales() {
    if (!salesBody) return;
    
    if (salesRegistry.length === 0) {
        salesBody.innerHTML = `<tr class="empty-row"><td colspan="6">No hay ventas registradas</td></tr>`;
        totalSalesSpan.innerText = "0.00 MXN";
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
            <td>${sale.unitCost.toFixed(2)} MXN</td>
            <td style="font-weight: 600; color: #2c3e66;">${sale.quantity} unidades</td>
            <td style="font-weight: 700; color: #059669;">${sale.subtotal.toFixed(2)} MXN</td>
            <td style="font-size:0.75rem; color:#475569;">${formattedDate}</td>
        `;
        salesBody.appendChild(row);
    });
    
    totalSalesSpan.innerText = `${totalGeneral.toFixed(2)} MXN`;
    totalItemsSpan.innerText = `${totalUnidades} unidades vendidas en ${salesRegistry.length} transacciones`;
}

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
        previewText.innerHTML = `Producto: <strong>${foundProduct.name}</strong> | Costo unitario: <strong>${foundProduct.cost.toFixed(2)} MXN</strong> | Subtotal para ${cantidad} unidad(es): <strong style="color:#059669;">${subtotalPreview.toFixed(2)} MXN</strong>`;
        previewInfo.style.display = "block";
        previewInfo.style.background = "#eef2ff";
        previewInfo.style.color = "#1e3a8a";
    } else if (idRaw !== "") {
        previewText.innerHTML = `⚠️ No se encontró el producto con ID "${idRaw}"`;
        previewInfo.style.display = "block";
        previewInfo.style.background = "#fee2e2";
        previewInfo.style.color = "#991b1b";
    } else {
        previewInfo.style.display = "none";
    }
}

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
    
    const mensaje = `✅ Venta registrada: ${quantity} x ${foundProduct.name} = ${subtotal.toFixed(2)} MXN`;
    showTemporaryMessage(mensaje);
    
    productIdInput.value = "";
    quantityInput.value = "1";
    productIdInput.focus();
    updatePreview();
}

function showTemporaryMessage(message) {
    const existingMsg = document.querySelector('.temp-message');
    if (existingMsg) existingMsg.remove();
    
    const msgDiv = document.createElement('div');
    msgDiv.className = 'temp-message';
    msgDiv.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #2c3e66;
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

function sortSalesById() {
    if (salesRegistry.length === 0) {
        alert("No hay ventas para ordenar.");
        return;
    }
    salesRegistry.sort((a, b) => a.id.localeCompare(b.id));
    renderSales();
    showTemporaryMessage("📋 Ventas ordenadas por ID");
}

function sortSalesByDate() {
    if (salesRegistry.length === 0) {
        alert("No hay ventas para ordenar.");
        return;
    }
    salesRegistry.sort((a, b) => b.timestamp - a.timestamp);
    renderSales();
    showTemporaryMessage("📅 Ventas ordenadas por fecha (más recientes primero)");
}

// FUNCIÓN MEJORADA PARA DESCARGAR EXCEL - GENERA ARCHIVO XLS REAL
function downloadSalesAsExcel() {
    if (salesRegistry.length === 0) {
        alert("⚠️ No hay ventas registradas para descargar.");
        return;
    }
    
    // Calcular totales
    const totalGeneral = salesRegistry.reduce((sum, sale) => sum + sale.subtotal, 0);
    const totalUnidades = salesRegistry.reduce((sum, sale) => sum + sale.quantity, 0);
    
    // Crear tabla HTML con formato para Excel
    let excelHTML = `
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Reporte de Ventas</title>
            <style>
                th {
                    background-color: #2c3e66;
                    color: white;
                    padding: 10px;
                    font-weight: bold;
                    border: 1px solid #1a2639;
                    text-align: center;
                }
                td {
                    padding: 8px;
                    border: 1px solid #cccccc;
                }
                table {
                    border-collapse: collapse;
                    width: 100%;
                    font-family: Arial, sans-serif;
                }
                .header-title {
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 20px;
                    color: #1a2639;
                    text-align: center;
                }
                .subtotal-cell {
                    font-weight: bold;
                    color: #059669;
                }
                .cantidad-cell {
                    font-weight: bold;
                    color: #2c3e66;
                    text-align: center;
                }
                .total-row {
                    background-color: #fef9c3;
                    font-weight: bold;
                }
                .summary-table {
                    margin-top: 20px;
                    width: auto;
                }
            </style>
        </head>
        <body>
            <div class="header-title">
                📊 REPORTE DE VENTAS
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre Producto</th>
                        <th>Costo Unitario (MXN)</th>
                        <th>Cantidad</th>
                        <th>Subtotal (MXN)</th>
                        <th>Fecha/Hora</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    // Agregar cada venta
    salesRegistry.forEach((sale, index) => {
        const dateObj = new Date(sale.timestamp);
        const formattedDate = `${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}`;
        const rowColor = index % 2 === 0 ? '#ffffff' : '#f8fafc';
        
        excelHTML += `
            <tr style="background-color: ${rowColor};">
                <td style="text-align: center;">${sale.id}</td>
                <td>${sale.productName}</td>
                <td style="text-align: right;">${sale.unitCost.toFixed(2)}</td>
                <td style="text-align: center; font-weight: bold; color: #2c3e66;">${sale.quantity}</td>
                <td style="text-align: right; font-weight: bold; color: #059669;">${sale.subtotal.toFixed(2)}</td>
                <td style="text-align: center;">${formattedDate}</td>
            </tr>
        `;
    });
    
    // Agregar fila de totales
    excelHTML += `
                    <tr class="total-row">
                        <td colspan="3" style="text-align: right;"><strong>TOTALES:</strong></td>
                        <td style="text-align: center;"><strong>${totalUnidades} unidades</strong></td>
                        <td style="text-align: right;"><strong>${totalGeneral.toFixed(2)} MXN</strong></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            
            <table class="summary-table">
                <tr>
                    <td style="border: none;"><strong>📅 Fecha de generación:</strong></td>
                    <td style="border: none;">${new Date().toLocaleString()}</td>
                </tr>
                <tr>
                    <td style="border: none;"><strong>📊 Total de transacciones:</strong></td>
                    <td style="border: none;">${salesRegistry.length}</td>
                </tr>
                <tr>
                    <td style="border: none;"><strong>💰 Monto total:</strong></td>
                    <td style="border: none; color: #059669; font-weight: bold;">${totalGeneral.toFixed(2)} MXN</td>
                </tr>
            </table>
        </body>
        </html>
    `;
    
    // Crear el blob con el contenido HTML pero con extensión .xls
    // Excel abre archivos .xls que contienen HTML perfectamente
    const blob = new Blob([excelHTML], { type: "application/vnd.ms-excel" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.href = url;
    const fecha = new Date();
    const nombreArchivo = `ventas_${fecha.getFullYear()}-${(fecha.getMonth()+1).toString().padStart(2,'0')}-${fecha.getDate().toString().padStart(2,'0')}_${fecha.getHours().toString().padStart(2,'0')}-${fecha.getMinutes().toString().padStart(2,'0')}-${fecha.getSeconds().toString().padStart(2,'0')}.xls`;
    link.setAttribute("download", nombreArchivo);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showTemporaryMessage("📥 Archivo Excel descargado correctamente");
}

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
        closeModal();
        showTemporaryMessage(`🗑️ Se han eliminado ${cantidadVentas} ventas correctamente`);
    } else {
        passErrorSpan.innerText = "❌ Contraseña incorrecta. No se borraron los datos.";
        resetPasswordInput.value = "";
        resetPasswordInput.focus();
    }
}

// ---------- INICIALIZACIÓN ----------
function init() {
    renderInventory();
    renderSales();
    loadTheme();
    loadInventoryState();
    
    addSaleBtn.addEventListener("click", addSale);
    sortByIdBtn.addEventListener("click", sortSalesById);
    sortByDateBtn.addEventListener("click", sortSalesByDate);
    downloadBtn.addEventListener("click", downloadSalesAsExcel);
    resetBtn.addEventListener("click", openResetModal);
    themeToggleBtn.addEventListener("click", toggleTheme);
    toggleInventoryBtn.addEventListener("click", toggleInventory);
    
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
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(20px); }
            15% { opacity: 1; transform: translateY(0); }
            85% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-20px); }
        }
    `;
    document.head.appendChild(style);
}

init();
