import React, { useState, useEffect } from 'react'
import './css/Institution.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css'
import Banner from './general-components/Banner/Banner.js'
import Facilities from './general-components/Facilities/Facilities.js'
import TabsComponent from './general-components/Tabs/TabsComponent'
import { useNavigate } from 'react-router-dom';
import { getDataEvent } from '../util/commonDB';

const Institution = () => {

    const navigate = useNavigate();

    useEffect(() => {
        getDataEvent();
        console.log(window.location.href);
    });

    return (
        <>
            <div className='w-100 px-5 py-5' id="institution-banner-image" style={{
                backgroundImage: "url(" + "https://www.segi.edu.my/wp-content/uploads/2021/02/Banner1920x1080.jpg" + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "relative",
                overflow: "hidden",
            }}>

                <div className='py-3 px-5 mt-5' id="institution-banner">
                    <h1 className='m-0 mt-5 text-light font-weight-bold' id="institution-banner-content">Our Institutions</h1>
                </div>
            </div>
            <div className="container" id="institution-container">
                <div className="row py-5 ml-auto mr-auto justify-content-center" id="institution-row-container">
                    <div className="col-sm-5 row justify-content-end pr-5" id="institution-img-container">
                        <button style={{ border: 'none', background: 'none' }} onClick={() => { navigate('/SKLandingScreen'); }}>
                            <img src="https://www.segi.edu.my/wp-content/uploads/2021/06/sarawak.jpg" id="institution-img" />
                        </button>
                    </div>
                    <div className="col-sm-5 row justify-content-start pl-5" id="institution-img-container">
                        <button style={{ border: 'none', background: 'none' }} onClick={() => { navigate('/SJLandingScreen'); }}>
                            <img src="https://www.segi.edu.my/wp-content/uploads/2021/06/subang-jaya.jpg" id="institution-img" />
                        </button>
                    </div>
                </div>
                <div className="row pb-5 ml-auto mr-auto justify-content-center" id="institution-row-container">
                    <div className="col-sm-5 row justify-content-end pr-5" id="institution-img-container">
                        <button style={{ border: 'none', background: 'none' }} onClick={() => { navigate('/KLLandingScreen'); }}>
                            <img src="https://www.segi.edu.my/wp-content/uploads/2021/06/Kuala-Lumpur.jpg" id="institution-img" />
                        </button>
                    </div>
                    <div className="col-sm-5 row justify-content-start pl-5" id="institution-img-container">
                        <button style={{ border: 'none', background: 'none' }} onClick={() => { navigate('/PGLandingScreen'); }}>
                            <img src="https://www.segi.edu.my/wp-content/uploads/2021/06/penang.jpg" id="institution-img" />
                        </button>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </>
    )
}

export default Institution;