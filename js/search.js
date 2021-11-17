const btn = document.getElementById('btn-search');
const search = document.getElementById('search');

let citiesArray = [];
getJSON(cities).then(result=>{
    if(result.status === 'ok'){
        citiesArray = result.data;   
    }
});

//Search functionality
search.addEventListener('keyup', ()=>{
    const searchedCity = citiesArray.filter(city => city.name.toLowerCase().startsWith(search.value.toLowerCase(), 0));
    showPrev(searchedCity);
    if(search.value === ''){
        showPrev([]);
    }
    prevURL();
    btn.addEventListener('click', ()=>{
        const searchedCity = citiesArray.filter(city => city.name.toLowerCase() === search.value.toLowerCase(), 0);
        showPrev(searchedCity);
        prevURL();
    });
});