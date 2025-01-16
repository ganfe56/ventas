document.addEventListener('DOMContentLoaded', () => {
    // Verificar si el script se carga correctamente
    console.log('El script está cargado.');
  
    // Función para agregar el producto al carrito
    function addToCart(productId, productName, productPrice) {
      console.log(Agregando producto: ID=${productId}, Nombre=${productName}, Precio=${productPrice});
  
      // Verificar si el carrito existe en localStorage
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      console.log('Carrito actual:', cart);
  
      // Verificar si el producto ya está en el carrito
      const existingProduct = cart.find(item => item.id === productId);
      if (existingProduct) {
        existingProduct.quantity += 1;
        alert(Se agregó otra unidad de ${productName} al carrito.);
      } else {
        cart.push({
          id: productId,
          name: productName,
          price: parseFloat(productPrice),
          quantity: 1
        });
        alert(${productName} se agregó al carrito.);
      }
  
      // Actualizar el carrito en localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
      console.log('Carrito actualizado:', cart);
    }
  
    // Selecciona el botón y asigna el evento
    const button = document.querySelector('.add-to-cart-btn');
    if (button) {
      button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        const productName = button.getAttribute('data-product-name');
        const productPrice = button.getAttribute('data-product-price');
        
        // Llamar a la función para agregar al carrito
        addToCart(productId, productName, productPrice);
      });
    } else {
      console.error('El botón no fue encontrado');
    }
  });
  