import { useState } from "react";

//Define a func that is our component
export default function Header(props) {
  //Declar the State to hold data of our form
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  //handleChange --updates formData as we type into the form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on the form submission
    event.preventDefault();

    //pass the search term to weather search prop, which is getTenDayForecast function
    props.getTenDayForecast(formData.searchterm);
  };
  //The component returns some JSX
  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchterm"
          onChange={handleChange}
          value={formData.searchterm}
        />
        <button className="form-submit">
          <img
            src={process.env.PUBLIC_URL + "./images/MagnifyingGlass.png"}
            className="magifying-class-header"
            alt="magifying glass for search"
          />
          Search City Name or Zipcode
        </button>
      </form>
    </div>
  );
}
