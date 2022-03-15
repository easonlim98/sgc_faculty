import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Psychology from './components/Psychology';
import LandingScreen from './components/LandingScreen';
import EarlyChildhoodEducation from './components/EarlyChildhoodEducation';
import MusicIntro from './components/MusicIntro';
import AmericanDegree from './components/AmericanDegree';
import Foundation from './components/Foundation';
import 'bootstrap/dist/css/bootstrap.css';
import Hospitality from './components/Hospitality';
import AdminLogin from './components/AdminLogin';
import { getDataEvent } from './util/commonDB';
import OSHintro from './components/OSHintro';

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
            <Route exact path="/Psychology" element={<Psychology/>} />
            <Route exact path="/" element={<LandingScreen/>} />
            <Route exact path="/EarlyChildhoodEducation" element={<EarlyChildhoodEducation/>} />
            <Route exact path="/MusicIntro" element={<MusicIntro />} />
            <Route exact path="/AmericanDegree" element={<AmericanDegree/>} />
            <Route exact path="/Foundation" element={<Foundation/>} />
            <Route exact path="/AdminLogin" element={<AdminLogin/>} />
            <Route exact path="/Hospitality" element={<Hospitality/>} />
            <Route exact path="/OSHintro" element={<OSHintro/>} />
          </Routes>
          </div>
          {/* { window.location.pathname !== "/AdminLogin" ? <Footer/> : <></>} */}
          <Footer/>
      </Router>
  );
}

export default App;