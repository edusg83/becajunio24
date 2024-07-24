var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const miBody = document.querySelector('body');
const miAviso = document.getElementById('resultado');
const miBoton = document.querySelector('#btn-aviso');
const setAviso = (aviso) => {
    if (miAviso) {
        miAviso.innerHTML = aviso;
    }
};
if (miBoton) {
    miBoton.addEventListener('click', (e) => {
        fetchData();
    });
}
//Ejercicio
const fetchData = () => __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch('http://195.201.93.28:20081/jsonserver');
    const data = yield response.json();
    displayData(data);
});
const displayData = (data) => {
    if (miAviso) {
        miAviso.innerHTML = '<h2>Datos Obtenidos:</h2>';
        const list = document.createElement('ul');
        data.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `Nombre: ${item.nombre}, Precio: ${item.precio}, Cantidad: ${item.cantidad}`;
            list.appendChild(listItem);
        });
        miAviso.appendChild(list);
    
    }
};
