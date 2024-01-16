import React, { useState } from "react";
import "../App_Mishelle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faYoutube } from "@fortawesome/free-brands-svg-icons";
export default function TenDaysCard({ tenDaysData }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log(tenDaysData);
  // Check if tenDaysData.list is defined and is an array
  // if (tenDaysData && tenDaysData.list && Array.isArray(tenDaysData.list)) {
  //   const tenDaysArray = tenDaysData.list;
  // Check if tenDaysData.city is defined
  if (tenDaysData && tenDaysData.city) {
    const tenDaysArray = tenDaysData.list;
    //coverts unix time to weekday, month day (my choice of render)
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
    // converts unix time to 12 hrs PM/AM
    //convert unix time to 12 hours AM/PM for sunrise/sunset
    function convertTimestampTo12Hour(timestamp) {
      const date = new Date(timestamp * 1000);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const period = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      return `${formattedHours}:${minutes < 10 ? "0" : ""}${minutes} ${period}`;
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
      <div className="main-body">
        <h2>
          10 Days forecast - {tenDaysData.city.name}, {tenDaysData.city.country}
          {/* <FontAwesomeIcon icon="fa-brands fa-youtube" /> */}
        </h2>
        <section className="weather-list">
          <div className="center-table">
            <table>
              <tbody>
                {/* mapping thru the dataset to get each date's weather */}
                {tenDaysArray.map((daily, index) => (
                  <div key={index}>
                    {/* if the table-row is clicked, row disappears, replaced by details(bottom) */}
                    <tr
                      className={`TenDays-Card ${isClicked ? "clicked" : ""}`}
                      onClick={handleDetailClick}
                    >
                      {/* converts from unix date & displays: weekday, momth, date in the month */}
                      <td className={`name ${isClicked ? "hidden" : ""}`}>
                        <h3>
                          {convertTimestampToWeekday(daily.dt)}
                          {/* {convertTimestampToWeekday(daily.dt)}{" "}
                      {new Date(daily.dt * 1000).toLocaleDateString()} */}
                        </h3>
                      </td>
                      {/* displays max/min temp  */}
                      <td className={`name ${isClicked ? "hidden" : ""}`}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <h1
                            style={{
                              color: "#8B0000",
                              margin: 0,
                              fontSize: "2.5rem",
                            }}
                          >
                            {Math.floor(daily.temp.max)}&deg;
                          </h1>
                          <h2 style={{ color: "blue", margin: 0 }}>
                            |{Math.floor(daily.temp.min)}&deg;F
                          </h2>
                        </div>
                      </td>
                      <td className={`name ${isClicked ? "hidden" : ""}`}>
                        <h5 style={{ fontWeight: "bolder" }}>
                          Feels Like: {daily.feels_like.day}
                        </h5>
                      </td>
                      <td
                        className={`name ${
                          isClicked
                            ? "hidden weather-icon-div"
                            : "weather-icon-div"
                        }`}
                      >
                        <img
                          className="weather-icon-img"
                          src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`}
                          alt="corresponding weather icon"
                          style={{
                            marginRight: 0,
                            marginBottom: 0,
                            alignItems: "end",
                          }}
                        />
                        {daily.weather[0].main}, {daily.weather[0].description}
                      </td>
                      <td className={`name ${isClicked ? "hidden" : ""}`}>
                        {Math.floor(daily.pop * 100)}%
                        <img
                          className="weather-raindrop-img"
                          src="https://www.transparentpng.com/thumb/raindrops/blue-raindrops-png-pictures-2.png"
                          alt="weather-raindrop-icon"
                        />
                      </td>
                      <td className={`name ${isClicked ? "hidden" : ""}`}>
                        Humidity: {daily.humidity}%
                      </td>
                      {/* Detailed when clicked */}
                      <td className={`name ${isClicked ? "hidden" : ""}`}>
                        <img
                          className="weather-wind-img"
                          src="http://getdrawings.com/free-icon/wind-icon-png-65.png"
                          // src="https://static.vecteezy.com/system/resources/previews/000/439/806/original/wind-vector-icon.jpg"
                          alt="weather-wind-icon"
                        />
                        {getWindDirection(daily.deg)}{" "}
                        {(daily.speed * 2.237).toFixed(2)} mph
                        {/* {(daily.gust * 2.237).toFixed(2)} mph */}
                      </td>
                      {/* Detailed Weekday, Month, date - Day */}
                      <div className="detail-all-div">
                        <td
                          className={`name ${
                            isClicked ? "AM-box" : "hidden AM-box"
                          }`}
                        >
                          <div>
                            <h5>
                              {convertTimestampToWeekday(daily.dt)}
                              <p
                                style={{
                                  display: "inline-block",
                                  fontSize: "15px",
                                  color: "red",
                                }}
                              >
                                | Day
                              </p>
                            </h5>
                            <h3
                              style={{
                                display: "inline-block",
                                color: "blue",
                                fontSize: "50px",
                              }}
                            >
                              {Math.floor(daily.temp.day)}&deg;F
                            </h3>
                            <div
                              className={`name ${isClicked ? "" : "hidden"}`}
                            >
                              <img
                                src="https://cdn1.iconfinder.com/data/icons/weather-from-cloud-flat/64/cloud-element-weather-sunrise-sun-up-rise-512.png"
                                alt="sun-rise-png"
                                style={{ width: "60px" }}
                              />
                              <h3 style={{ color: "black", fontSize: "20px" }}>
                                Sunrise{" "}
                                {convertTimestampTo12Hour(daily.sunrise)}
                              </h3>
                            </div>
                          </div>
                        </td>
                        {/* Detailed Weekday, Month, date - Night */}
                        <td
                          className={`name ${
                            isClicked ? "PM-box" : "hidden PM-box"
                          }`}
                        >
                          <div>
                            <h5>
                              {convertTimestampToWeekday(daily.dt)}
                              <p
                                style={{
                                  display: "inline-block",
                                  fontSize: "15px",
                                  color: "green",
                                }}
                              >
                                | Night
                              </p>
                            </h5>
                            <h3
                              style={{
                                display: "inline-block",
                                color: "blue",
                                fontSize: "50px",
                              }}
                            >
                              {Math.floor(daily.temp.morn)}&deg;F
                            </h3>
                            <div
                              className={`name ${isClicked ? "" : "hidden"}`}
                            >
                              <img
                                src="https://cdn1.iconfinder.com/data/icons/weather-from-cloud-flat/64/cloud-element-weather-sunset-sun-down-set-512.png"
                                alt="sun-rise-png"
                                style={{ width: "60px" }}
                              />
                              <h3 style={{ color: "black", fontSize: "20px" }}>
                                Sunset {convertTimestampTo12Hour(daily.sunset)}
                              </h3>
                            </div>
                          </div>
                        </td>
                      </div>
                    </tr>
                    {index !== tenDaysData.length - 1 && <hr />}
                  </div>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  } else {
    // Handle the case where the expected data structure is not present
    console.error(
      "Invalid or missing data structure in API response:",
      tenDaysData
    );
    return <div>Error loading data</div>;
  }
}