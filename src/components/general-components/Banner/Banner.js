// CustomText.js    
import React, { useState, useEffect } from 'react'
import './Banner.css';
import { useNavigate } from "react-router-dom";

const Banner = (props) => {
    useEffect(() => {
    }, []);

    const navigate = useNavigate();

    return (
        
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
                    >
                        {"Programme"}
                    </button>
                </div>
            </div>
    );
}

export default Banner;
