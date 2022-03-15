import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import LandingScreen from './components/LandingScreen';
import EarlyChildhoodEducation from './components/EarlyChildhoodEducation';
import MusicIntro from './components/MusicIntro';
import 'bootstrap/dist/css/bootstrap.css';
import AdminLogin from './components/AdminLogin';
import { getDataEvent } from './util/commonDB';

const App = () => {

  useEffect(() => {
    getDataEvent();
  },[]);

  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route exact path="/EarlyChildhoodEducation" element={<EarlyChildhoodEducation />} />
          <Route exact path="/MusicIntro" element={<MusicIntro />} />
          <Route exact path="/AdminLogin" element={<AdminLogin />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;