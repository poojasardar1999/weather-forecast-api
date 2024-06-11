let apiUrl =
  "https://api.weatherapi.com/v1/current.json?key=ac13c3cb23964194b0a162716240606&q={lat},{long}";

// apiUrl = apiUrl.replace("{lat}", 28).replace("{long}", 77);
// console.log(apiUrl);

async function getWeather(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  apiUrl = `https://api.weatherapi.com/v1/current.json?key=ac13c3cb23964194b0a162716240606&q=${latitude},${longitude}&aqi=yes`;
  console.log(apiUrl);
  let data = await fetch(apiUrl, { mode: "cors" });
  console.log(data);
  data = await data.json();
  console.log(data);
  let tempCElem = document.querySelector("#temp-c");
  // data.current.temp_c;
  tempCElem.innerText = data.current.temp_c;
  let tempWind = document.querySelector(".temp-wind .temp-value");
  // data.current.wind_dir;
  tempWind.innerText = `${data.current.wind_dir} ${data.current.wind_kph}km/h`;
  let tempWindGust = document.querySelector(".temp-wind-gust .temp-value");
  data.current.gust_kph;
  tempWindGust.innerText = `${data.current.gust_kph}km/h`;
  let tempWindAirQuality = document.querySelector(
    ".temp-wind-air-quality .temp-value"
  );
  data.current.air_quality.pm2_5;
  // tempWindAirQuality.innerText = data.current.air_quality.pm2_5;

  // console.log(position);
  // console.log(latitude);
  // console.log(longitude);

  if (
    data.current.air_quality.pm2_5 > 0 &&
    data.current.air_quality.pm2_5 < 50
  ) {
    tempWindAirQuality.innerText = "Good";
    tempWindAirQuality.style.backgroundColor = "green";
  } else if (
    data.current.air_quality.pm2_5 > 51 &&
    data.current.air_quality.pm2_5 < 100
  ) {
    tempWindAirQuality.innerText = "Moderate";
    tempWindAirQuality.style.backgroundColor = "yellow";
  }
}
navigator.geolocation.getCurrentPosition(getWeather);
