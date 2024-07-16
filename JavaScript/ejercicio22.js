
document.addEventListener("DOMContentLoaded", function () {

    let formulario = document.querySelector('form');
    let nombreInput = document.getElementById('nombreInput');
    let emailInput = document.getElementById('emailInput');
    let provinciaSelect = document.getElementById('provincia');
    let mensajeError = document.createElement('div');

    // Escuchar el evento click del botón Enviar
    formulario.addEventListener('submit', validarFormulario);

    // Función para mostrar mensajes de error
    function mostrarMensajeError(mensaje) {
        mensajeError.textContent = mensaje;
        mensajeError.style.color = 'red';
        formulario.appendChild(mensajeError);
    }

    // Función para validar el formulario
    function validarFormulario() {
        event.preventDefault();

        // Verificar el campo Nombre
        let nombre = nombreInput.value.trim();
        if (!nombre.startsWith('ANTONIO')) {
            mostrarMensajeError('El campo Nombre debe empezar con "ANTONIO".');
            return;
        }

        // Si pasa las validaciones, mostrar los datos introducidos
        mostrarDatosPersonales(nombre, emailInput.value, provinciaSelect.value);
    }

    // Función para mostrar los datos personales
    function mostrarDatosPersonales(nombre, email, provincia) {
        const datosPersonales = document.createElement('div');
        datosPersonales.innerHTML = `<h2>Datos Personales:</h2>
                                     <p><strong>Nombre:</strong> ${nombre}</p>
                                     <p><strong>Email:</strong> ${email}</p>
                                     <p><strong>Provincia:</strong> ${provincia}</p>`;
        formulario.appendChild(datosPersonales);

        // Limpiar mensaje de error si existe
        if (mensajeError.parentNode === formulario) {
            formulario.removeChild(mensajeError);
        }

        // Limpiar mensaje de error si se edita cualquier campo del formulario
        nombreInput.addEventListener('input', limpiarMensajeError);
        emailInput.addEventListener('input', limpiarMensajeError);
        provinciaSelect.addEventListener('input', limpiarMensajeError);
    }

    // Función para limpiar el mensaje de error
    function limpiarMensajeError() {
        if (mensajeError.parentNode === formulario) {
            formulario.removeChild(mensajeError);
        }
    }

});