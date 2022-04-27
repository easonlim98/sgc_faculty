import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar'
import './Enquiry.css'
import API from '../../../constant/API';
import ApiClient from '../../../util/ApiClient';
import 'bootstrap';
import { AiOutlineEdit, AiOutlineSearch,AiOutlineMail } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsJournalPlus } from "react-icons/bs";
import { FiArrowLeftCircle } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsCheck2Circle } from "react-icons/bs";
import { commonStore } from '../../../store/commonStore';
import { userStore } from '../../../store/userStore';
import ReactPaginate from "react-paginate";
// import listenToData from '../../../util/CommonFunc';
import Modal from '../Modal/Modal'

const EnquiryList = () => {
  const userID = userStore.useState(s => s.userID);
  const categoryList = commonStore.useState(s => s.categoryList);
  const EnquiryList=commonStore.useState(s=>s.EnquiryList)
  const [targetCategoryID, setTargetCategoryID] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [closureDate, setClosureDate] = useState('');
  const [finalClosure, setFinalClosure] = useState('');
  const [editfunction, seteditfunction] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const postPerPage = 10;
  const pagesVisited = pageNum * postPerPage;
  const pageCount = Math.ceil(EnquiryList.length / postPerPage);

  const changePage = ({ selected }) => {
    setPageNum(selected)
  }

  useEffect(() => {
    if (userID !== '') {
      // listenToData(userID);
      console.log('success mount data')
    }
    else {
      console.log('no userID')
    }
  }, [userID]);

  const tableheader = (item) => {
    return (
      <th className="col text-center d-flex justify-content-center align-items-center border-0">
        <p className='m-0 text-white text-center  py-3'>{item}</p>
      </th>
    )
  }

  const handleeditfunction = (item) => {
    setTargetCategoryID(item.catID)
    setCategoryName(item.catname)
    setClosureDate(item.cdate)
    setFinalClosure(item.fclosure)
    seteditfunction(true)
  };

  const updateCategory = () => {
    var body = {
      CategoryID: targetCategoryID,
      CategoryName: categoryName,
      ClosureDate: closureDate,
      FinalClosure: finalClosure,
    };
    ApiClient.POST(API.updateCategory, body).then((result) => {
      if (userID !== '') {
        // listenToData(userID);
        console.log('success mount data')
      }
      else {
        console.log('no userID')
      }
      console.log('successfully update category')
    });
  }

  const Tablecontent = ({ id, name, email, appdate, apptime, status,index }) => {

    return (
      <div className="row m-0 b-0 py-3 align-items-center" style={{ backgroundColor: index % 2 === 0 ? "unset" : "rgb(95, 95, 95)" }}>
        <div className="col text-center text-white fw-normal overflow-hidden" id="cat-tablecontent">{id}</div>
        <div className="col text-center text-white fw-normal overflow-hidden" id="cat-tablecontent">{name}</div>
        <div className="col text-center text-white fw-normal overflow-hidden" id="cat-tablecontent">{email}</div>
        <div className="col text-center text-white fw-normal overflow-hidden" id="cat-tablecontent">{appdate}</div>
        <div className="col text-center text-white fw-normal overflow-hidden" id="cat-tablecontent">{apptime}</div>
        <div className="col text-center text-white fw-normal overflow-hidden" id="cat-tablecontent">{status}</div>
        <div className="col text-center text-white d-flex align-items-center justify-content-center" id="cat-tablecontent">
          <AiOutlineMail id="iconhover" size={25} className="me-4" data-toggle="modal" data-target="#staticBackdrop" />
        </div>
      </div>
    )
  }

  const [searchText, setSearchText] = useState('')
  const CatItemComponent = () => {
    return (
      <div className='d-flex flex-row mt-3'>
        <table className="table m-0">
          <thead>
            <tr className='row m-0 border-0' style={{ backgroundColor: "#5F5F5F" }}>
              {tableheader("Course Name")}
              {tableheader("Applicant Name")}
              {tableheader("Applicant Email")}
              {tableheader("Appoinment Date")}
              {tableheader("Appoinment Time")}
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
              else if (item.ApplicantEmail.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
                return item
              }
              else if (item.AppointmentDate.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
                return item
              }
              else if (item.AppointmentTime.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
                return item
              }
              else if (item.ApplicationStatus.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
                return item
              }

            }).map((item, index) => (
              Tablecontent({ id: item.CourseID, name: item.ApplicantName, email: item.ApplicantEmail, appdate: item.AppointmentDate, apptime: item.AppointmentTime, status:item.ApplicationStatus,index })
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
      <div className='col rounded' id='cat-background-container'>
        <div className='container' id='cat-maxwidth'>
          <div className='d-flex justify-content-between align-items-center mt-5 mb-4' id="cat-title-o">
            <p className='col fw-bold fs-2 text-white m-0'>Enquiry List</p>
            <div className="input-group col d-flex flex-row justify-content-end align-items-center position-relative">
              <AiOutlineSearch className='text-white position-absolute top-50 translate-middle-y' id='category-searchicon' />
              <input autoComplete='off' type="text" onChange={(event) => { setSearchText(event.target.value); }} className="ps-3 pe-3 py-2 text-white rounded" placeholder="Search Courses..." aria-label="Title" id="search-category-input-title" />
            </div>
          </div>
          <div className='pt-3 rounded mt-5' id='categoriesrslt-container'>
            <div className='d-flex align-items-center justify-content-between' id='cat-title-row'>
              <p className=' fw-bold text-white m-0 fs-5'>{"Total Enquires: " + EnquiryList.length}</p>
            </div>
            <CatItemComponent />
          </div>

          {/* <-- Modal --> */}
          <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content" id="category-create-post-modal">
                <div className="modal-header d-flex col align-items-center position-relative justify-content-center py-4" id="create-post-modal-header">
                  <h5 className="modal-title text-center text-white" id="create-post-modal-header-title">{"Edit Course"}</h5>
                  <RiCloseFill className="btn-close position-absolute text-light" data-dismiss="modal" size={35} id='close-icon' />
                </div>
                <div className="modal-body" id="category-modal">
                  <div>
                    <p className='fw- pb-2 text-white fs-6 total-cat'>{"Email Content"}</p>
                    <input autoComplete='off' value={categoryName} onChange={e => { setCategoryName(e.target.value) }} type="text" className="form-control rounded border-0" placeholder="e.g Facilities" aria-label="Title" id="side-bar-search-title" aria-describedby="inputGroup-sizing-default" />
                  </div>
                  <div className='mb-3'>
                    <p className='fw- mt-3 pb-2 text-white fs-6 total-cat'>{"Closure Date"}</p>
                    <input className='rounded py-2 px-3 border-0' style={{ outline: "unset" }} type="date" value={closureDate} onChange={(date) => { setClosureDate(date.target.value) }} />
                  </div>
                  <div className='mb-3'>
                    <p className='fw- mt-3 pb-2 text-white fs-6 total-cat'>{"Final Closure Date"}</p>
                    <input className='rounded py-2 px-3 border-0' style={{ outline: "unset" }} type="date" value={finalClosure} onChange={(date) => { setFinalClosure(date.target.value) }} />
                  </div>
                  <div className="modal-footer border-0 justify-content-center" id="category-footer">
                    <button type="button" className="px-3 py-2 rounded btn-primary" id="Modal-done-button" data-dismiss="modal" onClick={() => updateCategory()}>{editfunction ? "Save Changes" : "Add Category"}</button>
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