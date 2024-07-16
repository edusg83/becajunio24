document.addEventListener("DOMContentLoaded", function() {
    // Crear dinámicamente el elemento <p>
    const parrafo = document.createElement("p");
    parrafo.id = "p1";
    parrafo.textContent = "Párrafo1";
    document.body.appendChild(parrafo);

    // Crear dinámicamente el elemento <button>
    boton = document.createElement("button");
    boton.id = "boton1";
    boton.textContent = "Aplicar estilo a párrafo";
    parrafo.appendChild(boton);

    // Asignar el evento onclick al botón
    boton.addEventListener("click", function() {
        // Verificar si el párrafo tiene la clase 'parrafo' aplicada
        if (parrafo.classList.contains("parrafo")) {
            // Si la clase 'parrafo' está aplicada, removerla
            parrafo.classList.remove("parrafo");
            // Cambiar el texto del botón a 'Aplicar estilo a párrafo'
            boton.textContent = "Aplicar estilo a párrafo";
            // Remover la clase 'aplicado' del botón
            boton.classList.remove("aplicado");
        } else {
            // Si la clase 'parrafo' no está aplicada, agregarla
            parrafo.classList.add("parrafo");
            // Cambiar el texto del botón a 'Quitar estilo a párrafo'
            boton.textContent = "Quitar estilo a párrafo";
            // Agregar la clase 'aplicado' al botón
            boton.classList.add("aplicado");
        }
    });
});