import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
        <Link to ="/">
            <div>Home Page</div>
        </Link>
        <Link to ="/todays's-weather">
            <div>Today's Weather</div>
        </Link>
        <Link to ="/ten-days-forecast">
            <div>Ten Days Forecast</div>
        </Link>
        <Link to ="/historical-weather">
            <div>Historical Weather</div>
        </Link>
        <Link to ="/about">
            <div>About us</div>
        </Link>
    </div>
  )
}
