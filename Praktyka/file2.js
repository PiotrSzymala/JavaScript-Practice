// const name = prompt("Jak masz na imie?")
// const weight = prompt("Podaj swoją wagę w kg: ")
// const height = prompt("Podaj swój wzrost w m: ")


// const bmi = weight/(Math.pow(height,2))
// alert(`Cześć ${name}, miło Cię widzieć. Twoje bmi wynosi: ${bmi.toFixed(2)}`)

document.getElementById("btn1").addEventListener("click", manipulateAttributes)
document.getElementById("btn-click").addEventListener("click", countClick)
document.getElementById("btn-att").addEventListener("click", manipulateDom)
document.getElementById("alertToggler").addEventListener("click", toggleAlert)


let clickCounter = 0

function countClick() {
    clickCounter++
    const button = document.querySelector(".btn.btn-primary")

    button.textContent = `Clicks: ${clickCounter}`
}

function toggleAlert(){
    const alert = document.getElementById("alert-hello")
    console.log(alert.classList)

    alert.style.color ="red"
    alert.style.fontSize ="30px"
    const color = window.getComputedStyle(alert).color
    console.log(color);
}

function bmi() {
    const name = prompt("Jak masz na imie?")
    const weight = prompt("Podaj swoją wagę w kg: ")
    const height = prompt("Podaj swój wzrost w m: ")

    const bmi = weight / (Math.pow(height, 2))
    alert(`Cześć ${name}, miło Cię widzieć. Twoje bmi wynosi: ${bmi.toFixed(2)}`)
}

function start() {
    const alerts = document.getElementsByClassName("alert")

    for (let index = 0; index < alerts.length; index++) {
        const element = alerts[index];
        console.log(element.innerText);
    }
}

function sumInputs() {
    const numValueFromFirstInput = parseInt(document.getElementById("input1").value)
    const numValueFromSecondInput = parseInt(document.getElementById("input2").value)

    if (isNaN(numValueFromFirstInput) || isNaN(numValueFromSecondInput)) {
        alert("Podane wartości są nieprawidłowe")
    }
    else {
        alert(numValueFromFirstInput + numValueFromSecondInput)
    }
}

function manipulateDom() {
    document.getElementById("alertToggler").removeEventListener("click", toggleAlert)
   
    // const alertDiv = document.querySelector(".alert.alert-primary")

    // alertDiv.innerHTML = "<strong>This is a new alert.</strong>"

    // const newElement = document.createElement("p")
    // newElement.textContent = "This is a new paragraph."

    // alertDiv.appendChild(newElement)

    // const label2 = document.querySelector("#label2")
    // const input2 = document.querySelector("#input2")
    // input2.parentElement.removeChild(input2)
    // label2.parentElement.removeChild(label2)
}

function manipulateAttributes() {
    const h1Element = document.querySelector("h1")
    const h1NameAttribute = h1Element.getAttribute("name")

    console.log(`Attribute name: ${h1NameAttribute}`);

    h1Element.setAttribute("style", "color: blue; font-size: 29px;")

    const inputElement = document.querySelector("#input1")
    const inputTypeAttribute = inputElement.getAttribute("type")

    console.log(`Attribute type: ${inputTypeAttribute}`);

    inputElement.setAttribute("type", "number")

}