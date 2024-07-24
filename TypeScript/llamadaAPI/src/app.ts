const miBody = document.querySelector('body');
const miAviso = document.getElementById('resultado');
const miBoton = document.querySelector('#btn-aviso');

const setAviso = (aviso: string) => {
    if (miAviso) {
        miAviso.innerHTML = aviso;
    }
};

if (miBoton) {
    miBoton.addEventListener('click', (e: Event) => {
        fetchData();
    });
}
 
//Ejercicio
const fetchData = async () => {

        const response = await fetch('http://195.201.93.28:20081/jsonserver');
        const data = await response.json();
        displayData(data);
};

const displayData = (data: Array<{ nombre: string, precio: string, cantidad: string, id: number }>) => {
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







