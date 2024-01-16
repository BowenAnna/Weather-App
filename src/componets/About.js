import App_Bri from "../App_Bri.css"

export default function About() {  
  return (
    <div className="div-about"> 
    <h2 className="about-title">About BAM Weather</h2>
    <h3 className="h3-about">Introduction</h3>
    <p className="p-about">BAM Weather is a weather application named after its creators: Brianna, Anna, and Mishelle. This application provides current weather, predictive weather, and a 365 day historical weather information for a selected date in the past.</p>
    <h3 className="h3-about">Who Are We</h3>
    <p className="p-about">Brianna, Anna, and Mishelle are a team of developers passionate about delivering accurate and user-friendly weather information. BAM Weather is the result of our collaboration, aiming to provide users with both current, predictive, and historical weather data.</p>
    <h3 className="h3-about">Features</h3>
    <ul className="ul-about">
      <li className="li-about">Current Weather:</li>
      <li className="li-about">Hourly Weather:</li>
      <li className="li-about">Ten Days Weather:</li>
      <li className="li-about">365 Day Weather:</li>
      <li className="li-about">List of 2 Letter Country Codes</li>
    </ul>
    <h3 className="h3-about">How to Use</h3>
    <p className="p-about">Current Weather:
      Enter a location in the search bar.
      View the daily, hourly, and ten days of weather conditions, including temperature, humidity, and wind speed.</p>
      <p className="p-about">Historical Weather:
      Click on the "History" button.
      Select a date in the past 365 days using the date input.
      Click "Get Historical Weather" to see the weather details for the chosen date and location.
      If nothing appears try submitting your location again. If nothing, check that you are only selecting days within the last 365 days. </p>
<h3 className="h3-about">Technologies Used</h3>
<ul className="ul-about">
  <li className="li-about">React</li>
  <li className="li-about">OpenWeatherMap API</li>
  <li className="li-about">FontAwesomeIcon</li>
  <li className="li-about">ChatGPT OpenAI</li>
</ul>
<h3 className="h3-about">Contributors</h3>
<ul className="ul-about">
  <a href="www.linkedin.com/in/brianna-anulo"><li className="li-about">Brianna</li></a>
 <a href="https://www.linkedin.com/in/realannabowen/"> <li className="li-about">Anna</li></a>
  <a href="https://www.linkedin.com/in/esser-mishelle/"><li className="li-about">Mishelle</li></a>
</ul>
<h3 className="h3-about">Feedback</h3>
<p className="p-about">If you have any feedback, suggestions, or issues with BAM Weather, please submit an issue.

Thank you for using BAM Weather!</p>
    </div>
   
  )
}