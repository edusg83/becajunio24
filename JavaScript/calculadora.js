
function addNumero(value) {
    document.getElementById('pantalla').value += value;
}

function calcular() {
    let screenValue = document.getElementById('pantalla').value;
    let result = eval(screenValue);
    document.getElementById('pantalla').value = result;

}