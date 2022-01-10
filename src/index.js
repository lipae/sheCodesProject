//calling the current Date and parts of the date
//changing the HTML with JS --> to current Date

function formatDate(now) {
  let cTime = now.getHours();
  if (cTime < 10) {
    cTime = `0${cTime}`;
  }
  let cMinutes = now.getMinutes();
  if (cMinutes < 10) {
    cMinutes = `0${cMinutes}`;
  }
  let cDay = now.getDay();
  let cMonth = now.getMonth();
  let cYear = now.getFullYear();

  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let cWeekday = weekdays[cDay];

  return `${cWeekday} ${cTime}:${cMinutes}`;
}

let currentDayTime = document.querySelector("#daytime");
let now = new Date();
currentDayTime.innerHTML = formatDate(now);

//changing HTML to the Data typed into a form
function showCurrentWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let degrees = document.querySelector("#degreeDigit");
  degrees.innerHTML = temperature;
}

function enterCity(event) {
  event.preventDefault();
  let newCitySearched = document.querySelector("#city-searchfield");
  let newCity = document.querySelector("#city-h1");
  if (newCitySearched.value) {
    newCity.innerHTML = `${newCitySearched.value}`;
  }
  //let apiUrlLatLon = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${apiKey}`
  let apiKey = `2ef21ee4568e04db5d3af37dfef78d7b`;
  //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${apiKey}&units=metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCitySearched.value}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showCurrentWeather);
}
let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", enterCity);

//complicated and redundant way to change °C and °F 🤯 ... to be improved

function changeUnit(event) {
  event.preventDefault();
  let degreeDigit = document.querySelector("#degreeDigit");
  degreeDigit.innerHTML = "19";
}
//let celsius = document.querySelector("#celsius");
//celsius.addEventListener("click", changeUnit);

function changeUnitBack(event) {
  event.preventDefault();
  let degreeDigit = document.querySelector("#degreeDigit");
  degreeDigit.innerHTML = "66";
}

//let fahrenheit = document.querySelector("#fahrenheit");
//fahrenheit.addEventListener("click", changeUnitBack);
