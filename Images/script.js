// 8593c088100182be77782ebb9d8e4008 -----key
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}---url

let apiKey = "8593c088100182be77782ebb9d8e4008",
    apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=",
    search = document.querySelector(".search input"),
    schBtn = document.querySelector(".search button");

let weatherArt = document.querySelector(".weather_ar");

let maincity = document.querySelector(".city"),
    temp = document.querySelector(".temp"),
    mxTemp = document.querySelector(".mxTemp"),
    humidity = document.querySelector(".humidity"),
    pressure = document.querySelector(".pressure"),
    wind = document.querySelector(".wind");

let latCord = document.querySelector(".latitude"),
    longCord = document.querySelector(".longitude");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    maincity.textContent = data.name;

    temp.textContent = Math.round(data.main.temp) + " °c";
    mxTemp.textContent = Math.round(data.main.temp_max) + " °c";

    humidity.textContent = data.main.humidity + "" + " %";
    pressure.textContent = data.main.pressure;
    wind.textContent = data.wind.speed + "" + " km/h";

    latCord.textContent = data.coord.lat + ", ";
    longCord.textContent = data.coord.lon;


    if (data.weather[0].main == "Clouds") {

        weatherArt.src = "cloudy.png";

    }




}
schBtn.addEventListener("click", () => {

    checkWeather(search.value);
})


search.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        if (search.value.length == 0) {
            city.textContent = "Search Your City";
            alert("enter city")
        }
        else {
            checkWeather(search.value);
        }
    }
})