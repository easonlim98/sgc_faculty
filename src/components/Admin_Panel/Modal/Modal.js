// CustomText.js    
import React, { useEffect } from 'react'
import './Modal.css';
import { RiCloseFill } from "react-icons/ri";

const Modal = (props) => {
    useEffect(() => {
    }, []);
    //console.log("modal")
    return (
        <div className="modal fade" id={props.id} data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className=" modal-dialog modal-dialog-centered">
                <div className="modal-content pb-1 rounded" id="modal-edit-delete">
                    <div className="modal-header border-0 d-flex col align-items-center position-relative justify-content-center py-4">
                        <h5 className="modal-title text-center text-white" id="staticBackdropLabel">{props.name}</h5>
                        <RiCloseFill className="btn-close position-absolute text-light" data-dismiss="modal" size={35} id='close-icon' />
                    </div>
                    <div className="modal-body justify-content-center">
                        <p className="text-light text-center">{"Are you sure you want to " + props.name.toLowerCase() + " this item. "}</p>
                        <p className="text-light text-center" style={{ fontSize: 12 }}>{props.warning}</p>
                    </div>
                    <div className="modal-footer border-0 justify-content-center">
                        <button type="button" id='modal-general-button' className="px-4 py-1 border-0 rounded text-light" data-dismiss="modal">No</button>
                        <button type="button" id='modal-general-button' className="px-4 py-1 border-0 rounded text-light" data-dismiss="modal" onClick={() => props.function(props.currentid)}>Yes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
