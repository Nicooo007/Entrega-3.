// Función para eliminar un producto de favoritos
function removeFromFavorites(productName) {
    // Obtener favoritos actuales desde localStorage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // Eliminar el producto de la lista de favoritos
    favorites = favorites.filter(item => item !== productName);
    
    // Guardar los cambios en localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
  
    // Actualizar la lista de favoritos mostrada
    displayFavorites();
  }
  
  // Función para mostrar los favoritos en la página
  function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesList = document.getElementById('favorites');
    
    // Si no hay favoritos, mostrar mensaje
    if (favorites.length === 0) {
      favoritesList.innerHTML = "<li>No hay productos en tus favoritos.</li>";
    } else {
      // Mostrar cada producto con un botón para eliminar
      favoritesList.innerHTML = favorites.map(product => 
        `<li>${product} <button class="remove-from-favorites" onclick="removeFromFavorites('${product}')">Eliminar</button></li>`
      ).join('');
    }
  }
  
  // Ejecutar la función cuando se carga la página de favoritos
  document.addEventListener('DOMContentLoaded', displayFavorites);
  
  // Función para redirigir a la página principal
function goToHomePage() {
    window.location.href = "index.html"; // Cambia "index.html" por la ruta de tu página principal
  }
  
  // Función para eliminar un producto de favoritos
  function removeFromFavorites(productName) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(item => item !== productName);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites();
  }
  
  // Función para mostrar los favoritos en la página
  function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesList = document.getElementById('favorites');
    if (favorites.length === 0) {
      favoritesList.innerHTML = "<li>No hay productos en tus favoritos.</li>";
    } else {
      favoritesList.innerHTML = favorites.map(product => 
        `<li>${product} <button class="remove-from-favorites" onclick="removeFromFavorites('${product}')">Eliminar</button></li>`
      ).join('');
    }
  }
  
  document.addEventListener('DOMContentLoaded', displayFavorites);
  