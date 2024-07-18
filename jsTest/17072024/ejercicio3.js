const request = new Request('https://eoi.wiremockapi.cloud/users');
const url = request.url;
const mehotd = request.method;
const credentials = request.credentials;


fetch(request).then(response => response.json())
.then(data => {
    let tabla = 
    ` <div class="container mt-5">
        <div>
            <div class="card-body">
                <h5 class="card-title">Tabla!</h5>
                <table class="table">
                    <thead>
                        <tr>
                            <th class="card-text">Nombre</th>
                            <th class="card-text">Apellidos</th>
                            <th class="card-text">Direccion</th>
                            <th class="card-text">C Postal</th>
                        </tr>
                    </thead>
                    <tbody>
`

    let finTabla = `</tbody>
                </table>
            </div>
        </div>
    </div>`;

    let filas = ``;

    var datas = data.arrayUsuarios;
    datas.forEach(element => {
        filas+=`
                <tr>
                    <td class="card-text">${element.nombre}</td>
                    <td class="card-text">${element.apellidos}</td>
                </tr>
        `
    });

    tabla+= filas+finTabla;
    document.getElementById("tablasDos").innerHTML = tabla;
})