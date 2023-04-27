/** @format */
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    hour = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hour}:${minutes}`;
}
function displayForecast() {
  forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  let days = ["Tue", "Wed", "Thur", "Fri", "Sat"];
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      ` <div class="col-2">
 <div class="forecast-day">${day}
<img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-night.png" width="80" />
<div class="forecast-temp">
  <span class="forecast-temp-max">36°</span>
  <span class="forecast-temp-min">24°</span>
</div>
 </div>
</div>`;
  });
  forecastHTML = forecastHTML + ` </div>`;

  forecastElement.innerHTML = forecastHTML;
}
function displayWeather(response) {
  console.log(response.data);
  temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.temperature.humidity;
  windSpeed = document.querySelector("#wind");
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  cloudLogo = document.querySelector("#icon");
  cloudLogo.innerHTML = response.data.condition.icon;
  dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.time * 1000);
  iconElement = document.querySelector("#icon");
  iconElement.setAttribute("src", response.data.condition.icon_url);
}
function search(city) {
  let apiKey = "83f2f0t26352d3o664bcf8a01bce4fa7";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=83f2f0t26352d3o664bcf8a01bce4fa7`;
  axios.get(apiUrl).then(displayWeather);
}

function citySubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-form");
  console.log({ cityInputElement });
  search(cityInputElement.value);
}

let form = document.querySelector("#city-search");
form.addEventListener("submit", citySubmit);

search("Ibadan");
displayForecast();
