import React from 'react'
import './css/Music.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css'


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

            <div className="musicintro-backgroundBanner">
                <div className="row musicintro">
                    <div className="col-sm-6 musicintro">
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
            </div>


            <div className="container musicintrosection02">
                <div className="row musicintro">
                    <div className="col-sm-6 musicintrotextsection02">
                        <p className="musicintrotitle02">What is Music Studies</p>
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
                                <p className="musicintro-tabcontent-p">""Your imagination is your preview of life's coming attractions."</p>
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
            </div>


            {/* <div className="col-sm-6">
                    <div>
                        <div className="navtab">
                            <button className="tablinks" onclick="opentab(event,'Outstanding Student')">Outstanding Student</button>
                            <button className="tablinks" onclick="opentab(event,'Success Story')">Success Story</button>
                            <button className="tablinks" onclick="opentab(event,'Worklife')">Worklife</button>
                        </div>

                        <div id="Outstanding Student" className="tabcontent">
                            <h3><i>"Your imagination is your preview of life's coming attractions.</i></h3>
                            <h4>Albert Einstein</h4>
                        </div>
                        <button type="button" className="btn btn-danger">See More</button>


                        <div id="Success Story" className="tabcontent">
                            <h3>"Content for Success Story."</h3>
                            <button type="button" className="btn btn-danger">See More</button>
                        </div>

                        <div id="Worklife" className="tabcontent">
                            <h3>"Content for Worklife."</h3>
                            <button type="button" className="btn btn-danger">See More</button>
                        </div>
                    </div>

                    {/* <script>
                function opentab(event, Content) {
                    var i, tabcontent, tablinks;
                    tabcontent = document.getElementsByclassNameName("tabcontent");
                    for (i = 0; i < tabcontent.length; i++) {
                        tabcontent[i].style.display = "none";
                    }
                    tablinks = document.getElementsByclassNameName("tablinks");
                    for (i = 0; i < tablinks.length; i++) {
                        tablinks[i].classNameName = tablinks[i].classNameName.replace(" active", "");
                    }
                    document.getElementById(Content).style.display = "block";
                    evt.currentTarget.classNameName += " active";
                }
            </script> 
                </div> */}



            <div className="row musicintro" style={{ backgroundColor: "black" }}>
                <div className="col-sm-5 musicintro">
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

            </div>
            <div class="fab-container">
                <div class="button iconbutton">
                    {/* <i>+</i> */}
                    <i class="fa fa-music" aria-hidden="true"></i>
                    {/* <i class="AiOutlinePlus"></i> */}
                    {/* <ul class="options">
                        <li>
                            <span class="btn-label">telegram</span>
                            <div class="iconbutton">
                                <i class="fa-brands fa-telegram"></i>
                            </div>
                        </li>
                        <li>
                            <span class="btn-label">instagram</span>
                            <div class="iconbutton">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </li>
                        <li>
                            <span class="btn-label">twitter</span>
                            <div class="iconbutton">
                                <i class="fab fa-twitter"></i>
                            </div>
                        </li>
                        <li>
                            <span class="btn-label">facebook</span>
                            <div class="iconbutton">
                                <i class="fab fa-facebook"></i>
                            </div>
                        </li>
                    </ul>      */}
                </div>
            </div>
        </div>

    )
}

export default MusicIntro;