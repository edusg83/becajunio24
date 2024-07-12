var nombre = "Sonia";
var obj = {
    nombre: "pepito",
    saludo: function(){
        var pepito = this
        var saludo_fn =
        {
            function(){
                console.log("hola" + this.nombre);
            }
        } 
        saludo_fn();
    }
};

obj.saludo();

