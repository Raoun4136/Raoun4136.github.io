const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "06628f1ab451ce2f5dfb7e0fb4970053";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
    }
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

function getWeather(){
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}

getWeather();
setInterval(getWeather,300000);