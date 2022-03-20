import React from 'react'
import './css/Business_And_Accounting.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/standard.css'

const Business_And_Accounting = () => {
    return (
        <div>
            <div>
                <img className="BA-banner" src={require("../assets/images/Business_And_Accounting/B_A_Banner.png")} alt=""/>
                    <div className="BA-textOnImg">
                        <h2>Know more about</h2>
                        <h1><b>OUR PROGROM</b></h1>
                        <p>If you are interested and want to know more about Business & Accounting.</p>
                        <button type="button" className="General-Button">Programme</button>
                    </div>

            </div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-sm-5" style={{textAlign: 'center'}}>
                        {/* Temporary commment first, ltr find another gif replace it */}
                        {/* <img className="BA-gifImg" src={require("../assets/gif/Business_And_Accounting/gif1.gif")} style={{borderStyle: 'solid'}} alt=""/> */}
                    </div>
                    <div className="col-sm-7">
                        <h5><b>What is Business & Accounting?</b></h5>
                        <p style={{textAlign: 'justify'}}>Accounting is the process of recording financial transactions pertaining
                            to a business. The accounting process includes summarizing, analyzing, and reporting these
                            transactions to oversight agencies, regulators, and tax collection entities. The financial
                            statements used in accounting are a concise summary of financial transactions over an accounting
                            period, summarizing a company's operations, financial position, and cash flows.</p>
                    </div>
                </div>
                <br />
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <img className="BA-image1" src={require("../assets/images/Business_And_Accounting/img1.png")} alt=""/>
                        </div>
                        <div className="col-sm-3">
                            <img className="BA-image1" src={require("../assets/images/Business_And_Accounting/img2.png")} alt=""/>
                        </div>
                        <div className="col-sm-3">
                            <img className="BA-image1" src={require("../assets/images/Business_And_Accounting/img3.png")} alt=""/>
                        </div>
                        <div className="col-sm-3">
                            <img className="BA-image1" src={require("../assets/images/Business_And_Accounting/img4.png")} alt=""/>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-sm-6">
                            <h5><b>What We Learn</b></h5>
                            <p>This programme prepares students to become professional accountants. It covers theoretical and
                                conceptual accounting matters combined with the basic accounting skills needed to make graduates
                                employable.</p>
                            <button className="btn btn-outline-dark">Read more</button>
                        </div>
                        <div className="col-sm-6" style={{textAlign: 'center'}}>
                            <img className="BA-image1" src={require("../assets/images/Business_And_Accounting/img5.png")} alt=""/>
                                <img className="BA-gifImg1" src={require("../assets/gif/Business_And_Accounting/gif2.gif")} alt=""/>
                                </div>
                        </div>
                        <div className="row">
                            <div className="col" style={{textAlign: 'center'}}>
                                <img className="BA-image2" src={require("../assets/images/Business_And_Accounting/img6.png")} alt=""/>
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li>Accounting is the way a business keeps track of its operations.</li>
                                <li>Accountants analyse the business finances so the owner can make better decisions.</li>
                                <li>Accounting or accountancy is the measurement, processing, and communication of financial and non
                                    financial information about economic entities such as businesses and corporations.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row BA-bgColor">
                    <div className="col-sm-6">
                        <div className="container">
                            <br />
                            <h4>CHAMPIONING 3H TRANSFORMATIVE LEARNING</h4>
                            <p style={{textAlign: 'justify'}}>At SEGi, we champion the 3H Transformative Learning to cultivate
                                future-proof graduates. The education of the Head, the Heart and the Hands is a holistic learning
                                approach in transforming future leaders:</p>
                        </div>
                        <div className="container">
                            {/* Nav pills */}
                            <ul className="nav nav-pills" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="pill" href="#home"><img className="BA-image3"
                                        src={require("../assets/images/Business_And_Accounting/img7.png")} alt=""/></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#tab1"><img className="BA-image3"
                                        src={require("../assets/images/Business_And_Accounting/img7.png")} alt=""/></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="pill" href="#tab2"><img className="BA-image3"
                                        src={require("../assets/images/Business_And_Accounting/img7.png")} alt=""/></a>
                                </li>
                            </ul>

                            {/* Tab panes */}
                            <div className="tab-content">
                                <div id="home" className="container tab-pane active"><br />
                                    <div className="row">
                                        <div className="col-6">
                                            <img className="BA-image4" src={require("../assets/images/Business_And_Accounting/img9.png")} alt=""/>
                                                <h4 style={{textAlign: 'center'}}>HEAD (Knowledge)</h4>
                                        </div>
                                        <div className="col-6">
                                            <p style={{textAlign: 'justify'}}>Providing the latest curriculum co-designed with
                                                international partner universities, local industry practitioners and experts. Our
                                                proven teaching and learning process has seen over 130,000 graduates working in over
                                                90 countries - ranging from successful entrepreneurs to high level executives and
                                                policymakers.</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab1" className="container tab-pane fade"><br />
                                    <h3>Menu 1</h3>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat.</p>
                                </div>
                                <div id="tab2" className="container tab-pane fade"><br />
                                    <h3>Menu 2</h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam.</p>
                                </div>
                            </div>
                        </div>
                        <br />
                    </div>

                    <div className="col-sm-6">
                        <img className="BA-image2" src={require("../assets/images/Business_And_Accounting/img8.png")} alt=""/>
                    </div>
                </div>
            </div>
            )
}

            export default Business_And_Accounting;
