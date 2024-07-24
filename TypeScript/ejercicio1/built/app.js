"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Tipado de datos
console.log("Hola compañeros de la eoi");
var Sabores;
(function (Sabores) {
    Sabores["fresa"] = "fresa";
    Sabores["mango"] = "mango";
    Sabores["pina"] = "pi\u00F1a";
})(Sabores || (Sabores = {}));
let sabor = Sabores.fresa;
//console.log(sabor.toString());
//ValueOf
let dato = 22;
//console.log(typeof dato);
//Spread (estructurar)
let menu = { menu: "menu1", precio: "20" };
let nuevoMenu = Object.assign(Object.assign({}, menu), { menu: "menu2" });
//console.log(menu);
let serie1 = [0, 2, 3, 4, 5];
let serie2 = [...serie1, 5, 6, 7];
//console.log(serie1);
//console.log(serie2);
//Rest (desestructurar)
let cliente = {
    dni: 33438893,
    nombre: 'Pepe',
    apellidos: 'Martínez',
    edad: 34
};
let { edad, nombre } = cliente, resto = __rest(cliente
//console.log(edad, nombre, resto);
//Importaciones de módulos
, ["edad", "nombre"]);
//console.log(datoImportado);
//Parámetros opcionales
function saludar(nombre, saludo) {
    if (saludo) {
        return `${saludo}, ${nombre}!`;
    }
    else {
        return `Hola, ${nombre}!`;
    }
}
let persona1 = {
    nombre: "Dani",
    edad: 22,
    apellidos: "de andres",
    domicilio: "casa"
};
const verDatosPersonales = (datos) => {
    console.log(`Nombre: ${datos.nombre}, Apellidos: ${datos.apellidos}, Edad: ${datos.edad}`, datos.domicilio ? `, Domicilio: ${datos.domicilio}` : '');
};
//verDatosPersonales(persona1);
//Clases
class Persona {
    constructor(datos) {
        this.edad = datos.edad;
        this.nombre = datos.nombre;
        this.apellidos = datos.apellidos;
        this.soloLectura = "Esto es de solo lectura";
    }
    getEdad() {
        return this.edad;
    }
    getNombreCompleto() {
        return `${this.nombre} ${this.apellidos}`;
    }
    getSoloLectura() {
        return this.soloLectura;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setApellidos(apellidos) {
        this.apellidos = apellidos;
    }
}
class Operario extends Persona {
    constructor(datos) {
        super(datos);
    }
    getNombreOperario() {
        return `OPERARIO: ${this.nombre} ${this.apellidos}`;
    }
    getEdadOperario() {
        return `Edad del operario: ${this.edad}`;
    }
}
const operario = new Operario({ edad: 35, nombre: 'Daniel', apellidos: 'de andres' });
operario.setEdad(50);
operario.setNombre('Carlos');
operario.setApellidos('Garcia');
//console.log(operario.getEdad());
//console.log(operario.getNombreOperario());
//console.log(operario.getEdadOperario());
const antonio = new Persona({ edad: 100, nombre: 'Antonio', apellidos: 'garcia' });
//console.log(antonio.getEdad());
//console.log(antonio.getNombreCompleto());
//console.log(antonio.getSoloLectura());
//Funciones Genéricas
function generica1(parametro) {
    return parametro;
}
console.log(generica1("ola?"));
function generica2(parametro) {
    return parametro;
}
console.log(generica2(101));
function generica3(parametro) {
    return parametro;
}
console.log(generica3([0, 2, 5]));
function generica4(parametro) {
    return parametro;
}
console.log(generica4(["Ho", "l", "a"]));
let cliente1 = {
    cliente: 'Antonio',
    estado: "activo"
};
console.log(cliente1);
let cliente2 = {
    cliente: 12,
    estado: 1
};
console.log(cliente1);
const enums_1 = require("./enums");
let cliente3 = {
    cliente: enums_1.CLIENTES.codigo,
    estado: enums_1.CLIENTES.estado
};
console.log(cliente3);
//Iterables
let animales = ["perro", "gato", "loro"];
for (let index = 0; index < animales.length; index++) {
    console.log(animales[index].toString());
}
for (const iterator of animales) {
    console.log(iterator);
}
