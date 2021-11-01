let visitedCities = localStorage.getItem('visited') !== null ? JSON.parse(localStorage.getItem('visited')) : [];

function handlerExit(){
    const btnExit = document.getElementsByClassName('exit');
    for(let btn of btnExit){
        btn.addEventListener('click', (event)=>{
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
        prev.addEventListener('click', (event)=>{
            const cityToSelect = visitedCities.find(city => city.city === event.target.parentElement.children[1].innerHTML);
            document.getElementById('app').innerHTML = viewWeather(cityToSelect);
        });
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('visited').innerHTML = previousSearches(visitedCities);
    handlerExit();
    handlerWeather();
});