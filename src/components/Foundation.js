import React from 'react'
import './css/foundation.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css'

const Foundation = () => {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="founbannersection founbannersection-container">
                    <div className="founbannerpicture">
                        <img className="img-fluid founbannerpicture-pic" src={require("../assets/images/Foundation/banner.png")}  alt=""/>
                    </div>
                    <div className="founbannerwords">
                        <h4 className="founbannerwordsh2">Know more about</h4>
                        <h1 className="founbannerwordsh1">our program</h1>
                        <p>If you are interested and want to know more <br/> about American Degree Program. </p>
                        <button type="button" className="btn btn-primary buttonforprogramme">Programme</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="foun-whatwelearn">
                <h4 className="foun-whatwelearn-words">Why Choose Us</h4>
            </div>
            <div className="row Fou-Container">
                <div className="col-lg-4 Fou-sub2">
                    <div className="Fou-picture">
                        <img className="Fou-img-2" src={require("../assets/images/Foundation/founsection2-1.png")}  alt=""/>
                    </div>
                    <div className="Fou-word">
                        <p style={{fontWeight: '700'}}>Certified Educators</p>
                        <p className="Fou-Content">
                        Hospitality means extending a welcome to travelers or offering a home away form home,
                        and the word is derived from the Latin word "hospes" meaning visitor or stranger.
                        </p>
                        <br/>
                    </div>
                </div> 
                <div className="col-lg-4 Fou-sub2">
                    <div className="Fou-picture">
                        <img className="Fou-img-2" src={require("../assets/images/Foundation/founsection2-2.png")}  alt=""/>
                    </div>
                    <div className="Fou-word">
                        <p style={{fontWeight: '700'}}>Global Level Language Education</p>
                        <p className="Fou-Content">
                        Hospitality means extending a welcome to travelers or offering a home away form home,
                        and the word is derived from the Latin word "hospes" meaning visitor or stranger.
                        </p>
                        <br/>
                    </div>
                </div>

                <div className="col-lg-4 Fou-sub2">
                    <div className="Fou-picture">
                        <img className="Fou-img-2 Fou-img-2-3" src={require("../assets/images/Foundation/founsection2-3.png")}  alt=""/>
                    </div>
                    <div className="Fou-word">
                        <p style={{fontWeight: '700'}}>Scholarships</p>
                        <p className="Fou-Content">
                        Hospitality means extending a welcome to travelers or offering a home away form home,
                        and the word is derived from the Latin word "hospes" meaning visitor or stranger.
                        </p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>

    <div className="orange">
        <div className="container Fou-Container3">
            <div className="foun-whatwelearn">
                <h3 className="foun-whatwelearn-words">What We Learn</h3>
            </div>
            <div className="row Fou-picturegrp">
                <div className="col-lg-4">
                    <div className="Fou-picture">
                        <img className="Fou-image" src={require("../assets/images/Foundation/founsection3-1.png")}  alt=""/>
                        <div className="Fou-word3">
                            <p style={{fontWeight: '700'}}>Status and Prestige</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="Fou-picture">
                        <img className="Fou-image" src={require("../assets/images/Foundation/founsection3-2.png")}  alt=""/>
                    </div>
                    <div className="Fou-word3">
                        <p style={{fontWeight: '700'}}>Rewarding Profession</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="Fou-picture">
                        <img className="Fou-image" src={require("../assets/images/Foundation/founsection3-3.png")}  alt=""/>
                    </div>
                    <div className="Fou-word3">
                        <p style={{fontWeight: '700'}}>Intellectually Challenging</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container Fou-Container4">
        <div className="row">
            <div className="col-lg-7">
                <h4 className="foun-whatwelearn-words">What is Pre U / Foundation</h4>
                <p>If you are planning to pursue a bachelor’s degree, you would most likely need a pre-university qualification to gain admission to a university or col-lglege. Besides Form Six, students can now choose from a wide range of pre-university programmes offered by both public and private higher education institutions (HEIs) in Malaysia.

                    <br/><br/>Many students are at a loss when it comes to choosing a suitable pre-university programme. Some may decide on a programme simply because the majority of their friends are enrolling in the same programme. Then there are those who end up with a particular programme simply because they never knew that other types of programmes existed.</p>
                <button type="button" className="btn btn-primary buttonforprogramme buttonreadmore">Read more</button>
            </div>
            <div className="col-lg-5">
                <img className="foun-picsection4" src={require("../assets/images/Foundation/founsection4.png")}  alt=""/>
            </div>
        </div>
    </div>

    <div className="orange">
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
                        <div><hr className="blacklineforfoun-tabcontent"></hr></div>                        
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
    </div>
    <div className="Founsec7">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5">
                    <img className="foun-bannerimg02" src={require("../assets/images/Foundation/founsection6.png")}  alt=""/>
                </div>
                <div className="col-lg-6">
                    <div className="Founsec7-2">
                        <h3 className="Founsec7-2-h3">Want to Know more about our  facilities</h3>
                        <p className="Founsec7-2-p">If you are interested in our program and want to check out more about our art and deisgn related facilities, please click on the facilities button.</p>
                        <div className="buttonFacility">
                            <button type="button" className="btn btn-primary buttonforprogramme btn-faci">Facilities</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Foundation