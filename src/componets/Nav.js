import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTemperatureHigh, faTemperatureLow } from "@fortawesome/free-solid-svg-icons";
import { Link, Route, Routes } from "react-router-dom";
import Home from './Home';
import About from "./About";
import History from "./History";
import TenDaysCard from "./TenDaysCard";
import Hourly from "./Hourly";
import Daily from "./Daily"
import React, { useState, useEffect } from 'react';
import App_Bri from "../App_Bri.css"
import BigWeatherIcon from "../functions/BigWeatherIcon";
import CountryCodeList from "./CountryCodeList";



const Nav = () => {
  const [searchQuery, setSearchQuery] = useState("Washington, D.C., US");
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

  useEffect(() => {
    setSearchQuery();
    handleSearch();    
  }, []); 

  return (
    <div>
      <header >
        <img src="./logo3.png" style={{height: "80px", margin: "40px auto 0 auto"}}/>
              
            </header>
            <div className="header-div">
            
        <label >
          <input type="text" placeholder=" Enter city, state, country" value={searchQuery} onChange={handleInputChange} style={{borderRadius:"5px", height:"30px"}}/>
        </label>
        <div className="button-style">
        <button onClick={handleSearch} disabled={loading} className='nav-input' type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} color="white"/>
       
          {loading ? 'Searching...' : ''}
        </button>

        
        </div>
        {/* <FontAwesomeIcon icon={faMagnifyingGlass} styles={{ height:"30px"}}/> */}
        </div>
        <span id="country-link"><Link  to="/about/countrycodelist" style={{heigt:"10px", color:"black"}}>Country Codes </Link></span>

      <ul className="ul-nav">
       
        <li >
          <Link className="links" to="/">Daily</Link>
        </li>
        <li >
          <Link className="links"to="/hourly">Hourly</Link>
        </li>
        <li>
          <Link className="links" to="/tendays">10 Days</Link>
        </li>
        <li>
          <Link  className="links" to="/history">365 Days History</Link>
        </li>
        <li>
          <Link className="links" to="/about">About</Link>
        </li>
      </ul>
      <Routes>
        <Route path="" element={<Daily weatherData={weatherData} setSearchQuery={setSearchQuery} handleSearch={handleSearch}/>} />
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
        <Route path="/about/countrycodelist" element={<CountryCodeList />} />
      </Routes>
      {loading && <p>Loading...</p>}
    </div>
  );
};
export default Nav;