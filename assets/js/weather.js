//
//* This script will be most effective for courses inside the Eastern Time Zone

//~ Standard Variables
const lat = 33.971;
const lon = -80.534;
const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&temperature_unit=fahrenheit&timezone=America%2FNew_York&forecast_days=5`;

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

//~ Fetch Open-Meteo API
async function getWeather() {
  await fetch(apiUrl, { cache: "no-store" })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      weatherData = data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

//~ Begin DOM manipulation - fired when fetch to API is finished
async function populateDOM() {
  await getWeather();

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

  //~ Set Today's Weather — from current conditions block
  const currentTemp = weatherData.current.temperature_2m;
  const currentCode = weatherData.current.weather_code;

  weatherIcon.src = `./assets/images/icons/weather/${assignIcon(currentCode)}-line.svg`;
  theTemp.innerHTML = Math.ceil(currentTemp);
  weather.innerHTML = wmoSummary(currentCode);

  //* check for existence of .banner-temp and add to DOM
  const bannerTemp = document.getElementsByClassName("banner-temp")[0];
  if (bannerTemp) {
    bannerTemp.innerHTML = Math.ceil(currentTemp);
  }

  const daily = weatherData.daily;

  //~ set tomorrow's Weather (daily index 1)
  tomorrowDay.innerHTML = days[localDay(daily.time[1])];
  tomorrowWeatherIcon.src = `./assets/images/icons/weather/${assignIcon(daily.weather_code[1])}.svg`;
  tomorrowHiLo.innerHTML = `${Math.ceil(daily.temperature_2m_max[1])}°/${Math.ceil(daily.temperature_2m_min[1])}°`;

  //~ set day after tomorrow's Weather (daily index 2)
  dayAfterTomorrowDay.innerHTML = days[localDay(daily.time[2])];
  dayAfterTomorrowIcon.src = `./assets/images/icons/weather/${assignIcon(daily.weather_code[2])}.svg`;
  dayAfterTomorrowHiLo.innerHTML = `${Math.ceil(daily.temperature_2m_max[2])}°/${Math.ceil(daily.temperature_2m_min[2])}°`;

  //~ set three days from today's Weather (daily index 3)
  threeDaysFromTodayDay.innerHTML = days[localDay(daily.time[3])];
  threeDaysFromTodayIcon.src = `./assets/images/icons/weather/${assignIcon(daily.weather_code[3])}.svg`;
  threeDaysFromTodayHiLo.innerHTML = `${Math.ceil(daily.temperature_2m_max[3])}°/${Math.ceil(daily.temperature_2m_min[3])}°`;
}

populateDOM();

// Parse "YYYY-MM-DD" string as local midnight to avoid UTC day-shift
function localDay(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d).getDay();
}

// Map WMO weather codes to project icon names
const assignIcon = function (code) {
  if (code === 0) return "sun";
  if (code <= 2) return "part-cloud";
  if (code === 3) return "cloudy";
  if (code === 45 || code === 48) return "foggy";
  if (code >= 51 && code <= 67) return "rain";
  if (code >= 71 && code <= 77) return "snow";
  if (code >= 80 && code <= 82) return "rain";
  if (code >= 85 && code <= 86) return "snow";
  if (code >= 95) return "rain";
  return "sun";
};

// Human-readable summaries for WMO weather codes
function wmoSummary(code) {
  const summaries = {
    0: "Clear",
    1: "Mostly Clear",
    2: "Partly Cloudy",
    3: "Overcast",
    45: "Foggy",
    48: "Foggy",
    51: "Light Drizzle",
    53: "Drizzle",
    55: "Heavy Drizzle",
    61: "Light Rain",
    63: "Rain",
    65: "Heavy Rain",
    66: "Freezing Rain",
    67: "Heavy Freezing Rain",
    71: "Light Snow",
    73: "Snow",
    75: "Heavy Snow",
    77: "Snow Grains",
    80: "Light Showers",
    81: "Showers",
    82: "Heavy Showers",
    85: "Snow Showers",
    86: "Heavy Snow Showers",
    95: "Thunderstorm",
    96: "Thunderstorm w/ Hail",
    99: "Thunderstorm w/ Hail",
  };
  return summaries[code] || "Cloudy";
}
