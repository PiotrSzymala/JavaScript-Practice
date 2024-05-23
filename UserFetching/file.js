window.onload = () => {
 const tableBody = document.querySelector("table tbody") 
    const apiBaseUrl = "https://users-api-jk.azurewebsites.net"
    fetch(`${apiBaseUrl}/api/Users`)
    .then(response => {
        console.log(response);

        return response.json()
    }).then(data => {
        console.log(data);
        const userRows = data.map(user => {
            return `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.street}</td>
            <td>${user.address.city}</td>
            <td>${user.address.zipCode}</td>
            </tr>`
        })

        tableBody.innerHTML = userRows.join("")
    })
}