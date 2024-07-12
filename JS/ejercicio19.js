document.addEventListener("DOMContentLoaded", () => {
    // a) Crear dinámicamente un elemento <p> en el <body>
    let paragraph = document.createElement("p");
    paragraph.textContent = "Este texto está añadido dinámicamente";
    
    document.body.appendChild(paragraph);
    console.log("Elemento <p> creado:", paragraph);
});
