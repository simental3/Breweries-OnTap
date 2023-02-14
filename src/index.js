// Global Variables
const baseURL = "https://api.openbrewerydb.org";


// Startup (Event Listener)
window.addEventListener('DOMContentLoaded', () => {
    getBreweries();
})


// Fetchers
function getBreweries(){
    const ul = document.getElementById('brewery-list');
    
    fetch(baseURL + "/breweries")
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        data.forEach((brewery) => {
            ul.innerHTML += `
                <li><a href="#" data-id="${brewery.id}">${brewery.name}</a></li>
            `
        })
        addClicksToLinks();
    })    
}


// Event Listener
const addClicksToLinks = () => {
    const breweries = document.querySelectorAll('a');
    breweries.forEach((brewery) => {
        brewery.addEventListener('click', renderBrewery);
    })
}


// Render Function
const renderBrewery = (event) => {
    console.log(event.target.dataset.id);
    const info = document.getElementById('info');
    const ul = document.getElementById('brewery-list');
    ul.innerHTML = "";

    fetch(baseURL + `/breweries/${event.target.dataset.id}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        info.innerHTML = `<h1>${data.name}</h1></br>
        <h3>Brewery Type:</h3>
        <p>${data.brewery_type}</p>
        <h3>City:</h3>
        <p>${data.city}</p>
        <h3>State / Postal Code:</h3>
        <p>${data.state}, ${data.postal_code}</p>

    })
}