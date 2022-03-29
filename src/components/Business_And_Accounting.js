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
                <div className="row BA-Section-group1">
                    <div className="col-sm-6 BA-section-img">
                        <img className="BA-Section1-img" src={require("../assets/images/Business_And_Accounting/BA-Image1.jpg")} alt="" />
                    </div>
                    <div className="col-sm-6 BA-Section-1">
                        <h4 className="BA-text-hd">What is Business & Accounting?</h4>
                        <p className="BA-text-font">For the aspiring entrepreneurs and business leaders, a business management degree is consistently a popular choice. It provides the academic knowledge and skills to pursue global career opportunities and helps you develop a broad understanding of businesses and specific areas such as finance and human resources.</p>

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
                <div className="BA-Section-2">
                    <div className="row BA-Section-group1">
                        <div className="col-sm-6 BA-section-group2">
                            <div className="BA-Section-text1">
                                <h3 className="BA-text-hd">What We Learn</h3>
                                <p className="BA-text-font">This programme prepares students to become professional accountants. It covers theoretical and
                                    conceptual accounting matters combined with the basic accounting skills needed to make graduates
                                    employable.
                                </p>
                            </div>
                            <button className="btn btn-outline-dark">Read more</button>
                        </div>
                        <div className="col-sm-6 BA-image2" >
                            <img className="BA-Section2-img" src={require("../assets/images/Business_And_Accounting/BA-img5.jpg")} alt="" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col" style={{ textAlign: 'center' }}>
                        <img className="BA-image3" src={require("../assets/images/Business_And_Accounting/BA-img6.png")} alt="" />
                    </div>
                </div>
                <div className='BA-Section-3'>
                    <ul>
                        <li className="BA-text-font">Accounting is the way a business keeps track of its operations.</li>
                        <li className="BA-text-font">Accountants analyse the business finances so the owner can make better decisions.</li>
                        <li className="BA-text-font">Accounting or accountancy is the measurement, processing, and communication of financial and non
                            financial information about economic entities such as businesses and corporations.</li>
                    </ul>
                </div>
            </div>

            <TabsComponent
                StudentName={"Tariana Anak Tara"}
                StudentJob={"Currently working at Sarawak Energy Berhad"}
                Studentimage={require('../assets/images/Business_And_Accounting/BA-img8.jpeg')}
                StudentWords={"“LIFE IS LIKE ACCOUNTING EVERYTHING MUST BE BALANCE.”"}
                // StudentWords={"“SEGi College Sarawak in Collaboration with University of Sunderland for the programme of Bachelor (Hons) Business and Management (3+0) turned out to be a blessing in disguise. It has been a great experience being a part of such an Institution which not only provided me with quality education but also has helped me to groom my overall personality. The renowned faculty of Business & Accounting combined with the pedagogic learning has moulded me into a smarter professional with the ability to analyse my entrepreneurial ventures, also enhancing my personal psychographic in the process.”"}
                navigationpath={""}
                textcolor={"#A71337"}
                backgroundcolor={"#949494"}
            />
            <Facilities
                facilitiesimage={require('../assets/images/Business_And_Accounting/BA-Facilities1-Computer-Lab.jpg')}
                content={"Here at SEGi, the Faculty of Business and Accounting provides facilities to benefits students for their studies and student life. Our computer lab, library and student lounge facilities are readily available for students to facilitate their whole journey at SEGi."} />
        </div>
    )
}

export default Business_And_Accounting;
