document.getElementById("search").addEventListener("click", saveSearch)
document.getElementById("clear").addEventListener("click", clearHistory)


function saveSearch() {
    let searchValue = document.getElementById("input").value.trim()

    if(searchValue === ""){
        alert("Wprowadz fraze do wyszukania")
        return
    }

    let recentSearch = JSON.parse(localStorage.getItem("recentSearches")) || []

    recentSearch.unshift(searchValue)
    localStorage.setItem("recentSearches", JSON.stringify(recentSearch))

    searchValue = ""

    displaySearchHistory(recentSearch)
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

function clearHistory(){
    localStorage.removeItem("recentSearches")
    displaySearchHistory([])
}

let recentSearch = JSON.parse(localStorage.getItem("recentSearches")) || []
displaySearchHistory(recentSearch)