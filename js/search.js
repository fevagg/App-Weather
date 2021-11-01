const btn = document.getElementById('btn-search');
const search = document.getElementById('search');

let citiesArray = [];
getJSON(cities).then(result=>{
    if(result.status === 'ok'){
        citiesArray = result.data;   
    }
});

search.addEventListener('keyup', ()=>{
    const searchedCity = citiesArray.filter(city => city.name.toLowerCase().startsWith(search.value.toLowerCase(), 0));
    showPrev(searchedCity, 'app');
    if(search.value === ''){
        showPrev([],'app');
    }
    prevURL();
    btn.addEventListener('click', ()=>{
        const searchedCity = citiesArray.filter(city => city.name.toLowerCase() === search.value.toLowerCase(), 0);
        showPrev(searchedCity, 'app');
        prevURL();
    });
});