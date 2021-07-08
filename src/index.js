//Feature 1
let now = new Date();
console.log(now);
//console.log(now.getTime());
//console.log(now.getTimezoneOffset());
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
console.log(day);
let hour = ("0" + now.getHours()).slice(-2);
console.log(hour);
let minute = ("0" + now.getMinutes()).slice(-2);
console.log(minute);
let current = `${day} ${hour}:${minute}`;
console.log(current);
let headingFive = document.querySelector("h5 mark");
headingFive.innerHTML = current;

//Feature 2
/*let form = document.createElement("form");
let span = document.querySelector(".search-button");
span.appendChild(form);
let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Type a City");
form.appendChild(input);
let button = document.querySelector("button");
form.appendChild(button);

function displayCity(event) {
  event.preventDefault();
  let city = document.querySelector("input").value;
  let headingTwo = document.querySelector("h2 mark");
  headingTwo.innerHTML = city;
}
button.addEventListener("click", displayCity);
form.addEventListener("submit", displayCity);*/

//Bonus Feature
/*function fahrenheit(event) {
  event.preventDefault();
  let temp = document.querySelector(".temperature");
  let celtofah = Math.round((11 * 9) / 5 + 32);
  temp.innerHTML = celtofah;
}
let fah = document.querySelector("h1 #fahrenheit-link");
fah.addEventListener("click", fahrenheit);

function celcius(event) {
  event.preventDefault();
  let temp = document.querySelector(".temperature");
  let fahtocel = Math.round(((52 - 32) * 5) / 9);
  temp.innerHTML = fahtocel;
}
let cel = document.querySelector("h1 #celsius-link");
cel.addEventListener("click", celcius);*/

//Feature 2.1
function displayCity(event) {
  event.preventDefault();
  let city = document.querySelector("input").value;
  let headingTwo = document.querySelector("h2 mark");
  headingTwo.innerHTML = city;
  let apiKey = "04dd91307ec56c5bdc7c8b53d6799c73";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(realTime);
}
let form = document.querySelector("form");
form.addEventListener("submit", displayCity);

function realTime(response) {
  let temp = Math.round(response.data.main.temp);
  console.log(response);
  console.log(response.data.weather[0].main);
  let description = response.data.weather[0].main;
  let h1 = document.querySelector(".temperature");
  h1.innerHTML = temp;
  let h5 = document.querySelector(".description");
  h5.innerHTML = description;
}
function currentCityTemp(response) {
  console.log(response);
  let temp = Math.round(response.data.main.temp);
  let city = response.data.name;
  console.log(temp);
  console.log(city);
  let h1 = document.querySelector(".temperature");
  let h2 = document.querySelector("h2 mark");
  h1.innerHTML = temp;
  h2.innerHTML = city;
}

function currentLocation(position) {
  console.log(position);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "04dd91307ec56c5bdc7c8b53d6799c73";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentCityTemp);
}
function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(currentLocation);
}
let button = document.querySelector(".btn");
button.addEventListener("click", getCurrentLocation);
