axios.get('https://eoi.wiremockapi.cloud/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        displayFirstUser(data.arrayUsuarios[0]);
    })


function displayFirstUser(user) {
    document.getElementById('user-name').textContent = `${user.nombre} ${user.apellidos}`;

    const tableBody = document.querySelector("#address-table tbody");
    user.direcciones.forEach(direccion => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${direccion.direccion}</td>
            <td>${direccion.cpostal}</td>
        `;
        tableBody.appendChild(row);
    });
}