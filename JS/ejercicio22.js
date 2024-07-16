function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const provincia = document.getElementById('provincia').value;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

    if (nombre.length > 20 || !nombre.startsWith('ANTONIO')) {
        resultado.innerHTML = 'Los datos del formulario no son correctos';
        return;
    }

    if (email === '' || provincia === '') {
        resultado.innerHTML = 'Los datos del formulario no son correctos';
        return;
    }
    resultado.innerHTML = `
        <p>Nombre: ${nombre}</p>
        <p>Email: ${email}</p>
        <p>Provincia: ${provincia}</p>
    `;
}

document.querySelectorAll('#formulario input, #formulario select').forEach((element) => {
    element.addEventListener('input', () => {
        document.getElementById('resultado').innerHTML = '';
    });
});
