const contentContainer = document.getElementById('content-container');
const getForecastBtn = document.getElementById('get-forecast');
const locationSelect = document.getElementById('location-select');
const weatherIconImg = document.getElementById('weather-icon');
const mainTempParagraph = document.getElementById('main-temperature');
const feelsLikeParagraph = document.getElementById('feels-like');
const humidityParagraph = document.getElementById('humidity');
const windSpeedParagraph = document.getElementById('wind');
const windGustParagraph = document.getElementById('wind-gust');
const weatherMainParagraph = document.getElementById('weather-main');
const locationParagraph = document.getElementById('location');

getForecastBtn.addEventListener('click', 
  () => {
    const selectedOption = locationSelect.value;
    if(selectedOption) {
      contentContainer.style.display = 'block';   
      showWeather();   
    } else {
      contentContainer.style.display = 'none';
    }
  }
);

async function getWeather(city) {
  try {
    const url = `https://weather-proxy.freecodecamp.rocks/api/city/${city}`;
    const response = await fetch(url);
    if(!response.ok) {
      throw new Error(`Response status: ${response.status}`);    
    }
    const json = response.json();
    
    return json;
  }catch(error) {
    console.error(error);
  }
}

async function showWeather(city) {
  const selectedCity = locationSelect.value;
  getWeather(selectedCity)
  .then( (response) => {
      const {weather, main, visibility, wind, name: locationName} = response;
      const icon = weather[0].icon;
      const feelsLike = main.feels_like;
      const humidity = main.humidity;
      const windSpeed = wind.speed;
      const windGust = wind.gust;
      const weatherMain = weather[0].main;
      const mainTemp = main.temp;

      weatherIconImg.src = icon ? icon : `N/A`;
      mainTempParagraph.textContent = mainTemp ? mainTemp : `N/A`;
      feelsLikeParagraph.textContent = feelsLike ? feelsLike : `N/A`;
      humidityParagraph.textContent = humidity ? humidity : `N/A`;
      windSpeedParagraph.textContent = windSpeed ? windSpeed : `N/A`;
      windGustParagraph.textContent = windGust ? windGust : `N/A`;
      weatherMainParagraph.textContent = weatherMain ? weatherMain : `N/A`;
      locationParagraph.textContent = locationName ? locationName : `N/A`;
  })
  .catch(() => {
    alert('Something went wrong, please try again later');
  });
}


