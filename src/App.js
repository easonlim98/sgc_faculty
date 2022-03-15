import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import LandingScreen from './components/LandingScreen';
import EarlyChildhoodEducation from './components/EarlyChildhoodEducation';
import 'bootstrap/dist/css/bootstrap.css';
import Hospitality from './components/Hospitality';
import AdminLogin from './components/AdminLogin';
import { getDataEvent } from './util/commonDB';

const App = () => {

  useEffect(() => {
    getDataEvent();
  },[]);

  return (
      <Router>
        {/* { window.location.pathname !== "/AdminLogin" ? <Header/> : <></>} */}
        <Header/>
          <div>
          <Routes>
            <Route path="/" element={<LandingScreen/>} />
            <Route exact path="/EarlyChildhoodEducation" element={<EarlyChildhoodEducation/>} />
            <Route exact path="/AdminLogin" element={<AdminLogin/>} />
            <Route exact path="/Hospitality" element={<Hospitality/>} />
          </Routes>
          </div>
          {/* { window.location.pathname !== "/AdminLogin" ? <Footer/> : <></>} */}
          <Footer/>
      </Router>
  );
}

export default App;