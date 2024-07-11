let pieza1 ={
    peso : 20
}
let pieza2 ={
    peso : '20'
}

console.log(pieza1.peso==pieza2.peso);

console.log(pieza1.peso===pieza2.peso);

max = (pieza1.peso === '20') ? pieza1.peso + pieza2.peso: pieza1.peso * pieza2.peso;
console.log(max);