import React, { useState, useEffect } from "react";
import Form from "./Form";
import TenDaysCard from "./TenDaysCard";

const TenDays = () => {
  const [tenDaysData, setTenDaysData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getTenDaysData = async (city, country) => {
    try {
      setLoading(true);

      const appid = "6c4755a6e699100b5cac3977b2f5aa3f";

      const cnt = 10;
      const apiUrl = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city},${country}&cnt=${cnt}&appid=${appid}&units=imperial`;

      // const cnt = 10;
      // const apiUrl = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city},${country}&cnt=${cnt}&appid=${appid}&units=imperial`;

      const response = await fetch(apiUrl);

      console.log(response);
      const data = await response.json();

      if (response.ok) {
        setTenDaysData(data.list || []);
      } else {
        setError(`Error: ${data.message}`);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTenDaysData("Fairfax", "US"); // Default values, replace with user input
  }, []);

  const handleFormSubmit = (formData) => {
    getTenDaysData(formData.city, formData.country);
  };

  return (
    <div>
      <Form onFormSubmit={handleFormSubmit} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <TenDaysCard tenDaysData={tenDaysData} />
      )}
    </div>
  );
};

export default TenDays;
