import React from 'react'
import './css/Music.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css'
import Banner from './general-components/Banner/Banner.js'
import Facilities from './general-components/Facilities/Facilities.js'
import TabsComponent from './general-components/Tabs/TabsComponent'

// import ReactAudioPlayer from 'react-audio-player';


const MusicIntro = () => {
    return (
        <div>

            {/* <audio controls autoPlay>
                    <source style={{ display: 'flex' }} src={require("../assets/musicmp3/Study_Music_01.mp3")}type="audio/mpeg"></source>
                    <source style={{ display: 'flex' }} src={require("../assets/musicmp3/Study_Music_01.ogg")}type="audio/mpeg"></source>
                </audio> */}

            {/* <ReactAudioPlayer
                src="../assets/musicmp3/Study_Music_01.mp3"
                src="../assets/musicmp3/Study_Music_01.ogg"
                autoPlay
                controls
            /> */}

            {/* <div className="musicintro-backgroundBanner">
                <div className="row">
                    <div className="col-sm-6">
                    </div>
                    <div className="col-sm-6 musicintro">
                        <div style={{ display: "flex", height: "80vh", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ background: "none", width: "85%", display: "flex", flexDirection: "column" }}>
                                <div style={{ background: "none", display: "flex", flexDirection: "column" }}>
                                    <a style={{ fontSize: "20px", color: "#FFFFFF" }}>KNOW MORE ABOUT</a>
                                    <a style={{ fontSize: "35px", color: "#FFFFFF", fontWeight: "bold" }}>Our Program</a>
                                    <p className="musicintro-banner-detail" style={{ color: "#FFFFFF" }}>If you are interested and want to know more about Music Studies.</p>
                                    <div>
                                        <button type="button" className="General-Button">Program</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className='MSCintro banner-container'
                style={{
                    backgroundImage: "url(" + require('../assets/images/Music/Musicbnr01.jpg') + ")"
                }}>
                <Banner
                    navigatepath={"/Search_Page"}
                    coursename={"Music"} />
            </div>

            <div className="container musicintrosection02 d-flex justify-content-center align-items-center">
                <div className="row musicintro d-flex justify-content-center align-items-center flex-row">
                    <div className="d-flex justify-content-center align-items-center flex-column musicintrotextsection02">
                        <p className="musicintrotitle02 fw-bold">What is Music Studies</p>
                        <p>The programme designed to lay a solid
                            foundation of musical studies which focuses
                            on the development of musical skills and
                            theoretical knowledge.</p>
                    </div>

                    <div className="col-sm-6 musicintro">
                        <div className='musicintrogifbg'>
                            <img className="musicintrobannergif01" src={require("../assets/gif/musicgif/musicgif.gif")} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <img className="musicintrobannerimg02" src={require("../assets/images/Music/provide.PNG")} />
            </div>

            <div className="musicintrosection03">
                <h3>
                    <p className="text-center">Events</p>
                </h3>
            </div>

            <div className="container musicintrocontainer01">
                <img className="musicgroup01" src={require("../assets/images/Music/event group.PNG")} />
            </div>

            <div className="musicintrosectionbutton">
                <button type="button" className="btn btn-danger">Check More</button>
            </div>

            <div className="row musicintro" style={{ backgroundColor: "black" }}>

                {/* <div classNameName="col-sm-6">
                    <img classNameName="bannerimg03" src={require("../assets/images/Music/image 220.png")} />
                </div> */}

            </div>
            <TabsComponent
                StudentName={"Albert Einstein"}
                StudentJob={"Student of 2021 Music Studies"}
                Studentimage={require('../assets/images/Music/image 220.png')}
                StudentWords={"“Your imagination is your preview of life's coming attractions.”"}
                navigationpath={""}
                textcolor={"white"}
                backgroundcolor={"black"}
            />
            {/* 
            <div className="musicintroback04">
                <div className="musicintro-Container5">

                    <div className="row musicintro">
                        <div className="col-sm-6 musicintro">

                            <img className="musicintro-bannerimg01" src={require("../assets/images/Music/image 220.png")} />
                        </div>
                        <div className="col-sm-6 musicintro">


                            <div className="musicintro-navtab">
                                <a href="javascript:void(0)" onclick="openFounTapp(event, 'Outstanding Student');">
                                    <div className="musicintro-tabeach musicintro-tabeach-line">Outstanding Student</div><br />
                                </a>
                                <a href="javascript:void(0)" onclick="openFounTapp(event, 'Success Story');">
                                    <div className="musicintro-tabeach">Success Story</div><br />
                                </a>
                                <a href="javascript:void(0)" onclick="openFounTapp(event, 'Worklife');">
                                    <div className="musicintro-tabeach">Worklife</div><br />
                                </a>
                            </div>
                            <div id="Outstanding Student" className="musicintro-tabcontent">
                                <p className="musicintro-tabcontent-p">"Your imagination is your preview of life's coming attractions."</p>
                                <h5 style={{ Color: "white" }}>Albert Einstein</h5>
                                <hr className="blacklineformusicintro-tabcontent" />
                                <p>Student of 2021 Music Studies</p>
                                <img className="musicintro-Container5-ico" src={require("../assets/images/Music/founsection5-1.png")} />
                                <img className="musicintro-Container5-ico" src={require("../assets/images/Music/founsection5-2.png")} />
                                <img className="musicintro-Container5-ico" src={require("../assets/images/Music/founsection5-3.png")} />
                                <div className="btnseemore">
                                    <button type="button" className="btn btn-danger">See More</button>
                                </div>
                            </div>

                            <div id="Success Story" className="musicintro-tabcontent" style={{ display: "none" }}>
                                <p className="musicintro-tabcontent-p">"Content for Success Story."</p>
                                <button type="button" className="btn btn-danger">See More</button>
                            </div>

                            <div id="Worklife" className="musicintro-tabcontent" style={{ display: "none" }}>
                                <p className="musicintro-tabcontent-p">"Content for Worklife."</p>
                                <button type="button" className="btn btn-danger">See More</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}

            {/* <div className="row" style={{ backgroundColor: "black" }}>
                <div className="col-sm-5">
                    <img className="musicintrobannerimg04" src={require("../assets/images/Music/pexels-photo-3760529 1.png")} />
                </div>
                <div className="col-sm-7 musicintro">
                    <div>
                        <div className="musicintrosection04">
                            <h3>Want to Know more about our facilities</h3>
                            <p>If you are interested in our program and want to check out more about our art
                                and deisgn related facilities, please click on the facilities button.</p>
                        </div>
                    </div>
                    <p className="text-right"><button type="button" className="btn btn-danger">Facilities</button></p>
                </div>
            </div> */}

            <Facilities
                facilitiesimage={require('../assets/images/Music/pexels-photo-3760529 1.png')}
                content={"If you are interested in our programme and want to check out more about our Art and Design-related facilities, please click on the facilities button."} />


            <div className="fab-container">
                <div className="button iconbutton">
                    {/* <i>+</i> */}
                    <i className="fa fa-music" aria-hidden="true"></i>
                    {/* <i className="AiOutlinePlus"></i> */}
                    {/* <ul className="options">
                        <li>
                            <span className="btn-label">telegram</span>
                            <div className="iconbutton">
                                <i className="fa-brands fa-telegram"></i>
                            </div>
                        </li>
                        <li>
                            <span className="btn-label">instagram</span>
                            <div className="iconbutton">
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </li>
                        <li>
                            <span className="btn-label">twitter</span>
                            <div className="iconbutton">
                                <i className="fab fa-twitter"></i>
                            </div>
                        </li>
                        <li>
                            <span className="btn-label">facebook</span>
                            <div className="iconbutton">
                                <i className="fab fa-facebook"></i>
                            </div>
                        </li>
                    </ul>      */}
                </div>
            </div>
        </div>

    )
}

export default MusicIntro;