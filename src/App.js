import './App.css';
import CurrentWeather from './conponents/current-weather/current-weather';
import Search from './conponents/search/search';
import { WEATHER_API_URL } from './api';
import { WEATHER_API_KEY } from './api';
import { useState } from 'react';
import Forecast from './conponents/forecast/forecast';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label , ...weatherResponse});
        setForecastWeather({ city: searchData.label , ...forecastResponse});
      })
      .catch((err) => console.log(err));

  }

  console.log(currentWeather);
  console.log(forecastWeather);


  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecastWeather && <Forecast data={forecastWeather} />}
    </div>
  );
}

export default App;
