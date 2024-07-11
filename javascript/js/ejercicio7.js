let pieza1 ={
    peso : 20
}
let pieza2 ={
    peso : '20'
}

console.log(pieza1==pieza2);

console.log(pieza1===pieza2);

max = (pieza1.peso === '20') ? pieza1 + pieza2: pieza1 * pieza2
console.log(max)