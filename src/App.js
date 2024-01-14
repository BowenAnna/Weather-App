import './App_Bri.css';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './componets/Nav';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
    </div>
    </Router>

  );
}

export default App;