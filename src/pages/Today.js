import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureThreeQuarters,
  faWind,
  faTemperatureLow,
  faTemperatureHigh,
  faGauge,
  faSun,
  faTemperatureArrowUp,
  faCloud,
  faCloudSun,
  faCloudRain,
  faSnowflake,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";

export default function Today({ cityName }) {
  const WeatherIcon = ({ weatherCondition }) => {
    let icon = null;

    switch (weatherCondition) {
      case "01d":
        icon = (
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt="clear-sky"
          />
        );
        break;
      case "02d":
        icon = (
          <img
            src="https://openweathermap.org/img/wn/02d@2x.png"
            alt="few-clouds"
          />
        );
        break;
      case "03d":
        icon = (
          <img
            src="https://openweathermap.org/img/wn/03d@2x.png"
            alt="scattered-clouds"
          />
        );
        break;
      case "04d":
        icon = (
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            alt="broken-clouds"
          />
        );
        break;
      case "09d":
        icon = (
          <img
            src="https://openweathermap.org/img/wn/09d@2x.png"
            alt="shower rain"
          />
        );
        break;
      case "10d":
        icon = (
          <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="rain" />
        );
        break;
      case "11d":
        icon = (
          <img
            src="https://openweathermap.org/img/wn/11d@2x.png"
            alt="thunderstorm"
          />
        );
        break;
      case "13d":
        icon = (
          <img src="https://openweathermap.org/img/wn/13d@2x.png" alt="snow" />
        );
        break;
      case "50d":
        icon = (
          <img src="https://openweathermap.org/img/wn/50d@2x.png" alt="mist" />
        );
        break;

      case "01n":
        icon = (
          <img
            src="https://openweathermap.org/img/wn/01n@2x.png"
            alt="clear-sky"
          />
        );
        break;
      case "02n":
        icon = (
          <img
            src="https://openweathermap.org/img/wn/02n@2x.png"
            alt="few-clouds"
          />
        );
        break;
      case "03n":
        icon = (
          <img
            src="https://openweathermap.org/img/wn/03n@2x.png"
            alt="scattered-clouds"
          />
        );
        break;
      case "04n":
        icon = (
          <img
            src="https://openweathermap.org/img/wn/04n@2x.png"
            alt="broken-clouds"
          />
        );
        break;
      case "09n":
        icon = (
          <img
            src="https://openweathermap.org/img/wn/09n@2x.png"
            alt="shower-rain"
          />
        );
        break;
      case "10n":
        icon = (
          <img src="https://openweathermap.org/img/wn/10n@2x.png" alt="rain" />
        );
        break;
      case "11n":
        icon = (
          <img
            src="https://openweathermap.org/img/wn/11n@2x.png"
            alt="thunderstorm"
          />
        );
        break;
      case "13n":
        icon = (
          <img src="https://openweathermap.org/img/wn/13n@2x.png" alt="snow" />
        );
        break;
      case "50n":
        icon = (
          <img src="https://openweathermap.org/img/wn/50n@2x.png" alt="mist" />
        );
        break;
      default:
        // Use a default icon or handle other conditions as needed
        icon = (
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="clear-sky"
          />
        );
        break;
    }
    return <span>{icon}</span>;
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
    <div className="main-div">
      <div className="top-div">
        <div className="city-title">
          <h1>
            {cityName?.name}, {cityName?.sys?.country}
          </h1>
        </div>
        <div className="params">
          <div className="side-by-side">
            {/* <h3><FontAwesomeIcon icon={faTemperatureThreeQuarters} /> Temperature</h3> */}
            <p id="temp">{Math.floor(cityName?.main?.temp)}°</p>
            <h3 style={{marginLeft: "20px"}}> {cityName?.weather?.[0].main}</h3>
            <h3 style={{marginLeft: "20px"}}>
            <FontAwesomeIcon icon={faTemperatureHigh} color="red" /> {" "}
            {Math.floor(cityName?.main?.temp_max)}°F / {" "}
              <FontAwesomeIcon icon={faTemperatureLow} color="blue" />{" "}{Math.floor(cityName?.main?.temp_min)}°F</h3>
          </div>
          <div className="side-by-side " style={{alignitems:"right"}}>
            <h3 style={{ width:"100px",
                height:"100px",
                border:"1px solid black",
                textAlign: "right"}}>
              <WeatherIcon
                weatherCondition={cityName?.weather?.[0].main}
              
              />
            </h3>
          </div>
        </div>
      </div>
      <div className="bottom-div">
        <h3>
          <FontAwesomeIcon icon={faSun} color="var(--yellow)" />
          <FontAwesomeIcon icon={faArrowUp} /> Sunrise
        </h3>
        <p>
          <TimeFormat timestamp={cityName?.sys?.sunrise} />
        </p>
        <h3>
          <FontAwesomeIcon icon={faSun} color="var(--yellow)" />
          <FontAwesomeIcon icon={faArrowDown} /> Sunset
        </h3>
        <p>
          <TimeFormat timestamp={cityName?.sys?.sunset} />
        </p>
        <h3>
          <FontAwesomeIcon icon={faWind} /> Wind
        </h3>
        <p>{cityName?.wind?.speed} mph</p>
        <h3>
          <FontAwesomeIcon icon={faTemperatureArrowUp} color="var(--yellow)" />{" "}
          Feels like
        </h3>
        <p>{Math.floor(cityName?.main?.feels_like)}°F</p>

        <h3>
          <FontAwesomeIcon icon={faGauge} color="green" /> Pressure
        </h3>
        <p>{(cityName?.main?.pressure * 0.02953).toFixed(2)} inHg</p>
      </div>
    </div>
  );
}
