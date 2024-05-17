document.getElementById("search").addEventListener("click", saveSearch)
document.getElementById("clear").addEventListener("click", clearHistory)

const getRecentSearches = () => JSON.parse(localStorage.getItem(recentSearchesKey)) || []

const recentSearchesKey = "recentSearches"

let allSearches = getRecentSearches()
displaySearchHistory(allSearches)


function saveSearch() {
    let searchValue = document.getElementById("input").value.trim()

    if (searchValue === "") {
        alert("Wprowadz fraze do wyszukania")
        return
    }

    let recentSearchesList = getRecentSearches()

    recentSearchesList.unshift(searchValue)
    localStorage.setItem(recentSearchesKey, JSON.stringify(recentSearchesList))

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
    localStorage.removeItem(recentSearchesKey)
    displaySearchHistory([])
}