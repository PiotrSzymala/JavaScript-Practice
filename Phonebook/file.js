let contacts = []


document.getElementById("add-contact").addEventListener("click", addContact)
document.getElementById("search").addEventListener("input", (event) => {
    searchContact(event.target.value)
})

function addContact() {
    const name = document.getElementById("name").value
    const phone = document.getElementById("phoneNumber").value

    if (dataIsInsertedCorrectly(name, phone)) {
        contacts.push({ "name": name, "phone": phone })
        alert(`Dodano ${name} do kontaktów.`)

        displayContacts(contacts)

        document.getElementById("name").value = ''
        document.getElementById("phoneNumber").value = ''
    }
}

function displayContacts(contactsToDisplay) {
    const contactList = document.getElementById("contactsList")
    contactList.innerHTML = ''
    contactsToDisplay.forEach(contact => {
        const contactDiv = document.createElement("div")
        contactDiv.classList = 'list-group-item'
        contactDiv.textContent = `Name: ${contact.name}, phone number: ${contact.phone}`

        const removeButton = document.createElement("button")
        removeButton.textContent = "X"
        removeButton.classList = "btn btn-danger float-right"
        removeButton.addEventListener("click", () => removeContact(contact.name))
        contactDiv.appendChild(removeButton)

        contactList.appendChild(contactDiv)
    });
}

function searchContact(searchPhrase) {
    const filteredContacts = contacts.filter(contact => contact.name.includes(searchPhrase) || contact.phone.includes(searchPhrase))

    displayContacts(filteredContacts)
}

function dataIsInsertedCorrectly(name, phone) {
    if (name.length < 3) {
        alert("Contact name must be at least 3 characters long")
        return false
    }

    if (phone.length !== 9) {
        alert("Phone number must be 9 characters long")
        return false
    }

    if (contacts.some(contact => contact.name === name || contact.phone === phone)) {
        alert("Contact with this name or phone number already exits")
        return false
    }

    return true
}

function removeContact(nameToMove) {
    contacts = contacts.filter(contact => contact.name !== nameToMove)
    displayContacts(contacts)
}