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

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ];

  let cWeekday = weekdays[cDay];
  let cMonthName = months[cMonth];

  return `${cWeekday} ${cTime}:${cMinutes}`;
}
let currentDate = document.querySelector("#currentdate");
//currentDate.innerHTML = ${}
let currentDayTime = document.querySelector("#daytime");
let now = new Date();
currentDayTime.innerHTML = formatDate(now);

//changing HTML to the Data typed into a form
function showCurrentWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  document.querySelector("#degreeDigit").innerHTML = temperature;
  document.querySelector("#city-h1").innerHTML = response.data.name;
}

function enterCity(event) {
  event.preventDefault();

  let city = document.querySelector("#city-searchfield").value;
  let apiKey = `2ef21ee4568e04db5d3af37dfef78d7b`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showCurrentWeather);
}
let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", enterCity);

function fetchLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(changeTempLoc);
}

function changeTempLoc(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiKey = `2ef21ee4568e04db5d3af37dfef78d7b`;
  let apiUrlLatLong = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

  let newCity = document.querySelector("#city-h1");
  newCity.innerHTML = "👇 Here it is";
  axios.get(apiUrlLatLong).then(showCurrentWeather);
}
let myLocation = document.querySelector("#location-button");
myLocation.addEventListener("click", fetchLocation);

// //complicated and redundant way to change °C and °F 🤯 ... to be improved

// function changeUnitToCelsius(event) {
//   event.preventDefault();
//   let degreeDigit = document.querySelector("#degreeDigit");
//   degreeDigit.innerHTML = "19";
// }
// //let celsius = document.querySelector("#celsius");
// //celsius.addEventListener("click", changeUnitToCelsius);

// function changeUnitBack(event) {
//   event.preventDefault();
//   let degreeDigit = document.querySelector("#degreeDigit");
//   degreeDigit.innerHTML = "66";
// }

// //let fahrenheit = document.querySelector("#fahrenheit");
// //fahrenheit.addEventListener("click", changeUnitBack);
