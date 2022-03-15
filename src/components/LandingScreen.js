import React from 'react';
import './css/LandingScreen.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";

const LandingScreen = () => {

const navigate = useNavigate();

  return (
    <div>
        <div className="landingBanner">
            <img className="bannerImg" src={require('../assets/images/Landing_Page/banner_img_1.jpg')} alt=""/>
        </div>

        <div className="LandingBackgroud">
            <div className="row row-cols-4" >

            <div className="col">
            <div className="card" style={{ border: 'none' }} >
                <div className="card-body">
                  <img className="Imglayout" src={require("../assets/images/Landing_Page/Programme/Allied_Health_Science.png")} alt=""/>
                  <p className="card-text Textstyle" >Allied health Science</p>
                </div>
            </div>
            </div>

            <div className="col">
              <div className="card" style={{ border: 'none' }} >
                <div className="card-body">
                  <img className="Imglayout" src={require("../assets/images/Landing_Page/Programme/American_Degree_Program.png")} alt=""/>
                  <p className="card-text Textstyle">American Degree Program</p>
                </div>
              </div>
            </div>

            <div className="col">
                <div className="card" style={{ border: 'none' }} >
                  <div className="card-body">
                    <img className="Imglayout" src={require("../assets/images/Landing_Page/Programme/Business_And_Accounting.png")} alt=""/>
                    <p className="card-text Textstyle">Business And Accounting</p>
                  </div>
                </div>
              </div>

            <div className="col">
            <div className="card" style={{ border: 'none' }}>
                <div className="card-body">
                <img className="Imglayout" src={require("../assets/images/Landing_Page/Programme/Communication_Studies.png")} alt=""/>
                <p className="card-text Textstyle">Communication Studies</p>
                </div>
            </div>
            </div>

            <div className="col">
            <div className="card" style={{ border: 'none' }}>
                <div className="card-body">
                <img className="Imglayout" src={require("../assets/images/Landing_Page/Programme/Creative_Art_Design.png")} alt=""/>
                <p className="card-text Textstyle">Creative Art & Design</p>
                </div>
            </div>
            </div>

            <div className="col">
                <button className="card" style={{ border: 'none' }}
                    onClick={() => {
                        navigate('/EarlyChildhoodEducation');
                    }}
                >
                <div className="card-body">
                    <img className="Imglayout" src={require("../assets/images/Landing_Page/Programme/Early_Childhood_Care_Education.png")} alt=""/>
                    <p className="card-text Textstyle">Early Childhood Care & Education</p>
                </div>
                </button>
            </div>

            <div className="col">
                <div className="card" style={{ border: 'none' }}>
                    <div className="card-body">
                    <img className="Imglayout" src={require("../assets/images/Landing_Page/Programme/Hospitality_Tourism.png")} alt=""/>
                    <p className="card-text Textstyle">Hospitality & Tourism</p>
                </div>
            </div>
            </div>

            <div className="col">
                <div className="card" style={{ border: 'none' }}>
                    <div className="card-body">
                    <img className="Imglayout" src={require("../assets/images/Landing_Page/Programme/Information_Technology.png")} alt=""/>
                    <p className="card-text Textstyle">Information Technology</p>
                </div>
            </div>
            </div>

            <div className="col">
                <div className="card" style={{ border: 'none' }}>
                    <div className="card-body">
                    <img className="Imglayout" src={require("../assets/images/Landing_Page/Programme/Pre_U_Foundation.png")} alt=""/>
                    <p className="card-text Textstyle">Pre U / Foundation</p>
                </div>
            </div>
            </div>

            <div className="col">
                <div className="card" style={{ border: 'none' }}>
                    <div className="card-body">
                    <img className="Imglayout" src={require("../assets/images/Landing_Page/Programme/Psychology.png")} alt=""/>
                    <p className="card-text Textstyle">Psychology</p>
                </div>
            </div>
            </div>

            <div className="col">
                <button className="card" style={{ border: 'none' }}
                onClick={() => 
                        navigate('/MusicIntro')}
                        >
                    <div className="card-body">
                    <img className="Imglayout" src={require("../assets/images/Landing_Page/Programme/Music_Studies.png")} alt=""/>
                    <p className="card-text Textstyle">Music Studies</p>
                </div>
            </button>
            </div>

            <div className="col">
                <div className="card" style={{ border: 'none' }}>
                    <div className="card-body">
                    <img className="Imglayout" src={require("../assets/images/Landing_Page/Programme/Law.png")} alt=""/>
                    <p className="card-text Textstyle">Law</p>
                </div>
            </div>
            </div>

            <div className="col">
                <div className="card" style={{ border: 'none' }}>
                    <div className="card-body">
                    <img className="Imglayout" src={require("../assets/images/Landing_Page/Programme/Nursing_and_Caring.png")} alt=""/>
                    <p className="card-text Textstyle">Nursing and Caring</p>
                </div>
            </div>
            </div>

            <div className="col">
                <div className="card" style={{ border: 'none' }}>
                    <div className="card-body">
                    <img className="Imglayout" src={require("../assets/images/Landing_Page/Programme/Occupational_Health_and_Safety.png")} alt=""/>
                    <p className="card-text Textstyle">Occupational Health and Safety</p>
                </div>
            </div>
            </div>
            </div>

        <div className="University">
            <h5>Earn a foreign qualification with SEGi</h5>
            <div className="row" >

                <div className="col-sm-3">
                <div className="card" style={{ border: 'none' }} >
                    <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <img className="Uniimg" src={require("../assets/images/Landing_Page/University/Greenwich.png")} alt=""/>
                      <img className="Logosize" src={require("../assets/images/Landing_Page/University/Greenwich_Logo.png")} alt=""/>
                    </div>
                </div>
                </div>

                <div className="col-sm-3">
                <div className="card" style={{ border: 'none' }} >
                    <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img className="Uniimg" src={require("../assets/images/Landing_Page/University/Sunderland.png")} alt=""/>
                        <img className="Logosize" src={require("../assets/images/Landing_Page/University/Sunderland_Logo.png")} alt=""/>
                    </div>
                </div>
                </div>

                <div className="col-sm-3">
                <div className="card" style={{ border: 'none' }} >
                    <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img className="Uniimg" src={require("../assets/images/Landing_Page/University/Troy.png")} alt=""/>
                        <img className="Logosize2" src={require("../assets/images/Landing_Page/University/Troy_Logo.png")} alt=""/>
                    </div>
                </div>
                </div>

                <div className="col-sm-3">
                <div className="card" style={{ border: 'none' }} >
                    <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img className="Uniimg" src={require("../assets/images/Landing_Page/University/HTMi_Hotel_and_Tourism.png")} alt=""/>
                        <img className="Logosize2" src={require("../assets/images/Landing_Page/University/HTMi_Hotel_and_Tourism_Logo.png")} alt=""/>
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

export default LandingScreen;