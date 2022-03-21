import React from 'react'
import './css/Psychology.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/standard.css'
const Psychology = () => {
  return (
    <div>
        <div className="PSY-backgroundBanner">
            <div className="row">
                <div className="col-sm-6">
                </div>
            <div className="col-sm-6">
            <div style={{display: "flex", height: "80vh", alignItems: "center", justifyContent: "center"}}>
                <div style={{background: "none", width: "85%", display: "flex", flexDirection: "column"}}>
                    <div style={{background:"none", display: "flex", flexDirection: "column"}}>
                        <a style={{fontSize: "20px", color: "#FFFFFF"}}>KNOW MORE ABOUT</a>
                        <a style={{fontSize: "35px", color: "#FFFFFF", fontWeight: "bold"}}>Our Program</a>
                        <p className="PSY-banner-detail" style={{color: "#FFFFFF"}}>If you are interested and want to know more about Psychology.</p>
                        <div>
                        <button type="button" className="General-Button">Program</button>
                        </div>
                    </div>
                  </div>
            </div>
            </div>
            </div>
        </div>

        <div className="container PSY-Container1">
            <div className="row">
            <div className="col-sm-6">
                <div className="PSY-word">
                    <p style={{fontWeight: "700"}}>SEGI Psychology</p>
                    <p className="PSY-Content">
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
            <div className="col-sm-6">
                <div className="PSY-picture">
                    <img className="PSY-image" src={require("../assets/images/Psychology/Psychologymain1.png")}/>
                </div>
            </div>
            </div>
        </div>

        <div className="container PSY-Container2">
            <div className="row">
                <div className="col-sm-6">
                    <div className="PSY-picture">
                        <img className="PSY-image" src={require("../assets/images/Psychology/Psychologymain2.png")}/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="PSY-word">
                        <p style={{fontWeight: "700"}}>Grow your expertise</p>
                        <p className="PSY-Content">
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

        <div className="container PSY-Container3">
            <div className="row">
                <div className="col-sm-6">
                    <div className="PSY-word">
                        <p style={{fontWeight: "700"}}>Go though the programme</p>
                        <p className="PSY-Content">
                            As you prepare to pursue a career in Psychology,
                            SEGI's psychology programmes help you attain the
                            necessary skills that prospective employer in a range
                            of careers find attractive.
                        </p>
                        <div>
                        <button type="button" className="General-Button">See More</button>
                        </div>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="PSY-picture">
                        <img className="PSY-image" src={require("../assets/images/Psychology/Psychologymain3.png")}/>
                    </div>
                </div>
            </div>
        </div>

        <div className="container PSY-Container4">
            <div className="row">
                <div className="col-sm-6">
                    <div className="PSY-picture">
                        <img className="PSY-image" src={require("../assets/images/Psychology/Psychologymain4.png")}/>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="PSY-picture">
                        <img className="PSY-image" src={require("../assets/images/Psychology/Psychologymain5.png")}/>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="PSY-picture">
                        <img className="PSY-image" src={require("../assets/images/Psychology/Psychologymain6.png")}/>
                    </div>
                </div>
            </div>
        </div>

        <div className="container PSY-Container5">
            <div className="row">
                <div className="col-sm-6">
                    <div className="PSY-word">
                        <p style={{fontWeight: "700"}}>Why Covid-19 getting so serious recently</p>
                        <p className="PSY-Content">
                            So far during the pandemic, several factors have had an impact on whether new
                            Covid-19 cases are increasing or declining in particular locations. These factors
                            include the effectiveness of vaccines over time, human behavior, infection
                            prevention policies, changes to the coronavirus itself, and the number of people
                            who are vulnerable because they have not developed some immunity, whether
                            from natural infection of though vaccination. 
                        </p>
                        <div>
                        <button type="button" className="General-Button">See More</button>
                        </div>
                        <br></br>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="PSY-word">
                        <p style={{fontWeight: "700"}}>MINDFULNESS-BASED COGNITIVE THERAPY</p>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="PSY-word">
                        <p style={{fontWeight: "700"}}>COGNITIVE THERAPY</p>
                    </div>
                    <div>
                        <button type="button" className="General-Button">See More</button>
                    </div>
                </div>
            </div>
        </div> 
        <br></br>
        
        <div className="container PSY-Container6">
            <div className="row">
                <div className="col-sm-6">
                    <div className="PSY-picture">
                        <img className="PSY-image" src={require("../assets/images/Psychology/Psychologymain7.png")}/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="PSY-word">
                        <p style={{fontWeight: "700"}}>Want know more about our facilities</p>
                        <p className="PSY-Content">
                            If you are intereste in our program and want to check out more about our
                            art and design related facilities,please click on the facilities button.
                        </p>
                        <div>
                        <button type="button" className="General-Button">Facilities</button>
                        </div>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
        </div>  )
}


export default Psychology