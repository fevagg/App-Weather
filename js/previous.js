let visitedCities = localStorage.getItem('visited') !== null ? JSON.parse(localStorage.getItem('visited')) : [];
//Handler to delete previous search.
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
//Handler for previous searches.
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

//Showing previous view logic and consuming API.
function prevURL(){
    const citiesLink = document.getElementsByClassName('cities-link');
    for(let city of citiesLink){
        city.addEventListener('click', async (event)=>{
            showSpinner('app');
            const name = event.target.children[0].firstChild.innerHTML;
            const code = event.target.children[0].children[1].innerHTML;
            const citySelected = await weatherAPI(name, code);
            viewWeather(citySelected);
            await visitedCities.push(citySelected);
            localStorage.setItem('visited', JSON.stringify(visitedCities));
            visitedPrev(visitedCities);
            handlerExit();
            handlerWeather();
            document.getElementById('exit').addEventListener('click', ()=>{
                document.getElementById('app').innerHTML = '';
            });
        });
    }
}
//Setting default view.
document.addEventListener('DOMContentLoaded', ()=>{
    visitedPrev(visitedCities);
    handlerExit();
    handlerWeather();
});