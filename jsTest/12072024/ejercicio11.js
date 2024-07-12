var funciones = {};


funciones.colorVerde = function() {
    console.log("VERDE");
};


funciones.colorVerde();

funciones.colorRojo = function() {
    console.log("ROJO");
};


funciones.colorRojo();


//////

var funcion = {
    color: "Verde",
    setLog: function(){
        console.log(this.color);
    }
}

var funcion2 = 
{
    color: "Rojo"
};

funcion2.setLog = funcion.setLog;
funcion2.setLog();