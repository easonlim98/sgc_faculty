import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import LandingScreen from './components/LandingScreen';
import EarlyChildhoodEducation from './components/EarlyChildhoodEducation';
import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< HEAD
import Admin_Login from './components/Admin_Login';
import Hospitality from './components/Hospitality';
=======
import AdminLogin from './components/AdminLogin';
import { getDataEvent } from './util/commonDB';

const App = () => {

  useEffect(() => {
    getDataEvent();
  },[]);
>>>>>>> 3ef227251401f35b2c0b481506ddf8a24545eff2

  return (
      <Router>
        {/* { window.location.pathname !== "/AdminLogin" ? <Header/> : <></>} */}
        <Header/>
          <div>
          <Routes>
<<<<<<< HEAD
            <Route path="/" element={<Landing_Screen/>} />
            <Route exact path="/Early_Childhood_Education" element={<Early_Childhood_Education/>} />
            <Route exact path="/Admin_Login" element={<Admin_Login/>} />
            <Route exact path="/Hospitality" element={<Hospitality/>} />
=======
            <Route exact path="/" element={<LandingScreen/>} />
            <Route exact path="/EarlyChildhoodEducation" element={<EarlyChildhoodEducation/>} />
            <Route exact path="/AdminLogin" element={<AdminLogin/>} />
>>>>>>> 3ef227251401f35b2c0b481506ddf8a24545eff2
          </Routes>
          </div>
          {/* { window.location.pathname !== "/AdminLogin" ? <Footer/> : <></>} */}
          <Footer/>
      </Router>
  );
}

export default App;