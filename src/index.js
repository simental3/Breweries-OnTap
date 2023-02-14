// Global Variables
const baseURL = 'https://api.openbrewerydb.org';


// Startup (Event Listener)
window.addEventListener('DOMContentLoaded', () => {
    getBreweries();
})


// Fetchers
function getBreweries(){
    const ul = document.getElementById('brewery-list');
    
    fetch(baseURL + '/breweries')
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        data.forEach((brewery) => {
            ul.innerHTML += `
                <li><a href="#">${brewery.name}</a></li>
            `
        })
        addClicksToLinks();
    })    
}


// Event Listeners
const addClicksToLinks = () => {
    const breweries = document.querySelectorAll('a');
    breweries.forEach((brewery) => {
        brewery.addEventListener('click', renderBrewery);
    })
}

