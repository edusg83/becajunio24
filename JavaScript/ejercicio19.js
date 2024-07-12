
// Añadido por chatgpt. Saltaba error porque está intentando añadir un elemento al <body> antes de que el documento esté completamente cargado.
document.addEventListener('DOMContentLoaded', function() {

    var nuevoParrafo = document.createElement("p");
  
    nuevoParrafo.textContent = "Este texto está añadido dinámicamente";
  
    document.body.appendChild(nuevoParrafo);
  });