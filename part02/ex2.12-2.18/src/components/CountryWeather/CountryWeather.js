import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header';

const CountryWeather = ({ city }) => {
  const [weatherData, setWeatherData] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
      )
      .then((response) => response.data)
      .then((data) => setWeatherData(data));
  }, []);

  return (
    <div className='country-weather'>
      <Header text={`Weather in ${weatherData.name}`} />
      <p>Temperature: {weatherData.main.temp}</p>

      <img
        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
        alt='none'
      />
      <p>Wind: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default CountryWeather;
