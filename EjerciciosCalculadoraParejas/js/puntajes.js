function limpiarPuntajes() {
    aciertos1 = 0;
    aciertos2 = 0;
    document.getElementById('aciertos1').innerHTML = '';
    document.getElementById('aciertos2').innerHTML = '';
    document.getElementById('puntos1').innerText = '0';
    document.getElementById('puntos2').innerText = '0';
    document.getElementById('imagenes1').innerHTML = '';
    document.getElementById('imagenes2').innerHTML = '';
}

function actualizarAciertos(jugador, numeroImagen) {
    if (jugador === 1) {
        aciertos1++;
        document.getElementById('aciertos1').innerHTML += `<img src="img/${numeroImagen}.png">`;
        document.getElementById('puntos1').innerText = aciertos1;
    } else {
        aciertos2++;
        document.getElementById('aciertos2').innerHTML += `<img src="img/${numeroImagen}.png">`;
        document.getElementById('puntos2').innerText = aciertos2;
    }
}

function actualizarTurno() {
    document.getElementById('turno-jugador').innerText = `Le toca a ${jugadorActual === 1 ? nombreJugador1 : nombreJugador2}`;
}
