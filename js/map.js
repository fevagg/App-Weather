function viewWeather(obj){
    const html = `<div class="d-flex justify-content-around align-items-end p-4 mt-2 bg-dark text-white w-100" style="border-radius: 10px">
    <div class="col-auto">
        <h2>${obj.name}</h2>
        <p><i>${obj.sys.country}<span class="m-3 fp fp-rounded ${obj.sys.country.toLowerCase()}"></span></i></p>
        <img src="https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png" alt="" style="width: 100px;">
    </div>
    <div class="col-auto d-inline-flex flex-column align-items-start
    justify-content-end">
        <h4>${obj.weather[0].main}</h4>
        <p>Min: ${Math.round(obj.main.temp_min)}°</p>
        <p>Max: ${Math.round(obj.main.temp_max)}°</p>
    </div>
    <div class="col-auto d-inline-flex align-self-start justify-content-around" style="width: 50px">
        <i class="fa fa-plus-square-o" aria-hidden="true" style="cursor:pointer"></i>
        <i class="fa fa-times" aria-hidden="true" style="cursor:pointer"></i>
    </div>
    </div>`;

    return html
}