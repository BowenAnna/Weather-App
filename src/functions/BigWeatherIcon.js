import React from "react";
const BigWeatherIcon = ({ weatherCondition }) => {
    let icon = null;

    switch (weatherCondition) {
      case "01d":
        icon = (
          <img className="daily-large-icon"
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="clear-sky"
          />
        );
        break;
      case "02d":
        icon = (
          <img className="daily-large-icon"
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="few-clouds"
          />
        );
        break;
      case "03d":
        icon = (
          <img className="daily-large-icon"
            src="https://openweathermap.org/img/wn/03d@2x.png"
            alt="scattered-clouds"
          />
        );
        break;
      case "04d":
        icon = (
          <img className="daily-large-icon"
            src="https://openweathermap.org/img/wn/04d@2x.png"
            alt="broken-clouds"
          />
        );
        break;
      case "09d":
        icon = (
          <img className="daily-large-icon"
            src="https://openweathermap.org/img/wn/09d@2x.png"
            alt="shower rain"
          />
        );
        break;
      case "10d":
        icon = (
          <img className="daily-large-icon" src="https://openweathermap.org/img/wn/10d@2x.png" 
          alt="rain" />
        );
        break;
      case "11d":
        icon = (
          <img className="daily-large-icon"
            src="https://openweathermap.org/img/wn/11d@2x.png"
            alt="thunderstorm"
          />
        );
        break;
      case "13d":
        icon = (
          <img className="daily-large-icon" src="https://openweathermap.org/img/wn/13d@2x.png" 
          alt="snow" />
        );
        break;
      case "50d":
        icon = (
          <img className="daily-large-icon" src="https://openweathermap.org/img/wn/50d@2x.png" 
          alt="mist" />
        );
        break;

      case "01n":
        icon = (
          <img className="daily-large-icon"
            src="https://openweathermap.org/img/wn/01n@2x.png"
            alt="clear-sky"
          />
        );
        break;
      case "02n":
        icon = (
          <img className="daily-large-icon"
            src="https://openweathermap.org/img/wn/02n@2x.png"
            alt="few-clouds"
          />
        );
        break;
      case "03n":
        icon = (
          <img className="daily-large-icon"
            src="https://openweathermap.org/img/wn/03n@2x.png"
            alt="scattered-clouds"
          />
        );
        break;
      case "04n":
        icon = (
          <img className="daily-large-icon"
            src="https://openweathermap.org/img/wn/04n@2x.png"
            alt="broken-clouds"
          />
        );
        break;
      case "09n":
        icon = (
          <img className="daily-large-icon"
            src="https://openweathermap.org/img/wn/09n@2x.png"
            alt="shower-rain"
          />
        );
        break;
      case "10n":
        icon = (
          <img className="daily-large-icon" src="https://openweathermap.org/img/wn/10n@2x.png"
           alt="rain" />
        );
        break;
      case "11n":
        icon = (
          <img className="daily-large-icon"
            src="https://openweathermap.org/img/wn/11n@2x.png"
            alt="thunderstorm"
          />
        );
        break;
      case "13n":
        icon = (
          <img className="daily-large-icon" src="https://openweathermap.org/img/wn/13n@2x.png" 
          alt="snow" />
        );
        break;
      case "50n":
        icon = (
          <img className="daily-large-icon" src="https://openweathermap.org/img/wn/50n@2x.png" 
          alt="mist" />
        );
        break;
      default:
        // Use a default icon or handle other conditions as needed
        icon = (
          <img className="daily-large-icon"
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="clear-sky"
          />
        );
        break;
    }
    return <span>{icon}</span>;
  };
  export default BigWeatherIcon;