import React from 'react'
import './css/IT.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/standard.css'

const IT_Intro = () => {
  return (
      <div>
    <div className="IT-Intro-banner">
            <img src={require("../assets/images/IT_Intro/IT_banner.jpg")} alt=""/>
            <div className="IT-Intro-caption">
              <h4>Know more about </h4>
              <h2>our program</h2>
              <h5>If you are interested and want to know more about Information Technology.</h5>
              <button>Programme</button>
            </div>
    </div>
        <div className="IT-Intro-successproject">
            <div className="row" style={{flex:1}}> 
              <div className="column" style={{display: 'flex'}}>
                <img className="IT-Intro-projectimg" src={require("../assets/images/IT_Intro/alibaba.png")} />
                <img className="IT-Intro-projectimg" src={require("../assets/images/IT_Intro/lazada.png")} />  
              </div>
              <div className="column" style={{display: 'flex'}}>
                <img className="IT-Intro-projectimg" src={require("../assets/images/IT_Intro/shopee.png")} />
                <img className="IT-Intro-projectimg" src={require("../assets/images/IT_Intro/taobao.png")}/>
              </div>
            </div> 
            <div className="IT-Intro-Projecttext">
              <p style={{fontWeight: 'bold',color: '#A71337',fontSize: '2vw'}}>Previous successful Project</p>
              <p style={{fontWeight: 'bold',fontSize: '2vw'}}>We dont make the better website, we only make the best website</p>
              <p style={{fontSize: '1.2vw'}}>Inspiration is the most important part of our digital strategy. Innovation needs 
                to be part of your culture. Success is a journey, not a destination. The doing 
                is often more important than the outcome.
              </p>
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
                  <img className="IT-Intro-WhyITimg" src={require("../assets/gif/Early_Childhood_Education/IT_Intro/IT_content2.gif")} alt=""/>
              </div>
            </div>
          
              <p>The Reasons IT Course is Right for you</p>

              <div className="IT-Intro-Container">
                    <div className="IT-Intro-DivContainerimg">
                       <img className="IT-Intro-Containerimg" src={require("../assets/images/IT_Intro/IT_Intro_Con1.png")} alt=""/>
                        <img className="IT-Intro-Containerimg" src={require("../assets/images/IT_Intro/IT_Intro_Con2.png")} alt=""/>
                        <img className="IT-Intro-Containerimg" src={require("../assets/images/IT_Intro/IT_Intro_Con3.png")} alt=""/>
                    </div>
                
                  
                    <div className="IT-Intro-DivContainercenterimg">
                        <img style={{width: '60%',height:' 80%'}} src={require("../assets/images/IT_Intro/IT_Intro_Con4.png")} alt=""/>
                    </div>

                    <div className="IT-Intro-Containertext">
                        <p>Raising need for cloud computing and outsourcing services</p>
                        <p2>Mobility, cloud computing, data analytics, storage, and business process outsourcing have been 
                            forecasted to be the 5 leading IT solution areas in terms of growth rate. Accelerated by the Pandemic, 
                            the Asia Pacific region has become one of the fastest-growing regions in terms of cloud computing. 
                            Countries like Singapore, Australia, India, Japan, China, and South Korea and consistently recording
                           higher growth rates in cloud computing.
                        </p2>
                        <p>Asia towards Industrial Automation and AI</p>
                        <p2>Deloitte consulting China believes that industrial automation and industrial Ai are entering a fast 
                          development period in Asia. Companies have begun adopting Ai and big data to generate fast, adaptive, 
                          and long-term strategies to maximise competitiveness.
                        </p2>
                        <p>Change the world</p>
                        <p2>IT and Computing drive innovation in the sciences 
                          (human genome project, AIDS vaccine research, environmental monitoring, and protection just to mention 
                          a few), and also in engineering, business, entertainment, and education. Who knows one day, you’ll be
                           a part of the team that changes the world.
                         </p2>
                     </div>
              </div>
              <p2>Industry and Software Partnerships</p2>
              <div className="IT-Intro-DivContainerpartnerimg" style={{display: 'flex',flex: 1,marginBottom: '1vw'}} >
                <img style={{width: '100%'}} src={require("../assets/images/IT_Intro/IT_Intro_Con5.png")} />
              </div>
        </div>
        <div className="IT-Intro-bottomcontent">
          <div className="IT-Intro-bottomimg">
            <img style={{width: '100%'}} src={require("../assets/images/IT_Intro/IT_Intro_Con6.png")} />
          </div>
        <div className="IT-Intro-bottomtext">
            <p>Want to Know more about our  facilities</p>
            <p2>If you are interested in our program and want to check out more about our IT related facilities, please click on the facilities button.</p2>
            
            <button>Facilities</button>
        </div>  
        </div>
        </div>
  )
}

export default IT_Intro