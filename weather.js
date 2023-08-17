const apiKey = "c744e3e59f83495992b110038231608";
const apiUrl =
  "http://api.weatherapi.com/v1/current.json?key=c744e3e59f83495992b110038231608&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search Button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.location.name;
  document.querySelector(".temp").innerHTML = data.current.temp_c + "°";
  document.querySelector(".time").innerHTML = data.current.last_updated;
  document.querySelector(".humidity").innerHTML = data.current.humidity + " % ";
  document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/hr ";

  if (data.current.condition.text == "Mt") {
    weatherIcon.src = "img/mist.png";
  } else if (data.current.condition.text == "Sunny")
    weatherIcon.src = "img/drizzle.png";
  else if (data.current.condition.text == "Clouds")
    weatherIcon.src = "img/cloudy.png";
  else if (data.current.condition.text == "Clear")
    weatherIcon.src = "img/clear.png";
  else if (data.current.condition.text == "Mist")
    weatherIcon.src = "img/mist-haze.png";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
