// 8593c088100182be77782ebb9d8e4008 -----key
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}---url

let body = document.querySelector("body")

let apiKey = "8593c088100182be77782ebb9d8e4008",
    apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=",
    search = document.querySelector(".search input"),
    schBtn = document.querySelector(".search button");

let weatherArt = document.querySelector(".weather_art");

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

    if (response.status == 404) {
        alert("Invalid city name")
    } else {

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
            weatherArt.src = "Images/cloudy.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherArt.src = "Images/sunny_sun.png";
        }
        else if (data.weather[0].main == "rain") {
            weatherArt.src = "Images/raining.png";
        }
        else if (data.weather[0].main == "snow") {
            weatherArt.src = "Images/snowflake.png";
        }
        else if (data.weather[0].main == "haze") {
            weatherArt.src = "Images/haze.png";
        }
        else if (data.weather[0].main == "mist") {
            weatherArt.src = "Images/mist.png";
        }
        else if (data.weather[0].main == "Humidity") {
            weatherArt.src = "Images/humidity_main.png";
        }
    }

}
schBtn.addEventListener("click", (event) => {

    event.preventDefault();
    if (search.value.length == 0) {
        maincity.textContent = "Search Your City";
        temp.textContent = "-°c";
        mxTemp.textContent = "--";

        humidity.textContent = "--";
        pressure.textContent = "--";
        wind.textContent = "--";

        latCord.textContent = "lat -, ";
        longCord.textContent = " long -";
        alert("enter city")
    }
    else {
        checkWeather(search.value);
    }

})


search.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {
        event.preventDefault();
        if (search.value.length == 0) {
            maincity.textContent = "Search Your City";
            temp.textContent = "-°c";
            mxTemp.textContent = "--";

            humidity.textContent = "--";
            pressure.textContent = "--";
            wind.textContent = "--";

            latCord.textContent = "lat -, ";
            longCord.textContent = " long -";
            alert("enter city")
        }
        else {
            checkWeather(search.value);
        }
    }
})


let thmBtn = document.querySelector(" .thm")

thmBtn.addEventListener("click", () => {
    body.classList.toggle("classicTheme")

    themeNew();
})

let getTheme = localStorage.getItem("mode");

if (getTheme && getTheme === "classicTheme") {

    body.classList.add("classicTheme");
}


let themeNew = () => {
    if (!body.classList.contains("classicTheme")) {
        return localStorage.setItem("mode", "normal-theme")
    }
    else {
        localStorage.setItem("mode", "classicTheme")
    }
}