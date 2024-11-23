// Función para mostrar los detalles del producto
function viewDetails(productName) {
    // Buscar el producto en la lista de productos
    const product = products.find(p => p.name === productName);

    if (product) {
        // Rellenar los datos del modal con los detalles del producto
        document.getElementById("detail-title").innerText = product.name;
        document.getElementById("detail-price").innerText = `Precio: $${product.price.toFixed(2)}`;
        document.getElementById("detail-manufacturer").innerText = "Fabricante: Desconocido"; // Si tienes el dato, reemplaza
        document.getElementById("detail-ordercode").innerText = "Código de Producto: 0000"; // Si tienes un código de producto, reemplaza
        document.getElementById("detail-reviews").innerHTML = `Reseñas: ${generateStars(product.stars)}`;

        // Mostrar la imagen del producto en el modal
        const detailImages = document.getElementById("detail-images");
        detailImages.innerHTML = `<img src="${product.image}" alt="${product.name}" class="product-detail-image" />`;

        // Mostrar el modal
        document.getElementById("product-details").style.display = "flex";
    }
}

// Función para cerrar el modal de detalles
function closeProductDetails() {
    document.getElementById("product-details").style.display = "none";
}
