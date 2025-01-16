document.addEventListener("DOMContentLoaded", () => {
  // Mostrar productos del carrito
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  if (cart.length > 0) {
    cart.forEach((item) => {
      const itemRow = document.createElement("div");
      itemRow.classList.add("cart-item");
      itemRow.innerHTML = `
        <p><strong>${item.name}</strong> x ${item.quantity}</p>
        <p>$${(item.price * item.quantity).toFixed(2)}</p>
      `;
      cartItemsContainer.appendChild(itemRow);
      total += item.price * item.quantity;
    });
  } else {
    cartItemsContainer.innerHTML = "<p>El carrito está vacío.</p>";
  }

totalPriceElement.textContent =   ' ' + total.toFixed(2);

  // Configuración de PayPal
  paypal.Buttons({
    createOrder: (data, actions) => {
      // Crear la orden de compra con el total
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: total.toFixed(2), // Monto total del carrito
            },
          },
        ],
      });
    },
    onApprove: (data, actions) => {
      // Confirmar la transacción
      return actions.order.capture().then((details) => {
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            console.log('Detalles del pago:', details);
            const name = details.payer.name?.given_name || 'Usuario';
           (name, details.payer.email, details.id);
          }).catch((err) => {
            console.error('Error al capturar la orden:', err);
            alert('Ocurrió un error al completar el pago. Intente nuevamente.');
          });
        },
        // Vaciar el carrito después de la compra
        localStorage.removeItem("cart");
        window.location.href = "pagina de inicio.html"; // Redirigir a una página de agradecimiento
      });
    },
    onError: (err) => {
      console.error("Error en el pago: ", err);
      alert("Ocurrió un error al procesar el pago.");
    },
  }).render("#paypal-button-container"); // Renderizar el botón en el contenedor
});
