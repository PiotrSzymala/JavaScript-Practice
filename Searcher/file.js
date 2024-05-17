document.getElementById("search").addEventListener("click", saveSearch)
document.getElementById("clear").addEventListener("click", clearHistory)

let allSearches = JSON.parse(localStorage.getItem("recentSearches")) || []
displaySearchHistory(allSearches)

function saveSearch() {
    let searchValue = document.getElementById("input").value.trim()

    if (searchValue === "") {
        alert("Wprowadz fraze do wyszukania")
        return
    }

    let recentSearchesList = JSON.parse(localStorage.getItem("recentSearches")) || []

    recentSearchesList.unshift(searchValue)
    localStorage.setItem("recentSearches", JSON.stringify(recentSearchesList))

    searchValue = ""

    displaySearchHistory(recentSearchesList)
}

function displaySearchHistory(searches) {
    let recentSearches = document.getElementById("recentSearches")
    recentSearches.innerHTML = ''

    searches.forEach(searchTerm => {
        const listItem = document.createElement("li")
        listItem.classList.add("list-group-item")
        listItem.textContent = searchTerm
        recentSearches.appendChild(listItem)
    });
}

function clearHistory() {
    localStorage.removeItem("recentSearches")
    displaySearchHistory([])
}