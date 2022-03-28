import React from 'react'
import './css/AHS_Intro.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css'

const ASHintro = () => {
  return (
  <>

    <div className="TitleContent">
    <p>KNOW MORE ABOUT OUR PROGRAM</p>
    <p className="TitleText1">If you are interested and want to know more about Allied Health Science.</p>
    <a href="#" className="btnProgramme">Programme</a> </div>
    <div className="imageBanner">
     <img src={require("../assets/images/AHS_HighFive.png")} className="hammer"></img>
     <p className="prof">Our Professions</p>
 </div>

 <div className="card-deck">
     <div className="card2">
       <img className="card-img-top" src={require("../assets/images/eye.png")} ></img>
       <div className="card-body">
         <h5 className="card-title">Nurses<br/></h5>
       </div>
     </div>
 </div>

 <div className="card-deck2">
     <div className="card2">
       <img className="card-img-top" src={require("../assets/images/heart.png")} ></img>
       <div className="card-body">
         <h5 className="card-title">Workplace Safety <br/> and Medical Officers</h5>
       </div>
     </div>
 </div>

 <div className="card-deck3">
     <div className="card3">
       <img className="card-img-top" src={require("../assets/images/Ear.png")} ></img>
       <div className="card-body">
         <h5 className="card-title">Technologist</h5>
       </div>
     </div>
 </div>

 <div className="card-deck4">
     <div className="card3">
       <img className="card-img-top" src={require("../assets/images/Ear.png")} ></img>
       <div className="card-body">
         <h5 className="card-title">Enviromental Health Officers</h5>
       </div>
     </div>
 </div>

 <div className="card-deck5">
     <div className="card3">
       <img className="card-img-top" src={require("../assets/images/Ear.png")} ></img>
       <div className="card-body">
         <h5 className="card-title">Hospital Administrators</h5>
       </div>
     </div>
 </div>

 

    <div className="content1">
        <h4>What is Allied Health Science</h4>
        <p className="text1">Allied health’s duties may include but not limited to the identication, evaluation
            and prevention of injuries, disease and disorders.</p>
         </div>
        <div className="image1">
            <img src={require("../assets/images/health1.png")} className="floatingship"></img>
        </div>
    
    <div className="content2">
        <h4>Why Choose Us</h4>
        <p className="text2">Our learning modules are intensive and places a strong emphasis on procedural skills.
            The curriculum will guide students to evaluate patients’ responses, evaluate work
            environment safety, ensure environmental health, perform medical laboratory tests make
            appropriate decisions about treatment and plans safety and health control measures.
            </p>
    </div>

    <div className="Content3">
        <div className="imagecontent3">
        <img src={require("../assets/images/Doctor.png")} alt=""></img>
        <span style="font-size: 150%;">Patients Response</span> 
      </div>
      
        <p className="description1">
           Qualified Doctors person who holds a degree recognised by the 
           Medical Council of India and is registered by the Medical Council of any State.
         </p>
    </div>

    <div className="Content4">
      <div className="imagecontent4">
      <img src={require("../assets/images/Emergancy.png")}  alt=""></img>
      <span style="font-size: 150%;">Work Environment Safety</span> 
    </div>
    
      <p className="description2">
        Emergency Care is an essential part of the health system and 
        serves as the first point of contact for many around the world. 
       </p>
  </div>

  <div className="Content5">
    <div className="imagecontent5">
    <img src={require("../assets/images/24h.png")}  alt=""></img>
    <span style="font-size: 150%;">Ensure Environmental Health</span> 
  </div>
  
    <p className="description3">
      If you need medical care which is an emergency but cannot wait 
      until we re-open, you can call our out-of-hours service
     </p>
  </div>

  <div className="Content6">
    <div className="imagecontent6">
    <img src={require("../assets/images/operation.png")}  alt=""></img>
    <span style="font-size: 150%;">Perform Medical Laboratory Tests</span> 
  </div>
  
    <p className="description4">
      OPERATING THEATRES as an operating room (OR), operating suite, or operation suite) 
      is a facility within a hospital where surgical operations.
     </p>
  </div>

  <div className="Content7">
    <div className="imagecontent7">
    <img src={require("../assets/images/24h.png")}  alt=""></img>
    <span style="font-size: 150%;">Plans Safety</span> 
  </div>
  
    <p className="description5">
      If you need medical care which is an emergency but cannot wait 
      until we re-open, you can call our out-of-hours service
     </p>
  </div>

  <div className="Content8">
    <div className="imagecontent7">
    <img src={require("../assets/images/operation.png")}  alt=""></img>
    <span style="font-size: 150%;">Health Control Measures</span> 
  </div>
  
    <p className="description6">
      OPERATING THEATRES as an operating room (OR), operating suite, or operation suite)
       is a facility within a hospital where surgical operations.
     </p>
  </div>
              

    <div className="con4"></div>

    <div id="carouselExampleIndicators" className="carouselslide" data-ride="carousel">
        <h4>Past Events</h4>
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={require("../assets/images/slide1.png")} alt="First slide"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require("../assets/images/Leftimage.png")} alt="Second slide"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require("../assets/images/Rightimage.png")} alt="Third slide"></img>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div id="carouselExampleIndicators" className="carouselslide2" data-ride="carousel">
        <h4>Other Program</h4>
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={require("../assets/images/Law1.png")} alt="First slide"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require("../assets/images/Leftimage.png")} alt="Second slide"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require("../assets/images/Rightimage.png")} alt="Third slide"></img>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
        <a href="#" className="btnMoreCourse">More Course</a> </div>

      

      <div className="Container5">
        <div className="imageges">
            <img src={require("../assets/images/LastPic.png")} className ="headpone"></img>
            
            <div className="Descriptionfinal">
            <p className="TitleText4">Want to Know more about our  facilities</p>
            <p> If you are interested in our program and want to check out more about our art and deisgn related facilities, please click on the facilities button.</p>
        </div>
        <a href="#" className="btnFacilities">Facilities</a> </div>

    </div>
        

    
 </>
  )
}

export default ASHintro