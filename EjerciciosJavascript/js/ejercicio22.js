document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let provincia = document.getElementById('provincia').value;
    let mensaje = document.getElementById('mensaje');
    let resultado = document.getElementById('resultado');

    if (nombre.length > 20 || !nombre.startsWith('ANTONIO')) {
        mensaje.textContent = 'Los datos del formulario no son correctos';
        mensaje.classList.remove('oculto');
        mensaje.classList.add('error');
        resultado.classList.add('oculto');
        return;
    }

    if (nombre === '' || email === '' || provincia === '') {
        mensaje.textContent = 'Los datos del formulario no son correctos';
        mensaje.classList.remove('oculto');
        mensaje.classList.add('error');
        resultado.classList.add('oculto');
        return;
    }

    mensaje.classList.add('oculto');
    resultado.innerHTML = `
        <p>Nombre: ${nombre}</p>
        <p>Email: ${email}</p>
        <p>Provincia: ${provincia}</p>
    `;
    resultado.classList.remove('oculto');
    resultado.classList.add('correcto');
});

document.querySelectorAll('#formulario input, #formulario select').forEach(element => {
    element.addEventListener('input', function() {
        document.getElementById('mensaje').classList.add('oculto');
    });
});
