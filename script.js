const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const api_key = "e10ff532705d824b212462c17e1aaca2";

const cityName = document.querySelector(".text");
const submitButton = document.querySelector(".submit");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weather_icon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");

async function checkWeather(x) {
  const response = await fetch(api_url + `&appid=${api_key}&q=${x}`);

  const data = await response.json();
  console.log(data);

  temp.innerText = `${Math.round(data.main.temp)}°c`;
  city.innerText = data.name;
  humidity.innerText = Math.round(data.main.humidity);
  wind.innerText = `${data.wind.speed} km/h`;

  if (data.weather[0].main == "Clouds") {
    weather_icon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weather_icon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weather_icon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weather_icon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weather_icon.src = "images/mist.png";
  }
  weather.classList.remove("vanish");
}

submitButton.addEventListener("click", () => {
  const name = cityName.value.trim();
  if (name) {
    checkWeather(name);
  }

  cityName.value = "";
});
