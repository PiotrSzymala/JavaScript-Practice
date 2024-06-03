window.onload = async () => {
    const apiBaseUrl = "https://users-api-jk.azurewebsites.net"

    let currentPage = 1
    let pageSize = 5
    let filter = ""

    await renderUsers()

    function generatePagination(pageSize, totalItems) {
        const totalpages = Math.ceil(totalItems / pageSize)
        const paginationElement = document.querySelector(".pagination")
        paginationElement.innerHTML = ""

        for (let i = 1; i <= totalpages; i++) {
            const li = document.createElement("li")
            li.classList.add("page-item")

            if (currentPage === i) {
                li.classList.add("active")
            }

            const a = document.createElement("a")
            a.classList.add("page-link")
            a.href = "#"
            a.textContent = i.toString()

            a.addEventListener("click", async function (event) {
                event.preventDefault()
                currentPage = i
                await renderUsers()
            })

            li.appendChild(a)
            paginationElement.appendChild(li)
        }
    }

    async function renderUsers() {
        const tableBody = document.querySelector("table tbody")
        const respone = await fetch(`${apiBaseUrl}/api/Users/paged?page=${currentPage}&pageSize=${pageSize}&filter=${filter}`)
        console.log(respone)

        const data = await respone.json()
       
        generatePagination(pageSize, data.totalItems)

        const userRows = data.items.map((user) => {
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
    }


    document.getElementById("filterInput").addEventListener("input", async function (event) {
        filter = event.target.value
        await renderUsers()
    })

    document.getElementById("pageSizeSelect").addEventListener("change", async function (event) {
        pageSize = event.target.value
        await renderUsers()
    })

    document.getElementById("addUserForm").addEventListener("submit", async function (event) {
        event.preventDefault()

        const form = document.getElementById("addUserForm")

        if (!form.checkValidity()) {
            form.classList.add("was-validated")
            return
        }

        const formData = new FormData(form)

        const serializedData = {};
        for (let [key, value] of formData.entries()) {
            // debugger
            const keys = key.split('.');
            const lastKey = keys.pop();
            let obj = serializedData;
            for (let k of keys) {
                obj[k] = obj[k] || {};
                obj = obj[k];
            }
            obj[lastKey] = value;
        }
        const json = JSON.stringify(serializedData);
        console.log(json)

        const createUserResponse = await fetch(`${apiBaseUrl}/api/Users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: json
        })

        if (createUserResponse.ok) {
            alert("User created")
            const closeModalBtn = document.getElementById("closeModalBtn")
            closeModalBtn.click()
            await renderUsers()

        } else if (createUserResponse.status === 400) {
            const responseBody = await createUserResponse.json()
            const errorMessages = Object.values(responseBody.errors).flatMap(x => x).join("\n")
            alert("Fix your validation erros: \n" + errorMessages)
        }
        else {
            alert("Something went wrong")
        }

    })
}