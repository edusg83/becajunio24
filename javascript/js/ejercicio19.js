let nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = "Este texto está añadido dinámicamente";
document.body.appendChild(nuevoParrafo);

nuevoParrafo.setAttribute("id", "parrafo1")

console.log('Elemento <p> añadido:', nuevoParrafo);
