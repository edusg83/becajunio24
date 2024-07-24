const miBody = document.querySelector('body');
const miAviso = document.getElementById('resultado');
const miBoton = document.querySelector('#btn-aviso');
const setAviso = (aviso) => {
    if (miAviso) {
        miAviso.innerHTML = aviso;
    }
};
if (miBoton) {
    miBoton.addEventListener('click', (e) => {
        alert('Botón clickeado');
    });
}
