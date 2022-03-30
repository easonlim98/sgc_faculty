import React from 'react'
import './css/AHS_Intro.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css'
import Banner from './general-components/Banner/Banner.js'
import Facilities from './general-components/Facilities/Facilities.js'
import TabsComponent from './general-components/Tabs/TabsComponent'

const ASHintro = () => {
  return (
  <div>

<div className='Law banner-container'
                style={{
                    backgroundImage: "url(" + require('../assets/images/AHS/AHSBanner.PNG') + ")"
                }}>
                <Banner
                    navigatepath={"/Search_Page"}
                    bannercontent={"If you are interested and want to know more about Allied Health Science."} />
            </div>


 {/* <div className="BannerAHS">
 <div style={{ display: 'flex', height: '80vh', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{background:'none', width: '85%', display: 'flex', flexDirection: 'column'}}>
            <div style={{background:'none', display: 'flex', flexDirection: 'column'}}>
                <a style={{fontSize: '20px', color: '#000000'}}>Know more about</a>
                <a style={{fontSize: '35px', color: '#000000', fontWeight: 'bold'}}>Our Program</a>
                <p style={{color: '#000000'}} className="bannerContent-res">If you are interested and want to know more
                    about Communication Studies.</p>
                <div>
                    <button type="button" className="General-Button">Programme</button>
                </div>
            </div>
        </div>
    </div>
 </div> */}

 <div className="AHScardtitle">
  <p>Our Professions</p>
  
  <img src={require("../assets/images/AHS/Professions.png")}/>

 </div>

    <div className="AHSsection1">
    <div className="AHScontent1">
        <h4>What is Allied Health Science</h4>
        <p className="AHStext1">Allied health’s duties may include but not limited to the identication, evaluation
            and prevention of injuries, disease and disorders.</p>
          </div>
          <div className="image1">
              <img src={require("../assets/images/AHS/health1.png")} className="floatingship"/>
            </div>
         
    </div>
    
    
    <div className="AHScontent2">
        <h5>Why Choose Us</h5>
        <p className="AHStext2">Our learning modules are intensive and places a strong emphasis on procedural skills.
            The curriculum will guide students to evaluate patients’ responses, evaluate work
            environment safety, ensure environmental health, perform medical laboratory tests make
            appropriate decisions about treatment and plans safety and health control measures.
            </p>
    </div>

  <div className="AHSsection2">
    <div className="AHSContent3">
        <div className="imagecontent3">
        <img src={require("../assets/images/AHS/Doctor.png")}  alt=""/>
        <span style={{fontSize: '160%' }}>&nbsp;&nbsp;Patients Response</span> 
      </div>
      
        <p className="AHSdescription1">
           Qualified Doctors person who holds a degree recognised by the 
           Medical Council of India and is registered by the Medical Council of any State.
         </p>
    </div>

    <div className="AHSContent4">
      <div className="imagecontent4">
      <img src={require("../assets/images/AHS/Emergancy.png")}  alt=""/>
      <span style={{fontSize: '150%'}}>&nbsp;&nbsp;Work Environment Safety</span> 
    </div>
  
      <p className="AHSdescription2">
        Emergency Care is an essential part of the health system and 
        serves as the first point of contact for many around the world. 
       </p>
  </div>
</div>

<div className="AHSsection3">
  <div className="AHSContent5">
    <div className="imagecontent5">
    <img src={require("../assets/images/AHS/24h.png")}  alt=""/>
    <span style={{fontSize: '160%'}}>&nbsp;&nbsp;Ensure Environmental Health</span> 
  </div>
  
    <p className="AHSdescription3">
      If you need medical care which is an emergency but cannot wait 
      until we re-open, you can call our out-of-hours service
     </p>
  </div>

  <div className="AHSContent6">
    <div className="imagecontent6">
    <img src={require("../assets/images/AHS/operation.png")}  alt=""/>
    <span style={{fontSize: '150%'}}>Perform Medical Laboratory Tests</span> 
  </div>
  
    <p className="AHSdescription4">
      OPERATING THEATRES as an operating room (OR), operating suite, or operation suite) 
      is a facility within a hospital where surgical operations.
     </p>
  </div>
</div>

<div className="AHSsection4">
  <div className="AHSContent7">
    <div className="imagecontent7">
    <img src={require("../assets/images/AHS/24h.png")}  alt=""/>
    <span style={{fontSize: '160%'}}>&nbsp;&nbsp;Plans Safety</span> 
  </div>
  
    <p className="AHSdescription5">
     Identifying the physical and health hazards that could harm people,
     procedures to prevent accidents, and steps to take when accidents occur
     </p>
  </div>

  <div className="AHSContent8">
    <div className="imagecontent8">
    <img src={require("../assets/images/AHS/operation.png")}  alt=""/>
    <span style={{fontSize: '160%' }}>Health Control Measures</span> 
  </div>
  
    <p className="AHSdescription6">
    The practices, procedures and resources for developing and implementing, 
    reviewing and maintaining the occupational safety and health policy.
     </p>
  </div>
       
</div>

<TabsComponent
StudentName={"Chew Shi Ling"}
StudentJob={"Dean List and High Achiever Graduation Award in 2016"}
Studentimage={require('../assets/images/AHS/Outstanding_student.PNG')}
StudentWords={"“Thanks to the SEGi College for giving me the support, I eventually got the offer from the top university. I feel blessed and have no regrets to complete my diploma study in SEGi College KL. This program is absolutely recognized by local government universities like UM.”"}
navigationpath={""}
textcolor={"#A71337"}
backgroundcolor={"#4780a45e"}
            />

    {/* <div className="con4">
      <img  src={require("../assets/images/AHS/container4.png")}/>
    </div> */}

        <div className="carousel">
          <h4 style={{marginTop: '5%', textAlign: 'center' }}>Previous Events</h4>
            <div id="carouselCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={require("../assets/images/AHS/APEX_Award _Ceremony_2021.jpeg")}
                            className="d-block w-100 carousel-image" alt=""/>
                        <div className="carousel-caption ">
                            <h5>Award Ceremony</h5>
                            <p>Apex Awards Ceremony 2021</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={require("../assets/images/AHS/Rightimage.png")}
                            className="d-block w-100 carousel-image" alt=""/>
                        <div className="carousel-caption ">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={require("../assets/images/AHS/Leftimage.png")}
                            className="d-block w-100 carousel-image" alt=""/>
                        <div className="carousel-caption ">
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
<br/>
<br/>
<Facilities
 facilitiesimage={require('../assets/images/AHS/LastPic.png')}
 content={"If you are interested in our programme and want to check out more about our Allied Health Science related facilities, please click on the facilities button."} />


        {/* <div className="AHS-Section-6">
          <div className="row">
              <div className="col-sm-5">
                  <img className="AHS-Section-6-img" src={require("../assets/images/AHS/LastPic.png")}/>
              </div>
              <div className="col-sm-7">
                  <div className="AHS-Section-6-right">
                      <br/>
                      <br/>
                      <p style={{fontWeight: '700'}}>Want to Know more about our  facilities</p>
                      <br/>
                      <p style={{fontWeight: '500'}}>If you are interested in our program and want to check out more about our art and deisgn related facilities, please click on the facilities button.</p>
                      <br/>
                      <br/>
                      <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem', marginRight: '2rem', borderRadius: '2px'}}>
                          <button type="button" className="General-Button">Facilities</button>
                      </div>
                  </div>
              </div>
          </div>
      </div> */}
        
      </div>
    
 
  )
}

export default ASHintro