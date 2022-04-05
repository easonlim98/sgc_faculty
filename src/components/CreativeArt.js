import React, { useState, useEffect } from 'react'
import './css/CreativeArt.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css';
import Banner from './general-components/Banner/Banner.js'
import Facilities from './general-components/Facilities/Facilities.js'
import TabsComponent from './general-components/Tabs/TabsComponent'
const CreativeArt = () => {
    return (
        <>
            <div className='CA banner-container'
                style={{
                    backgroundImage: "url(" + require('../assets/gif/Creative Art/CA.gif') + ")"
                }}>
                <Banner
                    navigatepath={"/Search_Page"} 
                    coursename={"Creative Art & Design"} />
            </div>

            <div className="container CA-Section-1">
                <div className="row" style={{ alignItems: 'center' }}>
                    <div className="col-sm-5">
                        <div className="CA-Section-1-left">
                            <img className="CA-Section-1-pic" src={require('../assets/images/Creative_Art/firstpic.png')} />
                        </div>
                    </div>
                    <div className="col-sm-7" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="CA-Section-1-right">
                            <p style={{ fontWeight: '900', color: '#A71337' }} className="CA-Section-1-Title">
                                What is Creative Art & Design
                            </p>
                            <p style={{ fontWeight: '600', }} className="CA-Section-1-Content">
                                The objective of the programme is to prepare students wishing to pursue professional
                                careers in the creative design industry. Its aim is to train creative talents who are capable
                                of meeting the client’s demands by providing the appropriate design solutions in their
                                work place.

                            </p>
                            <p style={{ fontWeight: '900', color: '#A71337' }} className="CA-Section-1-Title">
                                What you will to learn from Creative Art & Design
                            </p>
                            <p style={{ fontWeight: '600', marginBottom: 0 }} className="CA-Section-1-Content">
                                All students will learn manual skills and exploration of conventional and contemporary
                                media in communication design. The programme incorporates areas such as advertising,
                                corporate identity, typography, illustration, computer graphics and photography into
                                communication design. The students will be coached to learn the skills of basic computer
                                software applications and equipped with IT-based knowledge. But above all, the emphasis
                                is placed on the quality of inventiveness and critical thinking.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container d-flex CA-Section-2 my-5 align-items-center justify-content-center" id="CA-section2-container">
                <div className="row row-cols-12" id="section2-gg1" style={{ maxWidth: "90%" }}>
                    <div className="col-6 col-md-4 d-flex flex-column justify-content-around" id="section2-relative-column" >
                        <div className="d-flex flex-column py-4" id="section2-student-artwork-row">
                            <p className="CA-section-2_STUDENT m-0">S T U D E N T S</p>
                            <p className="CA-section-2_ARTWORKS m-0">A R T W O R K S</p>
                        </div>
                        <img className="CA-Section-2-pic1 " src={require('../assets/images/Creative_Art/50.jpg')} />
                    </div>
                    <div className="col-6 col-md-4 d-flex flex-column align-items-center" id="section2-kelefe-1">
                        <img className="CA-Section-2-pic2 " src={require('../assets/images/Creative_Art/49.JPG')} />
                    </div>
                    <div className="col-6 col-md-4 d-flex flex-column align-items-end justify-content-between" id="section2-bottom-row">
                        <div className='d-flex align-items-end flex-column' id='section2-next-row'>
                            <div id="line2" className="CA-horizontal"></div>
                            <p className='all-text CA-Next' style={{ color: '#A71337' }}>Next</p>
                        </div>
                        <div className='d-flex align-items-end flex-column' id="section2-bottom-text">
                            <p className='all-text CA-name' style={{ color: '#ACACAC', fontWeight: '500', }}>KELVIN LIM</p>
                            <p className='all-text CA-goldaward' style={{ fontSize: '25px', color: 'black', fontWeight: '800' }}>GOLD AWARD</p>
                            <p className='all-text CA-award' style={{ color: '#9E8D8D' }}>AWARDED ON 09/20/2020</p>
                            <p className='all-text CA-viewmore' style={{ color: '#A71337', fontWeight: '500' }}>View more on our Virtual Gallery</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container CA-Section-3">
                <div style={{ display: 'flex', flex: 2 }}>
                    <img className="CA-Section-3-pic1" style={{ display: 'flex', flex: 1 }} src={require('../assets/images/Creative_Art/color_example.png')} />
                </div>
                <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                    <img className="CA-Section-3-pic2" src={require('../assets/images/Creative_Art/bnwexample.png')} />
                </div>
            </div> */}

            <TabsComponent
                StudentName={"Ishqha Khidzr "}
                StudentJob={"UI/UX Designer"}
                Studentimage={require('../assets/images/Creative_Art/student1.jpg')}
                StudentWords={"“I came in as an intern. Right off the bat, the boss liked my logo and web design so much, they used it for their big new launch! Now I’m a full-timer! The pay? Not bad at all, not bad at all!”"}
                achievementcontent={"1st Prize Winner - Raya Packet e-design competition organised by Setia City Mall in March 2021"}
                achievementname={"Pua Si Rong"} 
                achievementjob={"Diploma in Graphic Design"}
                achievementsample={require("../assets/images/Creative_Art/Picture1.jpg")}
                navigationpath={""}
                textcolor={"#A71337"}
                backgroundcolor={"#E3E4E3"}
            />
            <Facilities
                facilitiesimage={require('../assets/images/Creative_Art/5_Animation Room_1.jpg')}
                content={"If you are interested in our programme and want to check out more about our Art and Design-related facilities, please click on the facilities button."}
                navigationpath={"http://bit.ly/segigallery"}
            />

        </>
    )
}

export default CreativeArt;