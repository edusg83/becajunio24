document.addEventListener("DOMContentLoaded", () => {
    // c) 
    let paragraph = document.createElement("p");
    paragraph.textContent = "Párrafo1";
    paragraph.id = "p1";

    // d) 
    let button = document.createElement("button");
    button.id = "boton1";
    button.textContent = "Aplicar estilo a párrafo";
    
   
    paragraph.appendChild(button);
    document.body.appendChild(paragraph);

    // e) 
    button.addEventListener("click", () => {
        if (paragraph.classList.contains("parrafo")) {
            paragraph.classList.remove("parrafo");
            button.textContent = "Aplicar estilo a párrafo";
            button.classList.remove("aplicado");
        } else {
            paragraph.classList.add("parrafo");
            button.textContent = "Quitar estilo a párrafo";
            button.classList.add("aplicado");
        }
    });
});
