import React from 'react'
import './css/OSH_intro.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css'

const OSHintro = () => {
  return (
     <div>
       <div className="body1">
    <h5>What is Occupational Health and Safety</h5>
    <p>Occupational safety and health (OSH), also commonly referred to as occupational health and safety (OHS), occupational health, or occupational safety, is a multidisciplinary field concerned with the safety, health, and welfare of people at occupation. These terms also refer to the goals of this field, so their use in the sense of this article was originally an abbreviation of occupational safety and health program/department etc.
    </p>
  <p></p>
  <p>The goal of an occupational safety and health program is to foster a safe and healthy occupational environment. OSH also protects all the general public who may be affected by the occupational environment.</p>
  <button type="button" className="btnbody" href="#">PROGRAMME</button>
  <div className="img1">
    <img src={require("../assets/images/Picture1.jpg")} className="picture1"></img>
  </div>
  </div>

  <section>
    <div className="card-deck">
      <img className="card-img-top" src={require("../assets/images/Frame 126.png")} alt="Card image cap"></img>
      <div className="card1">
        <img className="card-img-top" src={require("../assets/images/Picture2.jpg")} alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">Service sector</h5>
          <p className="card-text">Presenting a different array of health problems than those associated with manufacturing and the primary sector</p>
        </div>
      </div>
      <div className="card2">
        <img className="card-img-top" src={require("../assets/images/osh.jpg")} alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">Healthcare and social assistance</h5>
          <p className="card-text">Healthcare workers are exposed to many hazards that can adversely affect their health and well-being.</p>
          </div>
      </div>
      <div className="card3">
        <img className="card-img-top" src={require("../assets/images/image2.jpg")} alt="Card image cap"></img>
        <div className="card-body">
          <h5 className="card-title">Construction</h5>
          <p className="card-text">Construction is one of the most dangerous occupations in the world.</p>
        </div>
      </div>
  </div>
</section>

<section>
  <div className="card-deck2">
    <p></p>
    <h5>WHY CHOOSE US</h5>
    <div className="card4">
      <img className="card-img-top" src={require("../assets/images/p4.png")} alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title">Operation Theatre</h5>
        <p className="card-text">OPERATING THEATRES as an operating room (OR), operating suite, or operation suite) is a facility within a hospital where surgical operations.</p>
      </div>
    </div>
    <div className="card5">
      <img className="card-img-top" src={require("../assets/images/p3.png")} alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title">Emergency Care</h5>
        <p className="card-text">Emergency Care is an essential part of the health system and serves as the first point of contact for many around the world. </p>
      </div>
    </div>
    <div className="card6">
      <img className="card-img-top" src={require("../assets/images/p2.png")} alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title">24 Hours Service</h5>
        <p className="card-text">If you need medical care which is an emergency but cannot wait until we re-open, you can call our out-of-hours service.</p>
      </div>
    </div>
    <div className="card7">
      <img className="card-img-top" src={require("../assets/images/p1.png")} alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title">Qualified Doctors</h5>
        <p className="card-text">Qualified Doctors person who holds a degree recognised by the Medical Council of India and is registered by the Medical Council of any State.</p>
 </div>
</div>
</div>
</section>

<section>
  <div className="line4">
    <img className="card-img-top" src={require("../assets/images/Rectangle 429.png")} alt="Card image cap"></img>
    <div className="man">
      <img className="card-img-top" src={require("../assets/images/man.png")} alt="Card image cap"></img>
   
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <a className="nav-link" href="#">Outstanding Student</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Success Story</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Worklife</a>
          </li>
        </ul>
        <div className="seemore">
          <a href="../sticky-footer/">See More</a>
        </div>
      </div>
    </div>
      <div className="card-body1">
        <h5 className="card-title">"You must have some vision for your life. Even if you don't know the plan, you have to have a direction in which you choose to go."</h5>
       <p>Oprah</p>
       <p></p>
       <p>________________________________________________________________________________________________</p>
       <p></p>
       <p>Student of 2021 Occupational Health and Safety</p>
       <div className="icon">
        <img className="card-img-top" src={require("../assets/images/Icon.jpg")} alt="Card image cap"></img>
      </div>
    </div>
</div>
</section>

<section>
  <div className="othercourse">
    <div className="others">
      <img className="card-img-top" src={require("../assets/images/Other Program Part.png")} alt="Card image cap"></img>
      <button type="button" className="btnbody1" href="#">More Courses</button>
   </div>
</div>

</section>

<section>
<div className="last">
  <img className="card-img-top" src={require("../assets/images/About Facilities Part.png")} alt="Card image cap"></img>
  <button type="button" className="btnbody2" href="#">Facilities</button>

</div>


</section>

    <div>OSHintro</div>

    </div>
  )
}

export default OSHintro
