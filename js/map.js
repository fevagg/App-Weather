function viewWeather(obj){
    const html = `<div class="d-flex justify-content-around align-items-end p-4 mt-2 bg-dark text-white w-75" style="border-radius: 10px">
    <div class="col-auto">
        <h2>${obj.city}</h2>
        <p><i>${obj.country_code}<span class="m-3 fp fp-rounded ${obj.country_code.toLowerCase()}"></span></i></p>
        <img src="https://openweathermap.org/img/wn/${obj.weather_icon}@2x.png" alt="" style="width: 100px;">
    </div>
    <div class="col-auto d-inline-flex flex-column align-items-start
    justify-content-end">
        <h4>${obj.weather_main}</h4>
        <p>Min: ${Math.round(obj.min)}°</p>
        <p>Max: ${Math.round(obj.max)}°</p>
    </div>
    <div class="col-auto d-inline-flex align-self-start justify-content-around" style="width: 50px">
        <i class="fa fa-plus-square-o" aria-hidden="true" style="cursor:pointer"></i>
        <i class="fa fa-times" aria-hidden="true" style="cursor:pointer" id="exit"></i>
    </div>
    </div>`;

    return html
}

function previousSearches(array){
    let html = ``;
    if(array.length > 4){
        const arrayCutted = array.slice(array.length - 4, array.length);
        console.log(arrayCutted)
        for(let obj of arrayCutted){
            html += `
            <div class="col-auto bg-dark m-2 text-white d-flex justify-content-between align-items-center previous" style="width: 270px; height: 70px; border-radius: 17px;cursor:pointer;">
                <img src="https://openweathermap.org/img/wn/${obj.weather_icon}@2x.png" alt="" style="width: 100px;">
                <h6>${obj.city}</h6><span class="m-3 fp fp-rounded ${obj.country_code.toLowerCase()}"></span>
                <i class="fa fa-times exit" aria-hidden="true" style="cursor:pointer"></i>
            </div>`;
        }
    }else{
        for(let obj of array){
            html += `
            <div class="col-auto bg-dark m-2 text-white d-flex justify-content-between align-items-center previous" style="width: 270px; height: 70px; border-radius: 17px; cursor:pointer;">
                <img src="https://openweathermap.org/img/wn/${obj.weather_icon}@2x.png" alt="" style="width: 100px;">
                <h6>${obj.city}</h6><span class="m-3 fp fp-rounded ${obj.country_code.toLowerCase()}"></span>
                <i class="fa fa-times exit" aria-hidden="true" style="cursor:pointer"></i>
            </div>`
        }
    }
    return html;
}