window.onload = () => {
    var text = localStorage.getItem("search")
    localStorage.removeItem("search")
    document.getElementById("search").value = text

}

//Result Count
var searchItems = document.querySelectorAll('.search-items')
var count = searchItems.length
var totalCount = document.getElementById('total-count')
totalCount.innerHTML = `${count}`

//Main Search
const search = () => {
    var searchText = document.getElementById("search").value
    searchItems.forEach((item) => {
        
    })
}

//Only one select
const oneSelect = (e) => {
    if(e.checked){
        var tag = e.getAttribute('id')
        var brothers = e.parentNode.querySelectorAll('input')
        brothers.forEach((element) => {
            if(tag != element.getAttribute('id')){
                element.checked = false;
            }
        });
    }
}

//After Filter Count get Changed
const countChange = () => {
    count = 0;
    searchItems.forEach((item) => {
        if(item.style.display == 'flex') count++;
    })
    var totalCount = document.getElementById('total-count')
    totalCount.innerHTML = `${count}`
}

const resetFilter = () => {
    var marked = document.querySelectorAll('input[type="checkbox"]');
    marked.forEach((element) => {
        if(element.checked) element.checked = false;
        searchItems.forEach((item) => {
            item.style.display = 'flex';
        })
    })
    countChange();
}

const applyFilter = () => {
    var marked = document.querySelectorAll('input[type="checkbox"]');
    const filterList = [];
    marked.forEach((element) => {
        if(element.checked){
            filterList.push(element.getAttribute('id'));
        }
    })
    
    var Content = document.querySelectorAll('.content');
    Content.forEach((item) => {
        const check = [];
        var labels = item.querySelectorAll('label')
        filterList.forEach((element,i) => {
            var toSearch = document.getElementById(`${element}`)
            labels.forEach((label) => {
                if(label.innerHTML == toSearch.nextSibling.textContent) check.push(1);
                else if(element.toUpperCase().indexOf('TO') > -1){
                    var val1 = Number(element.slice(0,2))
                    var val2 = Number(element.slice(4,element.length));
                    if(Number(label.innerHTML) > val1*1000 && Number(label.innerHTML) <= val2*1000) check.push(1);
                }
            })
            if(check.length < i+1) check.push(0);
        })
        var recheck = true;
        for(var j=0; j<check.length; j++){
            if(check[j] == 0) recheck = false;
        }
        if(!recheck){
            item.parentElement.style.display = 'none';
        }else{
            item.parentElement.style.display = 'flex';
        }
    })
    countChange();
}