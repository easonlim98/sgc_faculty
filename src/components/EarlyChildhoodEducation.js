import React from 'react'
import './css/EarlyChildhoodEducation.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/standard.css'


const EarlyChildhoodEducation = () => {


    return (
        <div>
            <div className="backgroundBanner">

                <div style={{ display: 'flex', height: '80vh', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ background: 'none', width: '85%', display: 'flex', flexDirection: 'column', }}>
                        <div style={{ background: 'none', display: 'flex', flexDirection: 'column' }}>
                            <a style={{ fontSize: '20px', color: '#FFFFFF' }}>Know more about</a>
                            <a style={{ fontSize: '35px', color: '#FFFFFF', fontWeight: 'bold' }}>Our Program</a>
                            <p className="bannerContent-res">If you are interested and want to know more about Early Childhood Care & Education.</p>
                            <div>
                                <button type="button" className="General-Button">Programme</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container ECE-Section-1">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="ECE-Section-1-left">
                            <img className="ECE-Section-1-gif" src={require("../assets/gif/Early_Childhood_Education/ECEG.gif")} alt="" />
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className="ECE-Section-1-right">
                            <p style={{ fontWeight: '700', }}>What is Early Childhood Education ?</p>
                            <p style={{ fontWeight: '500', }} className="ECE-Section-1-Content">Early childhood education covers the education of infants, toddlers, and young children. The early years of a child's life are significant as children develop cognitive and learning skills, motor skills, and social and emotional skills during this period.</p>
                            <ul>
                                <li style={{ fontWeight: '400', }}>Child Development</li>
                                <li style={{ fontWeight: '400', }}>Learning and Play</li>
                                <li style={{ fontWeight: '400', }}>Children's Safety</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container ECE-Section-2">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="ECE-Section-2-left">
                            <p style={{ fontWeight: '700', fontSize: '14px' }}>Today’s GRADUATES</p>
                            <p style={{ fontWeight: '700', fontSize: '17px' }}>TOMORROW’S EDUCATORS</p>
                            <p style={{ fontWeight: '700', fontSize: '14px' }}>A pioneer and trusted provider of early childhood education programmes, producing thousands of highly qualified early childhood practitioners since 1999, SEGi was appointed the champion for Early Childhood teacher training by PEMANDU in 2010 for the National Key Economic Area (NKEA) Entry Point Project (EPP) 2.</p>
                            <p style={{ fontWeight: '700', fontSize: '14px' }}>Our students are exposed to a myriad of critical issues relevant to the future planning of Early Childhood Education in the country. Therefore, they are high in demand locally and abroad, including in Singapore. Our strong links with more than 100 local and international Early Childhood Education agencies provide students and graduates with ready access to internship and employment opportunities. Apart from Early Childhood Education, we also offer other specialisation fields linked to the teaching profession, such as TESL, Special Needs Education and Counselling. Students also can further their studies in this field at the post-graduate level.</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="ECE-Section-2-right">
                            <img className="ECE-Section-2-img" src={require("../assets/images/Early_Childhood_Education/ECEDIcon.png")} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container ECE-Section-3">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="ECE-Section-3-left">
                            <img className="ECE-Section-3-img" src={require("../assets/images/Early_Childhood_Education/successQuotes.png")} alt="" />
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <div className="ECE-Section-3-right">
                            <p style={{ fontWeight: '700' }}>What our student favourite quote from the history</p>
                            <p style={{ fontWeight: '500' }}>“Education is the most powerful weapon to change the world.” (Nelson Mandela, 2003)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container ECE-Section-4">
                <div className="col-sm-12">
                    <p style={{ display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: 'large' }}>OUR STRATEGIC INDUSTRY PARTNERS</p>
                    <img style={{ width: '100%', marginTop: '2rem' }} src={require("../assets/images/Early_Childhood_Education/industries.png")} alt="" />
                </div>
            </div>

            <div className="container ECE-Section-5">
                <div style={{ display: 'flex' }}>
                    <p style={{ display: 'flex', justifyContent: 'center', fontWeight: '700', fontSize: 'large' }}>Previous Event</p>
                </div>
                <div className="row" style={{ marginTop: '1rem' }}>
                    <div className="col-sm-6">
                        <div className="ECE-Section-5-left">
                            <img className="ECE-Section-5-img" src={require("../assets/images/Early_Childhood_Education/event.png")} alt="" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="ECE-Section-5-right">
                            <p style={{ fontWeight: '700' }}>Mid Autumn Fund Raising</p>
                            <br />
                            <p style={{ fontWeight: '500' }}>2019: Ms Carolyn Choo, Associate Dean, Joint Faculty of Education, SEGi Group of Colleges (in white), Tengku Zulpuri Shah Raja Puji, then-Deputy Minster of Water, Land and Natural Resources (middle) and SEGi DECE students at the Mid Autumn fundraising.</p>
                            <br />
                            <div className="row">
                                <div className="col-sm-6">
                                    <p>Held on 10/5/2019</p>
                                </div>
                                <div className="col-sm-6" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <p>See More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ECE-Section-6">
                <div className="row">
                    <div className="col-sm-5">
                        <img className="ECE-Section-6-img" src={require("../assets/images/Early_Childhood_Education/normalpic.png")} alt="" />
                    </div>
                    <div className="col-sm-7">
                        <div className="ECE-Section-6-right">
                            <br />
                            <br />
                            <p style={{ fontWeight: '700' }}>Want to Know more about our facilities</p>
                            <br />
                            <p style={{ fontWeight: '500' }}>If you are interested in our program and want to check out more about our art and deisgn related facilities, please click on the facilities button.</p>
                            <br />
                            <br />
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem', marginRight: '2rem' }}>
                                <button type="button" className="General-Button">Facilities</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EarlyChildhoodEducation;