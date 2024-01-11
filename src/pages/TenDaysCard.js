/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../App.css";

export default function TenDaysCard({ tenDaysData }) {
  const [isClicked, setIsClicked] = useState(false);
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
  //   console.log(
  //     `Wind Speed: ${windSpeedKilometersPerHour.toFixed(
  //       2
  //     )} km/h (${windSpeedMilesPerHour.toFixed(2)} mph)`
  //   );
  //   console.log(`Wind Direction: ${getWindDirection(windDirectionDegrees)}`);
  //   console.log(`Wind Gust: ${windGustMetersPerSecond.toFixed(2)} m/s`);

  // Function to get wind direction
  function getWindDirection(degrees) {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  }

  function handleDetailClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div>
      <h2>
        10 Days Forecast
        {/* {tenDaysData.city.name}, {tenDaysData.city.country} */}
      </h2>
      <section className="weather-list">
        <table>
          <tbody>
            {tenDaysData.map((daily, index) => (
              <div key={index}>
                <tr
                  className={`TenDays-Card ${isClicked ? "clicked" : ""}`}
                  onClick={handleDetailClick}
                >
                  <td>
                    <h4>
                      {convertTimestampToWeekday(daily.dt)}
                      {/* {convertTimestampToWeekday(daily.dt)}{" "}
                      {new Date(daily.dt * 1000).toLocaleDateString()} */}
                    </h4>
                  </td>

                  <td className={`name ${isClicked ? "hidden" : ""}`}>
                    <span style={{ display: "inline-block!important" }}>
                      <h3 style={{ display: "inline-block", color: "red" }}>
                        {daily.temp.max}&deg;F
                      </h3>
                      /{daily.temp.min}&deg;F
                    </span>
                  </td>

                  {/* <td> ////moves the min temp further down on small screen
                    <span style={{ display: "inline-block!important" }}>
                      <h3 style={{ display: "inline-block", color: "red" }}>
                        {daily.temp.max}&deg;F
                      </h3>
                      <p style={{ display: "inline-block" }}>
                        /{daily.temp.min}&deg;F
                      </p>
                    </span>
                  </td> */}

                  <td className={`name ${isClicked ? "hidden" : ""}`}>
                    <h5>Feels Like: {daily.feels_like.day}</h5>
                  </td>

                  <td className={`name ${isClicked ? "hidden" : ""}`}>
                    <img
                      className="weather-icon-img"
                      src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`}
                      alt="corresponding weather icon"
                    />
                    {daily.weather[0].main}, {daily.weather[0].description}
                    {/* </p> */}
                  </td>

                  <td className={`name ${isClicked ? "hidden" : ""}`}>
                    {daily.pop * 100}%
                    <img
                      className="weather-raindrop-img"
                      src="https://tse4.mm.bing.net/th?id=OIP.-R9cAZMllyHfmBhVTUjNLAHaMJ&pid=Api&P=0&h=220"
                      alt="weather-raindrop-icon"
                    />
                  </td>

                  <td className={`name ${isClicked ? "hidden" : ""}`}>
                    Humidity: {daily.humidity}%
                  </td>

                  <td className={`name ${isClicked ? "hidden" : ""}`}>
                    <img
                      className="weather-wind-img"
                      src="https://static.vecteezy.com/system/resources/previews/000/439/806/original/wind-vector-icon.jpg"
                      alt="weather-wind-icon"
                    />
                    {getWindDirection(daily.deg)}{" "}
                    {(daily.speed * 2.237).toFixed(2)} mph
                    {/* {(daily.gust * 2.237).toFixed(2)} mph */}
                  </td>

                  {/* <td>
                    Number({daily.speed}*2.2237.toFixed(2)) mph, 10.48, Deg:{" "}
                    {daily.deg}
                    Gus: {daily.gus}
                  </td> */}
                  <td></td>
                </tr>
                {index !== tenDaysData.length - 1 && <hr />}
              </div>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
