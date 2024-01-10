import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureThreeQuarters, faWind, faTemperatureLow, faTemperatureHigh, faGauge, faSun, faTemperatureArrowUp, faCloud, faCloudSun, faCloudRain, faSnowflake, faArrowUp,faArrowDown} from '@fortawesome/free-solid-svg-icons'
import '../App.css';

export default function Today({cityName}) {

    const WeatherIcon = ({ weatherCondition }) => {
        let icon = null;
      
        switch (weatherCondition) {
          case 'Clear':
            icon = <FontAwesomeIcon icon={faSun} />;
            break;
          case 'Clouds':
            icon = <FontAwesomeIcon icon={faCloud} color="var(--blue)"/>;
            break;
          case 'CloudsSun':
            icon = <FontAwesomeIcon icon={faCloudSun} />;
            break;
          case 'Rain':
            icon = <FontAwesomeIcon icon={faCloudRain} color="var(--blue)"/>;
            break;
          case 'Snow':
            icon = <FontAwesomeIcon icon={faSnowflake} />;
            break;
          default:
            // Use a default icon or handle other conditions as needed
            icon = <FontAwesomeIcon icon={faSun} />;
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
    const ampm = hours >= 12 ? 'PM EST' : 'AM EST';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  
    // Format the time in 12-hour format
    const formattedTime = `${formattedHours}:${(minutes < 10 ? '0' : '') + minutes}:${(seconds < 10 ? '0' : '') + seconds} ${ampm}`;
    return <span>{formattedTime}</span>;
  };

return(
    <>
    <h1>{cityName?.name}<img src="https://openweathermap.org/img/wn/02d@2x.png"></img></h1>
      <h1>{cityName?.name}, {cityName?.sys.country}</h1>
     <h3><WeatherIcon weatherCondition={cityName?.weather[0].main} /> {cityName?.weather[0].main}</h3>
     <div>
     <h3><FontAwesomeIcon icon={faSun}color="var(--yellow)"/><FontAwesomeIcon icon={faArrowUp} /> Sunrise</h3>
     <p><TimeFormat timestamp={cityName?.sys.sunrise}/></p>
     <h3><FontAwesomeIcon icon={faSun}color="var(--yellow)" /><FontAwesomeIcon icon={faArrowDown} /> Sunset</h3>
     <p><TimeFormat timestamp={cityName?.sys.sunset}/></p>
     </div>
    <h3><FontAwesomeIcon icon={faTemperatureThreeQuarters} /> Temperature</h3>
    <p>{Math.floor(cityName?.main.temp)}°F</p>
    <h3><FontAwesomeIcon icon={faWind} color="gray"/> Wind</h3>
    <p>{cityName?.wind.speed} mph</p>
    <h3><FontAwesomeIcon icon={faTemperatureArrowUp} color="var(--yellow)"/> Feels like</h3>
    <p>{Math.floor(cityName?.main.feels_like)}°F</p>
    <h3><FontAwesomeIcon icon={faTemperatureLow} color="blue"/> Today's low</h3>
    <p>{Math.floor(cityName?.main.temp_min)}°F</p>
    <h3><FontAwesomeIcon icon={faTemperatureHigh} color="red"/> Today's high</h3>
    <p>{Math.floor(cityName?.main.temp_max)}°F</p>
    <h3><FontAwesomeIcon icon={faGauge} color="green"/>  Pressure</h3>
    <p>{(cityName?.main.pressure * 0.02953).toFixed(2)} inHg</p> 
    </>
  )

//    // Function for when data doesn't exist
//     const loading = () => {
//         return <h1>Loading...</h1>;
//       };
//       //if cityName has data, run the loaded function, otherwise, run loading
//     return cityName ? loaded() : loading();
}
