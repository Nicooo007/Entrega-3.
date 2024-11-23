// Declarar la variable globalData
let globalData = null;

// Función para cargar los datos desde la URL
async function getData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/Nicooo007/ENTREGA-PAGINA/refs/heads/main/entrega-2-demo-main/parcial%20fdp/entrega/data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        globalData = await response.json();
        console.log('Data loaded:', globalData); // Verifica que los datos se han cargado correctamente
        // Despachar un evento indicando que los datos están listos
        document.dispatchEvent(new Event('dataLoaded'));
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}

// Escuchar el evento "dataLoaded"
document.addEventListener('dataLoaded', () => {
    console.log('Data is now available in globalData:', globalData);
    // Aquí puedes trabajar con los datos, por ejemplo, renderizar una lista
    renderProducts(globalData.products);
});

// Función para renderizar los productos en la interfaz
function renderProducts(products) {
    const container = document.getElementById('product-container');
    if (!container) {
        console.error('Container element not found');
        return;
    }
    container.innerHTML = ''; // Limpiar el contenedor
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" />
            <h3 class="product-name">${product.name}</h3>
            <p class="product-stars">⭐ ${product.stars}</p>
            <p class="product-price">$${product.price.toFixed(2)}</p>
        `;
        container.appendChild(productCard);
    });
}

// Llamar a la función para cargar los datos
getData();
