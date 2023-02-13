// Global Variables
const baseURL = 'https://swapi.dev/api/';

// Startup (Event Listener)
window.addEventListener('DOMContentLoaded', () => {
    getMovies();
})



// Fetchers
function getMovies(){
    const ul = document.querySelector('movie-list');

    fetch(baseURL + 'films/')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
}