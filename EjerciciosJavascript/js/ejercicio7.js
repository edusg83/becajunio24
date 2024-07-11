// a)
let pieza1 = { peso: 20 };
let pieza2 = { peso: '20' };

// b)
let comparacionIgualdad = (pieza1.peso == pieza2.peso);
console.log('¿Las propiedades peso de pieza1 y pieza2 son iguales con ==?:', comparacionIgualdad);

// c)
let comparacionEstricta = (pieza1.peso === pieza2.peso);
console.log('¿Las propiedades peso de pieza1 y pieza2 son iguales con ===?:', comparacionEstricta);

// d)
let resultadoTernario = (pieza1.peso === '20') ? (Number(pieza1.peso) + Number(pieza2.peso)) : (Number(pieza1.peso) * Number(pieza2.peso));
console.log('Resultado del operador ternario:', resultadoTernario);
