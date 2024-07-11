// a)
let array1 = [1, 2, 3, 4];

// b) 
for (let numero of array1) {
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
}

// c) 
array1.push(3);
console.log("Array después de añadir 3:", array1);

// d) 
array1.splice(-3); 
console.log("Array después de quitar los últimos 3 elementos:", array1);
