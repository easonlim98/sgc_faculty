import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import LandingScreen from './components/LandingScreen';
import EarlyChildhoodEducation from './components/EarlyChildhoodEducation';
import 'bootstrap/dist/css/bootstrap.css';
import AdminLogin from './components/AdminLogin';
import { getDataEvent } from './util/commonDB';
import Lawintro from './components/Lawintro';
import ASHintro from './components/ASHintro';

const App = () => {

  useEffect(() => {
    getDataEvent();
  },[]);

  return (
      <Router>
        { window.location.pathname !== "/AdminLogin" ? <Header/> : <></>}
          <div>
          <Routes>
            <Route exact path="/" element={<LandingScreen/>} />
            <Route exact path="/EarlyChildhoodEducation" element={<EarlyChildhoodEducation/>} />
            <Route exact path="/AdminLogin" element={<AdminLogin/>} />
            <Route exact path="/Lawintro" element={<Lawintro/>} />
            <Route exact path="/ASHintro" element={<ASHintro/>} />

            
          </Routes>
          </div>
          { window.location.pathname !== "/AdminLogin" ? <Footer/> : <></>}
      </Router>
  );
}

export default App;