import React from 'react'
import './css/Lawintro.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css'
import Banner from './general-components/Banner/Banner.js'
import Facilities from './general-components/Facilities/Facilities.js'
import TabsComponent from './general-components/Tabs/TabsComponent'

const Lawintro = () => {
  const studentdetails = [{
    Category: "Student_Testimonials",
    detailsname: "Claudine Tang ",
    detailsjob: "Diploma in Law",
    detailsimage: require('../assets/images/Law/LawAlumni.PNG'),
    detailscontent: "“My experiences as a law student at segi has been a great one. Mostly due to the fact, I got to work & learn from the best lecturers and students. The academic challenges of studying law has prepared me for future career path”",
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
    detailsname: "Law",
    detailsjob: "Facilities",
    detailsimage: require('../assets/images/Law/LastLawPic.png'),
    detailscontent: "“If you are interested in our programme and want to check out more about our Law related facilities, please click on the facilities button.”",
  },]
  return (
    <div>
      <div className='Law banner-container'
        style={{
          backgroundImage: "url(" + require('../assets/images/Law/LawBanner.png') + ")"
        }}>
        <Banner
          navigatepath={"/Search_Page"}
          coursename={"Law"} />
      </div>

      <div className="col-sm-7">
        <div className="Law-Section-1">
          <p style={{ fontWeight: '700', fontSize: '22px', textAlign: 'center' }}>Law In Malaysia</p>
          <p style={{ fontWeight: '500' }} className="Law-Section-1-Content">As a commonwealth country, Malaysia adopts the common law system as practised in the United Kingdom. As such, SEGi collaborates with the University of London (UK) to offer the Bachelor of Laws (LLB) programme, as well as offering the SEGi homegrown Diploma in Law.</p>
        </div>
      </div>


      <div className="containers Law-Section-2">
        <div className="row">
          <div className="col-sm-8">
            <div className="Law-Section-2-left">
              <p style={{ fontWeight: '700', fontSize: '18px' }}>What SEGi Offer to you</p>

              <p style={{ fontWeight: '500', fontSize: '14px' }}>The Law programmes available at SEGi are ideal for students who wish to obtain a qualification of international standing en route to a successful career as a practising lawyer.</p>
            </div>
            <button type="button" className="btn btn-outline-dark">Read more</button>
          </div>
          <div className="col-sm-4">
            <div className="Law-Section-2-right">
              <img className="Law-Section-2-img" src={require("../assets/images/Law/TextImage1.png")} />
            </div>
          </div>
        </div>
      </div>

      <div className="LawOfachievement">
        <h5 style={{ fontWeight: '700' }}>What you Will Achieve</h5>
        <img className="Mapsoflaw" src={require("../assets/images/Law/MapLaw.PNG")}></img>
      </div>


      <div className="Law-Section-6">
        <div className="row">
          <div className="col-sm-5">
            <img className="Law-Section-6-img" src={require("../assets/images/Law/LawImage2.png")} />
          </div>
          <div className="col-sm-7">
            <div className="Law-Section-6-right" style={{ marginTop: '2rem' }}>
              <br />
              <br />
              <p style={{ fontWeight: '700' }}>What to Expect From Law</p>
              <br />
              <p style={{ fontWeight: '500' }}>a world where degree providers are rapidly increasing, the University of London LLB offers the security of an internationally recognised ‘gold standard’ established for over 100 years. The University of London was the first to offer a degree in English Law, in the 1890s. Upon graduation students will join a distinguished group of solicitors, barristers and judges around the world who began their careers by obtaining their law degree through the University of London International Programmes.</p>
              <br />
              <br />
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem', marginRight: '2rem', borderRadius: '2px' }}>
                <button type="button" className="btn btn-outline-dark">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="LawDecks">
        <div className="Lawcard-deck">
          <div className="card1">
            <img className="card-img-top" src={require("../assets/images/Law/Prestige.png")} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Status and Prestige</h5>
            </div>
          </div>
        </div>

        <div className="Lawcard-deck2">
          <div className="card2">
            <img className="card-img-top" src={require("../assets/images/Law/Rewarding.png")} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Rewarding Profession</h5>
            </div>
          </div>
        </div>


        <div className="Lawcard-deck3">
          <div className="card3">
            <img className="card-img-top" src={require("../assets/images/Law/Intelectual.png")} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Intelectually Challenging</h5>
            </div>
          </div>
        </div>

      </div>

      <TabsComponent
        studentdetails={studentdetails}
        achievementdetails={achievementdetails}
        textcolor={"black"}
        backgroundcolor={"#C4C4C4"}
      />

      {/* <div className="LawCarousel">
    <div className="container Law-Container5">    
        <div className="row">
          <div className="col-6">
            <img className="law-bannerimg01" src={require("../assets/images/Law/studentlaw.png")}/>
        </div>
            <div className="col-6">
                <div className="law-navtab">
                    <a href="javascript:void(0)" onclick="openlawTapp(event, 'Outstanding Student');">
                        <div className="law-tabeach law-tabeach-line">Outstanding Student</div>
                      </a>
                      <a href="javascript:void(0)" onclick="openlawTapp(event, 'Success Story');">
                        <div className="law-tabeach">Success Story</div>
                      </a>
                      <a href="javascript:void(0)" onclick="openlawTapp(event, 'Worklife');">
                        <div className="law-tabeach">Worklife</div>
                      </a>
                </div>  
                <div id="Outstanding Student" className="law-tabcontent" >
                    <p className="law-tabcontent-p">"Ignore the naysayers. Really the only option is: head down and focus on the job.</p>
                    <h5>Chris Pane</h5>
                    <hr className="blacklineforlaw-tabcontent"></hr>
                    <p>Student of 2021 Business and Accounting</p>
                    <img className="Law-Container5-ico" src={require("../assets/images/Law/personicon.png")}/>
                    <img className="Law-Container5-ico" src={require("../assets/images/Law/phoneicon.png")}/>
                    <img className="Law-Container5-ico" src={require("../assets/images/Law/workicon.png")}/>
                    <br/><br/>
                    <button type="button" className="btn btn-danger">See More</button>
                </div>

                <div id="Success Story" className="law-tabcontent" style={{display: 'none'}}>
                    <p className="law-tabcontent-p">"Content for Success Story."</p>
                    <button type="button" className="btn btn-danger">See More</button>
                </div>

                <div id="Worklife" className="law-tabcontent" style={{display: 'none'}}>
                    <p className="law-tabcontent-p">"Content for Worklife."</p>
                    <button type="button" className="btn btn-danger">See More</button>
                </div>
            </div>
        </div>
    </div>
</div> */}

      <Facilities
        facilitiesdetails={facilieitesdetails}
      />

      {/* <div className="Law-Section-6">
      <div className="row">
          <div className="col-sm-5">
              <img className="Law-Section-6-img" src={require("../assets/images/Law/LastLawPic.png")}/>
          </div>
          <div className="col-sm-7">
              <div className="Law-Section-6-right">
                  <br/>
                  <br/>
                  <p style={{fontWeight: '700'}}>Want to Know more about our  facilities</p>
                  <br/>
                  <p style={{fontWeight: '500'}}>If you are interested in our program and want to check out more about our art and design related facilities, please click on the facilities button.</p>
                  <br/>
                  <br/>
                  <div style={{display: 'flex' , justifyContent: 'flex-end', marginBottom: '1rem', marginRight: '2rem', borderRadius: '2px'}}>
                      <button type="button" className="General-Button">Facilities</button>
                  </div>
              </div>
          </div>
      </div>
  </div> */}

    </div>


  )

}


export default Lawintro