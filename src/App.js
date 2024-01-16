import './App_Bri.css';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './componets/Nav';
import Footer from "./componets/Footer";

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <Footer/>
    </div>
    </Router>
    
 
  );
}

export default App;