let time = document.querySelector("#date");
let currentTime = new Date();

function formatDate(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let hour = date.getHours();
  let minutes = date.getMinutes();
  let day = days[date.getDay()];
  let month = months[date.getMonth()];
  let currentDate = date.getDate();

  time.innerHTML = `${day}, ${month} ${currentDate}, ${hour}:${minutes} `;
}
console.log(formatDate(currentTime));

function showWeather(response) {
  let cityInput = document.querySelector("h2");
  cityInput.innerHTML = response.data.name;
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);
  console.log(response.data);
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].main;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.main.humidity;
  let pressure = document.querySelector("#pressure");
  pressure.innerHTML = response.data.main.pressure;
}

function showCity(event) {
  event.preventDefault();
  let apiKey = "17cb293858a505cd5ee18684264f6ae9";
  let units = "metric";
  let cityInput = document.querySelector("#city");
  let city = cityInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}

let cityForm = document.querySelector("#searching");
cityForm.addEventListener("submit", showCity);
