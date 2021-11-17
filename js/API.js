async function weatherAPI(name, code){
    let citySelected = {};
    const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${name},${code}&units=metric&appid=${process.env.WEATHER_API_KEY}`;
    await getJSON(WEATHER_API).then(res =>{
        hideSpinner('app');
        citySelected.city = res.data.name;
        citySelected.weather_main = res.data.weather[0].main;
        citySelected.icon = res.data.weather[0].icon;
        citySelected.country_code = res.data.sys.country;
        citySelected.min = res.data.main.temp_min;
        citySelected.max = res.data.main.temp_max;
    });
    return citySelected;
}