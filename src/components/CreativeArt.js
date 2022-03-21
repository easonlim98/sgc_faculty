import React, { useState, useEffect } from 'react'
import './css/CreativeArt.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/standard.css';
import HeaderBanner from './general-components/Banner/Banner.js'

const CreativeArt = () => {
    return (
        <>
            <HeaderBanner
                backgroundsrc={"../../assets/gif/Creative Art/CA.gif"}
                navigatepath={"/Search_Page"}
                bannercontent={"If you are interested and want to know more about Creative Art & Design."} />
            {/* <div className='CA banner-container'>
                <div className='CA programme-container' style={{ background: 'none', display: 'flex', flexDirection: 'column', left: '10rem', position: 'relative' }}>
                    <p className='text first-title1' style={{ fontSize: '20px', color: '#FFFFFF', }}>{"Know more about"}</p>
                    <p className='text first-title2' style={{ fontSize: '35px', color: '#FFFFFF', fontWeight: 'bold' }}>{"Our Programme"}</p>
                    <p className='text first-content1' style={{ fontSize: '16px', color: 'white', marginTop: '10px' }}>
                        If you are interested and want to know more about Creative Art &
                        Design.
                    </p>
                    <div>
                        <button style={{ color: 'white', backgroundColor: '#A41F36', marginTop: '0.6rem', fontSize: '16px', padding: '0.5rem 2rem', fontWeight: 500, borderRadius: 5, borderWidth: 0, boxShadow: 'rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset' }}>
                            {"Programme"}
                        </button>
                    </div>
                </div>
            </div> */}

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
                <div className="col-sm-4">
                    <p className="CA-section-2_STUDENT">S T U D E N T S</p>
                    <p className="CA-section-2_ARTWORKS">A R T W O R K S</p>
                    <img className="CA-Section-2-pic1" src={require('../assets/images/Creative_Art/section2_part2.png')} />
                </div>
                <div className="col-sm-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img className="CA-Section-2-pic2" src={require('../assets/images/Creative_Art/test.jpg')} />
                </div>
                <div className="col-sm-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <div id="line2" className="CA-horizontal"></div>
                    <p style={{ color: '#A71337' }}>Next</p>
                    <p style={{ color: '#ACACAC', fontWeight: '500', marginTop: '5rem' }}>KELVIN LIM</p>
                    <p style={{ fontSize: '25px', fontWeight: '800' }}>GOLD AWARD</p>
                    <p style={{ color: '#9E8D8D' }}>AWARDED ON 09/20/2020</p>
                    <p style={{ color: '#A71337', fontWeight: '500' }}>View more on our Virtual Gallery</p>
                </div>
            </div>
            <div className="container CA-Section-3">
                <div style={{ display: 'flex', flex: 2 }}>
                    <img className="CA-Section-3-pic1" style={{ display: 'flex', flex: 1 }} src={require('../assets/images/Creative_Art/color_example.png')} />
                </div>
                <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                    <img className="CA-Section-3-pic2" src={require('../assets/images/Creative_Art/bnwexample.png')} />
                </div>
            </div>
        </>
    )
}

export default CreativeArt;