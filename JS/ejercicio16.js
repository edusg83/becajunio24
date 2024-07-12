// Obtener todas las propiedades del objeto navigator
for (var prop in navigator) {
    if (navigator.hasOwnProperty(prop)) {
        console.log(prop + " = " + navigator[prop]);
    }
}
