// Global Variables
const baseURL = 'https://api.openbrewerydb.org/breweries';


// Startup (Event Listener)
window.addEventListener('DOMContentLoaded', () => {
    getBreweries();
})


// Fetchers
function getBreweries(){
    const ul = document.getElementById('brewery-list');
    
    fetch(baseURL)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        data.forEach((brewery) => {
            ul.innerHTML += `
                <li><a href="#">${brewery.name}</a></li>
            `
        })
    })    
}
