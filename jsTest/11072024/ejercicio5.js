var array = new Array();
array = [1,2,3,4];

//Cambio ejercicio 6
var length = array.length;
for(var a in array)
{
    switch(a)
    {
        case 0:
            console.log("UNO")
            break;

        case 1:
             console.log("DOS")
            break;

        case 2:
            console.log("TRES")
            break;

        case 3:
            console.log("CUATRO")
            break;     
    }
}

//Correccion ejercicio 5
var other = array.push(3);
console.log(other);
var otherA = array.splice(3);
console.log(otherA);


//Ejercicio 5(mal entendido)
var array2 = new Array();
array2 = [1,2,3,4,3];

var length2 = array2.length;
for(var i = 0; i < length2; i++)
{
    switch(i)
    {
        case 0:
            console.log("UNO")
            break;

        case 1:
             console.log("DOS")
            break;

        case 2:
            console.log("TRES")
            break;

        case 3:
            console.log("CUATRO")
            break;     
    }
}

var array3 = new Array();
array3 = [1,2];

var length3 = array3.length;
for(var i = 0; i < length3; i++)
{
    switch(i)
    {
        case 0:
            console.log("UNO")
            break;

        case 1:
             console.log("DOS")
            break;

        case 2:
            console.log("TRES")
            break;

        case 3:
            console.log("CUATRO")
            break;     
    }
}