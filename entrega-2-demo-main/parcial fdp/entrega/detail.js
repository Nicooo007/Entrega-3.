// Obtener el producto desde el almacenamiento local
const producto = JSON.parse(localStorage.getItem("productoDetalle"));
const productContainer = document.querySelector(".product-container");

// Función para verificar si el producto ya está en favoritos
function isFavorite(productoId) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    return favoritos.some(fav => fav.id === productoId);
}

// Función para actualizar los favoritos en localStorage
function toggleFavorite(producto) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (isFavorite(producto.id)) {
        // Si ya es favorito, eliminarlo
        favoritos = favoritos.filter(fav => fav.id !== producto.id);
        alert("Producto eliminado de favoritos.");
    } else {
        // Si no es favorito, agregarlo
        favoritos.push(producto);
        alert("Producto añadido a favoritos.");
    }

    // Guardar los favoritos actualizados
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}
function addToCart(productName) {
    alert(`${productName} agregado al carrito`);
    // Aquí podrías añadir lógica para actualizar el carrito.
  }
  
  function buyNow(productName) {
    alert(`Compra inmediata de: ${productName}`);
    // Redirigir al usuario a la página de checkout.
  }
  
  function addToFavorites(productName) {
    alert(`${productName} agregado a favoritos`);
    // Lógica para añadir el producto a una lista de favoritos.
  }
  

// Renderizar el producto en la página
if (producto) {
    productContainer.innerHTML = `
        <div class="product-images">
            <img src="${producto.imagen}" alt="${producto.nombre}">
        </div>
        <div class="product-info">
            <h1>${producto.nombre}</h1>
            <p class="price">$${producto.precio.toLocaleString()}</p>
            <button class="add-to-favorites">
                ${isFavorite(producto.id) ? "❤️ Quitar de favoritos" : "❤️ Añadir a favoritos"}
            </button>
            <section class="product-details">
                <h2>Detalles del producto</h2>
                <ul>
                    ${producto.detalles.map(detalle => `<li>${detalle}</li>`).join("")}
                </ul>
            </section>
        </div>
    `;

    // Evento para el botón de añadir a favoritos
    const addToFavoritesButton = document.querySelector(".add-to-favorites");
    addToFavoritesButton.addEventListener("click", () => {
        toggleFavorite(producto);

        // Cambiar el texto del botón dinámicamente
        addToFavoritesButton.textContent = isFavorite(producto.id)
            ? "❤️ Quitar de favoritos"
            : "❤️ Añadir a favoritos";
    });
}
