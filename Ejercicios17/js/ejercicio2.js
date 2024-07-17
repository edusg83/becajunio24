fetch('https://eoi.wiremockapi.cloud/clientes')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        populateTable(data.UserListData);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

function populateTable(data) {
    const tableBody = document.querySelector("#data-table tbody");
    data.forEach(cliente => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${cliente.id}</td>
            <td>${cliente.username}</td>
            <td>${cliente.nombre}</td>
            <td>${cliente.email}</td>
        `;
        tableBody.appendChild(row);
    });
}
