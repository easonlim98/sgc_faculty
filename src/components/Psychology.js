import React from 'react'
import './css/Psychology.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/standard.css'
import { hide } from 'react-modal/lib/helpers/ariaAppHider';

const Psychology = () => {
    return (
        <div>
            <div className="PSYintro-backgroundBanner">
                <div className="row PSYintro-rowBanner">
                    <div className="col-sm-6">
                    </div>
                    <div className="col-sm-6">
                        <div style={{ display: "flex", height: "80vh", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ background: "none", width: "85%", display: "flex", flexDirection: "column" }}>
                                <div style={{ background: "none", display: "flex", flexDirection: "column" }}>
                                    <a style={{ fontSize: "20px", color: "#FFFFFF" }}>KNOW MORE ABOUT</a>
                                    <a style={{ fontSize: "35px", color: "#FFFFFF", fontWeight: "bold" }}>Our Program</a>
                                    <p className="PSYintro-banner-detail" style={{ color: "#FFFFFF" }}>If you are interested and want to know more about Psychology.</p>
                                    <div>
                                        <button type="button" className="General-Button">Program</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container PSYintro-Container1">
                <div className="row PSYrow-Container1">
                    <div className="col-sm-6 PSYContainer1colsm1">
                        <div className="PSYintro-wordContainer1number1">
                            <p style={{ fontWeight: "700" }}>SEGI Psychology</p>
                            <p className="PSYintro-Content">
                                As you prepare to pursue a career in Psychology,
                                SEGI's psychology programmes help you attain the
                                necessary skills that prospective employer in a range
                                of careers find attractive.</p>
                            <div>
                                <button type="button" className="General-Button">See More</button>
                            </div>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                    <div className="col-sm-6 PSYContainer1colsm2">
                        <div className="PSYintro-picture">
                            <img className="PSYintro-image" src={require("../assets/images/Psychology/Psychologymain1.png")} />
                        </div>
                    </div>
                </div>
            </div>


            <div className="container PSYintro-Container2">
                <div className="row PSYrow-Container2">
                    <div className="col-sm-6 PSYContainer2colsm1">
                        <div className="PSYintro-picture">
                            <img className="PSYintro-image" src={require("../assets/images/Psychology/Psychologymain2.png")} />
                        </div>
                    </div>
                    <div className="col-sm-6 PSYContainer2colsm2">
                        <div className="PSYintro-wordContainer2number1">
                            <p style={{ fontWeight: "700" }}>Grow your expertise</p>
                            <p className="PSYintro-Content">
                                Designed and taught by practising pschologists and
                                active researchers, our courses reflect the breadth of
                                the discipline from cognitive psychology and
                                neuroscience to developmental psychology, positive
                                psychology as well as social psychology.
                            </p>
                            <div>
                                <button type="button" className="General-Button">See More</button>
                            </div>
                            <br></br>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container PSYintro-Container3">
                <div className="row PSYrow-Container3">
                    <div className="col-sm-6 PSYContainer3colsm1">
                        <div className="PSYintro-wordContainer3number1">
                            <p className="PSYintro-gothoughprogramme">Go though the programme</p>
                            <p className="PSYintro-Content">
                                As you go through the programme you will not only be
                                well prepared to excel in the world of psychology and
                                mental health through our strong curriculum, but also
                                organise events, volunteer in outreach projects and
                                engage with the industry to put what you've learn in
                                the classrooms to the real world.
                            </p>
                            <div style={{textAlign:"end"}}>
                                <button type="button" className="PSYownbutton">See More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 PSYContainer3colsm2">
                        <div className="PSYintro-picture">
                            <img className="PSYintro-image" src={require("../assets/images/Psychology/Psychologymain3.png")} />
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
                                <p className="PSYintro-Content">
                                    So far during the pandemic, several factors have had an impact on whether new
                                    Covid-19 cases are increasing or declining in particular locations. These factors
                                    include the effectiveness of vaccines over time, human behavior, infection
                                    prevention policies, changes to the coronavirus itself, and the number of people
                                    who are vulnerable because they have not developed some immunity, whether
                                    from natural infection of though vaccination.
                                </p>
                                <p>Hosted by: Segi College Kuala Lumpur</p>
                                <div style ={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                    <p style={{margin:"0"}}>Tutor: Professor who graduated on August 18,1945</p>
                                    <button type="button" className="PSYownbutton" style={{margin:"0", padding:"0", width:"unset"}}>Read More</button>
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
                                <button type="button" className="PSYownbutton" style={{fontStyle:"italic"}}>See More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container PSYintro-Container6">
                <div className="row PSYrow-Container6">
                    <div className="col-sm-6 PSYContainer6colsm1">
                        <div className="PSYintro-picture">
                            <img className="PSYintro-image" src={require("../assets/images/Psychology/Psychologymain7.png")} />
                        </div>
                    </div>
                    <div className="col-sm-6 PSYContainer6colsm2">
                        <div className="PSYintro-wordContainer6number1">
                            <p style={{ fontWeight: "700" }}>Want know more about our facilities</p>
                            <p className="PSYintro-Content">
                                If you are interested in our program and want to check out more about our
                                art and design related facilities,please click on the facilities button.
                            </p>
                            <div>
                                <button type="button" className="General-Button">Facilities</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}


export default Psychology