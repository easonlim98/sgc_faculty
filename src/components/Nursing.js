import React from 'react'
import './css/Nursing.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner from './general-components/Banner/Banner.js'
import Facilities from './general-components/Facilities/Facilities.js'
import TabsComponent from './general-components/Tabs/TabsComponent'
import { Carousel } from 'react-responsive-carousel';


const Nursing = () => {
  return (
     
     <div>
         <div className='CA banner-container'
                style={{
                    backgroundImage: "url(" + require('../../src/assets/images/nursing_banner.jpg') + ")"
                }}>
                <Banner
                    navigatepath={"/Search_Page"}
                    coursename={"Nursing & Caring"} />
            </div>

        <div className="Nursing-FirstPart">
            <div className="row">
                <div className="col-sm-5 nursing">
                    <img className="Nursing-FirstPart-img" src={require("../assets/images/nursingimage6.jpg")} alt=""/>
                </div>
                <div className="col-sm-7 nursing">
                    <div className="Nursing-FirstPart-right">
                        <br/>
                        <br/>
                        <p className="Nursing-Heading">What is Nursing and Caring</p>
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
         <div className='nursing-carousel-container'>
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
        </div>

        <TabsComponent
                StudentName={"Carlos Tan Kok Liang"}
                StudentJob={"Nurse"}
                Studentimage={require('../assets/images/alumninursing.png')}
                StudentWords={"“There are no regret in life - just lessons.”"}
                navigationpath={""}
                textcolor={"#A71337"}
                backgroundcolor={"#B4D0F1"}
            />
            <Facilities
                facilitiesimage={require('../assets/images/nursingfacility.jpg')}
                content={"If you are interested in our programme and want to check out more about our Nursing and Caring-related facilities, please click on the facilities button."} />

      
    
        
        </div>
                
  )
}

export default Nursing;
