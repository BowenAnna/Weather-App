import "./App.css";
import { React, useState, useEffect } from "react";

import TenDays from "./pages/TenDays";
import FormComponent from "./components/FormComponent";

export default function Main() {
  const [tenDaysForecast, setTenDaysForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //   const [cityName, setCityName] = useState({});
  // const[stateCode, setStateCode]=useState({});
  //   const [country, setCountry] = useState({});

  //https://pro.openweathermap.org/data/2.5/weather?q=fairfax,%20usa&APPID=6c4755a6e699100b5cac3977b2f5aa3f --not valid API

  //   const url_fairfax = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=38.85&lon=-77.35&cnt=16&appid=6c4755a6e699100b5cac3977b2f5aa3f`;

  // const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${appid}`; ////-work
  const appid = "6c4755a6e699100b5cac3977b2f5aa3f";
  const limit = 12;
  const cnt = 10;
  const cityName = "Fairfax";
  const country = "US";

  const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName},${country}&cnt=${cnt}&appid=${appid}`; ///---///don't use ""

  // const url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=Fairfax,US&cnt=3&appid=6c4755a6e699100b5cac3977b2f5aa3f`;

  //   const lat ='38.85'
  //   const long ='-77.35'
  // eslint-disable-next-line no-unused-vars

  // const url = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid={apiKey}`
  // eslint-disable-next-line no-unused-vars
  const zip_code = 22032;

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
        setTenDaysForecast(data.list);
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

  //   if (loading) {
  //     return <p>Loading</p>;
  //   }
  //   if (error) {
  //     return <p>Erro: {error}</p>;
  //   }
  const handleFormSubmit = (formData) => {
    getTenDays(formData);
  };

  return (
    <div>
      <FormComponent onFormSubmit={handleFormSubmit} />

      <TenDays tenDaysForecast={tenDaysForecast} />
    </div>
  );
}
