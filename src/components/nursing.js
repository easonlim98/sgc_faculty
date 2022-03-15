import React from 'react'
import './css/nursing.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/standard.css'
const nursing = () => {
  return (
     <>
    <div id="home">
           <h1 className="h-primary">

           KNOW MORE ABOUT
           </h1>
           <h1 className="h-secondary">
             OUR PROGRAM
           </h1>
           <p className="p-primary">
            If you are interested and want to know more 
           </p>
           <p className="p-secondary">about Nursing and Caring. </p>
           <button className="button">Programme</button>
       </div>
           
          <div className="container-fluid">
        
          
            <div className="flex-container">
                <div className="box"> 
               
                    <img src={require("../assets/images/nursingimage3.jpg")} alt="" ></img> 
                </div>
                <h1 className="nursingheader">What is Nursing and Caring</h1>
                <p className="pnursing">
                    Nursing relates to the act of providing care to those who are ill, both physically and mentally.
                
                As one of the front liners in the healthcare sector, nurses are responsible for a multitude of tasks, such as administering medication,
                   wound care and treatment, performing physical exams and diagnostic tests, monitoring vital signs and nurturing the recovery of patients.</p>
    
              </div>
                
              </div>

       <div id = "body1">
          
       <div className="slider">
        <h1 className="gallerytext">GALLERY</h1>
           <div className="slides">
               {/* need to put closing tag / */} {/* html no need, but here is javascript need to close everything otherwise will be messy Javascript can't read */}
               <input type="radio" name="radio-button" id="radio1"/>
               <input type="radio" name="radio-button" id="radio2"/>
               <input type="radio" name="radio-button" id="radio3"/>
               <input type="radio" name="radio-button" id="radio4"/>

               <div className="slide first">
               <img src={require("../assets/images/nursingimage6.jpg")} alt="" ></img> 
                   
               </div>
               <div className="slide">
               <img src={require("../assets/images/nursingimage4.jpg")} alt="" ></img> 
               </div>
               <div className="slide">
               <img src={require("../assets/images/nursingimage5.jpg")} alt="" ></img> 
            </div>
            <div className="slide">
            <img src={require("../assets/images/nursingimage1.jpg")} alt="" ></img> 
            </div>
    
            <div className="navigation-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>
                <div className="auto-btn4"></div>
            </div>
           </div>
           <div className="navigation-manual">
               <label for="radio1" className="manual-button"></label>
               <label for="radio2" className="manual-button"></label>
               <label for="radio3" className="manual-button"></label>
               <label for="radio4" className="manual-button"></label>
           </div>
       </div>
      
    </div> 
    
       
        {/* <script type="text/javascript">
            var counter= 1;
            setInterval(function(){
                document.getElementById('radio'+ counter).checked=true; // Here is lnk to html from javascirpt, javascript React gt its own package to do this
                counter++;
                if(counter>4){
                    counter=1;
                }
            },5000);
        </script> */}

        {/* Javascript in React can't use function like this */}
        {/* Later u change all the img src, remember put alt="" also, refer to EarlyChildhod */}
        {/* did u need to accept or click anything i need to delete the folder */}
        <section>
            <div className="container-fluid1">
                <img src="./assets/images/Rectangle 429.png"></img>
                <div className="ladypicture">
                <img src="./assets/images/alumninursing.png"></img>
                <div className="alumni-header">
                    <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Outstanding Student</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Success Story</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Worklife</a>
                    </li>
                    </ul>
                </div>
                <div className="alumni-body">
                    <h5 className="card-title">"There are no regrets in life....just lessons</h5>
                    <p className="card-text">Carlos Tan Kok Liang</p><hr/>
                    <p className="card-text">Student of Nursing and Caring 2020</p>
                    
                </div>

                </div>
            </div>
        </section>

            <div className="container-fluid3">
                <div className="facilities">
                    <div className="box1">
                        <div className="imgbox">
                            <img src="./assets/images/nursingimage3.jpg"></img>
                            <button type="button" className="button-facilities" href="#"> Facilities</button>
                        </div>
                        <div className="contentknowmore">
                            <h1>
                                Want To Know More About Our Facilities
                            </h1>
                            <p> 
                                If you are interested in our program and want to check out more about our art and deisgn related facilities, please click on the facilities button.
                            </p>
                            
                        </div>
                    </div>
            
                      </div>
                    </div>
        </>
                    
  )
}

export default nursing;