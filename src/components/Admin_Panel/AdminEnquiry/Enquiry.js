import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar'
import './Enquiry.css'
import API from '../../../constant/API';
import ApiClient from '../../../util/ApiClient';
import 'bootstrap';
import { AiOutlineEdit, AiOutlineSearch, AiOutlineMail } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsJournalPlus } from "react-icons/bs";
import { FiArrowLeftCircle } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BiMessageRoundedCheck } from "react-icons/bi";
import { commonStore } from '../../../store/commonStore';
import { userStore } from '../../../store/userStore';
import ReactPaginate from "react-paginate";
// import listenToData from '../../../util/CommonFunc';
import Modal from '../Modal/Modal'
import emailjs from 'emailjs-com';
import { getDataEvent } from '../../../util/commonDB';
import { VscPreview } from "react-icons/vsc";
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';

const EnquiryList = () => {
  const userID = userStore.useState(s => s.userID);
  const EnquiryList = commonStore.useState(s => s.enquiryDetails)
  const [pageNum, setPageNum] = useState(0);
  const postPerPage = 10;
  const pagesVisited = pageNum * postPerPage;
  const pageCount = Math.ceil(EnquiryList.length / postPerPage);
  const [validate, setvalidate] = useState(false);

  const [targetEnquiry, setTargetEnquiry] = useState('');
  const [replyMessage, setReplyMessage] = useState('');
  const [edit, setEdit] = useState(false);

  const changePage = ({ selected }) => {
    setPageNum(selected)
  }

  useEffect(() => {
    if (userID !== '') {
      getDataEvent(userID);
      console.log('success mount data')
    }
    else {
      console.log('no userID')
    }
  }, [userID]);

  const tableheader = (item) => {
    return (
      <th className="col text-center d-flex justify-content-center align-items-center border-0">
        <p className='m-0 our_theme_title text-center  py-3'>{item}</p>
      </th>
    )
  }
  const checkvalidate = () => {
    if (replyMessage === '') {
      toast.error("In order to reply the applicant, please fill in the message field.", { theme: "colored" })
    }
    else setvalidate(true)
  }

  const updateEnquiry = () => {
    var body = {
      EnquiryID: targetEnquiry,
    };
    ApiClient.POST(API.updateEnquiry, body).then((result) => {

      var selectedEnquiryEmail = '';

      for (var x = 0; x < EnquiryList.length; x++) {
        if (EnquiryList[x].EnquiryID === targetEnquiry) {
          selectedEnquiryEmail = EnquiryList[x].ApplicantEmail
        }
      }

      var targetBlock = {
        send_to: selectedEnquiryEmail,
        message: replyMessage,
      }

      emailjs.send('service_t41roh7', 'template_b3e0izi', targetBlock, 'B7FQ2OkOz8Cyu4mvQ')
      toast.success("An enquiry response had been sent to the applicant's email address.", { theme: "colored" })
      setvalidate(false)
      if (userID !== '') {
        getDataEvent(userID);
        console.log('success mount data')
      }
      else {
        console.log('no userID')
      }
      console.log('successfully update enquiry')
    });
  }

  const Tablecontent = ({ enqID, id, name, content, appDate, appTime, status, index }) => {

    return (
      <div className="row m-0 b-0 py-3 align-items-center" style={{ backgroundColor: "transparent" }}>
        <div className="col text-center our_theme_title fw-normal one_line_css" id="cat-tablecontent">{id}</div>
        <div className="col text-center our_theme_title fw-normal one_line_css" id="cat-tablecontent">{name}</div>
        <div className="col text-center our_theme_title fw-normal one_line_css" id="cat-tablecontent">{content}</div>
        <div className="col text-center our_theme_title fw-normal one_line_css" id="cat-tablecontent">{appDate}{' '}{appTime}</div>
        <div className="col text-center our_theme_title fw-normal one_line_css" id="cat-tablecontent">{status === '0' ? 'PENDING' : 'COMPLETED'}</div>
        <div className="col text-center our_theme_title fw-normal one_line_css" id="cat-tablecontent">
          <VscPreview id="iconhover" size={25} className="me-4" data-toggle="modal" data-target="#staticBackdrop"
            onClick={() => {
              setTargetEnquiry(enqID)
              setEdit(false)
            }} />
          {status === '0' ?
            <AiOutlineMail id="iconhover" size={25} className="me-4" data-toggle="modal" data-target="#staticBackdrop"
              onClick={() => {
                setTargetEnquiry(enqID)
                setEdit(true)
              }}
            />
            :
            <BiMessageRoundedCheck size={25} className="me-4"
              onClick={() => {
                toast.info("This Enquiry had received a response.", { theme: "colored" })
              }}
            />
          }
        </div>
      </div>
    )
  }
  const Modaltextinput = (item) => {
    return (
      <div className={'mb-1'}>
        <p className='fw- mt-1 pb-1 purple fs-6 total-cat'>{item.title}</p>
        <textarea className='rounded border-0 w-100 our_theme_color mb-2' disabled style={{ outline: "unset", background: 'unset', resize: "none" }} type="text" value={item.data} />
      </div>
    )
  }
  const [searchText, setSearchText] = useState('')
  const CatItemComponent = () => {
    return (
      <div className='d-flex flex-row mt-3'>
        <table className="table m-0">
          <thead>
            <tr className='row m-0 border-0' style={{ backgroundColor: "#14213d" }}>
              {tableheader("Course")}
              {tableheader("Applicant Name")}
              {tableheader("Content")}
              {tableheader("Appointment")}
              {tableheader("Application Status")}
              {tableheader("")}
            </tr>
          </thead>
          <tbody className='border-0'>
            {EnquiryList ? EnquiryList.slice(pagesVisited, pagesVisited + postPerPage).filter((item) => {
              if (searchText === "") {
                return item
              }
              else if (item.ApplicantName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
                return item
              }
              else if (item.CourseID.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
                return item
              }
              else if (item.AppointmentDate.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
                return item
              }

            }).map((item, index) => (
              Tablecontent({ enqID: item.EnquiryID, id: item.CourseID, name: item.ApplicantName, content: item.ApplicantContent, appDate: item.AppointmentDate, appTime: item.AppointmentTime, status: item.ApplicationStatus, index })
            )) : null}
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationbtn"}
              previousLinkClassName={"previousbtn"}
              nextLinkClassName={"nextbtn"}
              disabledClassName={"paginationdisabled"}
              activeClassName={"paginationactive"}
              forcePage={pageNum}
            />
          </tbody>
        </table>
        < div className='Cat-column' style={{
          backgroundColor: '#5F5F5F'
        }}>
        </div>
      </div >
    );
  };


  return (
    <div className="d-flex" id="category-backgroundweh" style={{ backgroundColor: '#333' }}>
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
        <div className='container' id='cat-maxwidth'>
          <div className='d-flex justify-content-between align-items-center mt-5 mb-4' id="cat-title-o">
            <p className='col fw-bold fs-2 text-white p-0 m-0'>Enquiry List</p>
            <div className="input-group col d-flex flex-row justify-content-end align-items-center position-relative p-0">
              <AiOutlineSearch className='text-dark position-absolute top-50 translate-middle-y' id='category-searchicon' />
              <input autoComplete='off' type="text" onChange={(event) => { setSearchText(event.target.value); }} className="ps-3 pe-3 py-2 text-dark rounded" placeholder="Search Enquiries..." aria-label="Title" id="search-category-input-title" />
            </div>
          </div>
          <div className='pt-3 rounded mt-5' id='categoriesrslt-container'>
            <div className='d-flex align-items-center justify-content-between' id='cat-title-row'>
              <p className='fw-bold our_theme_title m-0 fs-5'>{"Total Enquires: " + EnquiryList.length}</p>
            </div>
            <CatItemComponent />
          </div>

          {/* <-- Modal --> */}
          <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content" id="category-create-post-modal">
                <div className="modal-header d-flex col align-items-center position-relative justify-content-center py-4" id="create-post-modal-header">
                  <h5 className="modal-title purple" id="create-post-modal-header-title">{"Enquiry Details"}</h5>
                  <RiCloseFill onClick={() => setvalidate(false)} className="btn-close position-absolute purple" data-dismiss="modal" size={35} id='close-icon' />
                </div>
                <div className="modal-body" id="category-modal">
                  <div>
                    {
                      EnquiryList.length > 0 ?
                        EnquiryList.map((item, index) => (
                          item.EnquiryID === targetEnquiry ?
                            <>
                              {Modaltextinput({ title: "Applicant Name", data: item.ApplicantName })}
                              {Modaltextinput({ title: "Content", data: item.ApplicantContent })}
                              {Modaltextinput({ title: "Appointment Date & Time", data: moment(item.AppointmentDate, 'YYYY-MM-DD').format("Do MMM YYYY") + "  " + item.AppointmentTime })}
                              {Modaltextinput({ title: "Enquiry Status", data: item.ApplicationStatus === '0' ? "Haven't Reply" : "Replied" })}
                            </> : <></>
                        )) : null
                    }
                    <div className="modal-footer p-0 m-0 justify-content-center align-items-center font-weight-light" id="user-footer">
                      {edit ?
                        <>
                          <p className='fw-normal w-100 mt-1 pb-1 mb-3 purple fs-6 total-cat'>{"Message"}</p>
                          <textarea autoComplete='off' value={replyMessage} onChange={e => { setReplyMessage(e.target.value) }} type="text" className="form-control rounded border-0" placeholder="e.g Please attend the consultation appointment" aria-label="Title" id="side-bar-search-title" aria-describedby="inputGroup-sizing-default" />
                        </> : <></>}
                      {edit ?
                        validate ?
                          <>
                            <svg id='success-icon' version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                              <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                              <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                            </svg>
                          </>
                          : <p className='m-0 our_theme_title pr-4' style={{ fontSize: "0.8rem" }}>*User must validate before doing any changes</p> : <></>
                      }

                      {
                        edit ?
                          validate ?
                            <>
                              <div className="modal-footer border-0 justify-content-center" id="category-footer">
                                <button type="button" className="px-3 py-2 rounded purple border-0" id="Modal-done-button" data-dismiss="modal" onClick={() => updateEnquiry()}>{"Reply"}</button>
                              </div>
                            </> :
                            <button type="button" id="button-boxshadow" className="px-3 our_theme_title fw-light py-2 rounded border-0" style={{
                              backgroundColor: "transparent",
                            }} onClick={() => { checkvalidate(); }}>{"Validate"}</button>
                          : <></>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <-- Modal --> */}
        </div>
      </div>
    </div>
  )
}

export default EnquiryList