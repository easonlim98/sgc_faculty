import React, { useState, useEffect } from 'react';
import './css/LandingScreen.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import { getDataEvent } from '../util/commonDB';
import { commonStore } from '../store/commonStore';
import ApiClient from '../util/ApiClient';
import API from '../constant/API';

const PGLandingScreen = () => {
    
    useEffect(() => {
        ApiClient.GET(API.getPGFaculty).then(response => {
            setFacultyList(response)
            console.log(response)
        })
    }, []);

    useEffect(() => {

        ApiClient.GET(API.getPGCourse).then(response => {
            setCourseList(response)
            console.log(response)
        })

    }, []);


    const navigate = useNavigate();

    const [facultyList, setFacultyList] = useState([]);
    const [courseList, setCourseList] = useState([]);

    return (
        <div>
            <div className="landingBanner">
                <img className="bannerImg_Landing" src={require('../assets/images/Landing_Page/banner_img_1.jpg')} alt="" />
            </div>

            <div className="LandingBackgroud">

            <div className="row">

            {facultyList.map((item) => (
                
                    <button className="col-sm-3" style={{ border: 'none', background: 'transparent' }}
                        onClick={() => {
                            var tempCourseList = [];
                            for(var x = 0; x < courseList.length; x++){
                                if(courseList[x].FacultyID === item.FacultyID){
                                    const record = courseList[x];
                                    tempCourseList.push(record);
                                }
                            };
                            commonStore.update(s => {s.selectedCourseList = tempCourseList})
                            navigate(item.IntroNavLink);
                        }}
                    >
                        <div onClick={() => {
                            navigate(item.IntroNavLink);

                        }} style={{ border: 'none' }} >
                            <div>
                                <img className="Imglayout" src={item.FacultyCoverSource} alt="" />
                                <p className="Landing_Textstyle">{item.FacultyName}</p>
                            </div>
                        </div>
                    </button>

                ))}
                </div>

                <div className="University">
                    <h5>Earn a foreign qualification with SEGi</h5>
                    <div className="row" >

                        <div className="col-sm-3">
                            <div style={{ border: 'none' }} >
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img className="Uniimg" src={require("../assets/images/Landing_Page/University/Greenwich.png")} alt="" />
                                    <img className="Logosize" src={require("../assets/images/Landing_Page/University/Greenwich_Logo.png")} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div style={{ border: 'none' }} >
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img className="Uniimg" src={require("../assets/images/Landing_Page/University/Sunderland.png")} alt="" />
                                    <img className="Logosize" src={require("../assets/images/Landing_Page/University/Sunderland_Logo.png")} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div style={{ border: 'none' }} >
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img className="Uniimg" src={require("../assets/images/Landing_Page/University/Troy.png")} alt="" />
                                    <img className="Logosize2" src={require("../assets/images/Landing_Page/University/Troy_Logo.png")} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div style={{ border: 'none' }} >
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img className="Uniimg" src={require("../assets/images/Landing_Page/University/HTMi_Hotel_and_Tourism.png")} alt="" />
                                    <img className="Logosize2" src={require("../assets/images/Landing_Page/University/HTMi_Hotel_and_Tourism_Logo.png")} alt="" />
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="Uni_Description">
                        <p>University of Greenwich (UOG) which traces its roots back to 1890, was founded as Woolwich Polytechnic and
                            later awarded university status in 1992.
                        </p>
                        <p>The University has a long history in the field of education and today, it offers 1,200 programmes across three campuses in
                            South East London and Kent. Among some of its more popular courses are Law, Nursing and Sustainable Electric Power Engineering.
                        </p>
                        <p>According to the 2017 Teaching Excellence Framework (TEF), the University was accorded silver rating in recognition of
                            high quality resources, teaching and personalised provision. The silver rated endorsement is a testament to UOG’s innovative
                            and dynamic teaching as well as learning environment.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default PGLandingScreen;