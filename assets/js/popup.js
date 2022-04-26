document.getElementById("search-btn").onclick = function() {search()};

function search() {
    var searchQuery = document.getElementById("searchBar").value;
    searchQuery.replace(/\s/g, '+');
    browser.search.search({
        query: searchQuery,
        engine: "GoogleScholar"
    });
}
