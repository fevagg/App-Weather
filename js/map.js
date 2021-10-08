function viewWeather(obj){
    const html = `<div class="row justify-content-center bg-dark rounded text-white p-5">
    <div class="col-auto">
        <h2>${obj.name}</h2>
        <p><i>${obj.sys.country}<img class="p-2" src="https://www.countryflags.io/${obj.sys.country}/flat/32.png"></i></p>
        <img src="https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png" alt="" style="width: 100px;">
    </div>
    <div class="col-auto d-inline-flex flex-column align-items-start
    justify-content-end">
        <h4>${obj.weather[0].main}</h4>
        <p>Min: ${Math.round(obj.main.temp_min)}°</p>
        <p>Max: ${Math.round(obj.main.temp_max)}°</p>
    </div>
    <div class="col-auto d-inline-flex flex-column align-items-start
    justify-content-start">
        <i class="fa fa-times" aria-hidden="true" style="cursor:pointer"></i>
    </div>
    </div>`;

    return html

}