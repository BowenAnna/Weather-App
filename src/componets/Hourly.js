import React from "react";
import "../App_Anna.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faWind } from "@fortawesome/free-solid-svg-icons";
import TimeFormat from "../functions/TimeFormat";
import WeatherIcon from "../functions/WeatherIcon";

export default function Hourly({ hourlyData }) {

  return (
      <div className="hourly-main-block">
        {Array.from({ length: 24 }, (_, index) => (
          <div key={index} className="hourly-div-blocks">
            <h3>
              <TimeFormat timestamp={hourlyData?.list?.[index]?.dt} />
            </h3>
            <h3>{Math.floor(hourlyData?.list?.[index]?.main?.temp)} °F</h3>
            <h3>
              <WeatherIcon
                weatherCondition={hourlyData?.list?.[index]?.weather?.[0]?.icon}
              />
            </h3>
            <h3 className="white-colored">
            <img src="https://www.transparentpng.com/thumb/raindrops/blue-raindrops-png-pictures-2.png" alt="blue raindrops" style={{height:"15px"}}/>{" "}
              {Math.floor(hourlyData?.list?.[index]?.pop * 100)}%
            </h3>
            <h3>
              <FontAwesomeIcon icon={faWind} />{" "}
              {Math.floor(hourlyData?.list?.[index]?.wind?.speed)} mph
            </h3>
          </div>
        ))}
      </div>
  );
}
