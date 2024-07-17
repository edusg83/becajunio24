function insertar(valor) {
    document.getElementById('pantalla').value += valor;
}

function calcular() {
    let expresion = document.getElementById('pantalla').value;
    if (expresion) {
        try {
            document.getElementById('pantalla').value = eval(expresion);
        } catch (e) {
            document.getElementById('pantalla').value = 'Error';
        }
    }
}
