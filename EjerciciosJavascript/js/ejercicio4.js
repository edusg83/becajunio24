// a) 
let cadena1 = "CADENA1";

// b) 
let cadena2;

// c) 
console.log('Tipo de cadena1:', typeof cadena1);

// d) 
console.log('Tipo de cadena2:', typeof cadena2);

// e) 
if (typeof cadena2 === 'undefined') {
    console.log('SIN DEFINIR');
}

// f) 
let cliente = {
    nombre: "PEPITO",
    tel: "656666666"
};

// g) 
cliente.direccion = "C/ Salud,21";

// h) 
for (let propiedad in cliente) {
    console.log(`${propiedad}: ${cliente[propiedad]}`);
}
