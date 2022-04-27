import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Psychology from './components/Psychology';
import KLLandingScreen from './components/KLLandingScreen';
import SJLandingScreen from './components/SJLandingScreen';
import SKLandingScreen from './components/SKLandingScreen';
import PGLandingScreen from './components/PGLandingScreen';
import EarlyChildhoodEducation from './components/EarlyChildhoodEducation';
import CreativeArt from './components/CreativeArt';
import MusicIntro from './components/MusicIntro';
import AmericanDegree from './components/AmericanDegree';
import Foundation from './components/Foundation';
import 'bootstrap/dist/css/bootstrap.css';
import IT_Intro from './components/IT_Intro';
import Search_Page from './components/Search_Page';
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
import AdminLogin from './components/Admin_Panel/AdminLogin/AdminLogin';
import Profile from './components/Admin_Panel/AdminProfile/Profile';
import CategoryList from './components/Admin_Panel/AdminCategory/CategoryList';
import UserList from './components/Admin_Panel/AdminUser/UserList';
import HomeScreen from './components/Admin_Panel/AdminPost/HomeScreen';
import Dashboard from './components/Admin_Panel/AdminDashboard/Dashboard';
<<<<<<< HEAD
import Preload from './components/Admin_Panel/AdminPost/Preload';
import Key from './constant/Key';
import firebase from 'firebase/app';
=======
import EnquiryList from './components/Admin_Panel/AdminEnquiry/Enquiry';
>>>>>>> main

const App = () => {

  if (!firebase.apps.length) {
    firebase.initializeApp(Key);
  } else {
    firebase.app();
  }

  return (
    <Router>
      {window.location.pathname !== "/AdminLogin" && window.location.pathname !== "/AdminPanel_Profile" &&
        window.location.pathname !== "/AdminPanel_CategoryList" && window.location.pathname !== "/AdminPanel_UserList" &&
        window.location.pathname !== "/AdminPanel_HomePost" && window.location.pathname !== "/AdminPanel_Dashboard" &&
         window.location.pathname !== "/AdminPanel_Enquiry" ? <Header /> : <></>}
      <div>
        <Routes>
          <Route exact path="/AdminLogin" element={<AdminLogin />} />
          <Route exact path="/AdminPanel_Profile" element={<Profile />} />
          <Route exact path="/AdminPanel_CategoryList" element={<CategoryList />} />
          <Route exact path="/AdminPanel_UserList" element={<UserList />} />
          <Route exact path="/AdminPanel_HomePost" element={<HomeScreen />} />
          <Route exact path="/AdminPanel_Dashboard" element={<Dashboard />} />
<<<<<<< HEAD
          <Route exact path="/AdminPanel_Preload" element={<Preload />} />
=======
          <Route exact path="/AdminPanel_Enquiry" element={<EnquiryList />} />
>>>>>>> main
          <Route path="/" element={<Institution />} />
          <Route exact path="/Psychology" element={<Psychology />} />
          <Route exact path="/EarlyChildhoodEducation" element={<EarlyChildhoodEducation />} />
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
          <Route exact path="/KLLandingScreen" element={<KLLandingScreen />} />
          <Route exact path="/SJLandingScreen" element={<SJLandingScreen />} />
          <Route exact path="/SKLandingScreen" element={<SKLandingScreen />} />
          <Route exact path="/PGLandingScreen" element={<PGLandingScreen />} />
          <Route exact path="/Test" element={<Test />} />
        </Routes>
      </div>
      {window.location.pathname !== "/AdminLogin" && window.location.pathname !== "/AdminPanel_Profile" &&
        window.location.pathname !== "/AdminPanel_CategoryList" && window.location.pathname !== "/AdminPanel_UserList" &&
        window.location.pathname !== "/AdminPanel_HomePost" && window.location.pathname !== "/AdminPanel_Dashboard" ? <Footer /> : <></>}
    </Router>
  );
}

export default App;