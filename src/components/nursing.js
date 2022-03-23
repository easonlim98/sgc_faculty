import React from 'react'
import './css/Nursing.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/standard.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Nursing = () => {
  return (
     
     <div>
    <div className="backgroundNursingBanner">

            <div style={{ display: 'flex', height: '80vh', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ background:'none', width: '85%', display: 'flex', flexDirection: 'column',}}>
                    <div style={{background:'none', display: 'flex', flexDirection: 'column'}}>
                        <a style={{fontSize: '20px', color: '#FFFFFF'}}>Know more about</a>
                        <a style={{fontSize: '35px', color: '#FFFFFF', fontWeight: 'bold'}}>Our Program</a>
                        <p className="bannerNursingContent-res">If you are interested and want to know more about Early Childhood Care & Education</p>
                        <div>
                        <button type="button" className="General-Button">Programme</button>
                        </div>
                    </div>
                  </div>
            </div>

        </div>
  
        <div className="Nursing-FirstPart">
            <div className="row">
                <div className="col-sm-5 nursing">
                    <img className="Nursing-FirstPart-img" src={require("../assets/images/nursingimage3.jpg")} alt=""/>
                </div>
                <div className="col-sm-7 nursing">
                    <div className="Nursing-FirstPart-right">
                        <br/>
                        <br/>
                        <p style={{fontWeight: '700'}}>What is Nursing and Caring</p>
                        <br/>
                        <p  className="Nursing-first-content-word" style={{fontWeight: '500'}}>Nursing relates to the act of providing care to those who are ill, both physically and mentally.
                
                As one of the front liners in the healthcare sector, nurses are responsible for a multitude of tasks, such as administering medication,
                   wound care and treatment, performing physical exams and diagnostic tests, monitoring vital signs and nurturing the recovery of patients.</p>
                        <br/>
                        <br/>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="Nursing-WhySegi">
            <div className="row">
                <div className="col-sm-9 mx-auto">
                    <div className="Nursing-WhySegiParagraph">
                        <br/>
                        <br/>
                        <h1 style={{fontWeight: '700',fontFamily:'Poppins',textAlign:'center'}}>Why Choose SEGi</h1>
                        <br/>
                        <p style={{fontWeight: '400', fontFamily:'Poppins'}}>Nursing and Caring focuses both on the ‘care’ aspects of nursing as well as the ‘science’ of health care. Students will undergo a complete learning experience involving classroom work, activities at simulation wards, practical room, skills lab, and Human Patient Simulator lab, as well as earn real life experience during attachments with partner hospitals and community health clinics.</p>
                        <p style={{fontWeight:'400', fontFamily:'Poppins'}}>The programme is approved by the Ministry of Education and Malaysian Qualifications Agency. It is also accredited by the Ministry of Health & Malaysian Nursing Board. Students who pass the final examinations can register with the Malaysian Nursing Board.</p>
                       
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </div>

        
         <h1 className='nursinggalleryname'>Gallery</h1>
        <Carousel className='main-nursingslide'>
                <div>
                <img className='galleryimagenursing' src={require("../assets/images/nursingimage3.jpg")} style={{height:"400px",width:"500px"}}  alt="" ></img> 
                    
                </div>
                <div>
                <img className='galleryimagenursing' src={require("../assets/images/nursingimage5.jpg")}style={{height:"400px",width:"500px"}}  alt="" ></img> 
                
                </div>
                <div>
                <img className='galleryimagenursing'src={require("../assets/images/nursingimage6.jpg")}style={{height:"400px",width:"500px"}}  alt="" ></img> 
                    
                </div>
                <div>
                <img className='galleryimagenursing' src={require("../assets/images/nursingimage8.jpg")}style={{height:"400px",width:"500px"}}  alt="" ></img> 
                    
                </div>
            </Carousel>
    
        <div className="Nursing-LastPart">
            <div className="row">
                <div className="col-sm-5 lastpartnursing">
                    <img className="Nursing-LastPart-img" src={require("../assets/images/nursingimage6.jpg")} alt=""/>
                </div>
                <div className="col-sm-7">
                    <div className="Nursing-LastPart-right">
                        <br/>
                        <br/>
                        <p style={{fontWeight: '700'}}>Want to Know more about our  facilities</p>
                        <br/>
                        <p style={{fontWeight: '500'}}>If you are interested in our program and want to check out more about our art and deisgn related facilities, please click on the facilities button.</p>
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

export default Nursing;