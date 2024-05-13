const flashcardsData = [
    { polish: "Kot", english: "Cat" },
    { polish: "Pies", english: "Dog" },
    { polish: "Dom", english: "House" },
    { polish: "Kwiat", english: "Flower" },
    { polish: "Samochód", english: "Car" },
    { polish: "Telefon", english: "Phone" },
    { polish: "Książka", english: "Book" },
    { polish: "Jedzenie", english: "Food" },
    { polish: "Komputer", english: "Computer" },
    { polish: "Muzyka", english: "Music" },
]

const container = document.getElementById("container")

flashcardsData.forEach(flashcard => { createFlashcard(flashcard.polish, flashcard.english) })

function createFlashcard(polish, english) {
    const flashcard = document.createElement("div")
    flashcard.classList.add("flashcard")
    flashcard.textContent = polish


    flashcard.addEventListener("mouseenter", () => {
        flashcard.textContent = english
        flashcard.classList.toggle("bg-white")
    })

    flashcard.addEventListener("mouseout", () => {
        flashcard.textContent = polish
        flashcard.classList.toggle("bg-white")
    })

    container.appendChild(flashcard)
}