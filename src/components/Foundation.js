import React from 'react'
import './css/foundation.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css'
import Banner from './general-components/Banner/Banner.js'
import Facilities from './general-components/Facilities/Facilities.js'
import TabsComponent from './general-components/Tabs/TabsComponent'

const Foundation = () => {
    const studentdetails = [{
        Category: "Student_Testimonials",
        detailsname: "Edward Maya",
        detailsjob: "Engineering",
        detailsimage: require('../assets/images/Foundation/founsection5.png'),
        detailscontent: "“My high school art education constructed invaluable foundations for me as a creative professional.”",
    },
    ]
    const achievementdetails = [{
        Category: "",
        detailsname: "",
        detailsjob: "",
        detailsimage: "",
        detailscontent: "",
    },]

    const facilieitesdetails = [{
        Category: "facilites",
        detailsname: "Foundation",
        detailsjob: "Facilities",
        detailsimage: require('../assets/images/Foundation/founsection6.png'),
        detailscontent: "“If you are interested in our programme and want to check out more about our Engeneering related facilities, please click on the facilities button.”",
    },]
    return (
        <div>
            <div className='FF banner-container'
                style={{
                    backgroundImage: "url(" + require('../assets/images/Foundation/banner.png') + ")"
                }}>
                <Banner
                    navigatepath={"/Search_Page"}
                    coursename={"Engineering"} />
            </div>
            <div className="container">
                <div className="foun-whatwelearn">
                    <h4 className="foun-whatwelearn-words">Why Choose Us</h4>
                </div>
                <div className="row Fou-Container">
                    <div className="col-lg-4 Fou-sub2">
                        <div className="Fou-picture">
                            <img className="Fou-img-2" src={require("../assets/images/Foundation/founsection2-1.png")} alt="" />
                        </div>
                        <div className="Fou-word">
                            <p style={{ fontWeight: '700' }}>Knowledge</p>
                            <p className="Fou-Content">
                                Providing the latest curriculum co-designed with international partner universities, local industry practitioners and experts, our proven teaching and learning process has seen over 130,000 graduates working in over 90 countries - ranging from successful entrepreneurs to high level executives and policymakers.
                            </p>
                            <br />
                        </div>
                    </div>
                    <div className="col-lg-4 Fou-sub2">
                        <div className="Fou-picture">
                            <img className="Fou-img-2" src={require("../assets/images/Foundation/founsection2-2.png")} alt="" />
                        </div>
                        <div className="Fou-word">
                            <p style={{ fontWeight: '700' }}>Attitude</p>
                            <p className="Fou-Content">
                                Being civic-minded and nurturing our students’ heart have always been a big part of our curriculum. Throughout the programme, students are encouraged to organise and participate in Corporate Social Responsibility (CSR) projects to use what they have learnt to give back to the community.</p>
                            <br />
                        </div>
                    </div>

                    <div className="col-lg-4 Fou-sub2">
                        <div className="Fou-picture">
                            <img className="Fou-img-2 Fou-img-2-3" src={require("../assets/images/Foundation/founsection2-3.png")} alt="" />
                        </div>
                        <div className="Fou-word">
                            <p style={{ fontWeight: '700' }}>Skills</p>
                            <p className="Fou-Content">
                                Having the right technical skills will give our students an advantageous   edge   over   their   peers.      We   work   hand-in-hand    with    industry    partners    to    offer                      professional certifications so that our students have the right  academic  knowhow,  and  the  relevant  technical  abilities to put what they have learnt into practice.
                            </p>
                            <br />
                        </div>
                    </div>
                </div>
            </div>

            <div className="foun-orange">
                <div className="container Fou-Container3">
                    <div className="foun-whatwelearn">
                        <h3 className="foun-whatwelearn-words">What We Learn</h3>
                    </div>
                    <div className="row Fou-picturegrp">
                        <div className="col-lg-4 Fou-picture-x">
                            <div className="Fou-picture">
                                <img className="Fou-image" src={require("../assets/images/Foundation/founsection3-1.png")} alt="" />
                                <div className="Fou-word3">
                                    <p style={{ fontWeight: '700' }}>Status and Prestige</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 Fou-picture-x">
                            <div className="Fou-picture">
                                <img className="Fou-image" src={require("../assets/images/Foundation/founsection3-2.png")} alt="" />
                            </div>
                            <div className="Fou-word3">
                                <p style={{ fontWeight: '700' }}>Rewarding Profession</p>
                            </div>
                        </div>
                        <div className="col-lg-4 Fou-picture-x">
                            <div className="Fou-picture">
                                <img className="Fou-image" src={require("../assets/images/Foundation/founsection3-3.png")} alt="" />
                            </div>
                            <div className="Fou-word3">
                                <p style={{ fontWeight: '700' }}>Intellectually Challenging</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container Fou-Container4">
                <div className="row">
                    <div className="col-lg-7">
                        <h3 className="foun-whatwelearn-words">What is Engineering</h3>
                        <p className="foun-whatwelearn-words-p">The  manufacturing  industry  has  broken  away  from  its  dependence  on  traditional  manpower  and  has  since  advanced  into  mechanisation, digitalisation  and  articial intelligence (AI) to increase efciency.
                            <br /><br />he Faculty of Engineering focuses on Research of Innovation, Professional Recognition and Industry Certication to ensure that students are stay relevant and in line with IR 4.0. </p>
                        <button type="button" className="btn btn-primary Fou-buttonforprogramme Fou-buttonreadmore">Read more</button>
                    </div>
                    <div className="col-lg-5">
                        <img className="foun-picsection4" src={require("../assets/images/Foundation/founsection4.png")} alt="" />
                    </div>
                </div>
            </div>

            <TabsComponent
                studentdetails={studentdetails}
                achievementdetails={achievementdetails}
                textcolor={"#000000"}
                backgroundcolor={"#F3EBDF"}
            />

            {/* <div className="foun-orange">
        <div className="container Fou-Container5">    
            <div className="row">
                <div className="col-lg-6">
                    <div className="foun-navtab">
                        <a href="javascript:void(0)" onclick="openFounTapp(event, 'Outstanding Student');">
                            <div className="foun-tabeach foun-tabeach-line">Outstanding Student</div>
                          </a>
                          <a href="javascript:void(0)" onclick="openFounTapp(event, 'Success Story');">
                            <div className="foun-tabeach">Success Story</div>
                          </a>
                          <a href="javascript:void(0)" onclick="openFounTapp(event, 'Worklife');">
                            <div className="foun-tabeach">Worklife</div>
                          </a>
                    </div>  
                    <div id="Outstanding Student" className="foun-tabcontent">
                        <p className="foun-tabcontent-p">"Ignore the naysayers. Really the only option is: head down and focus on the job.</p>
                        <h5>Chris Pane</h5>
                        <div><hr className="Fou-blacklineforfoun-tabcontent"></hr></div>                        
                        <p>Student of 2021 Business and Accounting</p>
                        <img className="Fou-Container5-ico" src={require("../assets/images/Foundation/founsection5-1.png")}  alt=""/>
                        <img className="Fou-Container5-ico" src={require("../assets/images/Foundation/founsection5-2.png")}  alt=""/>
                        <img className="Fou-Container5-ico" src={require("../assets/images/Foundation/founsection5-3.png")}  alt=""/><br/><br/>
                        <button type="button" className="btn btn-danger">See More</button>
                    </div>
    
                    <div id="Success Story" className="foun-tabcontent" style={{display: 'none'}}>
                        <p className="foun-tabcontent-p">"Content for Success Story."</p>
                        <button type="button" className="btn btn-danger">See More</button>
                    </div>
    
                    <div id="Worklife" className="foun-tabcontent" style={{display: 'none'}}>
                        <p className="foun-tabcontent-p">"Content for Worklife."</p>
                        <button type="button" className="btn btn-danger">See More</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img className="foun-bannerimg01" src={require("../assets/images/Foundation/founsection5.png")}  alt=""/>
                </div>
            </div>
        </div>
    </div> */}
            {/* <div className="Founsec7">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5">
                    <img className="foun-bannerimg02" src={require("../assets/images/Foundation/founsection6.png")}  alt=""/>
                </div>
                <div className="col-lg-6">
                    <div className="Founsec7-2">
                        <h3 className="Founsec7-2-h3">Want to Know more about our  facilities</h3>
                        <p className="Founsec7-2-p">If you are interested in our program and want to check out more about our art and deisgn related facilities, please click on the facilities button.</p>
                        <div className="Fou-buttonFacility">
                            <button type="button" className="btn btn-primary Fou-buttonforprogramme Fou-btn-faci">Facilities</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
            <Facilities
                facilitiesdetails={facilieitesdetails}
            />
        </div>
    )
}

export default Foundation