const apiKey = "80c012536e6c22a75496053bb691d7ff"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather .weather-icon");

async function checkWeather(city) {
    let response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);

    if (!response.ok) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        let data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = `${data.main.temp.toFixed()}°C`;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "./images/clouds.png";
                break;
            case "Clear":
                weatherIcon.src = "./images/clear.png";
                break;
            case "Rain":
                weatherIcon.src = "./images/rain.png";
                break;
            case "Snow":
                weatherIcon.src = "./images/snow.png";
                break;
            case "Mist":
                weatherIcon.src = "./images/mist.png";
                break;
            case "Drizzle":
                weatherIcon.src = "./images/drizzle.png";
                break;
            default:
                weatherIcon.src = "";
                break;
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", (e) => {
    let city = searchBox.value;
    checkWeather(city);
    searchBox.value = "";
});

searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        let city = searchBox.value;
        checkWeather(city);
        searchBox.value = "";
    }
})
