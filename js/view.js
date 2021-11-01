function showSpinner(elem){
    document.getElementById(elem).innerHTML = `<div class="spinner-border align-self-center text-secondary" role="status">
    <span class="sr-only">Loading...</span>
    </div>`;
}

function hideSpinner(elem){
    document.getElementById(elem).innerHTML = '';
}

function showPrev(array, elem){
    let htmlToAppend = '';
    if(array.length > 5){
        let cuttedArray = array.slice(0,4);
        for(let obj of cuttedArray){
            htmlToAppend += `<div class="card mt-2 w-75"><div class="card-body w-100 d-inline-flex justify-content-between">
            <a class="stretched-link link-secondary cities-link" style="text-decoration:none;" href="#">
            <div><h4 class="card-title text-left">${obj.name}</h4>
            <p class="card-text text-left">${obj.country}<p></div>
            <span class="fp fp-rounded ${obj.country.toLowerCase()}"></span>
            </a>
            </div></div>`
        }
    }else{
        for(let obj of array){
            htmlToAppend += `<div class="card mt-2 w-75"><div class="card-body w-100 d-inline-flex justify-content-between">
            <a class="stretched-link link-secondary cities-link" style="text-decoration:none;" href="#">
            <div><h4 class="card-title text-left">${obj.name}</h4>
            <p class="card-text text-left">${obj.country}<p></div>
            <span class="fp fp-rounded ${obj.country.toLowerCase()}"></span>
            </a>
            </div></div>`
        }
    }
    document.getElementById(elem).innerHTML = htmlToAppend;
}

function prevURL(){
    const citiesLink = document.getElementsByClassName('cities-link');
    for(let city of citiesLink){
        city.addEventListener('click', (event)=>{
            showSpinner('app');
            const name = event.target.children[0].firstChild.innerHTML;
            const code = event.target.children[0].children[1].innerHTML;
            const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${name},${code}&units=metric&appid=389cbfb379dd5be85d604ac8efcb9970`;
            getJSON(WEATHER_API).then(response=>{
                if(response.status === 'ok'){
                    hideSpinner('app');
                    let citySelected = {
                        city: response.data.name,
                        weather_icon: response.data.weather[0].icon,
                        weather_main: response.data.weather[0].main,
                        min: response.data.main.temp_min,
                        max: response.data.main.temp_max,
                        country_code: response.data.sys.country
                    };
                    document.getElementById('app').innerHTML = viewWeather(citySelected);
                    visitedCities.push(citySelected);
                    document.getElementById('visited').innerHTML = previousSearches(visitedCities);
                    localStorage.setItem('visited', JSON.stringify(visitedCities));
                    search.value = '';
                    document.getElementById('exit').addEventListener('click', ()=>{
                        document.getElementById('app').innerHTML = '';
                    });
                }
            });
        });
    }
}