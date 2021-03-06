import React from 'react'
import './css/IT.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css'
import HeaderBanner from './general-components/Banner/Banner.js'
import Banner from './general-components/Banner/Banner.js'
import Facilities from './general-components/Facilities/Facilities.js'
import TabsComponent from './general-components/Tabs/TabsComponent'
import Image from '../assets/images/IT_Intro/IT_banner.jpg'
import { useNavigate } from "react-router-dom";

const IT_Intro = () => {
  const facilieitesdetails = [{
    Category: "facilites",
    detailsname: "Facilities",
    detailsjob: "Segi PC Room",
    detailsimage: require('../assets/images/IT_Intro/IT_Intro_Con8.png'),
    detailscontent: "“If you are interested in our programme and want to check out more about our Information Technology-related facilities, please click on the facilities button.”",
  },]

  return (

    <div>
      <div className='CA banner-container'
        style={{
          backgroundImage: "url(" + require('../assets/images/IT_Intro/IT_banner.jpg') + ")"
        }}>
        <Banner
          navigatepath={"/Search_Page"}
          coursename={"Information Technology"} />
      </div>

      {/* <div className="IT-Intro-banner">
        <img src={require("../assets/images/IT_Intro/IT_banner.jpg")} alt="" />
        <div className="IT-Intro-caption">

          <h4>Know more about </h4>
          <h2>our program</h2>
          <h5>If you are interested and want to know more about Information Technology.</h5>
          <button>Programme</button>

        </div>
      </div> */}
      <div className="IT-Intro-container-sec1">
        <div className="IT-Intro-successproject">
          <div className="row IT-Intro-Img-container" style={{ flex: 1, padding: '2rem' }}>
            <div className="column IT-Intro-Img" style={{ display: 'flex', justifyContent: 'center' }}>
              <img className="IT-Intro-projectimg" src={require("../assets/images/IT_Intro/IT_Intro_Con9.png")} />
              <img className="IT-Intro-projectimg" src={require("../assets/images/IT_Intro/IT_Intro_Con10.png")} />
            </div>
            <div className="column IT-Intro-Img" style={{ display: 'flex', justifyContent: 'center' }}>
              <img className="IT-Intro-projectimg" src={require("../assets/images/IT_Intro/IT_Intro_Con11.png")} />
              <img className="IT-Intro-projectimg" src={require("../assets/images/IT_Intro/IT_Intro_Con12.png")} />
            </div>
          </div>
          <div className="IT-Intro-Projecttext">
            <p className="IT-Intro-Projecttext-p" >STUDENT-CENTRIC</p>
            <p2 className="IT-Intro-Projecttext-p2" >INDUSTRY DRIVEN LEARNING</p2>
            <p3 className="IT-Intro-Projecttext-p3" >We aim to produce students with good
              practical skills and oriented with good understanding in programming aspects,
              problem solving skills and critical thinking skills.
            </p3>
            <button>View more project</button>
          </div>
        </div>


        <div className="IT-Intro_content">

          <div className="IT-Intro-WhyIT">
            <div className="IT-Intro-WhyIT-Text">
              <p>Why Information Technology</p>
              <p2>IT or computing might be the right course of study for you if you are thinking of becoming a
                manager or administrator to a technical enterprise, a degree in computer science or information
                and computer sciences could provide you with the background needed to achieve your goals.</p2>
            </div>
            <div className="IT-Intro-DivWhyITimg">
              <img className="IT-Intro-WhyITimg" src={require("../assets/images/IT_Intro/IT_Intro_Con7.png")} alt="" />
            </div>
          </div>



          <div className="IT-Intro-Container">
            <div className="IT-Intro_ReasonText">
              <p>The Reasons IT Course is Right for you</p>
            </div>
            <div className="IT-Intro-Resource">
              <div className='IT-Intro-Resource-Img-Row1'>
                <img className="IT-Intro-Resourceimg" src={require("../assets/images/IT_Intro/IT_Intro_Con1.png")} alt="" />
              </div>
              <div className="IT-Intro-Resource-Img-Row2">
                <img className="IT-Intro-Resourceimg" src={require("../assets/images/IT_Intro/IT_Intro_Num1.png")} alt="" />
                <div className="IT_Intro-VerticalLine"></div>
              </div>
              <div className="IT-Intro-Resource-Text">
                <p>Raising need for cloud computing and outsourcing services</p>
                <p2>Mobility, cloud computing, data analytics, storage, and business process outsourcing have been
                  forecasted to be the 5 leading IT solution areas in terms of growth rate. Accelerated by the Pandemic,
                  the Asia Pacific region has become one of the fastest-growing regions in terms of cloud computing.
                  Countries like Singapore, Australia, India, Japan, China, and South Korea and consistently recording
                  higher growth rates in cloud computing.
                </p2>
              </div>
            </div>
            <div className="IT-Intro-Resource">
              <div className='IT-Intro-Resource-Img-Row1'>
                <img className="IT-Intro-Resourceimg" src={require("../assets/images/IT_Intro/IT_Intro_Con2.png")} alt="" />
              </div>
              <div className="IT-Intro-Resource-Img-Row2">
                <img className="IT-Intro-Resourceimg" src={require("../assets/images/IT_Intro/IT_Intro_Num2.png")} alt="" />
                <div className="IT_Intro-VerticalLine"></div>
              </div>
              <div className="IT-Intro-Resource-Text">
                <p>Asia towards Industrial Automation and AI</p>
                <p2>Deloitte consulting China believes that industrial automation and industrial Ai are entering a fast
                  development period in Asia. Companies have begun adopting Ai and big data to generate fast, adaptive,
                  and long-term strategies to maximise competitiveness.
                </p2>
              </div>
            </div>
            <div className="IT-Intro-Resource">
              <div className='IT-Intro-Resource-Img-Row1'>
                <img className="IT-Intro-Resourceimg" src={require("../assets/images/IT_Intro/IT_Intro_Con3.png")} alt="" />
              </div>
              <div className="IT-Intro-Resource-Img-Row2">
                <img className="IT-Intro-Resourceimg" src={require("../assets/images/IT_Intro/IT_Intro_Num3.png")} alt="" />

              </div>
              <div className="IT-Intro-Resource-Text">
                <p>Change the world</p>
                <p2>IT and Computing drive innovation in the sciences
                  (human genome project, AIDS vaccine research, environmental monitoring, and protection just to mention
                  a few), and also in engineering, business, entertainment, and education. Who knows one day, you’ll be
                  a part of the team that changes the world.
                </p2>
              </div>
            </div>
          </div>

          <p2>Industry and Software Partnerships</p2>
          <div className="IT-Intro-DivContainerpartnerimg" style={{ display: 'flex', flex: 1, marginBottom: '1vw' }} >
            <img src={require("../assets/images/IT_Intro/IT_Intro_Con5.png")} />
          </div>
        </div>

        {/* <div className="IT-Intro-bottomcontent">
          <div className="IT-Intro-bottomimg">
            <img style={{ width: '100%' }} src={require("../assets/images/IT_Intro/IT_Intro_Con6.png")} />
          </div>
          <div className="IT-Intro-bottomtext">
            <p>Want to Know more about our  facilities</p>
            <p2>If you are interested in our program and want to check out more about our IT related facilities, please click on the facilities button.</p2>

            <button>Facilities</button>
          </div>
        </div> */}
        <Facilities
          facilitiesdetails={facilieitesdetails}
        />

      </div>
    </div>
  )
}

export default IT_Intro