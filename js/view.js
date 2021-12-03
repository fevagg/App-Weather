//Weather view 
function viewWeather(obj){
    const html = `<div id="weather-box" class="d-flex justify-content-around align-items-end p-4 mt-2 bg-dark text-white w-75" style="border-radius: 10px">
    <div class="col-auto">
        <h2>${obj.city}</h2>
        <p><i>${obj.country_code}<span class="m-3 fp fp-rounded ${obj.country_code.toLowerCase()}"></span></i></p>
        <img src="https://openweathermap.org/img/wn/${obj.icon}@2x.png" alt="" style="width: 100px;">
    </div>
    <div class="col-auto d-inline-flex flex-column align-items-start
    justify-content-end">
        <h4>${obj.weather_main}</h4>
        <p>Min: ${Math.round(obj.min)}°</p>
        <p>Max: ${Math.round(obj.max)}°</p>
    </div>
    <div class="col-auto d-inline-flex align-self-start justify-content-around" style="width: 50px">
        <i class="fa fa-times" aria-hidden="true" style="cursor:pointer" id="exit"></i>
    </div>
    </div>
    <div id="icon"></div>`;

    document.getElementById('app').innerHTML = html;

    document.getElementById('icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${obj.icon}@2x.png" alt="" style="width: 15vw;">`
}

//Visited previously view
function visitedPrev(array){
    let html = '';
    showSpinner('visited');
    if(array.length > 4){
        const arrayCutted = array.slice(array.length - 4, array.length);
        for(let obj of arrayCutted){
            html += `
            <div class="col-auto bg-dark m-2 text-white d-flex justify-content-between align-items-center previous" style="width: 375px; height: 70px; border-radius: 17px;cursor:pointer;">
                <img src="https://openweathermap.org/img/wn/${obj.icon}@2x.png" alt="" style="width: 100px;">
                <h6>${obj.city}</h6><span class="m-3 fp fp-rounded ${obj.country_code.toLowerCase()}"></span>
                <i class="fa fa-times exit" aria-hidden="true" style="cursor:pointer"></i>
            </div>`;
        }
        hideSpinner('visited');
    }else{
        for(let obj of array){
            html += `
            <div class="col-auto bg-dark m-2 text-white d-flex justify-content-between align-items-center previous" style="width: 375px; height: 70px; border-radius: 17px; cursor:pointer;">
                <img src="https://openweathermap.org/img/wn/${obj.icon}@2x.png" alt="" style="width: 100px;">
                <h6>${obj.city}</h6><span class="m-3 fp fp-rounded ${obj.country_code.toLowerCase()}"></span>
                <i class="fa fa-times exit" aria-hidden="true" style="cursor:pointer"></i>
            </div>`
        }
        hideSpinner('visited');
    }
    document.getElementById('visited').innerHTML = html;
}

//Show prev view up to 5.
function showPrev(array){
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
    document.getElementById('app').innerHTML = htmlToAppend;
}

//Charging view 
function showSpinner(elem){
    document.getElementById(elem).innerHTML = `<div class="spinner-border align-self-center text-secondary" role="status">
    <span class="sr-only">Loading...</span>
    </div>`;
}

function hideSpinner(elem){
    document.getElementById(elem).innerHTML = '';
}