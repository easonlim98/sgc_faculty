import React, { useState, useEffect, useRef } from 'react'
import Sidebar from '.././Sidebar'
import './Profile.css'
// import Modal from "./Component/Modal.js";
import 'bootstrap';
import { RiCloseFill } from "react-icons/ri";
import { userStore } from '../../../store/userStore';
import { commonStore } from '../../../store/commonStore';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from "../../general-components/LoadingSpinner";

// import 'firebase/storage'
// import firebase from 'firebase/app';
// import ReactDOM from 'react-dom';
// import API from '../constant/API';
// import ApiClient from '../util/ApiClient';

const Profile = () => {
    const userID = userStore.useState(s => s.userID);

    //Static UserList [0]
    const userListDetails = userStore.useState(s => s.userListDetails[0])
    const facultyDetails = commonStore.useState(s => s.facultyDetails)
    const [userContact, setuserContact] = useState('');
    const [userAddress, setuserAddress] = useState('');
    const [userImage, setuserImage] = useState(userListDetails.UserImage);
    const [facultyname, setfacultyname] = useState([]);
    const [editing, setediting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // const storage = firebase.storage();

    useEffect(() => {
        if (userID !== '') {
            // listenToData(userID);
            console.log('success mount data')
            for (var x = 0; x < facultyDetails.length; x++) {
                if (facultyDetails[x].UserID === userID) {
                    if (facultyname.length !== 0) {
                        for (var y = 0; y < facultyname.length; y++) {
                            if (facultyname[y].FacultyName !== facultyDetails[x].FacultyName) {
                                setfacultyname([...facultyname, facultyDetails[x]])
                            }
                        }
                    }
                    else setfacultyname([...facultyname, facultyDetails[x]])
                }
            }
        }
        else {
            console.log('no userID')
        }
    }, [userID]);
    const Ref = useRef(null);

    console.log(facultyname, 'name')

    // The state for our timer
    const [timer, setTimer] = useState('00:00:00');

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 * 60 * 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
    console.log(userListDetails)
    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {

            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the begining of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }


    const clearTimer = (e) => {
        setTimer('00:02:00');
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 120);
        return deadline;
    }

    const onClickReset = () => {
        clearTimer(getDeadTime());
        return (toast.info("An email with a password reset link is sent to your current email address.", { theme: "colored" }))

    }

    const Modaltextinput = (item) => {
        return (
            <div className='py-3 col'>
                <p className='fw-normal text-white fs-6 total-cat'>{item.name}</p>
                <input value={item.data} onChange={(e) => item.onchange(e)} autoComplete='off' type="text" className="form-control rounded" placeholder={item.placeholder} aria-label="Title" id="profile-text-input" aria-describedby="inputGroup-sizing-default" />
            </div>
        )
    }

    const datatext = (item) => {
        return (
            <div className='col-6 px-3'>
                <p className='fw-bold m-0 mb-2 our_theme_color'>{item.name}</p>
                <p className='fw-light m-0 our_theme_color' style={{ fontSize: '0.9rem' }}>{item.data}</p>
            </div>
        )
    }

    const editprofile = () => {
        setIsLoading(true);
        setediting(true)
        console.log(userContact, userAddress, userImage, editing)
        setediting(false)
        setIsLoading(false)
        // if (userImage !== userListDetails.UserImage) {
        //     const ref = storage.ref(`/images/${userImage !== null ? userImage.name : ''}`);
        //     const uploadTask = ref.put(userImage);
        //     uploadTask.on("state_changed", console.log, console.error, () => {
        //         ref
        //             .getDownloadURL()
        //             .then((url) => {
        //                 var body = {
        //                     UserID: userListDetails.UserID,
        //                     UserImage: url,
        //                     UserContact: userContact,
        //                     UserAddress: userAddress
        //                 }

        //                 ApiClient.POST(API.updateProfile, body).then((result) => {
        //                     console.log("Update Successful", body)
        //                     if (userID !== '') {
        //                         listenToData(userID);
        //                         console.log('success mount data')
        //                         setediting(false)
        //                         setIsLoading(false)
        //                         toast.info("Profile succesfully updated.", { theme: "colored" })
        //                     }
        //                     else {
        //                         console.log('no userID')
        //                         setediting(false)
        //                     }
        //                 })
        //             });
        //     });
        // }
        // else if (userImage === userListDetails.UserImage) {
        //     var body = {
        //         UserID: userListDetails.UserID,
        //         UserImage: userListDetails.UserImage,
        //         UserContact: userContact,
        //         UserAddress: userAddress
        //     }

        //     ApiClient.POST(API.updateProfile, body).then((result) => {
        //         console.log("Update Successful lel", body)
        //         setediting(false)
        //         setIsLoading(false)

        //         if (userID !== '') {
        //             listenToData(userID);
        //             console.log('success mount data')
        //         }
        //         else {
        //             console.log('no userID')
        //         }
        //     })
        // }


    }

    const resetPassword = () => {
        // firebase.auth().sendPasswordResetEmail(userListDetails.UserEmail)
        //     .then(function () {
        //         onClickReset();
        //         console.log('sent reset password email')
        //     }).catch(err => {
        //         console.log(err)
        //     });
    }

    const setdata = () => {

        setuserImage(userListDetails.UserImage)
        setuserContact(userListDetails.UserContact)
        setuserAddress(userListDetails.UserAddress)
        setediting(true)

    }

    const emptydatafunction = () => {
        /* setuserImage("")
        setuserContact("")
        setuserAddress("") */
        setediting(false)
    }

    return (
        <div className="d-flex" style={{ backgroundColor: '#333', minHeight: "100vh" }}>
            <Sidebar />
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
            />
            <div className='col rounded' id='pro-background-container'>

                {isLoading ? <div className='container position-relative d-flex col h-100'>
                    <LoadingSpinner /> </div> :

                    <div className='col rounded' id="width-bg">
                        <div className='container my-5'>
                            <div className='d-flex col justify-content-between align-items-center p-0 m-0 mb-4'>
                                <p id='profile-title' className='col text-start fw-bold fs-2 text-white m-0 p-0'>Profile Page</p>
                            </div>
                            <div className="container row" id="background-profile-card">
                                <div className=" py-5 col align-items-center justify-content-center m-0" id="background-profile">
                                    <div className='position-relative d-flex flex-column' id='ambg'>
                                        <p className='fw-normal m-0 our_theme_color' >{userListDetails.UserName + " -  " + userListDetails.UserPosition}</p>
                                        <img className='rounded-circle my-5 align-self-center' src={userListDetails.UserImage} id='profile-user-avatar' />
                                        <p id='profile-font' className='our_theme_color fw-light text-center m-0 px-3'>{"This is the admin panel's profile page, where you can change any details you want. All of the information is considered private. Only the Administrator has access to all data."}</p>
                                        <small><p className='our_theme_color fw-normal my-4 text-center m-0'>{"Joined Since - " + moment(userListDetails.CreatedAt).format('MM-DD-YYYY')}</p></small>
                                    </div>
                                </div>
                                <div className="d-flex flex-column col-7" id="background-profile-clr">
                                    <div className='col'>
                                        <div className='px-5 py-5' id='border-bottom-dark'>
                                            <div className='' style={{ margin: "auto", maxWidth: "90%" }}>
                                                <p id='font-try-center' className='our_theme_title fw-bold fs-5 m-0'>{"Staff Information"}</p>
                                                <div className='row pt-4'>
                                                    {datatext({ name: "Employee ID: ", data: userListDetails.EmployeeID })}
                                                    <div className='col-6 px-3'>
                                                        <p className='fw-bold m-0 mb-2 our_theme_color'>{"Faculty involved: "}</p>
                                                        <p className='fw-light m-0 our_theme_color' style={{ fontSize: '0.9rem' }}>{facultyname.map((item) => item.FacultyName)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='px-5' id='border-bottom-dark'>
                                            <div className='' style={{ margin: "auto", maxWidth: "90%" }}>
                                                <p id='font-try-center' className='fw-bold fs-5 m-0 our_theme_title'>{"Contact Information"}</p>
                                                <div className='row pt-4'>
                                                    {datatext({ name: "Email", data: userListDetails.UserEmail })}
                                                    {datatext({ name: "Contact Number", data: userListDetails.UserContact })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container-2 mb-5 d-flex justify-content-center">
                                        <button onClick={setdata} className="btn btn-two" data-toggle="modal" data-target="#createCategoryModal">
                                            <span id="spanalignment">Edit</span>
                                        </button>
                                    </div>
                                </div>

                                {/* <div className="col p-0 d-flex flex-column" id="background-profile">
                                    <div className='px-5 pt-4 pb-4' id='border-bottom-dark'>
                                        <div className='' style={{ margin: "auto", maxWidth: "90%" }}>
                                            <p id='font-try-center' className='text-light fw-normal m-0'>{"Contact Information"}</p>
                                            <div className='row pt-3'>
                                                {datatext({ name: "Email", data: userListDetails.UserEmail })}
                                                {datatext({ name: "Contact Number", data: userListDetails.UserContact })}
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            {/* <-- Modal Start --> */}
                            <div className="modal fade" id="createCategoryModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content" id="category-create-post-modal">
                                        <div className="modal-header d-flex col align-items-center position-relative justify-content-center py-4" id="create-post-modal-header">
                                            <h5 className="modal-title text-center text-white" id="create-post-modal-header-title">{"Edit Profile"}</h5>
                                            <RiCloseFill className="btn-close position-absolute text-light" onClick={emptydatafunction} data-dismiss="modal" size={35} id='close-icon' />
                                        </div>
                                        <div className="modal-body pt-4" id="profile-modal">
                                            {/* All State: userName, userEmail, userPassword, employeeID, userDepartment, userPosition */}
                                            <div className="d-flex flex-column align-items-center mt-3">
                                                {editing ?
                                                    <img className='rounded-circle mb-4' src={userImage === userListDetails.UserImage ? userImage : URL.createObjectURL(userImage)} id='profilemodal-user-avatar' /> :
                                                    <img className='rounded-circle mb-4' src={userImage} id='profilemodal-user-avatar' />
                                                }
                                                <button className="svg-wrapper m-0 border-0 mt-3 p-0 position-relative w-100" id="Upload-Profile-Button">
                                                    <svg height="55" width="300">
                                                        <rect id="shape2" height="55" width="300" />
                                                    </svg>
                                                    <input type="file" id="image0file" style={{ display: 'none' }}
                                                        accept="image/*"
                                                        onChange={e => { setuserImage(e.target.files[0]); }}
                                                    />
                                                    <label htmlFor="image0file" style={{ width: "unset" }}>
                                                        <p className=" m-0 position-absolute top-50 start-50 translate-middle ps-spot">Upload Profile Photo</p>
                                                    </label>
                                                </button>
                                            </div>
                                            <div className='mt-4'>
                                                {Modaltextinput({ name: "Contact Number", data: userContact, onchange: e => { setuserContact(e.target.value) }, placeholder: "e.g 0123456789" })}
                                                {Modaltextinput({ name: "Address", data: userAddress, onchange: e => { setuserAddress(e.target.value) }, placeholder: "e.g *******" })}
                                            </div>
                                        </div>
                                        <div className="modal-footer p-0 pt-4 pb-5 justify-content-center" id="user-footer">
                                            <button type="button" id="button-boxshadow" className="px-3 text-light fw-light py-2 rounded" style={{
                                                border: "2.5px solid #2E3139",
                                                backgroundColor: "transparent",
                                                boxShadow: "0 10px 10px 0 rgb(0 0 0 / 11%), 0 1px 30px 0 rgb(0 0 0 / 14%)"
                                            }} data-dismiss="modal" onClick={() => { editprofile(); }}>{"Save Changes"}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='testingprofilecontainer' className='mt-5 d-flex justify-content-start rounded col-5' >
                                <div className='rounded px-5 py-4' id='background-password-background'>
                                    <p id='reset-profile-title' className='our_theme_title fw-normal m-0 fw-bold fs-3'>{"Reset Password"}</p>
                                    <p id='reset-profile-content' className='our_theme_color text-align-justify fw-normal m-0 py-3'>{"If you want to reset your password, simply enter your email address, and the reset password link will be emailed to you instantly."}</p>
                                    <div className='d-flex justify-content-end align-items-center pt-4'>
                                        {(timer === '00:00:00' || timer === '00:00:01') ? null : <small><p className='text-muted m-0 me-3'>{timer}</p></small>}
                                        <button className='bg-transparent border-0' style={{ color: (timer === '00:00:00' || timer === '00:00:01') ? "#62C6CC" : "grey" }} disabled={timer === '00:00:00' ? false : true} onClick={() => { resetPassword() }}>Send Email</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div >
                }
            </div>
        </div >
    )
}

export default Profile