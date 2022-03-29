import React, { useState, useEffect } from 'react'
import './css/CreativeArt.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/standard.css';
import Banner from './general-components/Banner/Banner.js'
import Facilities from './general-components/Facilities/Facilities.js'
import TabsComponent from './general-components/Tabs/TabsComponent'
const CreativeArt = () => {
    return (
        <>
            <div className='CA banner-container'
                style={{
                    backgroundImage: "url(" + require('../assets/gif/Creative Art/CA.gif') + ")"
                }}>
                <Banner
                    navigatepath={"/Search_Page"}
                    bannercontent={"If you are interested and want to know more about Creative Art & Design."} />
            </div>

            <div className="container CA-Section-1">
                <div className="row" style={{ alignItems: 'center' }}>
                    <div className="col-sm-5">
                        <div className="CA-Section-1-left">
                            <img className="CA-Section-1-pic" src={require('../assets/images/Creative_Art/firstpic.png')} />
                        </div>
                    </div>
                    <div className="col-sm-7" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="CA-Section-1-right">
                            <p style={{ fontWeight: '900', color: '#A71337' }} className="CA-Section-1-Title">
                                What is Creative Art & Design
                            </p>
                            <p style={{ fontWeight: '600', }} className="CA-Section-1-Content">
                                Creative Arts and Design covers several courses including photography, videography, performing arts, film, visual
                                arts, fashion design, interior design, multimedia design, and more.
                            </p>
                            <p style={{ fontWeight: '900', color: '#A71337' }} className="CA-Section-1-Title">
                                What you will to learn from Creative Art & Design
                            </p>
                            <p style={{ fontWeight: '600', marginBottom: 0 }} className="CA-Section-1-Content">
                                Art and design majors learn basic design principles, color theory, critical thinking, and
                                artistic techniques.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container CA-Section-2">
                <div className="">
                    <p className="CA-section-2_STUDENT">S T U D E N T S</p>
                    <p className="CA-section-2_ARTWORKS">A R T W O R K S</p>
                    <img className="CA-Section-2-pic1" src={require('../assets/images/Creative_Art/section2_part2.png')} />
                </div>
                <div className="" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img className="CA-Section-2-pic2" src={require('../assets/images/Creative_Art/test.jpg')} />
                </div>
                <div className="" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <div id="line2" className="CA-horizontal"></div>
                    <p className='all-text CA-Next' style={{ color: '#A71337' }}>Next</p>
                    <p className='all-text CA-name' style={{ color: '#ACACAC', fontWeight: '500', marginTop: '5rem' }}>KELVIN LIM</p>
                    <p className='all-text CA-goldaward' style={{ fontSize: '25px', color: 'black', fontWeight: '800' }}>GOLD AWARD</p>
                    <p className='all-text CA-award' style={{ color: '#9E8D8D' }}>AWARDED ON 09/20/2020</p>
                    <p className='all-text CA-viewmore' style={{ color: '#A71337', fontWeight: '500' }}>View more on our Virtual Gallery</p>
                </div>
            </div>
            {/* <div className="container CA-Section-3">
                <div style={{ display: 'flex', flex: 2 }}>
                    <img className="CA-Section-3-pic1" style={{ display: 'flex', flex: 1 }} src={require('../assets/images/Creative_Art/color_example.png')} />
                </div>
                <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                    <img className="CA-Section-3-pic2" src={require('../assets/images/Creative_Art/bnwexample.png')} />
                </div>
            </div> */}
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
                facilitiesimage={require('../assets/images/Creative_Art/Facilities.png')}
                content={"If you are interested in our programme and want to check out more about our Art and Design-related facilities, please click on the facilities button."} />

        </>
    )
}

export default CreativeArt;