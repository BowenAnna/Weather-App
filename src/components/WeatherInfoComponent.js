// WeatherInfoComponent.jsx
import React from 'react';
import {faTemperatureThreeQuarters, faP, faDroplet, faWind, faCloud, faTemperatureLow, faTemperatureHigh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WeatherInfoComponent = ({ weatherData }) => {
  if (!weatherData) return null;

  const degreeSymbol ='\u00B0'

  

  return (
    <div className="weather-div">
      <h2>Weather Information</h2>
      <img   className="weather-icon-img fa-5x"
             src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
             alt="corresponding weather icon"
                      /><p>Weather: {weatherData.weather[0].main} "{weatherData.weather[0].description}"</p>
      <p> <FontAwesomeIcon icon={faTemperatureThreeQuarters} color='blue'/> Temperature: {weatherData.main.temp}{degreeSymbol}F</p>
      <p> <FontAwesomeIcon icon={faP} /> Pressure: {weatherData.main.pressure} hPa Hectopascal- A unit of pressure equal to a millibar</p>
      <p> <FontAwesomeIcon icon={faDroplet} color='blue' /> Humidity: {weatherData.main.humidity}%</p>
      <p> <FontAwesomeIcon icon={faWind} color='blue'/> Wind: {weatherData.wind.speed}mph</p>
      <p> <FontAwesomeIcon icon={faCloud} color='blue' /> Clouds: {weatherData.clouds.all}%</p>
      <p> <FontAwesomeIcon icon={faTemperatureLow} color='blue' /> Temp Min: {Math.floor(weatherData.main.temp_min)}{degreeSymbol}F</p>
      <p> <FontAwesomeIcon icon={faTemperatureHigh} color='red' /> Temp Max: {Math.floor(weatherData.main.temp_max)}{degreeSymbol}F</p>
      {/* Add more information as needed */}
    </div>
  );
};

export default WeatherInfoComponent;
