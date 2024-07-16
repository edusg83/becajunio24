var parrafo = document.createElement('p');
parrafo.id = 'p1';
parrafo.textContent = 'Párrafo1';


var boton = document.createElement('button');
boton.id = 'boton1';
boton.textContent = 'Aplicar estilo a párrafo';


parrafo.appendChild(boton);


document.body.appendChild(parrafo);


boton.onclick = function() {
    if (parrafo.classList.contains('parrafo')) {
        parrafo.classList.remove('parrafo');
        boton.textContent = 'Aplicar estilo a párrafo';
        boton.classList.remove('aplicado');
    } else {
        parrafo.classList.add('parrafo');
        boton.textContent = 'Quitar estilo a párrafo';
        boton.classList.add('aplicado');
    }
}


console.log('Elemento <p> añadido:', parrafo);
console.log('Elemento <button> añadido:', boton);