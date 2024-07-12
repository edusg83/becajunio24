var nombre = "Sonia";
var obj = {
    nombre: "Pepito",
    saludo: function() {
        var that = this; 
        var saludo_fn = function() {
            console.log("hola " + that.nombre);
        };
        saludo_fn();
    }
};
obj.saludo();
