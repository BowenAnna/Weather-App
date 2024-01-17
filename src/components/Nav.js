// Nav.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import History from './History';
import Tenday from './Tenday';
import Daily from './Daily';

const Nav = ({}) => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [fetchedData, setFetchedData] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "f0900d9a761062ebbafd9397b5887886";

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        setLoading(true);
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=${API_KEY}`);
      const fetchedData = await response.json();
            console.log(fetchedData);
      // Check if fetchedData is not empty and has the expected structure
      if (fetchedData && fetchedData.length > 0) {
        setFetchedData(fetchedData[0]);
        console.log(fetchedData[0].lat)
        console.log(fetchedData[0].lon)

      } else {
        console.error('Empty or undefined response or missing list in API:', fetchedData);
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
        setLoading(false);
    }
  };

  return (
    <nav>
      <form onSubmit={handleSubmit}>
        <label className='nav-input'>
           <input placeholder='"City" "State" "Country"'
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </label>
        <button className='nav-input' type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} color='white'/></button>
      </form>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/daily">Daily</Link>
        </li>
        <li>
          <Link to="/tenday">Tenday</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/daily"
          element={<Daily  fetchedData={fetchedData} />}
        />
        <Route
          path="/tenday"
          element={<Tenday  fetchedData={fetchedData} />}
        />
        <Route
          path="/history"
          element={<History fetchedData={fetchedData} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
      {loading && <p>Loading...</p>}

    </nav>
  );
};

export default Nav;
