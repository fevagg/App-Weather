let visitedCities = localStorage.getItem('visited') !== null ? JSON.parse(localStorage.getItem('visited')) : [];

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('visited').innerHTML = previousSearches(visitedCities);
});