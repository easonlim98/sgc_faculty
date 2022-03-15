import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import LandingScreen from './components/LandingScreen';
import EarlyChildhoodEducation from './components/EarlyChildhoodEducation';
import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< HEAD
import AdminLogin from './components/AdminLogin';
import { getDataEvent } from './util/commonDB';

const App = () => {

  useEffect(() => {
    getDataEvent();
  },[]);
=======
import Admin_Login from './components/Admin_Login';
import IT_Intro from './components/IT_Intro';
import Search_Page from './components/Search_Page';
>>>>>>> munkit

  return (
      <Router>
        { window.location.pathname !== "/AdminLogin" ? <Header/> : <></>}
          <div>
          <Routes>
<<<<<<< HEAD
            <Route exact path="/" element={<LandingScreen/>} />
            <Route exact path="/EarlyChildhoodEducation" element={<EarlyChildhoodEducation/>} />
            <Route exact path="/AdminLogin" element={<AdminLogin/>} />
=======
            <Route path="/" element={<Landing_Screen/>} />
            <Route exact path="/Early_Childhood_Education" element={<Early_Childhood_Education/>} />
            <Route exact path="/Admin_Login" element={<Admin_Login/>} />
            <Route exact path="/IT_Intro" element={<IT_Intro/>} />
            <Route exact path="/Search_Page" element={<Search_Page/>} />
>>>>>>> munkit
          </Routes>
          </div>
          { window.location.pathname !== "/AdminLogin" ? <Footer/> : <></>}
      </Router>
  );
}

export default App;