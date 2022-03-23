// CustomText.js    
import React, { useState, useEffect } from 'react'
import './Facilities.css';
import { useNavigate } from "react-router-dom";

const Facilities = (props) => {
    useEffect(() => {
    }, []);

    const navigate = useNavigate();

    return (
        <div className="container facilitesbanner">
            <img className="facilitesimage" src={props.facilitiesimage} />
            <div className="facilities">
                <div className="facilities-maxwidth">
                    <p className="all-text facilities-title">{"Want know more about our facilities"}</p>
                    <p className="all-text facilities-content">{props.content}</p>
                    <div className='facilities-button-container'>
                        <button className='all-button facilities-button' type="button" >{"Facilities"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facilities;
