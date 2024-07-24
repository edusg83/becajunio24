export let datoImportado:String = "Valor exportado";

export interface datosPersonales{
	nombre:string,
	edad:number,
	apellidos:string,
	domicilio?:string;
}

export interface objetoCliente<T, U>{
	cliente: T,
	estado: U;
}
