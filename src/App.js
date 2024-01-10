import './App.css';
import {Route, Routes} from 'react-router-dom'
import Nav from './componets/Nav';
import Today from './pages/Today';
import Input from './componets/Input';
import { useState, useEffect } from 'react';
import Footer from './componets/Footer';



function App() {
  const appid = "5c738c355e265d93e475b42644ff3d86";

    const[cityName, setCityName]=useState({});
    const[stateCode, setStateCode]=useState({});
    const[country, setCountry]=useState({});
  
    const getCity= async(cityName)=>{
      try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateCode},${country}&appid=${appid}&units=imperial`)
        console.log(response);
        const data = await response.json();
        console.log(data);
        setCityName(data);
      }
      catch(error){console.error(error)}
    }
  
  return (
    <div className="App">  
      <Input citysearch={getCity}/>
      <Today cityName={cityName}/>
      <Footer/>
    </div>
  );
}

export default App;