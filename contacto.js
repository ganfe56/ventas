document.getElementById("enviar").addEventListener("click", () => {
    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
    const link = document.getElementById("link").value;
    const imagenInput = document.getElementById("imagen");

    // Asignar valores a la vista previa
    document.getElementById("prev-nombre").textContent = nombre;
    document.getElementById("prev-email").textContent = email;
    document.getElementById("prev-mensaje").textContent = mensaje;
    document.getElementById("prev-link").textContent = link;
    document.getElementById("prev-link").href = link;

    // Mostrar imagen subida en la vista previa
    const previewImagen = document.getElementById("prev-imagen");
    previewImagen.innerHTML = ""; // Limpiar imagen anterior
    if (imagenInput.files && imagenInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement("img");
            img.src = e.target.result;
            previewImagen.appendChild(img);
        };
        reader.readAsDataURL(imagenInput.files[0]);
    }
});
