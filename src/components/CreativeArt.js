import React from 'react';
import './css/CreativeArt.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/standard.css';


const CreativeArt = () => {

    return (
        <>
            <div class="CA-backgroundBanner">

                <div style={{ display: 'flex', height: '41rem', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ background: 'none', width: '85%', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ background: 'none', display: 'flex', flexDirection: 'column' }}>
                            <a style={{ fontSize: '20px', color: '#FFFFFF', }}>Know more about</a>
                            <a style={{ fontSize: '35px', color: '#FFFFFF', fontWeight: 'bold' }}>Our Program</a>
                            <p class="CA-bannerContent-res">
                                If you are interested and want to know more about Creative Art &
                                Design.
                            </p>
                            <div>
                                <button type="button" class="General-Button">Programme</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container CA-Section-1">
                <div class="row" style={{ alignItems: 'center' }}>
                    <div class="col-sm-5">
                        <div class="CA-Section-1-left">
                            <img class="CA-Section-1-pic" src={require('../assets/images/Creative_Art/firstpic.png')} />
                        </div>
                    </div>
                    <div class="col-sm-7" style={{ display: 'flex', alignItems: 'center' }}>
                        <div class="CA-Section-1-right">
                            <p style={{ fontWeight: '900', color: '#A71337' }} class="CA-Section-1-Title">
                                What is Creative Art & Design
                            </p>
                            <p style={{ fontWeight: '600', }} class="CA-Section-1-Content">
                                Creative Arts and Design covers several courses including photography, videography, performing arts, film, visual
                                arts, fashion design, interior design, multimedia design, and more.
                            </p>
                            <p style={{ fontWeight: '900', color: '#A71337' }} class="CA-Section-1-Title">
                                What you will to learn from Creative Art & Design
                            </p>
                            <p style={{ fontWeight: '600', marginBottom: 0 }} class="CA-Section-1-Content">
                                Art and design majors learn basic design principles, color theory, critical thinking, and
                                artistic techniques.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container CA-Section-2">
                <div class="col-sm-4">
                    <p class="CA-section-2_STUDENT">S T U D E N T S</p>
                    <p class="CA-section-2_ARTWORKS">A R T W O R K S</p>
                    <img class="CA-Section-2-pic1" src={require('../assets/images/Creative_Art/section2_part2.png')} />
                </div>
                <div class="col-sm-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img class="CA-Section-2-pic2" src={require('../assets/images/Creative_Art/test.jpg')} />
                </div>
                <div class="col-sm-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <div id="line2" class="CA-horizontal"></div>
                    <p style={{ color: '#A71337' }}>Next</p>
                    <p style={{ color: '#ACACAC', fontWeight: '500', marginTop: '5rem' }}>KELVIN LIM</p>
                    <p style={{ fontSize: '25px', fontWeight: '800' }}>GOLD AWARD</p>
                    <p style={{ color: '#9E8D8D' }}>AWARDED ON 09/20/2020</p>
                    <p style={{ color: '#A71337', fontWeight: '500' }}>View more on our Virtual Gallery</p>
                </div>
            </div>
            <div class="container CA-Section-3">
                <div style={{ display: 'flex', flex: 2 }}>
                    <img class="CA-Section-3-pic1" style={{ display: 'flex', flex: 1 }} src={require('../assets/images/Creative_Art/color_example.png')} />
                </div>
                <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                    <img class="CA-Section-3-pic2" src={require('../assets/images/Creative_Art/bnwexample.png')} />
                </div>
            </div>
        </>
    )
}

export default CreativeArt;