import React from 'react';
import {faTemperatureThreeQuarters, faP, faDroplet, faWind, faCloud, faTemperatureLow, faTemperatureHigh } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const WeatherInfoComponent = ({ weatherData }) => {
  if (!weatherData) return null;
  const degreeSymbol ='\u00B0'
  return (
  <div className="weather-div">
    <div>
      <span className="weather-span">
      <h2>Weather Information</h2>
      <img   className="weather-icon-img"
             src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
             alt="corresponding weather icon"
                      />
      </span>
      <span className='weather-display'>
      <p className="p-block">Description: {weatherData.weather[0].main} "{weatherData.weather[0].description}"</p>
      <p className="p-block"> <FontAwesomeIcon icon={faTemperatureThreeQuarters} color='blue'/> Temperature: {weatherData.main.temp}{degreeSymbol}F</p>
      <p className="p-block"> <FontAwesomeIcon icon={faP} /> Pressure: {weatherData.main.pressure} hPa</p>
      <p className="p-block"> <FontAwesomeIcon icon={faDroplet} color='blue' /> Humidity: {weatherData.main.humidity}%</p>
      <p className="p-block"> <FontAwesomeIcon icon={faWind} color='blue'/> Wind: {weatherData.wind.speed}mph</p>
      <p className="p-block"> <FontAwesomeIcon icon={faCloud} color='blue' /> Clouds: {weatherData.clouds.all}%</p>
      <p className="p-block"> <FontAwesomeIcon icon={faTemperatureLow} color='blue' /> Temp Min: {Math.floor(weatherData.main.temp_min)}{degreeSymbol}F</p>
      <p className="p-block"> <FontAwesomeIcon icon={faTemperatureHigh} color='red'/> Temp Max: {Math.floor(weatherData.main.temp_max)}{degreeSymbol}F</p>
      {/* Add more information as needed */}
      </span>
    </div>
  </div>
  );
};
export default WeatherInfoComponent;