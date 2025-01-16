// Selecciona todos los productos
const products = document.querySelectorAll('.product a');

// Añade un evento de clic a cada producto
products.forEach((product) => {
  product.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que se abra el enlace de inmediato
    const productName = product.closest('.product').querySelector('h3').textContent;
    alert(productName);
    
    // Redirige al enlace después de la alerta
    window.location.href = product.href;
  });
});
