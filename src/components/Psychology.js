import React from 'react'
import './css/Psychology.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css'
import Banner from './general-components/Banner/Banner.js'
import Facilities from './general-components/Facilities/Facilities.js'
import TabsComponent from './general-components/Tabs/TabsComponent'

const Psychology = () => {
    return (
        <div>
            <div className='PSY banner-container'
                style={{
                    backgroundImage: "url(" + require('../assets/images/Psychology/PSY-newbanner.jpg') + ")"
                }}>
                <Banner
                    navigatepath={"/Search_Page"}
                    coursename={"Psychology"} />
            </div>

            <div className="container PSYintro-Container1">
                <div className="row PSYrow-Container1">
                    <div className="col-sm-6 PSYContainer1colsm1">
                        <div className="PSYintro-wordContainer1number1">
                            <p style={{ fontWeight: "700" }}>SEGI Psychology</p>
                            <p className="PSYintro-Content" style={{fontWeight: "500"}}>
                                As you prepare to pursue a career in Psychology,
                                SEGI's psychology programmes help you attain the
                                necessary skills that prospective employer in a range
                                of careers find attractive.</p>
                            <div>
                                <button type="button" className="General-Button">See More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 PSYContainer1colsm2">
                        <div className="PSYintro-picture">
                            <img className="PSYintro-image" src={require("../assets/images/Psychology/PSY-new3.jpg")} />
                        </div>
                    </div>
                </div>
            </div>


            <div className="container PSYintro-Container2">
                <div className="row PSYrow-Container2">
                    <div className="col-sm-6 PSYContainer2colsm1">
                        <div className="PSYintro-picture">
                            <img className="PSYintro-image" src={require("../assets/images/Psychology/PSY-new2.png")} />
                        </div>
                    </div>
                    <div className="col-sm-6 PSYContainer2colsm2">
                        <div className="PSYintro-wordContainer2number1">
                            <p style={{ fontWeight: "700" }}>Grow your expertise</p>
                            <p className="PSYintro-Content" style={{fontWeight: "500"}}>
                                Designed and taught by practising pschologists and
                                active researchers, our courses reflect the breadth of
                                the discipline from cognitive psychology and
                                neuroscience to developmental psychology, positive
                                psychology as well as social psychology.
                            </p>
                            <div>
                                <button type="button" className="General-Button">See More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container PSYintro-Container3">
                <div className="row PSYrow-Container3">
                    <div className="col-sm-6 PSYContainer3colsm1">
                        <div className="PSYintro-wordContainer3number1">
                            <p className="PSYintro-gothoughprogramme">Go though the programme</p>
                            <p className="PSYintro-Content" style={{fontWeight: "500"}}>
                                As you go through the programme you will not only be
                                well prepared to excel in the world of psychology and
                                mental health through our strong curriculum, but also
                                organise events, volunteer in outreach projects and
                                engage with the industry to put what you've learn in
                                the classrooms to the real world.
                            </p>
                            <div style={{textAlign:"end"}}>
                                <button type="button" className="PSYownbutton1">See More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 PSYContainer3colsm2">
                        <div className="PSYintro-picturechanges1">
                            <img className="PSYintro-imagechanges1" src={require("../assets/images/Psychology/PSY-new4.jpg")} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container PSYintro-Container4">
                <p className="PSY-previoustalk">Previous successful talk</p>
                <div className="row PSYrow-Container4">
                    <div className="PSYContainer4colsm1">
                        <div className="PSYintro-picture1container4">
                            <img className="PSYintro-image1container4" src={require("../assets/images/Psychology/Psychologymain4.png")} />
                        </div>
                    </div>

                    <div className="col-sm-3 PSYContainer4colsm2">
                        <div className="PSYintro-picture2container4">
                            <img className="PSYintro-image2container4" src={require("../assets/images/Psychology/Psychologymain5.png")} />
                        </div>
                    </div>

                    <div className="col-sm-3 PSYContainer4colsm3">
                        <div className="PSYintro-picture3container4">
                            <img className="PSYintro-image3container4" src={require("../assets/images/Psychology/Psychologymain6.png")} />
                        </div>
                    </div>
                </div>

                <div className="container PSYintro-Container5">
                    <div className="row PSYrow-Container5">
                        <div className="PSYContainer5colsm1">
                            <div className="PSYintro-wordContainer5number1">
                                <p style={{ fontWeight: "700", fontStyle: "italic" }}>Why Covid-19 getting so serious recently</p>
                                <p className="PSYintro-Content" style={{fontWeight: "500"}}>
                                    The COVID-19 pandemic and the new norms that have come about have affected
                                    all aspects of our day to day lives. Change can be difficult and these changes
                                    have disrupted our lives literally overnight. As metnal health matters, especially
                                    in a crisis, the lecturers of the SEGI College Subang Jaya School of Psychology
                                    reached out virtually to our students and members of the public with positive messages
                                    promoting mental health awareness.
                                </p>
                                <p style={{fontWeight:"bold"}}>Hosted by: Segi College Kuala Lumpur</p>
                                <div style ={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                    <p style={{margin:"0", fontWeight:"bold"}}>Tutor: Professor who graduated on August 18,1945</p>
                                    <button type="button" className="PSYownbutton2" style={{margin:"0", padding:"0", width:"unset"}}>Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 PSYContainer5colsm2">
                            <div className="PSYintro-wordContainer5number2">
                                <p style={{ fontWeight: "Light" }}>MINDFULNESS-BASED COGNITIVE THERAPY</p>
                            </div>
                        </div>
                        <div className="col-sm-3 PSYContainer5colsm3">
                            <div className="PSYintro-wordContainer5number3">
                                <p style={{ fontWeight: "Light"}}>COGNITIVE THERAPY</p>
                            </div>
                            <div style={{textAlign:"end"}}>
                                <button type="button" className="PSYownbutton3" style={{fontStyle:"italic"}}>See More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
            </div>
                <Facilities
                facilitiesimage={require('../assets/images/Psychology/PSY-new5.jpg')}
                content={"If you are interested in our programme and want to check out more about our Psychology-related facilities, please click on the facilities button."} />
        </div>)
}


export default Psychology