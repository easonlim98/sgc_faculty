import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Landing_Screen from './components/Landing_Screen';
import Early_Childhood_Education from './components/Early_Childhood_Education';
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
          <Route path="/" element={<Landing_Screen />} />
          <Route exact path="/Early_Childhood_Education" element={<Early_Childhood_Education />} />
          <Route exact path="/MusicIntro" element={<MusicIntro />} />
          <Route exact path="/Admin_Login" element={<Admin_Login />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;