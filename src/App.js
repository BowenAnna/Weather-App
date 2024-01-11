import './App.css';
import {Route, Routes} from 'react-router-dom'
import Nav from './componets/Nav';
import Today from './pages/Today';
import Input from './componets/Input';
import { useState, useEffect } from 'react';
// import Footer from './componets/Footer';
// import Hourly from './pages/Hourly';



function App() {
  const appid = "5c738c355e265d93e475b42644ff3d86";

    const[cityName, setCityName]=useState({});
    const[stateCode, setStateCode]=useState({});
    const[country, setCountry]=useState({});
    const[dailyResponse, setDailyResponse]=useState({});
    const[hourlyResponse, setHourlyResponse]=useState({})
  
    const getDaily= async(cityName, stateCode, country)=>{
      try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateCode},${country}&appid=${appid}&units=imperial`)
        console.log(response);
        const data = await response.json();
        console.log(data);
        setDailyResponse(data);
        setCityName(data);
        // setStateCode(data);
        // setCountry(data);
      }
      catch(error){console.error(error)}
    }

    const getHourly = async(cityName, stateCode, country)=>{
      try{
        const response2 = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${cityName},${stateCode},${country}&appid=${appid}&units=imperial`)
        console.log(response2);
        const data = await response2.json();
        console.log(data);
        setHourlyResponse(data);
        setCityName(data);
        // setStateCode(data);
        // setCountry(data);
      }
      catch(error){console.error(error)}
    }
  
  return (
    <div className="App">  
      <Input dailysearch={getDaily} hourlysearch={getHourly} /> 
      <Today cityName={cityName}/>
      {/* <Hourly cityName={cityName}/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;