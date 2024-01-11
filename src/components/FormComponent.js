import React, { useState } from "react";
const FormComponent = ({ onFormSubmit }) => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  //   const [selectedDate, setSelectedDate] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ city, country });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        City:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label>
        Country:
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </label>
      {/* <label>
        Select Date:
        <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
      </label> */}
      <button type="submit">Get Ten Forecast</button>
    </form>
  );
};
export default FormComponent;
