// a) Mostrar un mensaje de información por consola
console.info("MENSAJE DE INFO");

// b) Mostrar un mensaje de Warning por consola
console.warn("MENSAJE DE WARNING");

// c) Mostrar un mensaje de error por consola
console.error("MENSAJE DE ERROR");

// d) Mostrar un mensaje de Log por consola
console.log("MENSAJE DE LOG");

// e) Mostrar un mensaje de tiempo por consola
console.time("MENSAJE DE TIEMPO");
setTimeout(() => {
    console.timeEnd("MENSAJE DE TIEMPO");
}, 1000); // Ejemplo de espera de 1 segundo antes de mostrar el tiempo transcurrido
