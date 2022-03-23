import React from 'react'
import './css/Communication_Studies.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/standard.css'
import Carousel, { consts } from 'react-elastic-carousel';
import Banner from './general-components/Banner/Banner.js'
import Facilities from './general-components/Facilities/Facilities.js'
import TabsComponent from './general-components/Tabs/TabsComponent'

const Communication_Studies = () => {
    return (
        <div>
            <div class="CS-Banner">
                <div style={{ display: 'flex', height: '80vh', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ background: 'none', width: '85%', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ background: 'none', display: 'flex', flexDirection: 'column' }}>
                            <a style={{ fontSize: '20px', color: '#FFFFFF' }}>Know more about</a>
                            <a style={{ fontSize: '35px', color: '#FFFFFF', fontWeight: 'bold' }}>Our Program</a>
                            <p style={{ color: '#FFFFFF' }} class="CS-bannerContent-res">If you are interested and want to know more
                                about Communication Studies.</p>
                            <div>
                                <button type="button" class="General-Button">Programme</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="CS-container">
                <div class="CS-Section-1-Header" style={{ textAlign: 'center' }}>
                    <h4 className='CS-text-title1' style={{ color: '#717274' }}><b>What is</b></h4>
                    <h1 className='CS-text-title2'><b>Communication Studies</b></h1>
                </div>
                <div class="CS-Section-Content">
                    <div class="row CS-group-content">
                        <div class="col-sm-6 CS-group-img">
                            <div class="CS-Section-2-img">
                                <img class="CS-Section-1-img" src={require("../assets/images/Communication_Studies/CS-img-1.png")} alt="" />
                            </div>
                        </div>
                        <div class="col-sm-6 CS-text-area">
                            <p className='CS-text-hd' style={{ fontWeight: '700' }}>Significant of Communication Studies</p>
                            <p className='CS-text-font' style={{ fontWeight: '500' }} class="CS-Section-1-Content">In this new digital age, communications
                                has changed significantly as technology and social media sites have brought the world
                                closer. It is essential to have good communication skills in diverse fields from advertising
                                to public relations, marketing, political and public affairs and other advanced platforms
                                including, but not limited to, law and professional schools.</p>
                            <button class="btn btn-outline-dark button-style">Read more</button>
                        </div>
                    </div>
                </div>
                <div class="CS-Section-Content">
                    <div class="row CS-group-content1">
                        <div class="col-sm-6 CS-text-area">
                            <div class="CS-Section-2-text">
                                <p className='CS-text-hd' style={{ fontWeight: '700' }}>Communication Studies in SEGi</p>
                                <p className='CS-text-font' style={{ fontWeight: '500' }} class="CS-Section-1-Content">Our dedicated faculty members are
                                    committed to helping students in understanding communication in various contexts. The
                                    programmes developed are industry-relevant to enable the application of theoretical
                                    perspectives in their chosen fields upon graduation. Students are guaranteed an in-depth
                                    knowledge of communication techniques and how the technologies shape and govern the society.
                                </p>
                            </div>
                            <button class="btn btn-outline-dark button-style">Read more</button>
                        </div>
                        <div class="col-sm-6">

                            <div class="CS-Section-2-img">
                                <img class="CS-Section-1-img" src={require("../assets/images/Communication_Studies/CS-img-2.png")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="CS-Section-Content">
                    <div class="row CS-group-content">
                        <div class="col-sm-6 CS-group-img">
                            <div class="CS-Section-2-img">
                                <img class="CS-Section-1-img" src={require("../assets/images/Communication_Studies/CS-img-3.png")} alt="" />
                            </div>
                        </div>
                        <div class="col-sm-6 CS-text-area">
                            <p className='CS-text-hd' style={{ fontWeight: '700' }}>SEGi offer you</p>
                            <p className='CS-text-font' style={{ fontWeight: '500' }} class="CS-Section-1-Content">At SEGi, students will be propelled and
                                challenged to be excellent communicators and pushed to succeed in their choosen careers</p>
                            <button class="btn btn-outline-dark button-style">Read more</button>
                        </div>
                    </div>
                </div>
                {/* <div className='CS-carousel-group'>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: 'large' }}>Previous Successful
                            Events</p>
                    </div>

                    <Carousel className='CS-carousel'>
                        <Carousel.Item className="CS-carousel-img">
                            <div className='CS-carousel-overlay'></div>
                            <img className="d-block w-100" src={require("../assets/images/Communication_Studies/CS-img-4.png")} alt="" />
                            <Carousel.Caption className="CS-carousel-label">
                                <h3 className="CS-carousel-label1 CS-carousel-label-font">First slide label</h3>
                                <p className="CS-carousel-text1 CS-carousel-text-font">First slide content text.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="CS-carousel-img">
                            <div className='CS-carousel-overlay'></div>
                            <img className="d-block w-100" src={require("../assets/images/Communication_Studies/CS-img-5.png")} alt="" />

                            <Carousel.Caption className="CS-carousel-label">
                                <h3 className="CS-carousel-label1 CS-carousel-label-font">Second slide label</h3>
                                <p className="CS-carousel-text1 CS-carousel-text-font">Second slide content text.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="CS-carousel-img">
                            <img className="d-block w-100" src={require("../assets/images/Communication_Studies/CS-img-6.png")} alt="" />
                            <div className='CS-carousel-overlay'></div>
                            <Carousel.Caption className="CS-carousel-label">
                                <h3 className="CS-carousel-label1 CS-carousel-label-font">Third slide label</h3>
                                <p className="CS-carousel-text1 CS-carousel-text-font">Third slide content text.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div> */}
            </div>

            <TabsComponent
                StudentName={"Edward Maya"}
                StudentJob={"Graphic Designer"}
                Studentimage={require('../assets/images/Communication_Studies/CS-img-7.png')}
                StudentWords={"“My high school art education constructed invaluable foundations for me as a creative professional.”"}
                navigationpath={""}
                textcolor={"#A71337"}
                backgroundcolor={"#9AB8D366"}
            />
            <Facilities
                facilitiesimage={require('../assets/images/Communication_Studies/CS-img-8.png')}
                content={"If you are interested in our programme and want to check out more about our Communication Studies-related facilities, please click on the facilities button."} />

        </div>
    )
}

export default Communication_Studies;