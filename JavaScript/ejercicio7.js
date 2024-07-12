
//A
let Pieza1={
    peso:10
};
let Pieza2={
    peso:20
};

//B
console.log(Pieza1.peso==Pieza2.peso);

//C
console.log(Pieza1.peso===Pieza2.peso);

//D
let resultado = Pieza1.peso==20 ? Pieza1.peso+Pieza2.peso : Pieza1.peso*Pieza2.peso;

console.log(resultado);