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
  cloudLogo = document.querySelector(".cloud-logo");
  cloudLogo.innerHTML = response.data.condition.icon;
  dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.time * 1000);
}
let apiKey = "83f2f0t26352d3o664bcf8a01bce4fa7";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query={Ibadan}}&key=83f2f0t26352d3o664bcf8a01bce4fa7";
console.log(apiUrl);
axios.get(apiUrl).then(displayWeather);
