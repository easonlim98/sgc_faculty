import React from 'react'
import './css/OSH_intro.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/standard.css'

const OSHintro = () => {
  return (
    
     <div>
        <div className="OSH-PIC-banner">

    
                  <h3 class="OSH-intro1">KNOW MORE ABOUT</h3>
                  <h2 class="OSH-intro2">OUR PROGRAM</h2>
                  <div className='OSH-container-banner'>    
                   <p>If you are interested and want to know more <br/> about Occupational Safety and Health. </p>
                   <button type="button" class="OSH-btnintro" href="#">PROGRAMME</button>
                </div>
             
              </div>  

        <div className='OSH-firstpart'>
       <div className="OSH-body1">
    <h5>What is Occupational Health and Safety</h5>
    <p>Occupational safety and health (OSH), also commonly referred to as occupational health and safety (OHS), occupational health, or occupational safety, is a multidisciplinary field concerned with the safety, health, and welfare of people at occupation. These terms also refer to the goals of this field, so their use in the sense of this article was originally an abbreviation of occupational safety and health program/department etc.
    </p>
  <p></p>
  <p>The goal of an occupational safety and health program is to foster a safe and healthy occupational environment. OSH also protects all the general public who may be affected by the occupational environment.</p>
  <button type="button" className="OSH-btnbody-part2" href="#">Read More</button>
  <div className="OSH-img1">
    <img src={require("../assets/images/Picture1.jpg")} className="OSH-picture1"></img>
  </div>
  </div>
  </div>
<section>
    <div className="OSH-card-deck">
    
    <img className="OSH-card-img-top1" src={require("../assets/images/oshCapture3.png")} alt="Card image cap"></img>
      
 <img className="OSH-card-img-top2" src={require("../assets/images/oshCapture2.png")} alt="Card image cap"></img>
     
 <img className="OSH-card-img-top3" src={require("../assets/images/oshCapture1.png")} alt="Card image cap"></img>
      
    
  </div>
</section>

<section>
  <div className="OSH-card-deck2">
    <p></p>
    <h5 class= "text-center"> WHY CHOOSE US</h5>
    <div className="OSH-card4">
      <img className="OSH-1" src={require("../assets/images/p4.png")} alt="Card image cap"></img>
      <div className="OSH-card-body">
        <h5 className="OSH-operationtheatre">Operation Theatre</h5>
        <p className="OSH-card-text-operationtheatre">OPERATING THEATRES as an operating room (OR), operating suite, or operation suite) is a facility within a hospital where surgical operations.</p>
      </div>
    </div>
    <div className="OSH-card5">
      <img className="OSH-2" src={require("../assets/images/p3.png")} alt="Card image cap"></img>
      <div className="OSH-card-body">
        <h5 className="OSH-emergencycare">Emergency Care</h5>
        <p className="OSH-card-text-emergencycare">Emergency Care is an essential part of the health system and serves as the first point of contact for many around the world. </p>
      </div>
    </div>
    <div className="OSH-card6">
      <img className="OSH-3" src={require("../assets/images/p2.png")} alt="Card image cap"></img>
      <div className="OSH-card-body">
        <h5 className="OSH-24hrsservice">24 Hours Service</h5>
        <p className="OSH-card-text-24hrsservice">If you need medical care which is an emergency but cannot wait until we re-open, you can call our out-of-hours service.</p>
      </div>
    </div>
    <div className="OSH-card7">
      <img className="OSH-4" src={require("../assets/images/p1.png")} alt="Card image cap"></img>
      <div className="OSH-card-body">
        <h5 className="OSH-qualifeddoc">Qualified Doctors</h5>
        <p className="OSH-card-text-qualifeddoc">Qualified Doctors person who holds a degree recognised by the Medical Council of India and is registered by the Medical Council of any State.</p>
 </div>
</div>
</div>
</section>

<section>
  <div className="OSH-line4">  
   <img className="OSH-man" src={require("../assets/images/man.png")} alt="Card image cap"></img>
   <div class="OSH-man-card-header">
   <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Outstanding Student</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active " href="#">Success Story</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Worklife</a>
                    </li>
                    </ul>
                </div>
                <h5 class="OSH-card-title-alumni">"You must have some vision for your life. Even if you don't know the plan, you have to have a direction in which you choose to go."</h5>
                <div className="OSH-alumni-body">
       <h5 class="text-right">Oprah</h5>
       <p></p>
       <img className="OSH-blackline" src={require("../assets/images/blackline.png")} alt="Card image cap"></img>
       <p></p>
       <h5 className = "OSH-Student2021">"Student of 2021 Occupational Health and Safety"</h5>
       <div class="OSH-seemore">
          <a href="../sticky-footer/">See More</a>
          </div>
  </div>
</div>
</section>


<div className="OSH-last">
            <div className="row">
                <div className="col-sm-5">
                <img className="OSH-paper-img" src={require("../assets/images/About Facilities Part.png")} alt="Card image cap"></img>
                </div>
                <div className="col-sm-7">
                    <div className="ECE-Section-6-right">
                        <br/>
                        <br/>
                        <p style={{fontWeight: '900'}}>Want to Know more about our  facilities</p>
                        <br/>
                        <p style={{fontWeight: '500'}}>If you are interested in our program and want to check out more about our Occupational and Safety facilities, please click on the facilities button.</p>
                        <br/>
                        <br/>
                        <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem', marginRight: '2rem'}}>
                            <button type="button" className="General-Button">Facilities</button>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default OSHintro
