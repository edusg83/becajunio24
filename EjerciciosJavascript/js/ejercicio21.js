// c)
let parrafo = document.createElement('p');
parrafo.textContent = "Párrafo1";
parrafo.id = "p1";
document.body.appendChild(parrafo);

// d)
let boton = document.createElement('button');
boton.id = "boton1";
boton.textContent = "Aplicar estilo a párrafo";
parrafo.appendChild(boton);

// e)
boton.onclick = function() {
    if (!parrafo.classList.contains('parrafo')) {
        parrafo.classList.add('parrafo');
        boton.textContent = "Quitar estilo a párrafo";
        boton.classList.add('aplicado');
    } else {
        parrafo.classList.remove('parrafo');
        boton.textContent = "Aplicar estilo a párrafo";
        boton.classList.remove('aplicado');
    }
};
