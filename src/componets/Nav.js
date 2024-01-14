import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, Route, Routes } from "react-router-dom";
import Home from './Home';
import Header from "./Header";
import About from "./About";
import History from "./History";
import TenDaysCard from "./TenDaysCard";
import Hourly from "./Hourly";
import Daily from "./Daily"
import React, { useState, useEffect } from 'react';
import App_Bri from "../App_Bri.css"


const Nav = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyData, setHourlyData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [geocodeData, setGeocodeData] = useState(null);
  const [tenDaysData, setTenDaysData] = useState([]);
  const cnt = 10;


  const API_KEY = "5c738c355e265d93e475b42644ff3d86";
  const appidM = "6c4755a6e699100b5cac3977b2f5aa3f";


  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSearch = async () => {
    try {
      setLoading(true);
      const geocodeResponse = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&limit=1&appid=${API_KEY}`
      );
      console.log(`geoCodeResponse is ${geocodeResponse}`);
      if (geocodeResponse.ok) {
        const contentType = geocodeResponse.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const geocodeData = await geocodeResponse.json();
          console.log(`geoCodeData is ${geocodeData}`);
          setGeocodeData(geocodeData);
          if (geocodeData.length > 0) {
            const { lat, lon } = geocodeData[0];
            const weatherResponse = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial&lang=en`
            );
            const weatherResponseHourly = await fetch(
              `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial&lang=en`
            );
            const weatherResponseTenDays = await fetch(
              `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${API_KEY}&units=imperial&lang=en`);
            const weatherData = await weatherResponse.json();
            const hourlyData = await weatherResponseHourly.json();
            const tenDaysData = await weatherResponseTenDays.json();
            setWeatherData(weatherData);
            setHourlyData(hourlyData);
            setTenDaysData(tenDaysData);
            console.log(weatherData);
            console.log(hourlyData);
            console.log(tenDaysData);
          } else {
            console.error("Geocoding failed");
          }
        } else {
          console.error("Response is not JSON:", geocodeResponse);
        }
      } else {
        console.error("Error fetching geocode data:", geocodeResponse.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <header >
      {/* <div className="top" style={{width: "100%", backgroundColor: "var(--blue)", height: "85px"}}> */}
            <h1 style={{textAlign:"center", width: "100%"}}>"BAM" Weather</h1>
        <label>
          <input type="text" placeholder="Enter city, state, country" value={searchQuery} onChange={handleInputChange} />
        </label>
        <button onClick={handleSearch} disabled={loading} className='nav-input' type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} color='white'/>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </header>

      <ul>
       
        <li>
          <Link to="/">Daily</Link>
        </li>
        <li>
          <Link to="/hourly">Hourly</Link>
        </li>
        <li>
          <Link to="/tendays">10 Days</Link>
        </li>
        <li>
          <Link to="/history">365 Days History</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Routes>
        <Route path="" element={<Daily weatherData={weatherData} />} />
        <Route path="/hourly" element={<Hourly hourlyData={hourlyData} />} />
        <Route
          path="/tendays"
          element={<TenDaysCard tenDaysData={tenDaysData} />}
        />
        <Route
          path="/history"
          element={<History geocodeData={geocodeData} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
      {loading && <p>Loading...</p>}
    </div>
  );
};
export default Nav;