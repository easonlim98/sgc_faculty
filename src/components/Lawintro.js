import React from 'react'
import './css/Lawintro.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/standard.css'

const Lawintro = () => {
  return (
    
<>

<div className="card-border text-center">
        <h5 className="card-title">Law In Malaysia</h5>
        <p className="card-text-Law">As a commonwealth country, Malaysia adopts the common law system as practised in the United Kingdom. As such, SEGi collaborates with the University of London (UK) to offer the Bachelor of Laws (LLB) programme, as well as offering the SEGi homegrown Diploma in Law.</p>
      </div>

    

    <div className="content1">
        <h5>What SEGi Offer to You</h5>
        <p className="text1">The Law programmes available at SEGi are ideal for students who wish to obtain a qualification of international standing en route to a successful career as a practising lawyer.</p>
        <a href="#" className="btnReadMore">Read More</a> </div>
        <div className="image1">
            <img src={require("../assets/images/TextImage1.png")} className="hammer"></img>
        </div>

    <div className="AchieveMap">
        <h5>What you will achieve</h5>
        <p className="textbox1">The skills gained from SEGi Law</p>
        <p className="textbox2">Promote independent learning</p>
        <p className="textbox3">Develop key intellectual transferable skills</p>
        <p className="textbox4">Develop critical awareness</p>
        <p className="textbox5">Strengthen the students understanding 
            into the language of law</p>
    </div>
    
    <div className="Container1">
        <div className="image2">
            <img src={require("../assets/images/LawImage2.png")} className ="opis"></img>
        
        <div
          className="Description1">
          <p className="TitleText2">What to Expect From Law</p>
          <p> a world where degree providers are rapidly increasing, the University of London LLB offers the security of an internationally recognised ‘gold standard’ established for over 100 years. The University of London was the first to offer a degree in English Law, in the 1890s. Upon graduation students will join a distinguished group of solicitors, barristers and judges around the world who began their careers by obtaining their law degree through the University of London International Programmes.</p>
          <a href="#" className="btnReads">Read More</a> </div>

        </div>
        </div>

    <div className="card-deck">
        <div className="card1">
          <img className="card-img-top" src={require("../assets/images/Prestige.png")} alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">Status and Prestige</h5>
          </div>
        </div>
    </div>

    <div className="card-deck2">
        <div className="card2">
          <img className="card-img-top" src={require("../assets/images/Rewarding.png")} alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">Rewarding Profession</h5>
          </div>
        </div>
    </div>

    <div className="card-deck3">
        <div className="card3">
          <img className="card-img-top" src={require("../assets/images/Intelectual.png")} alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">Intelectually Challenging</h5>
          </div>
        </div>
    </div>

    <div className="Container2">
        <div className="image3">
            <img src={require("../assets/images/studentlaw.png")} className ="woman"></img>

            <div className="containtabs">
              <ul className=" navs nav-tabs nav-justified" id="myTab" role="tablist">
              <li className="nav-item"><a className ="btnOutStandingStudent active" id="home-tab" data-toggle="tab" href="#Student" role="tab" aria-controls="Student" aria-selected="true">Outstanding Student</a></li>
              <li className="nav-item"><a className ="btnOutSucessStory " id="second-tab" data-toggle="tab" href="#Story" role="tab" aria-controls="Story" aria-selected="false">Success Story</a></li>
              <li className="nav-item"><a className ="btnWorkLife " id="third-tab" data-toggle="tab" href="#Work" role="tab" aria-controls="Work" aria-selected="false">Worklife</a></li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="Student" role="tabpanel" aria-labelledby="home-tab"> 111 </div>

              <div className="tab-pane fade" id="second" role="Story" aria-labelledby="second-tab"> 222 </div>

              <div className="tab-pane fade" id="third" role="Work" aria-labelledby="third-tab"> 222 </div>


            </div>
            </div>
                         
        </div>
    </div>
         
    <div id="carouselLaw" className="carousel_slide" data-ride="carousel">
        <h5 className="textbox6">Other Programmes</h5>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={require("../assets/images/Law1.png")} alt="First slide"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require("../assets/images/Law2.png")} alt="Second slide"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={require("../assets/images/Law3.png")} alt="Third slide"></img>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
        <a href="#" className="btnMoreCourse">Programme</a> </div>

    
    <div className="Container3">
            <div className="image4">
                <img src={require("../assets/images/LastLawPic.png")} className ="headpone"></img>
                
                <div className="Description2">
                <p className="TitleText4">Want to Know more about our  facilities</p>
                <p> If you are interested in our program and want to check out more about our art and deisgn related facilities, please click on the facilities button.</p>
            </div>
            <a href="#" className="btnFacilities">Facilities</a> </div>

        </div>
  
        </>
   
  )
}


export default Lawintro