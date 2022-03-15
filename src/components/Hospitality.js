import React from 'react'
import './css/hospitality.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/standard.css'


const Hospitality = () => {
    return (
        <div>
            <div className="hospitalitybanner">


                <div>

                    <img className="banner" src={require("../assets/images/Hospitality/Introback.png")} alt="" />

                    <div className="set1">

                        <h2>
                            Know more about
                        </h2>
                        <h1>
                            <b>our program</b>
                        </h1>

                        <p>
                            If you are interested and want to know more about <b>Hospitality</b>.
                        </p>


                        <button type="button" classNameName="General-Button">Programme</button>
                    </div>

                </div>



            </div>

            <br />
            <br />

            <div className="container">
                <div className="row sp1">
                    <div className="col imgborder">
                        <div className="iconimg">
                            <img src={require("../assets/images/Hospitality/icon1.png")} style={{ width: '100px', height: '100px' }} />

                            <p>Involves food and beverage business that can range from restaurants.</p>
                        </div>
                    </div>

                    <div className="col imgborder">
                        <div className="iconimg">
                            <img src={require("../assets/images/Hospitality/icon2.png")} style={{ width: '100px', height: '100px' }} />

                            <p>Operating accommodation establishments</p><br></br>
                        </div>
                    </div>

                    <div className="col imgborder">
                        <div className="iconimg">
                            <img src={require("../assets/images/Hospitality/icon3.png")} style={{ width: '100px', height: '100px' }} />

                            <p>Involves food and beverage business that can range from restaurants.</p>
                        </div>
                    </div>
                </div>

                <br />
                <br />

                <h2>
                    <b>Hospitality in SEGi</b>
                </h2>
                <div className="row">
                    <div className="col">
                        <p className="hospitalityp1">The Hospitality & Tourism programmes in SEGi are designed to equip you
                            with skills and knowledge that
                            are increasingly in demand and relevant through modules that cover marketing, destination
                            management,
                            human resources, information management, planning and research, among others.
                        </p>
                    </div>
                    <div className="col">
                        <img src={require("../assets/images/Hospitality/Gif2.gif")} style={{ width: '100%', height: '100%' }} alt="" />

                    </div>
                </div>

                <h2>
                    <b>Why Choose Us ?</b>
                </h2>

                <br />

                <p>
                    SEGi offer programmes in the areas of Hospitality & Hotel Management, Tourism Management and
                    Culinary
                    Arts.
                </p>


                <img className="ehancesskillsimg" src={require("../assets/images/Hospitality/EnhanceSkills.JPG")} aboutlt="" />

                <br />
                <br />
                <br />

                <ul>
                    <li>There is tremendous growth in the hotel and tourism industry as businesses and people spend more
                        money on leisure than ever before, making this sector of the industry one of the largest and
                        fastest
                        creators of employment.</li>
                    <br></br>

                    <li>
                        There is a need for educated and trained individuals who can deliver first className services.
                    </li>
                </ul>

                <br />
                <br />

            </div>

            <div className="partnershipshotel">
                <div className="container">
                    <h2 className="hotelstyleheader">
                        <b>Partnerships hotel</b>
                    </h2>


                    <div className="row">
                        <div className="col partner1">

                            <img className="partnerhotel" alt="Hatten Hotel" src={require("../assets/images/Hospitality/HattenHotel.png")} />

                            <p className="hoteltxt"><b>Hatten Hotel</b></p>

                        </div>

                        <div className="col partner1">
                            <img className="partnerhotel" src={require("../assets/images/Hospitality/PangkorResort.png")} alt="" />

                            <p className="hoteltxt"><b>Pangkor Resort</b></p>

                        </div>

                        <div className="col partner1">
                            <img className="partnerhotel" src={require("../assets/images/Hospitality/CopthorneHotel.png")} alt="" />

                            <p className="hoteltxt"><b>Copthorne Hotel</b></p>

                        </div>

                        <div className="col partner1">
                            <img className="partnerhotel" src={require("../assets/images/Hospitality/HardRockHotel.png")} alt="" />

                            <p className="hoteltxt"><b>HardRock Hotel</b></p>

                        </div>

                        <div className="col partner1">
                            <img className="partnerhotel" src={require("../assets/images/Hospitality/SunwayResort.png")} alt="" />

                            <p className="hoteltxt"><b>Sunway Resort</b></p>

                        </div>

                    </div>


                    <div className="row">
                        <div className="col">
                            <h2 className="hotelstyleheader">
                                <b>Hotel Style</b>
                            </h2>

                            <p>Hospitality is the key to new ideas, new friends, new possibilities. What we take into our
                                lives
                                changes us. Without new people and new ideas, we are imprisoned inside ourselves.
                            </p>

                            <ul>
                                <li>Fitness center</li>
                                <li>Outdoor pool</li>
                            </ul>

                        </div>
                        <div className="col hotelstyleimage">
                            <img src={require("../assets/images/Hospitality/Hotelstyle1.png")} className="backimg" />
                            <img src={require("../assets/images/Hospitality/Hotelstyle2.png")} className="frontimg" />
                        </div>
                    </div>
                </div>

                <div classNameName="Faculties">
                    <div classNameName="row">
                        <div classNameName="col-sm-5">
                            <img classNameName="Faculties-img" src={require("../assets/images/Hospitality/btmimg.png")} alt="" />
                        </div>
                        <div classNameName="col-sm-7">
                            <div classNameName="Faculties-right">
                                <br />
                                <br />
                                <p style={{ fontWeight: '700' }}>Want to Know more about our  facilities</p>
                                <br />
                                <p style={{ fontWeight: '500' }}>If you are interested in our program and want to check out more about our art and deisgn related facilities, please click on the facilities button.</p>
                                <br />
                                <br />
                                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem', marginRight: '2rem' }}>
                                    <button type="button" classNameName="General-Button">Facilities</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Hospitality

