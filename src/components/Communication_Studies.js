import React from 'react'
import './css/Communication_Studies.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css'
import Carousel, { consts } from 'react-elastic-carousel';

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
            <div class="container">
                <div class="CS-Section-1-Header" style={{ textAlign: 'center' }}>
                    <h4 style={{ color: '#717274' }}><b>What is</b></h4>
                    <h1><b>Communication Studies</b></h1>
                </div>
                <div class="container CS-Section-Text-Left">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="CS-Section-1-img">
                                <img class="CS-Section-1-gif" src={require("../assets/images/Communication_Studies/CS-img-1.png")} alt="" />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="CS-Section-1-text">
                                <p style={{ fontWeight: '700' }}>Significant of Communication Studies</p>
                                <p style={{ fontWeight: '500' }} class="CS-Section-1-Content">In this new digital age, communications
                                    has changed significantly as technology and social media sites have br /ought the world
                                    closer. It is essential to have good communication skills in diverse fields from advertising
                                    to public relations, marketing, political and public affairs and other advanced platforms
                                    including, but not limited to, law and professional schools.</p>
                            </div>
                            <button class="btn btn-outline-dark">Read more</button>
                        </div>
                    </div>
                </div>
                <div class="container CS-Section-2">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="CS-Section-2-text">
                                <p style={{ fontWeight: '700' }}>Communication Studies in SEGi</p>
                                <p style={{ fontWeight: '500' }} class="CS-Section-1-Content">Our dedicated faculty members are
                                    committed to helping students in understanding communication in various contexts. The
                                    programmes developed are industry-relevant to enable the application of theoretical
                                    perspectives in their chosen fields upon graduation. Students are guaranteed an in-depth
                                    knowledge of communication techniques and how the technologies shape and govern the society.
                                </p>
                            </div>
                            <button class="btn btn-outline-dark">Read more</button>
                        </div>
                        <div class="col-sm-6">
                            <br />
                            <div class="CS-Section-2-img">
                                <img class="CS-Section-1-img" src={require("../assets/images/Communication_Studies/CS-img-2.png")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="container CS-Section-1">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="CS-Section-1-img">
                                <img class="CS-Section-1-gif" src={require("../assets/images/Communication_Studies/CS-img-3.png")} alt="" />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="CS-Section-1-text">
                                <p style={{ fontWeight: '700' }}>SEGi offer you</p>
                                <p style={{ fontWeight: '500' }} class="CS-Section-1-Content">At SEGi, students will be propelled and
                                    challenged to be excellent communicators and pushed to succeed in their choosen careers</p>
                            </div>
                            <button class="btn btn-outline-dark">Read more</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div style={{ textAlign: 'center' }}>
                    <p style={{ display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: 'large' }}>Previous Successful
                        Events</p>
                </div>

                <Carousel className='CS-carousel'>
                    <Carousel.Item className="CS-carousel-img">
                        <img className="d-block w-100" src={require("../assets/images/Communication_Studies/CS-img-4.png")} alt="" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="CS-carousel-img">
                        <img className="d-block w-100" src={require("../assets/images/Communication_Studies/CS-img-5.png")} alt="" />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="CS-carousel-img">
                        <img className="d-block w-100" src={require("../assets/images/Communication_Studies/CS-img-6.png")} alt="" />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <br />

            <div class="row CS-bgColor">
                <div class="col-sm-7">
                    <br />
                    <div class="container">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="Outstanding-Student-tab" data-toggle="tab"
                                    href="#Outstanding-Student" role="tab" aria-controls="Outstanding-Student"
                                    aria-selected="true">Outstanding Student</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="Success-Story-tab" data-toggle="tab" href="#Success-Story" role="tab"
                                    aria-controls="Success-Story" aria-selected="false">Success Story</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="Worklife-tab" data-toggle="tab" href="#Worklife" role="tab"
                                    aria-controls="Worklife" aria-selected="false">Worklife</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <br />
                            <div class="tab-pane fade show active" id="Outstanding-Student" role="tabpanel"
                                aria-labelledby="Outstanding-Student-tab">
                                <div style={{ boxShadow: '0px 1px #5F84AD' }}>
                                    <p style={{ color: '#5179A7' }}>"There is no passion to be found in playing small — in settling
                                        for a life that is less than the one you are capable of living."</p>
                                    <p style={{ color: '#5179A7' }}>Nelson Mandela</p>
                                </div>
                                <p style={{ color: '#5179A7' }}>Student of 2021 Bachelor of Communication Studies</p>
                                <div>
                                    <img class="CS-icon" src={require("../assets/images/Communication_Studies/profile-icon.png")} alt="" />
                                    <img class="CS-icon" src={require("../assets/images/Communication_Studies/contact-icon.png")} alt="" />
                                    <img class="CS-icon" src={require("../assets/images/Communication_Studies/work-icon.png")} alt="" />
                                </div>
                                <a style={{ color: '#A71337' }} href="#">See More</a>
                            </div>
                            <div class="tab-pane fade" id="Success-Story" role="tabpanel" aria-labelledby="Success-Story-tab">
                                <p style={{ color: '#5179A7' }}>Content for Success Story</p>
                            </div>
                            <div class="tab-pane fade" id="Worklife" role="tabpanel" aria-labelledby="Worklife-tab">
                                <p style={{ color: '#5179A7' }}>Content for Worklife</p>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
                <div class="col-sm-5">
                    <img class="CS-image2" src={require("../assets/images/Communication_Studies/CS-img-7.png")} alt="" />
                </div>
            </div>

            <div class="CS-Section-3">
                <div class="row">
                    <div class="col-sm-5">
                        <img class="CS-Section-3-img" src={require("../assets/images/Communication_Studies/CS-img-8.png")} alt="" />
                    </div>
                    <div class="col-sm-7">
                        <br />
                        <div class="CS-Section-3-right">
                            <p style={{ fontWeight: '700' }}>Want to Know more about our facilities</p>
                            <p style={{ fontWeight: '500' }}>If you are interested in our program and want to check out more about
                                our art and deisgn related facilities, please click on the facilities button.</p>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem', marginRight: '2rem' }}>
                                <button type="button" class="General-Button">Facilities</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Communication_Studies;