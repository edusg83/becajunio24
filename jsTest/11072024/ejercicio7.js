var pieza1 = {
    peso:20,
};

var pieza2 = {
    peso:'20',
};

console.log("Objeto pieza1:", pieza1);
console.log("Objeto pieza2:", pieza2);

var igualDoble = pieza1.peso == pieza2.peso;
console.log("¿peso de pieza1 y pieza2 son iguales con ==?:", igualDoble);


var igualTriple = pieza1.peso === pieza2.peso;
console.log("¿peso de pieza1 y pieza2 son iguales con ===?:", igualTriple);


var resultado = pieza1.peso === 20 ? Number(pieza1.peso) + Number(pieza2.peso) : Number(pieza1.peso) * Number(pieza2.peso);
console.log("Resultado del operador ternario:", resultado);