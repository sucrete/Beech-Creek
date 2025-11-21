//
//* This script will be most effective for courses inside the Eastern Time Zone

//~ Standard Variables
const latLong = "33.971,-80.534";
const apiUrl = `https://api.pirateweather.net/forecast/EqRw5datS5zL99ze3FwQ8Q7PJEtJAC0i/${latLong}?exclude=minutely,hourly,alerts,flags`;

// Days of the week
const days = [
  "Sun",
  "Mon",
  "Tues",
  "Wed",
  "Thurs",
  "Fri",
  "Sat",
];

var weatherData;

//~ First call Pirate Weather API
async function getWeather() {
  await fetch(apiUrl, { cache: "no-store" })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // console.log(JSON.stringify(data, null, 2));
      weatherData = data;
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

//~ Begin DOM manipulation - fired when fetch to API is finished - receives data object
async function populateDOM() {
  await getWeather();
  // now you can directly use jsonData

  //~ grab all DOM elements
  // today
  const weatherIcon = document.getElementsByClassName("today-icon")[0];
  const theTemp = document.getElementsByClassName("today-temp")[0];
  const weather = document.getElementsByClassName("today-weather")[0];

  // tomorrow
  const tomorrowDay = document.getElementsByClassName("tomorrow-day")[0];
  const tomorrowWeatherIcon =
    document.getElementsByClassName("tomorrow-icon")[0];
  const tomorrowHiLo = document.getElementsByClassName("tomorrow-hi-lo")[0];

  // day after tomorrow
  const dayAfterTomorrowDay = document.getElementsByClassName("DAT-day")[0];
  const dayAfterTomorrowIcon = document.getElementsByClassName("DAT-icon")[0];
  const dayAfterTomorrowHiLo = document.getElementsByClassName("DAT-hi-lo")[0];

  // three days from today
  const threeDaysFromTodayDay = document.getElementsByClassName("TDFT-day")[0];
  const threeDaysFromTodayIcon =
    document.getElementsByClassName("TDFT-icon")[0];
  const threeDaysFromTodayHiLo =
    document.getElementsByClassName("TDFT-hi-lo")[0];

  //~ Set Today's Weather
  const today = weatherData.currently;
  // set today's icon
  const iconPath = assignIcon(today.icon);
  weatherIcon.src = `./assets/images/icons/weather/${iconPath}-line.svg`;

  // set today's temperature readable
  theTemp.innerHTML = Math.ceil(today.temperature);

  // set today's weather readable
  weather.innerHTML = today.summary;

  //* check for existence of .banner-temp and add to DOM
  const bannerTemp = document.getElementsByClassName('banner-temp')[0];
  if (bannerTemp) {
    bannerTemp.innerHTML = Math.ceil(today.temperature)
  } 


  //~ set tomorrow's Weather
  const tomorrow = weatherData.daily.data[2];
  tomorrowDay.innerHTML = days[new Date(tomorrow.time * 1000).getDay()];
  tomorrowWeatherIcon.src = `./assets/images/icons/weather/${assignIcon(
    tomorrow.icon
  )}.svg`;
  tomorrowHiLo.innerHTML = `${Math.ceil(tomorrow.temperatureHigh)}°/${Math.ceil(
    tomorrow.temperatureLow
  )}°`;

  //~ set day after tomorrow's Weather
  const DAT = weatherData.daily.data[3];
  dayAfterTomorrowDay.innerHTML = days[new Date(DAT.time * 1000).getDay()];
  dayAfterTomorrowIcon.src = `./assets/images/icons/weather/${assignIcon(
    DAT.icon
  )}.svg`;
  dayAfterTomorrowHiLo.innerHTML = `${Math.ceil(DAT.temperatureHigh)}°/${Math.ceil(
    DAT.temperatureLow
  )}°`;

  //~ set three days from today's Weather
  const thirdOut = weatherData.daily.data[4];
  threeDaysFromTodayDay.innerHTML =
    days[new Date(thirdOut.time * 1000).getDay()];
  threeDaysFromTodayIcon.src = `./assets/images/icons/weather/${assignIcon(
    thirdOut.icon
  )}.svg`;
  threeDaysFromTodayHiLo.innerHTML = `${Math.ceil(thirdOut.temperatureHigh)}°/${Math.ceil(
    thirdOut.temperatureLow
  )}°`;
}

getWeather();
populateDOM();

const assignIcon = function (icon) {
  // console.log(`%c${icon}`, "color: orange");
  let iconSrc;
  if (icon == "clear-day" || icon == "clear-night") {
    iconSrc = "sun";
  } else if (icon == "rain") {
    iconSrc = "rain";
  } else if (icon == "snow" || icon == "sleet") {
    iconSrc = "snow";
  } else if (icon == "wind") {
    iconSrc = "wind";
  } else if (icon == "fog") {
    iconSrc = "foggy";
  } else if (icon == "cloudy") {
    iconSrc = "cloudy";
  } else if (icon == "partly-cloudy-day" || icon == "partly-cloudy-night") {
    iconSrc = "part-cloud";
  }
  // console.log(`%c${iconSrc}`, "color: yellow");
  return iconSrc;
};
