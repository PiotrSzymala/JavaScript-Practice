// const name = prompt("Jak masz na imie?")
// const weight = prompt("Podaj swoją wagę w kg: ")
// const height = prompt("Podaj swój wzrost w m: ")

// const bmi = weight/(Math.pow(height,2))
// alert(`Cześć ${name}, miło Cię widzieć. Twoje bmi wynosi: ${bmi.toFixed(2)}`)


function bmi() {
    const name = prompt("Jak masz na imie?")
    const weight = prompt("Podaj swoją wagę w kg: ")
    const height = prompt("Podaj swój wzrost w m: ")

    const bmi = weight / (Math.pow(height, 2))
    alert(`Cześć ${name}, miło Cię widzieć. Twoje bmi wynosi: ${bmi.toFixed(2)}`)
}