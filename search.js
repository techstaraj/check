var searchBar = document.getElementById("search")
searchBar.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        var value = searchBar.value
        localStorage.setItem("search", value)
        window.open("Search/searchWF.html","_self")
    }
})