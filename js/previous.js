let visitedCities = localStorage.getItem('visited') !== null ? JSON.parse(localStorage.getItem('visited')) : [];

function handlerExit(){
    const btnExit = document.getElementsByClassName('exit');
    for(let btn of btnExit){
        btn.addEventListener('click', async (event)=>{
            event.target.parentElement.remove();
            const cityToDelete = visitedCities.findIndex(city => city.city === event.target.parentElement.children[1].innerHTML);
            visitedCities.splice(cityToDelete, 1);
            localStorage.setItem('visited', JSON.stringify(visitedCities));
        });
    }
}

function handlerWeather(){
    const previous = document.getElementsByClassName('previous');
    for(let prev of previous){
        prev.addEventListener('click', async (event)=>{
            const cityToSelect = visitedCities.find(city => city.city === event.target.parentElement.children[1].innerHTML);
            const citySelected = await weatherAPI(cityToSelect.city, cityToSelect.country_code);
            viewWeather(citySelected);
            document.getElementById('exit').addEventListener('click', ()=>{
                document.getElementById('app').innerHTML = '';
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    previousSearches(visitedCities);
    handlerExit();
    handlerWeather();
});