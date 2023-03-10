// Global Variables
const baseURL = "https://api.openbrewerydb.org";


// Startup (Event Listener)
document.addEventListener('DOMContentLoaded', () => {
    getBreweries();
    document.getElementById('brewery').addEventListener('click', getBreweries);
})


// Fetchers
function getBreweries(){
    const ul = document.getElementById('brewery-list');
    const info = document.getElementById('info');
    info.innerHTML = "";
    ul.innerHTML = "";
    
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
        <h3>Address:</h3>
        <p>${data.street}</p>
        <h3>City:</h3>
        <p>${data.city}</p>
        <h3>State / Postal Code:</h3>
        <p>${data.state}, ${data.postal_code}</p>
        <h3>Website:</h3>
        <p>${data.website_url}</p>`
    })
}

// (Light/Dark Toggle) Event Listener
const body = document.querySelector('body');
const ball = document.querySelector('.ball');
const checkbox = document.querySelector('.checkbox');
const label = document.querySelector('.label');

checkbox.addEventListener('change', () => {
    // changes the theme of the website
    checkbox.classList.toggle('dark');
    ball.classList.toggle('dark');
    body.classList.toggle('dark');
    label.classList.toggle('dark');    
})