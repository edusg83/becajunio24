// a) 
let funciones = {
    colorVerde: function() {
        console.log("VERDE");
    }
};

// Invocar la función colorVerde
funciones.colorVerde();

// b) 
funciones.colorRojo = function() {
    console.log("ROJO");
    this.colorVerde(); 
};

// Invocar la función colorRojo
funciones.colorRojo();
