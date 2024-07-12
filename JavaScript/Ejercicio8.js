
//A
function sumar(num1, num2) {
     return num1+num2;
}

//B
(function sumar(num1, num2){
    console.log(num1+num2);
}(12,12));
