import React from 'react'
import './css/Communication_Studies.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css'
import Banner from './general-components/Banner/Banner.js'
import Facilities from './general-components/Facilities/Facilities.js'
import TabsComponent from './general-components/Tabs/TabsComponent'

const Communication_Studies = () => {
    return (
        <div>
            <div className='BA banner-container'
                style={{
                    backgroundImage: "url(" + require('../assets/gif/Communication_Studies/CS-gif-1.gif') + ")"
                }}>
                <Banner
                    navigatepath={"/Search_Page"}
                    bannercontent={"If you are interested and want to know more about Business & Accounting."} />
            </div>
            <div className="CS-container">
                <div className="CS-Section-1-Header" style={{ textAlign: 'center' }}>
                    <h4 className='CS-text-title1' style={{ color: '#717274' }}><b>What is</b></h4>
                    <h1 className='CS-text-title2'><b>Communication Studies</b></h1>
                </div>
                <div className="CS-Section-Content">
                    <div className="row CS-group-content">
                        <div className="col-sm-6 CS-group-img">
                            <div className="CS-Section-2-img">
                                <img className="CS-Section-1-img" src={require("../assets/images/Communication_Studies/CS-img-1.png")} alt="" />
                            </div>
                        </div>
                        <div className="col-sm-6 CS-text-area">
                            <p className='CS-text-hd' style={{ fontWeight: '700' }}>Significant of Communication Studies</p>
                            <p className='CS-Section-1-Content CS-text-font' style={{ fontWeight: '500' }}>The communications industry in Malaysia and around the world has evolved so much that contemporary professional communicators now have to stand up to face the current challenges with sophistication and respond through the various media channels. Modern communicators have to utilise all media available, from verbal communication to print media, from broadcasting to digital platforms. Effective communication requires communicators to speak clearly to each individual audience.</p>
                            <button className="btn btn-outline-dark button-style">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="CS-Section-Content">
                    <div className="row CS-group-content1">
                        <div className="col-sm-6 CS-text-area">
                            <div className="CS-Section-2-text">
                                <p className='CS-text-hd' style={{ fontWeight: '700' }}>Communication Studies in SEGi</p>
                                <p className='CS-Section-1-Content CS-text-font' style={{ fontWeight: '500' }}>At SEGi Group of Colleges, we are equipped with sophisticated technology and state-of-art technology, including broadcast studios, radio studios, editing rooms, voice-over studios, photography studios, and modern computer labs with the latest software and equipment. We also have internship placement programmes that will spur our students towards excellence in their careers.</p>

                            </div>
                            <button className="btn btn-outline-dark button-style">Read more</button>
                        </div>
                        <div className="col-sm-6">

                            <div className="CS-Section-2-img">
                                <img className="CS-Section-1-img" src={require("../assets/images/Communication_Studies/CS-img-2.png")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="CS-Section-Content">
                    <div className="row CS-group-content">
                        <div className="col-sm-6 CS-group-img">
                            <div className="CS-Section-2-img">
                                <img className="CS-Section-1-img" src={require("../assets/images/Communication_Studies/CS-img-3.png")} alt="" />
                            </div>
                        </div>
                        <div className="col-sm-6 CS-text-area">
                            <p className='CS-text-hd' style={{ fontWeight: '700' }}>SEGi offer you</p>
                            <p className='CS-Section-1-Content CS-text-font' style={{ fontWeight: '500' }}>Responding to these high expectations, SEGi Group of Colleges offers dynamic courses focusing on creative content creation, media studies, broadcasting, public relations, journalism, advertising and digital marketing.</p>
                            <button className="btn btn-outline-dark button-style">Read more</button>
                        </div>
                    </div>
                </div>
                <div className='CS-carousel-group'>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: 'large' }}>Previous Successful
                            Events</p>
                    </div>
                    <div id="CS-carousel" className="CS-carousel carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item CS-carousel-img active">
                                <div className='CS-carousel-overlay'></div>
                                <img className="d-block w-100" src={require("../assets/images/Communication_Studies/CS-img-4.png")} alt="" />
                                <div className="carousel-caption d-none d-md-block CS-carousel-label">
                                    <h3 className="CS-carousel-label1 CS-carousel-label-font">First slide label</h3>
                                    <p className="CS-carousel-text1 CS-carousel-text-font">First slide content text.</p>
                                </div>
                            </div>
                            <div className="carousel-item CS-carousel-img">
                                <div className='CS-carousel-overlay'></div>
                                <img className="d-block w-100" src={require("../assets/images/Communication_Studies/CS-img-5.png")} alt="" />
                                <div className="carousel-caption d-none d-md-block CS-carousel-label">
                                    <h3 className="CS-carousel-label1 CS-carousel-label-font">Second slide label</h3>
                                    <p className="CS-carousel-text1 CS-carousel-text-font">Second slide content text.</p>
                                </div>
                            </div>
                            <div className="carousel-item CS-carousel-img">
                                <div className='CS-carousel-overlay'></div>
                                <img className="d-block w-100" src={require("../assets/images/Communication_Studies/CS-img-6.png")} alt="" />
                                <div className="carousel-caption d-none d-md-block CS-carousel-label">
                                    <h3 className="CS-carousel-label1 CS-carousel-label-font">Third slide label</h3>
                                    <p className="CS-carousel-text1 CS-carousel-text-font">Third slide content text.</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#CS-carousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#CS-carousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>

            <TabsComponent
                StudentName={"Edward Maya"}
                StudentJob={"Graphic Designer"}
                Studentimage={require('../assets/images/Communication_Studies/CS-img-7.png')}
                StudentWords={"“My high school art education constructed invaluable foundations for me as a creative professional.”"}
                navigationpath={""}
                textcolor={"#215082"}
                backgroundcolor={"#9AB8D366"}
            />
            <Facilities
                facilitiesimage={require('../assets/images/Communication_Studies/CS-img-8.png')}
                content={"If you are interested in our programme and want to check out more about our Communication Studies-related facilities, please click on the facilities button."}
            />
        </div>
    )
}

export default Communication_Studies;