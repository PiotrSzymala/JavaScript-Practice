const contacts = []
const contactList = document.getElementById("contactsList")

document.getElementById("add-contact").addEventListener("click", addContact)

function addContact() {
    const name = document.getElementById("name").value
    const phone = document.getElementById("phoneNumber").value

    if (dataIsInsertedCorrectly(name, phone)) {
        contacts.push({ "name": name, "phone": phone })
        alert(`Dodano ${name} do kontaktów.`)

        appendContactList(phone, name)
    }
    else {
        alert("podano nieprawidłowe dane")
    }
}

function appendContactList(phone, name) {
    const contact = document.createElement("div")

    contact.classList.add("contact")
    contact.textContent = `${name} ${phone}`

    contactList.appendChild(contact)
}

function dataIsInsertedCorrectly(name, phone) {
    if (name.length < 3 || phone.length != 9) {
        return false
    }

    return true
}

function findContact() {
    const searchValue = document.getElementById("search").value

    const found = contacts.find((contact)=> contact.name.includes(searchValue) || contact.phone == searchValue)
}