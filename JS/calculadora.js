let operacionCompleta = '';
let nuevaOperacion = true;

function añadirNumero(num) {
    const pantalla = document.getElementById('pantalla');
    if (nuevaOperacion) {
        pantalla.value = num;
        nuevaOperacion = false;
    } else {
        pantalla.value += num;
    }
    operacionCompleta += num;
}

function añadirOperacion(op) {
    const pantalla = document.getElementById('pantalla');
    pantalla.value += ` ${op} `;
    operacionCompleta += ` ${op} `;
    nuevaOperacion = false;
}

function calcular() {
    try {
        const resultado = eval(operacionCompleta.replace('x', '*').replace('÷', '/'));
        document.getElementById('pantalla').value = resultado;
        operacionCompleta = `${resultado}`;
        nuevaOperacion = true;
    } catch (error) {
        document.getElementById('pantalla').value = 'Error';
    }
}

function limpiar() {
    document.getElementById('pantalla').value = '';
    operacionCompleta = '';
    nuevaOperacion = true;
}
