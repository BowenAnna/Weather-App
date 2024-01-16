import React, { useState} from 'react';
import WeatherInfoComponent from './WeatherInfoComponent';
import App_Bri from "../App_Bri.css"
const History = ({geocodeData }) => {
  console.log("geocodeData in Nav.jsx:", geocodeData);
  const [weatherData, setWeatherData] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
   console.log(geocodeData);
  const fetchHistory = async ({ lat, lon, selectedDate }) => {
    try {
      const startTimestamp = new Date(selectedDate).getTime() / 1000;
      const API_KEY1 = "f0900d9a761062ebbafd9397b5887886";
      const response = await fetch(`https://history.openweathermap.org/data/2.5/history/city?lat=${lat}&lon=${lon}&type=hour&start=${startTimestamp}&end=${startTimestamp + 86400}&appid=${API_KEY1}&units=imperial`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      // Assuming you want data for the first hour of the selected day
      if (data.list && data.list.length > 0) {
        setWeatherData(data.list[0]);
      } else {
        console.error('Empty or undefined list in API response:', data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Check if fetchedData is not null before accessing its properties
    if (geocodeData) {
     fetchHistory({
        lat: geocodeData[0].lat,
        lon: geocodeData[0].lon,
        selectedDate,
      });
    } else {
      console.error('Location is null or missing lat/lon properties');
    }
  };
  return (
    <div>
      <form className='history-form' onSubmit={handleFormSubmit} >
        <label>
           <input
            id='history-input'
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            />
        </label>
        <button id="history-btn" type="submit">Get Historical Weather</button>
      </form>
      <WeatherInfoComponent  weatherData={weatherData} />
    </div>
  );
  };
export default History;