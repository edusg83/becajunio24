document.addEventListener('DOMContentLoaded', (event) => {
    
    var formulario = document.getElementById('formulario');
    var mensaje = document.getElementById('mensaje');
    var resultados = document.getElementById('resultados');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        var valid = true;
    
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var provincia = document.getElementById('provincia').value;

        if (nombre.length > 20 || !nombre.startsWith('ANTONIO')) {
            valid = false;
        }

        if (!email || !provincia) {
            valid = false;
        }

        if (!valid) {
            mensaje.innerHTML = 'Los datos del formulario no son correctos';
        } else {
            mensaje.innerHTML="";
            resultados.innerHTML = `
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Provincia:</strong> ${provincia}</p>
            `;
        }

       
    });
});


