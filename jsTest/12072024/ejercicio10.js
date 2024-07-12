var funciones = {};


funciones.colorVerde = function() {
    console.log("VERDE");
};


funciones.colorVerde();

funciones.colorRojo = function() {
    console.log("ROJO");
};


funciones.colorRojo();

//CORECCION

var funciones2 =
{
    colorverde : function(){
        console.log("COLOR VERDE");
    }
}

funciones2.colorverde();

funciones2.colorRojo = function(){
    console.log("color rojo")
}

funciones2.colorRojo;