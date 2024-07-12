
var nombre = "Sonia";
var obj = {
    nombre: "Pepito",
    saludo: function () {
        var varThis = this;
        var saludo_fn = function() {
            console.log("hola " + varThis.nombre);
        };
        saludo_fn();
    }
};

obj.saludo();