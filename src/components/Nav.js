import { Link } from "react-router-dom";
export default function Nav(props) {
  return (
    <div className="nav-bar">
      <div className="nav-container">
        <div className="nav-items">
          <Link to="/">
            <div className="nav-logo">WeatherBAM</div>
          </Link>
        </div>

        <div className="nav-items">
          <Link to="/today">
            <div>Today</div>
          </Link>
        </div>

        <div className="nav-items">
          <Link to="/tendays">
            <div>Ten Days</div>
          </Link>
        </div>

        <div className="nav-items">
          <Link to="/history">
            <div>History</div>
          </Link>
        </div>

        <div className="nav-items">
          <Link to="/about">
            <div>About</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
