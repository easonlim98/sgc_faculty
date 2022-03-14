import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Landing_Screen from './components/Landing_Screen';
import Early_Childhood_Education from './components/Early_Childhood_Education';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
      <Router>
        <Header />
          <div>
          <Routes>
            <Route path="/" element={<Landing_Screen/>} />
            <Route exact path="/Early_Childhood_Education" element={<Early_Childhood_Education/>} />
          </Routes>
          </div>
        <Footer />
      </Router>
  );
}

export default App;