import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faWind } from "@fortawesome/free-solid-svg-icons";

export default function Hourly({ cityName }) {
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the time as HH:mm:ss
    const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    return formattedTime;
  };

  const TimeFormat = ({ timestamp }) => {
    // Create a new Date object and multiply the timestamp by 1000 since JavaScript works with milliseconds
    const date = new Date(timestamp * 1000);

    // Extract the components of the date
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Convert to 12-hour format
    const ampm = hours >= 12 ? "PM EST" : "AM EST";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

    // Format the time in 12-hour format
    const formattedTime = `${formattedHours}:${
      (minutes < 10 ? "0" : "") + minutes
    }:${(seconds < 10 ? "0" : "") + seconds} ${ampm}`;
    return <span>{formattedTime}</span>;
  };

  return (
    <>
      <h1>{getCurrentTime}</h1>
      <div className="main-block">
        {Array.from({ length: 24 }, (_, index) => (
          <div key={index} className="div-blocks">
            <h3>
              <TimeFormat timestamp={cityName?.list?.[index]?.dt} />
            </h3>
            <h3>{Math.floor(cityName?.list?.[index]?.main?.temp)} °F</h3>
            <h3>
              <WeatherIcon
                weatherCondition={cityName?.list?.[index]?.weather?.[0]?.icon}
              />
            </h3>
            <h3 className="white-colored">
              <FontAwesomeIcon icon={faDroplet} height="10px" width="10px" />{" "}
              {Math.floor(cityName?.list?.[index]?.pop * 100)}%
            </h3>
            <h3>
              <FontAwesomeIcon icon={faWind} />{" "}
              {Math.floor(cityName?.list?.[index]?.wind?.speed)} mph
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}
