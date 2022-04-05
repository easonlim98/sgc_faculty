import React from 'react'
import './css/Communication_Studies.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css'
import Banner from './general-components/Banner/Banner.js'
import Facilities from './general-components/Facilities/Facilities.js'
import TabsComponent from './general-components/Tabs/TabsComponent'

const Communication_Studies = () => {
    return (
        <div>
            <div className='BA banner-container'
                style={{
                    backgroundImage: "url(" + require('../assets/gif/Communication_Studies/CS-gif-1.gif') + ")"
                }}>
                <Banner
                    navigatepath={"/Search_Page"}
                    coursename={"Business & Accounting"} />
            </div>
            <div className="CS-container">
                <div className="CS-Section-1-Header" style={{ textAlign: 'center' }}>
                    <h4 className='CS-text-title1' style={{ color: '#717274' }}><b>What is</b></h4>
                    <h1 className='CS-text-title2'><b>Communication Studies</b></h1>
                </div>
                <div className="CS-Section-Content">
                    <div className="row CS-group-content">
                        <div className="col-sm-6 CS-group-img">
                            <div className="CS-Section-2-img">
                                <img className="CS-Section-1-img" src={require("../assets/images/Communication_Studies/CS-img-1.png")} alt="" />
                            </div>
                        </div>
                        <div className="col-sm-6 CS-text-col">
                            <div className='CS-text-area'>
                                <p className='CS-text-hd' style={{ fontWeight: '700' }}>Significant of Communication Studies</p>
                                <p className='CS-Section-1-Content CS-text-font' style={{ fontWeight: '500' }}>The communications industry in Malaysia and around the world has evolved so much that contemporary professional communicators now have to stand up to face the current challenges with sophistication and respond through the various media channels. Modern communicators have to utilise all media available, from verbal communication to print media, from broadcasting to digital platforms. Effective communication requires communicators to speak clearly to each individual audience.</p>
                            </div> 
                            <button className="btn btn-outline-dark CS-button">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="CS-Section-Content">
                    <div className="row CS-group-content1">
                        <div className="col-sm-6 CS-text-col">
                            <div className="CS-Section-2-text CS-text-area">
                                <p className='CS-text-hd' style={{ fontWeight: '700' }}>Communication Studies in SEGi</p>
                                <p className='CS-Section-1-Content CS-text-font' style={{ fontWeight: '500' }}>At SEGi Group of Colleges, we are equipped with sophisticated technology and state-of-art technology, including broadcast studios, radio studios, editing rooms, voice-over studios, photography studios, and modern computer labs with the latest software and equipment. We also have internship placement programmes that will spur our students towards excellence in their careers.</p>
                            </div>
                            <button className="btn btn-outline-dark CS-button">Read more</button>
                        </div>
                        <div className="col-sm-6">

                            <div className="CS-Section-2-img">
                                <img className="CS-Section-1-img" src={require("../assets/images/Communication_Studies/CS-img-2.png")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="CS-Section-Content">
                    <div className="row CS-group-content">
                        <div className="col-sm-6 CS-group-img">
                            <div className="CS-Section-2-img">
                                <img className="CS-Section-1-img" src={require("../assets/images/Communication_Studies/CS-img-3.png")} alt="" />
                            </div>
                        </div>
                        <div className="col-sm-6 CS-text-col">
                            <div className='CS-text-area'>
                                <p className='CS-text-hd' style={{ fontWeight: '700' }}>SEGi offer you</p>
                                <p className='CS-Section-1-Content CS-text-font' style={{ fontWeight: '500' }}>Responding to these high expectations, SEGi Group of Colleges offers dynamic courses focusing on creative content creation, media studies, broadcasting, public relations, journalism, advertising and digital marketing.</p>
                            </div>
                            <button className="btn btn-outline-dark CS-button">Read more</button>
                        </div>
                    </div>
                </div>
            </div>

            <TabsComponent
                StudentName={"Munirah Binti Haji Mashod"}
                StudentJob={"Research, Development and International Affairs Officer, Ministry of Culture, Youth and Sports in Brunei Darussalam."}
                Studentimage={require('../assets/images/Communication_Studies/CS-img-7.png')}
                StudentWords={"“Hailing from Brunei Darussalam, I had dreams and eagerness to pursue my studies in Communication when I joined SEGi College Subang Jaya. I have not just trained with communication, writing and broadcasting skills, the 3 years has taught me to think critically and creatively, should the situation require me to do so.”"}
                achievementcontent={"Young PR Professional of the Year Award, Malaysia Public Relations Award Night"}
                achievementname={"Siti Azlyana Binti Azmi"} 
                achievementjob={"Diploma in Mass Communication (Alumni)"}
                achievementsample={require("../assets/images/Communication_Studies/CS-student1.png")}
                navigationpath={""}
                textcolor={"#215082"}
                backgroundcolor={"#9AB8D366"}
                
            />
            <Facilities
                facilitiesimage={require('../assets/images/Communication_Studies/CS-img-8.png')}
                content={"If you are interested in our programme and want to check out more about our Communication Studies-related facilities, please click on the facilities button."}
            />
        </div>
    )
}

export default Communication_Studies;