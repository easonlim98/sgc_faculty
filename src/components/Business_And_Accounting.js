import React from 'react'
import './css/Business_And_Accounting.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/standard.css'
import Banner from './general-components/Banner/Banner.js'
import Facilities from './general-components/Facilities/Facilities.js'
import TabsComponent from './general-components/Tabs/TabsComponent'

const Business_And_Accounting = () => {
    return (
        <div>

            <div className='BA banner-container'
                style={{
                    backgroundImage: "url(" + require('../assets/images/Business_And_Accounting/BA-Banner.png') + ")"
                }}>
                <Banner
                    navigatepath={"/Search_Page"}
                    bannercontent={"If you are interested and want to know more about Business & Accounting."} />
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

            <TabsComponent
                StudentName={"Edward Maya"}
                StudentJob={"Graphic Designer"}
                Studentimage={require('../assets/images/Creative_Art/college_student_creativeart.png')}
                StudentWords={"“My high school art education constructed invaluable foundations for me as a creative professional.”"}
                navigationpath={""}
                textcolor={"#A71337"}
                backgroundcolor={"#E3E4E3"}
            />
            <Facilities
                facilitiesimage={require('../assets/images/Business_And_Accounting/BA-img10.png')}
                content={"If you are interested in our programme and want to check out more about our Business & Accounting-related facilities, please click on the facilities button."} />
        </div>
    )
}

export default Business_And_Accounting;
