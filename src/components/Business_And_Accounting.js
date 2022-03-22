import React from 'react'
import './css/Business_And_Accounting.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/standard.css'

const Business_And_Accounting = () => {
    return (
        <div>
            <div class="BA-Banner">
                <div style={{ display: 'flex', height: '80vh', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ background: 'none', width: '85%', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ background: 'none', display: 'flex', flexDirection: 'column' }}>
                            <a style={{ fontSize: '20px', color: '#FFFFFF' }}>Know more about</a>
                            <a style={{ fontSize: '35px', color: '#FFFFFF', fontWeight: 'bold' }}>Our Program</a>
                            <p style={{ color: '#FFFFFF' }} class="BA-bannerContent-res">If you are interested and want to know more
                                about Business & Accounting.</p>
                            <div>
                                <button type="button" class="General-Button">Programme</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="BA-container">
                <div class="row">
                    <div class="col-sm-5 BA-section-img">
                        <img class="BA-gif1" src={require("../assets/gif/Business_And_Accounting/gif2.gif")} alt="" />
                    </div>
                    <div class="col-sm-7  BA-Section-group1">

                        <h4 className="BA-text-hd">What is Business & Accounting?</h4>
                        <p className="BA-text-font">Accounting is the process of recording financial transactions pertaining
                            to a business. The accounting process includes summarizing, analyzing, and reporting these
                            transactions to oversight agencies, regulators, and tax collection entities. The financial
                            statements used in accounting are a concise summary of financial transactions over an accounting
                            period, summarizing a company's operations, financial position, and cash flows.</p>

                    </div>
                </div>
                <div className="row BA-Section-group1">
                    <div className="col-xl col-sm-3 BnA-icon">
                        <img className="BA-image1" src={require("../assets/images/Business_And_Accounting/BA-img1.png")} alt="" />
                    </div>
                    <div className="col-xl col-sm-3 BnA-icon">
                        <img className="BA-image1" src={require("../assets/images/Business_And_Accounting/BA-img2.png")} alt="" />
                    </div>
                    <div className="col-xl col-sm-3 BnA-icon">
                        <img className="BA-image1" src={require("../assets/images/Business_And_Accounting/BA-img3.png")} alt="" />
                    </div>
                    <div className="col-xl col-sm-3 BnA-icon">
                        <img className="BA-image1" src={require("../assets/images/Business_And_Accounting/BA-img4.png")} alt="" />
                    </div>
                </div>
                <div class="BA-Section-2">
                    <div class="row">
                        <div class="col-sm-6 BA-Section-group1">
                            <div class="BA-Section-text1">
                                <h3 className="BA-text-hd">What We Learn</h3>
                                <p className="BA-text-font">This programme prepares students to become professional accountants. It covers theoretical and
                                    conceptual accounting matters combined with the basic accounting skills needed to make graduates
                                    employable.
                                </p>
                            </div>
                            <button class="btn btn-outline-dark">Read more</button>
                        </div>
                        <div className="col-sm-6 BA-image2" >
                            <img className="BA-backimg" src={require("../assets/images/Business_And_Accounting/BA-img5.png")} alt="" />
                            <img className="BA-frontgif2" src={require("../assets/gif/Business_And_Accounting/gif2.gif")} alt="" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col" style={{ textAlign: 'center' }}>
                        <img className="BA-image3" src={require("../assets/images/Business_And_Accounting/BA-img6.png")} alt="" />
                    </div>
                </div>
                <div>
                    <ul>
                        <li className="BA-text-font">Accounting is the way a business keeps track of its operations.</li>
                        <li className="BA-text-font">Accountants analyse the business finances so the owner can make better decisions.</li>
                        <li className="BA-text-font">Accounting or accountancy is the measurement, processing, and communication of financial and non
                            financial information about economic entities such as businesses and corporations.</li>
                    </ul>
                </div>
            </div>
            <div className="row BA-bgColor">
                <div className="col-sm-7">
                    <div className="BA-container2">
                        <h4>CHAMPIONING 3H TRANSFORMATIVE LEARNING</h4>
                        <p style={{ textAlign: 'justify' }}>At SEGi, we champion the 3H Transformative Learning to cultivate
                            future-proof graduates. The education of the Head, the Heart and the Hands is a holistic learning
                            approach in transforming future leaders:</p>
                        <div class="container">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="Outstanding-Student-tab" data-toggle="tab"
                                        href="#Outstanding-Student" role="tab" aria-controls="Outstanding-Student"
                                        aria-selected="true">Outstanding Student</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="Success-Story-tab" data-toggle="tab" href="#Success-Story" role="tab"
                                        aria-controls="Success-Story" aria-selected="false">Success Story</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="Worklife-tab" data-toggle="tab" href="#Worklife" role="tab"
                                        aria-controls="Worklife" aria-selected="false">Worklife</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="Outstanding-Student" role="tabpanel"
                                    aria-labelledby="Outstanding-Student-tab">
                                    <div style={{ boxShadow: '0px 1px #5F84AD' }}>
                                        <p style={{ color: '#FFF' }}>"There is no passion to be found in playing small — in settling
                                            for a life that is less than the one you are capable of living."</p>
                                        <p style={{ color: '#FFF' }}>Nelson Mandela</p>
                                    </div>
                                    <p style={{ color: '#FFF' }}>Student of 2021 Bachelor of Communication Studies</p>
                                    <div>
                                        <img class="BA-icon" src={require("../assets/images/Communication_Studies/profile-icon.png")} alt="" />
                                        <img class="BA-icon" src={require("../assets/images/Communication_Studies/contact-icon.png")} alt="" />
                                        <img class="BA-icon" src={require("../assets/images/Communication_Studies/work-icon.png")} alt="" />
                                    </div>
                                    <a style={{ color: '#A71337' }} href="#">See More</a>
                                </div>
                                <div class="tab-pane fade" id="Success-Story" role="tabpanel" aria-labelledby="Success-Story-tab">
                                    <p style={{ color: '#FFF' }}>Content for Success Story</p>
                                </div>
                                <div class="tab-pane fade" id="Worklife" role="tabpanel" aria-labelledby="Worklife-tab">
                                    <p style={{ color: '#FFF' }}>Content for Worklife</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-sm-5">
                    <img className="BA-image4" src={require("../assets/images/Business_And_Accounting/BA-img8.png")} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Business_And_Accounting;
