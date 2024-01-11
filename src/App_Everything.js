/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./App.css";
import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Header from "./components/Header";
// import Nav from "./components/Nav";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Today from "./pages/Today";
import TenDays from "./pages/TenDays";
// import Main from "./Main";
// import getTenDays from "./services/getData.js";

export default function App() {
  const [tenDaysForecast, setTenDaysForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //   const [cityName, setCityName] = useState({});
  // const[stateCode, setStateCode]=useState({});
  //   const [country, setCountry] = useState({});

  //   const url_fairfax = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=38.85&lon=-77.35&cnt=16&appid=6c4755a6e699100b5cac3977b2f5aa3f`;

  // const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${appid}`; ////-work
  const appid = "6c4755a6e699100b5cac3977b2f5aa3f";
  const limit = 12;
  const cnt = 10;
  const cityName = "Arlington";
  const country = "US";

  // const cityName = "";
  // const country = "";
  // const zipcode = 22032;
  // const zip_code = 77001;
  const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName},${country}&cnt=${cnt}&appid=${appid}&units=imperial`; ///---///don't use ""

  // const url =`https://pro.openweathermap.org/data/2.5/forecast/hourly?zip={zip code},{country code}&appid={API key}`///pro

  // const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=Fairfax,US&cnt=3&appid=6c4755a6e699100b5cac3977b2f5aa3f`;

  //   const lat ='38.85'
  //   const long ='-77.35'
  // eslint-disable-next-line no-unused-vars

  // const url = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid={apiKey}`
  // eslint-disable-next-line no-unused-vars

  // const url =`http://api.openweathermap.org/geo/1.0/zip?zip={zip_code},{country_code}&appid={API key}`
  // eslint-disable-next-line no-unused-vars
  // const url_zip = `http://api.openweathermap.org/geo/1.0/zip?zip=22032&appid=6c4755a6e699100b5cac3977b2f5aa3f`;
  // {
  //     "zip": "22032",
  //     "name": "Fairfax County",
  //     "lat": 38.8177,
  //     "lon": -77.2925,
  //     "country": "US"
  //     }

  // const url =`http://api.openweathermap.org/geo/1.0/direct?q={city_name},{state_code},{country_code}&limit={limit}&appid={apiKey}`
  //// https://api.openweathermap.org/geo/1.0/direct?q=22032&limit=3&appid=6c4755a6e699100b5cac3977b2f5aa3f
  // [
  // {
  // "name": "Burgesbeg",
  // "lat": 52.818079,
  // "lon": -8.312002564342377,
  // "country": "IE"
  // }
  // ]

  const getTenDays = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();

      if (response.ok) {
        console.log(data);
        //     const { city, list } = data[0];
        //     console.log(data[0]);

        setTenDaysForecast((prevTenDaysForecast) => {
          console.log("DDDaset is", prevTenDaysForecast);
          return data.list || [];
        });
        console.log("crazy is: ");
        console.log(tenDaysForecast);
        console.log(tenDaysForecast[0]);
      } else {
        setError(`Error: ${data.message}`);
      }
    } catch (error) {
      console.log("error");
      setError(error.message);
    } finally {
      setLoading(false);
      console.log("finally error");
    }
  };

  useEffect(() => {
    getTenDays();
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>Erro: {error}</p>;
  }

  const handleFormSubmit = (formData) => {
    getTenDays(formData);
  };

  const tenDaysEl = tenDaysForecast.list
    ? tenDaysForecast.list.map((daily, index) => (
        <TenDays key={index} tenDaysForecast={daily} />
      ))
    : null;

  function convertTimestampToWeekday(timestamp) {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const date = new Date(timestamp * 1000); // Convert to milliseconds
    const dayOfWeek = daysOfWeek[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();

    return `${dayOfWeek}, ${month} ${dayOfMonth}`;
  }

  const windSpeedMetersPerSecond = 10.68;
  const windDirectionDegrees = 153;
  const windGustMetersPerSecond = 28.08;

  // Conversion functions
  const metersPerSecondToKilometersPerHour = (metersPerSecond) =>
    metersPerSecond * 3.6;
  const metersPerSecondToMilesPerHour = (metersPerSecond) =>
    metersPerSecond * 2.237;

  // Convert values
  const windSpeedKilometersPerHour = metersPerSecondToKilometersPerHour(
    windSpeedMetersPerSecond
  );
  const windSpeedMilesPerHour = metersPerSecondToMilesPerHour(
    windSpeedMetersPerSecond
  );

  // Display values
  console.log(
    `Wind Speed: ${windSpeedKilometersPerHour.toFixed(
      2
    )} km/h (${windSpeedMilesPerHour.toFixed(2)} mph)`
  );
  console.log(`Wind Direction: ${getWindDirection(windDirectionDegrees)}`);
  console.log(`Wind Gust: ${windGustMetersPerSecond.toFixed(2)} m/s`);

  // Function to get wind direction
  function getWindDirection(degrees) {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  }

  const icon_url = `https://openweathermap.org/img/wn/{theIcon}@2x.png`;
  return (
    <div>
      <section className="weather-list">
        <table>
          <tbody>
            {tenDaysForecast && tenDaysForecast.length > 0 ? (
              tenDaysForecast.map((daily, index) => (
                <div key={index}>
                  <tr>
                    <td>
                      <h4>
                        {convertTimestampToWeekday(daily.dt)}
                        {/* {convertTimestampToWeekday(daily.dt)}{" "}
                      {new Date(daily.dt * 1000).toLocaleDateString()} */}
                      </h4>
                    </td>
                    {/* </div> */}

                    {/* <p>Temp Day: {daily.temp.day}</p> */}
                    <td>
                      <span style={{ display: "inline-block!important" }}>
                        <h3 style={{ display: "inline-block", color: "red" }}>
                          {daily.temp.max}&deg;F
                        </h3>
                        <p style={{ display: "inline-block" }}>
                          /{daily.temp.min}&deg;F
                        </p>
                      </span>
                    </td>

                    <td>
                      <p>Feels Like: {daily.feels_like.day}</p>
                    </td>

                    <td>
                      <img
                        className="weather-icon-img"
                        src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`}
                        alt="corresponding weather icon"
                      />
                    </td>
                    {/* {daily.weather[0].icon} */}
                    {/* <p> */}
                    <td>
                      {daily.weather[0].main}, {daily.weather[0].description}
                      {/* </p> */}
                    </td>

                    <td>
                      <p>{daily.pop}% chance of rain</p>
                    </td>
                    <td>
                      <p>Humidity: {daily.humidity}</p>
                    </td>
                  </tr>
                  {index !== tenDaysForecast.length - 1 && <hr />}
                </div>
              ))
            ) : (
              <div>No forecast data available.</div>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}
