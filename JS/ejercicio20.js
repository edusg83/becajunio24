document.addEventListener("DOMContentLoaded", () => {
    // a)
    const paragraph = document.createElement("p");
    paragraph.textContent = "Este texto está añadido dinámicamente";
    
 
    paragraph.setAttribute("id", "parrafo1");
    document.body.appendChild(paragraph);
    
    // Mostrar en consola el elemento <p> creado con su nuevo atributo
    console.log("Elemento <p> creado:", paragraph);
    console.log("ID del <p>:", paragraph.getAttribute("id"));
});
