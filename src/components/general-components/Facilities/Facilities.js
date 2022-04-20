// CustomText.js    
import React, { useState, useEffect } from 'react'
import './Facilities.css';
import { useNavigate } from "react-router-dom";
import SeeMoreModal from '../SeeMoreModal/SeeMoreModal';

const Facilities = (props) => {
    useEffect(() => {
    }, []);
    const facility = props.facilitiesdetails[0]

    const navigate = useNavigate();
    console.log(props, 'hii')
    return (
        <div className="facilieites-container facilitesbanner">
            <img className="facilitesimage" src={facility.detailsimage} />
            <div className="facilities">
                <div className="facilities-maxwidth">
                    <p className="all-text facilities-title">{"Want know more about our facilities"}</p>
                    <p className="all-text facilities-content">{facility.detailscontent}</p>
                    {
                        // props.facilitiesdetails.length < 2 ? <></> :
                        <div className='d-flex justify-content-end col p-0'>
                            <button data-toggle="modal" data-target={"#openimage_" + facility.Category} className='seemorebutton' >{"Facilities"}</button>
                        </div>
                    }
                    <SeeMoreModal datadetails={props.facilitiesdetails} id={"openimage_" + facility.Category} />

                    {/* <div className='facilities-button-container'>
                        <button onClick={() => window.open(props.navigationpath, "_blank")} className='all-button facilities-button' type="button" >{"Facilities"}</button>
                    </div>  */}
                </div>
            </div>
        </div>
    )
}

export default Facilities;
