// a) 
let pieza1 = { peso: 20 };
let pieza2 = { peso: '20' };

// b) 
let igualdadSimple = (pieza1.peso == pieza2.peso);
console.log("¿Las propiedades peso de pieza1 y pieza2 son iguales con == ?", igualdadSimple);

// c) 
let igualdadEstricta = (pieza1.peso === pieza2.peso);
console.log("¿Las propiedades peso de pieza1 y pieza2 son iguales con === ?", igualdadEstricta);

// d) 
let resultado = (pieza1.peso === 20) ? (Number(pieza1.peso) + Number(pieza2.peso)) : (Number(pieza1.peso) * Number(pieza2.peso));
console.log("Resultado usando el operador ternario:", resultado);
