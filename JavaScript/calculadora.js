
let screenValue = document.getElementById('pantalla');

function addNumero(value) {
    screenValue.value += value;
}

function calcular() {
    let result = eval(screenValue.value);
    screenValue.value = result;
}

function reinicio() {
    screenValue.value = "";
}