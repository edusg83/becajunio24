// a) Crear una variable de tipo array llamada array1 con valor [1,2,3,4]
let array1 = [1, 2, 3, 4];

// b) Crear un pequeño programa que recorra el array y cuando encuentre el 1 muestre UNO, el 2 muestre DOS, el 3 muestre TRES, el 4 muestre CUATRO. Utilizar la instrucción Switch
array1.forEach(numero => {
    switch (numero) {
        case 1:
            console.log("UNO");
            break;
        case 2:
            console.log("DOS");
            break;
        case 3:
            console.log("TRES");
            break;
        case 4:
            console.log("CUATRO");
            break;
        default:
            console.log("Número no encontrado");
    }
});

// c) Introducir un 3 al final del array y visualizar el array
array1.push(3);
console.log("Array después de añadir 3:", array1);

// d) Quitar los 3 últimos elementos del array y visualizar el array
array1.splice(-3); // Quita los últimos 3 elementos
console.log("Array después de quitar los últimos 3 elementos:", array1);
