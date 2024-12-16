import React, { useState } from 'react';
import { fetchCurrentWeather, fetchForecast } from './weatherService';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import ForecastGraph from './components/ForecastGraph';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (cityName) => {
    try {
      setError(null);
      const currentWeather = await fetchCurrentWeather(cityName);
      const forecast = await fetchForecast(cityName);
      setWeatherData(currentWeather);
      setForecastData(forecast);
      setCity(cityName);
    } catch (err) {
      setError('City not found. Please try again!');
    }
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {weatherData && (
        <CurrentWeather
          data={{
            temp: weatherData.main.temp,
            city: weatherData.name,
            country: weatherData.sys.country,
            sunset: new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(),
            time: new Date().toLocaleTimeString(),
            condition: weatherData.weather[0].main,
          }}
        />
      )}
      {forecastData && (
        <ForecastGraph
          data={forecastData.list.map((item) => ({
            time: item.dt_txt.split(' ')[1],
            temp: Math.round(item.main.temp),
          }))}
        />
      )}
    </div>
  );
};

export default App;

