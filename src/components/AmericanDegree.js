import React from 'react'
import './css/american_degree.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/standard.css'
import Banner from './general-components/Banner/Banner.js'
import Facilities from './general-components/Facilities/Facilities.js'
import TabsComponent from './general-components/Tabs/TabsComponent'

const AmericanDegree = () => {
  return (
    <div>
        {/* <div className="container-fluid">
            <div className="row">
                <div className="amedegrebannersection amedegrebannersection-container">
                    <div className="amedegrebannerpicture">
                        <img className="img-fluid amedegrebannerpicture-pic" src={require("../assets/images/American_Degree/american_degree_banner.png")} alt=""/>
                    </div>
                    <div className="amedegrebannerwords">
                        <h3 className="amedegrebannerwordsh2">Know more about</h3>
                        <h1 className="amedegrebannerwordsh1">our program</h1>
                        <p className="amedegrebannerwordsh3">If you are interested and want to know more <br/> about American Degree Program. </p>
                        <button type="button" className="btn btn-primary amedegre-buttonforprogramme amedegrebannerwordsh3">Programme</button>
                    </div>
                </div>
            </div>
        </div> */}
        <div className='AD banner-container'
            style={{
                backgroundImage: "url(" + require('../assets/images/American_Degree/american_degree_banner.png') + ")"
            }}>
            <Banner
                navigatepath={"/Search_Page"}
                bannercontent={"If you are interested and want to know more about American Degree Program."} />
        </div>
        <div className="container amedegre-secondpart">
            <div className="row">
                <div className="col-lg-4 amedegre-secondpart-first">
                    <h4 className="amedegre-secondpartwwo amedegre-secondpartsup">What We offer</h4>
                    <p className="amedegre-secondpartgse amedegre-secondpartsup">GREAT STUDENT EXPERIENCE</p>
                    <img className="img-fluid amedegre-secpartprofilepicture" href="#" src={require("../assets/images/American_Degree/american_degree_profilepic.png")} alt=""/>
                    <h6 className="amedegre-secondpartsup amedegre-secondpartsup2">SUCCESSFUL UNIVERSITY PLACEMENTS</h6>
                    <p className="amedegre-secondpart-p">We are proud to be among the few higher educational institutions in Malaysia who have consistently churned out ADP graduates who meet the stringent requirements and application procedures of some of the most elite universities in the U.S. and in the world.
                    <br/><br/>Our students’ continued success in securing placements in these high-ranking institutions not only reflects the effectiveness of our teaching practice, but also speaks volumes about the level of care, support and guidance that we provide to them as part of their journey here at ADP.</p>
                    <div>
                        <hr className="amedegre-blacklineforamerica"></hr>
                    </div>
                    <div className="amedegre-readmorebutton-con">
                        <button type="button" className="btn btn-outline-dark amedegre-readmorebutton">Read More</button>
                    </div>
                </div>
                <div className="col-lg-3 amedegre-squareinsecondpar-section">
                    <div className="amedegre-squareinsecondpart">
                        <img className="img-fluid amedegre-threeicon-secondpart" href="#" src={require("../assets/images/American_Degree/secondpart1.png")} alt=""/>
                        <p className="amedegre-squareinsecondpart-title">What is ADP</p>
                        <p className="amedegre-squareinsecondpart-para">The American Degree Program provides students a direct entry into a university degree course</p>
                    </div>
                    <div className="amedegre-squareinsecondpart">
                        <img className="img-fluid amedegre-threeicon-secondpart" href="#" src={require("../assets/images/American_Degree/secondpart2.png")} alt=""/>
                        <p className="amedegre-squareinsecondpart-title">What is ADP</p>
                        <p className="amedegre-squareinsecondpart-para">The American Degree Program provides students a direct entry into a university degree course</p>
                    </div>
                    <div className="amedegre-squareinsecondpart">
                        <img className="img-fluid amedegre-threeicon-secondpart" href="#" src={require("../assets/images/American_Degree/secondpart3.png")} alt=""/>
                        <p className="amedegre-squareinsecondpart-title">What is ADP</p>
                        <p className="amedegre-squareinsecondpart-para">The American Degree Program provides students a direct entry into a university degree course</p>
                    </div>
                </div>
                <div className="col-lg amedegre-secondpartpictureright">
                    <img className="img-fluid america-pic-showornot" href="#" src={require("../assets/images/American_Degree/american_degree_picture1.png")} alt=""/>
                </div>
              </div>
        </div>
        <div className="container amedegre-secondpart">
            <div className="row amedegre-secondpart-sub">
                <div className="col-lg-4">                    
                    <img className="img-fluid america-pic-showornot" href="#" src={require("../assets/images/American_Degree/american_degree_picture2.png")} alt=""/>
                </div>
                <div className="col-lg-8 amedegre-secondpartwwo-sec">
                    <h4 className="amedegre-secondpartwwo">Why choose ADP at SEGi?</h4>
                    <p className="amedegre-secondpartwwo">SEGi has teamed up with some of the powerhouses of education to provide opportunities
                        for students to experience American style learning through its American Degree Program
                        (ADP).                        
                    <br/><br/>Students can customise their American education pathway with exible transfer
                    arrangements or take the option to complete their American education in Malaysia.
                    </p>
                    <p className="amedegre-secondpartwwwo">• Degrees awarded by reputable public university<br/>
                        • Obtain an American degree at local cost<br/>
                        • Continuous learning through courseworks<br/>
                        • Conducive learning environment<br/>
                        • Education partially delivered by visiting professors from the USA
                    </p>
                    <p className="amedegre-secondpartwwo">*SEGi Group of Col-lgleges has the highest number of paper exemptions among recognised
                        accounting professional certications
                    </p>
                </div>
              </div>
        </div>
        <TabsComponent
                StudentName={"Edward Maya"}
                StudentJob={"American Degree"}
                Studentimage={require('../assets/images/American_Degree/american_degree_apeople1.png')}
                StudentWords={"“My high school art education constructed invaluable foundations for me as a creative professional.”"}
                navigationpath={""}
                textcolor={"#FFFFFF"}
                backgroundcolor={"#949494"}
            />
        {/* <div className="amedegre-greyrectengle">
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <img className="img-fluid amedegre-aguy" href="#" src={require("../assets/images/American_Degree/american_degree_apeople1.png")} alt=""/>
                    </div>
                    <div className="col-lg amedegre-greyrectenglerightside">
                        <h5>CHAMPIONING 3H TRANSFORMATIVE LEARNING</h5>
                        <p className="american-degree-providing">At SEGi, we champion the 3H Transformative Learning
                            to cultivate future-proof graduates. The education of the
                            Head, the Heart and the Hands is a holistic learning
                            approach in transforming future leaders:</p>
                            <div className="amedegre-heartsec">
                                <img className="img-fluid amedegre-heartpic" href="#" src={require("../assets/images/American_Degree/american_degree_heart.png")} alt=""/>
                                <img className="img-fluid amedegre-heartpic" href="#" src={require("../assets/images/American_Degree/american_degree_heart.png")} alt=""/>
                                <img className="img-fluid amedegre-heartpic" href="#" src={require("../assets/images/American_Degree/american_degree_heart.png")} alt=""/>
                            </div>

                        <div className="row">
                            <div className="col-lg amedegre-knowlege">
                                <img className="img-fluid amedegre-number1" href="#" src={require("../assets/images/American_Degree/american_degree_number1.png")} alt=""/>
                                <p>HEAD <br/>
                                    (Knowledge)</p>
                            </div>
                            <div className="col-lg">
                                <p className="american-degree-providing">Providing the latest curriculum co-designed with
                            international partner universities, local industry
                            practitioners and experts. Our proven teaching and
                            learning process has seen over 130,000 graduates
                            working in over 90 countries - ranging from successful
                            entrepreneurs to high level executives and
                            policymakers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <Facilities
            facilitiesimage={require('../assets/images/American_Degree/Facilities.png')}
            content={"If you are interested in our programme and want to check out more about our American Degree related facilities, please click on the facilities button."} />
    </div>
  )
}

export default AmericanDegree