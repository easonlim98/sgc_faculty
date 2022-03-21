// CustomText.js    
import React, { useState, useEffect } from 'react'
import './Banner.css';
import { useNavigate } from "react-router-dom";

const Gc = (props) => {
    useEffect(() => {
        console.log("hi", props);
    }, []);
    const navigate = useNavigate();

    return (
        <div className='CA banner-container'
            style={{
                backgroundImage: "url(" + props.backgroundsrc + ")"
            }}>
            <div className='CA programme-container'>
                    <p className='all-text banner-title1'>{"KNOW MORE ABOUT"}</p>
                    <p className='all-text banner-title2'>{"Our Programme"}</p>

                <p className='all-text banner-content1'>
                    {props.bannercontent}
                </p>
                <div className='button-container'>
                    <button className='all-button banner-button'
                        onClick={() => {
                            navigate(props.navigatepath);
                        }}
                        style={props.style ? props.style : {}}>
                        {"Programme"}
                    </button>
                </div>
            </div>
        </div >
    );
}

export default Gc;