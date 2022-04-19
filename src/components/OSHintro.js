import React from 'react'
import './css/OSH_intro.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css'
import Banner from './general-components/Banner/Banner.js'
import Facilities from './general-components/Facilities/Facilities.js'
import TabsComponent from './general-components/Tabs/TabsComponent'
const OSHintro = () => {
    const studentdetails = [{
        Category: "Student_Testimonials",
        detailsname: "Oprah",
        detailsjob: "Student of 2021 Occupational Health and Safety",
        detailsimage: require('../assets/images/man.png'),
        detailscontent: "“You must have some vision for your life. Even if you don't know the plan, you have to have a direction in which you choose to go.”",
    },
    ]
    const achievementdetails = [{
        Category: "Student_Achievement",
        detailsname: "",
        detailsjob: "",
        detailsimage: "",
        detailscontent: "",
    },]
    
    return (
        <div>

            <div className='CA banner-container'
                style={{
                    backgroundImage: "url(" + require('../assets/images/osh.jpg') + ")"
                }}>
                <Banner
                    navigatepath={"/Search_Page"}
                    coursename={"Occupational and Safety"} />
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
            <br></br>
            <br></br>
            <div className="OSH-card-deck">

                <div className="container OSH-Container2">

                    <div className="row OSH-picturegrp">
                        <div className="col-lg-4 OSH-picture-x">
                            <div className="OSH-picture">
                                <img className="OSH-image" src={require("../assets/images/oshCapture3.png")} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 OSH-picture-x">
                            <div className="OSH-picture">
                                <img className="OSH-image" src={require("../assets/images/oshCapture2.png")} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 OSH-picture-x">
                            <div className="OSH-picture">
                                <img className="OSH-image" src={require("../assets/images/oshCapture1.png")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>


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
                studentdetails={studentdetails}
                achievementdetails={achievementdetails}
                textcolor={"black"}
                backgroundcolor={"#FCB600"}
            />
            <Facilities
                facilitiesimage={require('../assets/images/image2.jpg')}
                content={"If you are interested in our programme and want to check out more about our OSH-related facilities, please click on the facilities button."} />
        </div>
    )
}

export default OSHintro
