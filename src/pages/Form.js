import React, { useState } from "react";

const Form = ({ onFormSubmit }) => {
  const [cityCountry, setCityCountry] = useState("");

  const handleChange = (event) => {
    setCityCountry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const [city, country] = cityCountry.split(",").map((item) => item.trim());
    console.log("City:", city, "Country:", country); // Add this line
    onFormSubmit({ city, country });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          City, Country (Enter City Name, Country Name without commas):
          <input
            type="text"
            name="cityCountry"
            onChange={handleChange}
            value={cityCountry}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Form;
