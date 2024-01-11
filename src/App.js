/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import TenDays from "./pages/TenDays";
import TenDaysCard from "./pages/TenDaysCard";

const App = () => {
  return (
    <div className="App">
      <TenDays />
      {/* <TenDaysCard tenDaysData={tenDaysData} /> */}
    </div>
  );
};

export default App;
