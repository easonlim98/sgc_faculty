import React from 'react'
import './css/Music.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css'
import Banner from './general-components/Banner/Banner.js'
import Facilities from './general-components/Facilities/Facilities.js'
import TabsComponent from './general-components/Tabs/TabsComponent'

const MusicIntro = () => {
    const studentdetails = [{
        Category: "Student_Testimonials",
        detailsname: "Albert Einstein",
        detailsjob: "Student of 2021 Music Studies",
        detailsimage: require('../assets/images/Music/image 220.png'),
        detailscontent: "“Your imagination is your preview of life's coming attractions.”",
    },
    ]
    const achievementdetails = [{
        Category: "Student_Achievement",
        detailsname: "Alex Lee",
        detailsjob: "Diploma in Music",
        detailsimage: require("../assets/images/Music/Alexlee.png"),
        detailscontent: "Rockfest Music Festival 2018 - 1st Runner Up Winner in Drum Level Category 3",
    },]
    const facilieitesdetails = [{
        Category: "facilites",
        detailsname: "Music",
        detailsjob: "Facilities",
        detailsimage: require('../assets/images/Music/pexels-photo-3760529 1.png'),
        detailscontent: "“If you are interested in our programme and want to check out more about our Art and Design-related facilities, please click on the facilities button.”",
    },]
    
    return (
        <div>
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


            </div>
            <TabsComponent
                studentdetails={studentdetails}
                achievementdetails={achievementdetails}
                textcolor={"white"}
                backgroundcolor={"black"}
            />

            <Facilities
                facilitiesdetails={facilieitesdetails}
            />

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