import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Psychology from './components/Psychology';
import LandingScreen from './components/LandingScreen';
import EarlyChildhoodEducation from './components/EarlyChildhoodEducation';
import CreativeArt from './components/CreativeArt';
import MusicIntro from './components/MusicIntro';
import AmericanDegree from './components/AmericanDegree';
import Foundation from './components/Foundation';
import 'bootstrap/dist/css/bootstrap.css';
import IT_Intro from './components/IT_Intro';
import Search_Page from './components/Search_Page';
import AdminLogin from './components/AdminLogin';
import { getDataEvent } from './util/commonDB';
import Lawintro from './components/Lawintro';
import Hospitality from './components/Hospitality';
import ASHintro from './components/ASHintro';
import Nursing from './components/Nursing';
import OSHintro from './components/OSHintro';
import Communication_Studies from './components/Communication_Studies';
import Business_And_Accounting from './components/Business_And_Accounting';
import CourseDetail from './components/CourseDetail';
import NewCourse from './components/NewCourse';
import Institution from './components/Institution';
import Test from './components/Test';

const App = () => {

  return (
    <Router>
      {window.location.pathname !== "/AdminLogin" ? <Header /> : <></>}
      <div>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route exact path="/Psychology" element={<Psychology />} />
          <Route exact path="/" element={<LandingScreen />} />
          <Route exact path="/EarlyChildhoodEducation" element={<EarlyChildhoodEducation />} />
          <Route exact path="/AdminLogin" element={<AdminLogin />} />
          <Route exact path="/IT_Intro" element={<IT_Intro />} />
          <Route exact path="/Search_Page" element={<Search_Page />} />
          <Route exact path="/CourseDetail" element={<CourseDetail />} />
          <Route exact path="/NewCourse" element={<NewCourse />} />
          <Route exact path="/Nursing" element={<Nursing />} />
          <Route exact path="/OSHintro" element={<OSHintro />} />
          <Route exact path="/Hospitality" element={<Hospitality />} />
          <Route exact path="/CreativeArt" element={<CreativeArt />} />
          <Route exact path="/Business_And_Accounting" element={<Business_And_Accounting />} />
          <Route exact path="/Communication_Studies" element={<Communication_Studies />} />
          <Route exact path="/AmericanDegree" element={<AmericanDegree />} />
          <Route exact path="/Foundation" element={<Foundation />} />
          <Route exact path="/MusicIntro" element={<MusicIntro />} />
          <Route exact path="/Psychology" element={<Psychology />} />
          <Route exact path="/Lawintro" element={<Lawintro />} />
          <Route exact path="/ASHintro" element={<ASHintro />} />
          <Route exact path="/Institution" element={<Institution />} />
          <Route exact path="/Test" element={<Test />} />

        </Routes>
      </div>
      {window.location.pathname !== "/AdminLogin" ? <Footer /> : <></>}
    </Router>
  );
}

export default App;