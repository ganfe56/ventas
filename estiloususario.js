// JavaScript for the Profile Page
document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.getElementById("saveBtn");

    saveButton.addEventListener("click", function () {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;

        if (!username || !email || !phone || !address) {
            alert("Por favor, completa todos los campos antes de guardar.");
            return;
        }

        // Simulate saving user data
        alert("Tus cambios se han guardado exitosamente.");

        // You can replace this with actual backend logic if needed
        console.log({
            Nombre: username,
            Correo: email,
            Teléfono: phone,
            Dirección: address,
        });
    });
});
