import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import LandingScreen from './components/LandingScreen';
import EarlyChildhoodEducation from './components/EarlyChildhoodEducation';
import 'bootstrap/dist/css/bootstrap.css';
import IT_Intro from './components/IT_Intro';
import Search_Page from './components/Search_Page';
import AdminLogin from './components/AdminLogin';
import { getDataEvent } from './util/commonDB';

const App = () => {

  useEffect(() => {
    getDataEvent();
  },[]);
  return (
      <Router>
        { window.location.pathname !== "/AdminLogin" ? <Header/> : <></>}
          <div>
          <Routes>

            <Route path="/" element={<LandingScreen/>} />
            <Route exact path="/EarlyChildhoodEducation" element={<EarlyChildhoodEducation/>} />
            <Route exact path="/AdminLogin" element={<AdminLogin/>} />
            <Route exact path="/IT_Intro" element={<IT_Intro/>} />
            <Route exact path="/Search_Page" element={<Search_Page/>} />
          </Routes>
          </div>
          { window.location.pathname !== "/AdminLogin" ? <Footer/> : <></>}
      </Router>
  );
}

export default App;