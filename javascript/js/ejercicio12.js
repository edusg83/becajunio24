let nombre = "Sonia";
let obj = {
    nombre : "Pepito",
    saludo : function(){
        let varThis = this;
        let saludo_fn = function(){
            console.log("hola " + varThis.nombre);
        };
        saludo_fn();
    }
};
obj.saludo();