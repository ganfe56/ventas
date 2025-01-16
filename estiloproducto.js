// Inicializa el carrito en localStorage si no existe
if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
  }
  
  // Función para agregar un producto al carrito
  function addToCart(productId, productName, productPrice) {
    // Obtén el carrito actual desde localStorage
    const cart = JSON.parse(localStorage.getItem('cart'));
  
    // Verifica si el producto ya está en el carrito
    const existingProduct = cart.find((item) => item.id === productId);
  
    if (existingProduct) {
      // Si ya está, incrementa la cantidad
      existingProduct.quantity += 1;
      alert(Se agregó otra unidad de ${productName} al carrito.);
    } else {
      // Si no está, añade un nuevo producto
      cart.push({
        id: productId,
        name: productName,
        price: productPrice,
        quantity: 1,
      });
      alert(${productName} se agregó al carrito.);
    }
  
    // Guarda el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Actualiza la consola (opcional, para depuración)
    console.log('Carrito actualizado:', cart);
  }
  
  // Selecciona todos los botones de "Agregar al carrito"
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  
  // Añade el evento de clic a cada botón
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Obtén la información del producto desde los atributos data
      const productId = button.getAttribute('data-product-id');
      const productName = button.getAttribute('data-product-name');
      const productPrice = parseFloat(button.getAttribute('data-product-price'));
  
      // Llama a la función para agregar el producto al carrito
      addToCart(productId, productName, productPrice);
    });
  });
  