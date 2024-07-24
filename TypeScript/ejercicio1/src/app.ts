
//Tipado de datos
console.log("Hola compañeros de la eoi");
enum Sabores { fresa = "fresa", mango = "mango", pina = "piña" }
let sabor: Sabores = Sabores.fresa;
//console.log(sabor.toString());

//ValueOf
let dato: any = 22;
//console.log(typeof dato);

//Spread (estructurar)
let menu = { menu: "menu1", precio: "20" };
let nuevoMenu = { ...menu, menu: "menu2" };
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
let { edad, nombre, ...resto } = cliente
//console.log(edad, nombre, resto);

//Importaciones de módulos
import { datoImportado } from "./importaciones";
//console.log(datoImportado);

//Parámetros opcionales
function saludar(nombre: string, saludo?: string): string {
    if (saludo) {
        return `${saludo}, ${nombre}!`;
    } else {
        return `Hola, ${nombre}!`;
    }
}

//console.log(saludar("Dani"));
//console.log(saludar("Dani", "Buenos días"));

//Interfaces
import { datosPersonales } from "./importaciones";

let persona1:datosPersonales={
	nombre:"Dani",
	edad:22,
	apellidos:"de andres",
	domicilio:"casa"
}

const verDatosPersonales = (datos:datosPersonales) => {
    console.log(`Nombre: ${datos.nombre}, Apellidos: ${datos.apellidos}, Edad: ${datos.edad}`, datos.domicilio ? `, Domicilio: ${datos.domicilio}` : '');
}

//verDatosPersonales(persona1);

//Clases
class Persona {
    protected edad: number;
    protected nombre: string;
    protected apellidos: string;
    protected readonly soloLectura: String;

    constructor(datos: datosPersonales) {
        this.edad = datos.edad;
        this.nombre = datos.nombre;
        this.apellidos = datos.apellidos;
        this.soloLectura = "Esto es de solo lectura";
    }

    getEdad(): number {
        return this.edad;
    }

    getNombreCompleto(): string {
        return `${this.nombre} ${this.apellidos}`;
    }

    getSoloLectura(): String {
        return this.soloLectura;
    }

    setEdad(edad: number): void {
        this.edad = edad;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setApellidos(apellidos: string): void {
        this.apellidos = apellidos;
    }
}

class Operario extends Persona {
    constructor(datos: datosPersonales) {
        super(datos);
    }

    getNombreOperario(): string {
        return `OPERARIO: ${this.nombre} ${this.apellidos}`;
    }

    getEdadOperario(): String{
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
function generica1<T>(parametro:string):string{
    return parametro;
}
console.log(generica1("ola?"));

function generica2<U>(parametro:number):number{
    return parametro;
}
console.log(generica2(101));

function generica3<V>(parametro:number[]):number[]{
    return parametro;
}
console.log(generica3([0,2,5]));

function generica4<W>(parametro:string[]):string[]{
    return parametro;
}
console.log(generica4(["Ho","l","a"]));

import { objetoCliente } from "./importaciones";

let cliente1: objetoCliente<string, string> = {
    cliente: 'Antonio',
    estado:"activo"
};
console.log(cliente1);

let cliente2: objetoCliente<number, number> = {
    cliente: 12,
    estado: 1
};
console.log(cliente1);

import { CLIENTES } from "./enums";

let cliente3: objetoCliente<CLIENTES, CLIENTES> = {
     cliente: CLIENTES.codigo, 
     estado: CLIENTES.estado 
    };
console.log(cliente3);

//Iterables

let animales:String[] = ["perro", "gato", "loro"];
for (let index = 0; index < animales.length; index++) {
    console.log(animales[index].toString());
}

for (const iterator of animales) {
    console.log(iterator);
}










