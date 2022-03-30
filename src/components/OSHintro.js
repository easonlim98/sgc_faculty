import React from 'react'
import './css/OSH_intro.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css'
import Banner from './general-components/Banner/Banner.js'
import Facilities from './general-components/Facilities/Facilities.js'
import TabsComponent from './general-components/Tabs/TabsComponent'
const OSHintro = () => {
    return (

        <div>
            {/* <div className="OSH-backgroundBanner">

        <div style={{ display: 'flex', height: '80vh', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: 'none', width: '85%', display: 'flex', flexDirection: 'column', }}>
                <div style={{ background: 'none', display: 'flex', flexDirection: 'column' }}>
                    <a style={{ fontSize: '20px', color: '#FFFFFF' }}>Know more about</a>
                    <a style={{ fontSize: '35px', color: '#FFFFFF', fontWeight: 'bold' }}>Our Program</a>
                    <p className="osh-bannerContent-res">If you are interested and want to know more about Occupational and Safety</p>
                    <div>
                        <button type="button" className="General-Button">Programme</button>
                    </div>
                </div>
            </div>
        </div>
 </div> */}
            <div className='CA banner-container'
                style={{
                    backgroundImage: "url(" + require('../assets/images/osh.jpg') + ")"
                }}>
                <Banner
                    navigatepath={"/Search_Page"}
                    bannercontent={"If you are interested and want to know more about Occupational and Safety."} />
            </div>

            <div className="container OSH-Section-1">
                <div className="OSH row">
                    <div className="OSH col-sm-5">
                        <div className="OSH-Section-1-left">
                            <img className="OSH-Section-1-gif" src={require("../assets/images/Picture1.jpg")} alt="" />
                        </div>
                    </div>
                    <div className="OSH col-sm-7">
                        <div className="OSH-Section-1-right">
                            <p style={{ fontWeight: '700', }}>What is Occupational Health and Safety</p>
                            <p style={{ fontWeight: '500', }} className="OSH-Section-1-Content">Occupational safety and health (OSH), also commonly referred to as occupational health and safety (OHS), occupational health, or occupational safety, is a multidisciplinary field concerned with the safety, health, and welfare of people at occupation. These terms also refer to the goals of this field, so their use in the sense of this article was originally an abbreviation of occupational safety and health program/department etc.
                            </p>
                            <p style={{ fontWeight: '500', }} className="OSH-Section-1-Content">The goal of an occupational safety and health program is to foster a safe and healthy occupational environment. OSH also protects all the general public who may be affected by the occupational environment.</p>
                        </div>
                        <div>
                            <button type="button" className="General-Button">Read More</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="OSH-card-deck">

                <img className="OSH-card-img-top1" src={require("../assets/images/oshCapture3.png")} alt="Card image cap"></img>

                <img className="OSH-card-img-top1" src={require("../assets/images/oshCapture2.png")} alt="Card image cap"></img>

                <img className="OSH-card-img-top1" src={require("../assets/images/oshCapture1.png")} alt="Card image cap"></img>


            </div>
            <div className="containerUS">
                <br></br>
                <h5 className="text-center"> WHY CHOOSE US</h5>
                <div className="OSH row sp1">
                    <div className="col OSH-imgborder">
                        <div className="OSH-iconimg">
                            <img src={require("../assets/images/p1.png")} style={{ width: '100px', height: '100px' }} />
                            <h5>Qualifed Docters</h5>
                            <p>Qualified Doctors person who holds a degree recognised by the Medical Council of India and is registered by the Medical Council of any State.</p>
                        </div>
                    </div>

                    <div className="col OSH-imgborder">
                        <div className="OSH-iconimg">
                            <img src={require("../assets/images/p2.png")} style={{ width: '100px', height: '100px' }} />
                            <h5>24 Hours Service</h5>
                            <p>If you need medical care which is an emergency but cannot wait until we re-open, you can call our out-of-hours service.</p><br></br>
                        </div>
                    </div>

                    <div className="col OSH-imgborder">
                        <div className="OSH-iconimg">
                            <img src={require("../assets/images/p3.png")} style={{ width: '100px', height: '100px' }} />
                            <h5>Emergency Care</h5>
                            <p>Emergency Care is an essential part of the health system and serves as the first point of contact for many around the world. </p>
                        </div>
                    </div>

                    <div className="col OSH-imgborder">
                        <div className="OSH-iconimg">
                            <img src={require("../assets/images/p4.png")} style={{ width: '100px', height: '100px' }} />
                            <h5>Operation Theatre</h5>
                            <p>OPERATING THEATRES as an operating room (OR), operating suite, or operation suite) is a facility within a hospital where surgical operations.</p>
                        </div>
                    </div>
                </div>
            </div>
            <TabsComponent
                StudentName={"Oprah"}
                StudentJob={"Student of 2021 Occupational Health and Safety"}
                Studentimage={require('../assets/images/man.png')}
                StudentWords={"“You must have some vision for your life. Even if you don't know the plan, you have to have a direction in which you choose to go.”"}
                navigationpath={""}
                textcolor={"black"}
                backgroundcolor={"#FCB600"}
            />
            <Facilities
                facilitiesimage={require('../assets/images/image2.jpg')}
                content={"If you are interested in our programme and want to check out more about our OSH-related facilities, please click on the facilities button."} />

            {/* <div className="row OSH-bgColor">
                <div className="OSH col-sm-6">
                    <div className="OSH container">
                    </div>
                    <div className="OSH container">
                        <ul className="OSH nav nav-tabs" id="myTab" role="tablist">
                            <li className="OSH nav-item">
                                <a className="nav-link active" id="Outstanding-Student-tab" data-toggle="tab"
                                    href="#Outstanding-Student" role="tab" aria-controls="Outstanding-Student"
                                    aria-selected="true">Outstanding Student</a>
                            </li>
                            <li className="OSH nav-item">
                                <a className="nav-link" id="Success-Story-tab" data-toggle="tab" href="#Success-Story" role="tab"
                                    aria-controls="Success-Story" aria-selected="false">Success Story</a>
                            </li>
                            <li className="OSH nav-item">
                                <a className="nav-link" id="Worklife-tab" data-toggle="tab" href="#Worklife" role="tab"
                                    aria-controls="Worklife" aria-selected="false">Worklife</a>
                            </li>
                        </ul>
                        <div className="OSH tab-content" id="myTabContent">
                            <br />
                            <div className="tab-pane fade show active" id="Outstanding-Student" role="tabpanel"
                                aria-labelledby="Outstanding-Student-tab">
                                <div style={{ boxShadow: '0px 1px #5F84AD' }}>
                                    <p style={{ color: '#000000' }}>"You must have some vision for your life. Even if you don't know the plan, you have to have a direction in which you choose to go."</p>
                                    <p style={{ color: '#000000' }}>Oprah</p>
                                </div>
                                <p style={{ color: '#000000' }}>Student of 2021 Occupational Health and Safety</p>
                                <div>
                                    <img className="CS-icon" src={require("../assets/images/Communication_Studies/profile-icon.png")} alt="" />
                                    <img className="CS-icon" src={require("../assets/images/Communication_Studies/contact-icon.png")} alt="" />
                                    <img className="CS-icon" src={require("../assets/images/Communication_Studies/work-icon.png")} alt="" />
                                </div>
                                <a style={{ color: '#A71337' }} href="#">See More</a>
                            </div>
                            <div className="tab-pane fade" id="Success-Story" role="tabpanel" aria-labelledby="Success-Story-tab">
                                <p style={{ color: '#fff' }}>Content for Success Story</p>
                            </div>
                            <div className="tab-pane fade" id="Worklife" role="tabpanel" aria-labelledby="Worklife-tab">
                                <p style={{ color: '#fff' }}>Content for Worklife</p>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>

                <div className="OSH col-sm-6">
                    <img className="OSH-image2" src={require("../assets/images/man.png")} alt="" />
                </div>
            </div>

    <div className="OSH-Section-6">
        <div className="row">
            <div className="OSH col-sm-5">
                <img className="OSH-Section-6-img" src={require("../assets/images/image2.jpg")} alt="" />
            </div>
            <div className="OSH col-sm-7">
                <div className="OSH-Section-6-right">
                    <br />
                    <br />
                    <p style={{ fontWeight: '700' }}>Want to Know more about our facilities</p>
                    <br />
                    <p style={{ fontWeight: '500' }}>If you are interested in our program and want to check out more about our Occupational and Safety related facilities, please click on the facilities button.</p>
                    <br />
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem', marginRight: '2rem' }}>
                        <button type="button" className="General-Button">Facilities</button>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
        </div>
    )
}

export default OSHintro
