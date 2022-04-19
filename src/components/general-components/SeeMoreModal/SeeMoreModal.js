// CustomText.js    
import React, { useState, useEffect } from 'react'
import './SeeMoreModal.css';
import { useNavigate } from "react-router-dom";

const SeeMoreModal = (props) => {
    useEffect(() => {
    }, []);

    const navigate = useNavigate();
    console.log(props.datadetails)
    return (
        <div className="modal fade" id={props.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div id="CarouselContainer" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {props.datadetails.map((index) => < li data-target="#CarouselContainer"
                                // className={index === 0 ? "active" : ""}
                                data-slide-to={index}></li>)}
                        </ol>
                        <div className="carousel-inner rounded">
                            {props.datadetails.map((item, index) =>
                                <div className={index === 0 ? "position-relative carousel-item active" : "position-relative carousel-item"} >
                                    <div className='position-absolute p-0 text-light d-flex align-items-end' id="carousel_black_layer">
                                        <div id="title_place">
                                            <h5 className='text-left'>{item.detailsname}</h5>
                                            <p className='text-left'>{item.detailsjob}</p>
                                        </div>
                                    </div>
                                    <img src={item.detailsimage}
                                        className="d-block w-100 carousel-image" alt="" />
                                </div>)}
                        </div>

                        <a id="carousel-control-prev" href="#CarouselContainer" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" id='iconhoveropacity' aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a id="carousel-control-next" href="#CarouselContainer" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" id='iconhoveropacity' aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default SeeMoreModal;
