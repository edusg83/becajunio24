// a) 
let cadena1 = "CADENA1";

// b) 
let posicionENA = cadena1.indexOf("ENA");
console.log('Posición de "ENA" en cadena1:', posicionENA);

// c) 
let ultimoCaracter = cadena1.charAt(cadena1.length - 1);
console.log('Último carácter de cadena1:', ultimoCaracter);

// d) 
let cadena1Minusculas = cadena1.toLowerCase();
console.log('cadena1 en minúsculas:', cadena1Minusculas);

// e) 
let cadena1Sustituida = cadena1.replace("DE", "ME");
console.log('cadena1 con "DE" sustituido por "ME":', cadena1Sustituida);

// f) 
let cadena2 = "CADENA2";
let cadenasConcatenadas = cadena1 + cadena2;
console.log('Concatenación de cadena1 y cadena2:', cadenasConcatenadas);
