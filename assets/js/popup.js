//Focuses search bar for faster searching
window.onload = function () {
    document.getElementById("searchBar").focus();
};

document.getElementById("search-btn").onclick = function() {search()};


function search() {
    var searchQuery = document.getElementById("searchBar").value;
    //Rejects null inputs & replaces spaces with '+'
    if (searchQuery) {
        searchQuery.replace(/\s/g, '+');
        browser.search.search({
            query: searchQuery,
            engine: "GoogleScholar"
        });
    }
}
