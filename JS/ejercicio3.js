// a) Crear una variable de tipo cadena llamada cadena1 con valor CADENA1
let cadena1 = "CADENA1";

// b) La posición del texto "ENA" en la variable cadena1
let posicionENA = cadena1.indexOf("ENA");
console.log("Posición de 'ENA' en cadena1:", posicionENA);

// c) El carácter de la última posición de la cadena
let ultimoCaracter = cadena1.charAt(cadena1.length - 1);
console.log("Último carácter de cadena1:", ultimoCaracter);

// d) El valor de la variable cadena1 convertido a minúsculas
let cadena1Minusculas = cadena1.toLowerCase();
console.log("cadena1 en minúsculas:", cadena1Minusculas);

// e) Sustituir en cadena1 "DE" por "ME"
let cadena1Sustituida = cadena1.replace("DE", "ME");
console.log("cadena1 con 'DE' sustituido por 'ME':", cadena1Sustituida);

// f) Crear una variable de tipo cadena llamada cadena2 con valor CADENA2 y concatenar cadena2 con cadena1
let cadena2 = "CADENA2";
let cadenaConcatenada = cadena1.concat(cadena2);
console.log("Concatenación de cadena1 y cadena2:", cadenaConcatenada);
