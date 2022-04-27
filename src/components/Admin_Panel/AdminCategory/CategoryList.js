import React, { useState, useEffect } from 'react'
import Sidebar from '.././Sidebar'
import './CategoryList.css'
import API from '../../../constant/API';
import ApiClient from '../../../util/ApiClient';
import 'bootstrap';
import { AiOutlineEdit, AiOutlineSearch, } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsJournalPlus } from "react-icons/bs";
import { FiArrowLeftCircle } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsCheck2Circle } from "react-icons/bs";
import { commonStore } from '../../../store/commonStore';
import { userStore } from '../../../store/userStore';
// import listenToData from '../../../util/CommonFunc';
import ReactPaginate from "react-paginate";
import Modal from '../Modal/Modal'

const CategoryList = () => {
  const userID = userStore.useState(s => s.userID);
  const categoryList = commonStore.useState(s => s.categoryList);
  const courseDetails = commonStore.useState(s => s.courseDetails);
  const [targetCategoryID, setTargetCategoryID] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [closureDate, setClosureDate] = useState('');
  const [finalClosure, setFinalClosure] = useState('');
  const [editfunction, seteditfunction] = useState(false);
  const [pageNum, setPageNum] = useState(0);
  const postPerPage = 15;
  const pagesVisited = pageNum * postPerPage;
  const pageCount = Math.ceil(categoryList.length / postPerPage);
  const [CollegeID, setCollgeID] = useState("sckl")
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

  const Tablecontent = ({ catID, edit, catname, cdate, fclosure, index }) => {

    return (
      <div className="row m-0 b-0 py-3 align-items-center" style={{ backgroundColor: index % 2 === 0 ? "unset" : "rgb(95, 95, 95)" }}>
        <div className="col text-center text-white fw-normal" id="cat-tablecontent">{catname}</div>
        <div className="col text-center text-white fw-normal" id="cat-tablecontent">{cdate}</div>
        <div className="col text-center text-white fw-normal" id="cat-tablecontent">{fclosure}</div>
        <div className="col text-center text-white fw-normal" id="cat-tablecontent">{edit}</div>
        <div className="col text-center text-white d-flex align-items-center justify-content-center" id="cat-tablecontent">
          <AiOutlineEdit id="iconhover" size={25} className="me-4" data-toggle="modal" data-target="#staticBackdrop" onClick={() => handleeditfunction({ catID, catname, cdate, fclosure })} />
        </div>
      </div>
    )
  }
  const [currentid, setcurrentid] = useState("1");

  const Buttonactive = (item) => {

    const active_function = (id) => (
      item.function(),
      setcurrentid(id)
    )
    return (
      <button onClick={() => active_function(item.id)} id={(currentid === item.id) ? "admin-cat-button--active" : "admin-cat-button"} className="d-flex col text-white bg-dark mx-1 align-middle justify-content-center p-2">{item.title}</button>
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
              {tableheader("Closure Date")}
              {tableheader("Final Closure Date")}
              {tableheader("Last Edited")}
              {tableheader("")}
            </tr>
          </thead>
          <tbody className='border-0'>
            {categoryList ? categoryList.slice().filter((item) => {
              if (item.CollegeID.includes(CollegeID)) {
                return item
              }

            }).filter((item) => {
              if (searchText === "") {
                return item
              }
              else if (item.CategoryName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
                return item
              }
              else if (item.ClosureDate.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
                return item
              }
              else if (item.FinalClosure.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
                return item
              }

            }).slice(pagesVisited, pagesVisited + postPerPage).map((item, index) => (
              Tablecontent({ catID: item.CategoryID, edit: item.EditedAt, catname: item.CategoryName, cdate: item.ClosureDate, fclosure: item.FinalClosure, index })
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
      <div className='col rounded' id='pro-background-container'>
        <div className='container' id='cat-maxwidth'>
          <div className='d-flex justify-content-between align-items-center mt-5 mb-4' id="cat-title-o">

            <p className='col fw-bold fs-2 p-0 text-white m-0'>Course Settings</p>
            <div className="input-group col d-flex flex-row p-0 justify-content-end align-items-center position-relative">
              <AiOutlineSearch className='text-white position-absolute top-50 translate-middle-y' id='category-searchicon' />
              <input autoComplete='off' type="text" onChange={(event) => { setSearchText(event.target.value); }} className="ps-3 pe-3 py-2 text-white rounded" placeholder="Search Courses..." aria-label="Title" id="search-category-input-title" />
            </div>
          </div>
          <div id="course-collegelist" className="row">
            {Buttonactive({ id: "1", title: "Kuala Lumpur", function: () => { setCollgeID("sckl") } })}
            {Buttonactive({ id: "2", title: "Penang", function: () => { setCollgeID("scpg") } })}
            {Buttonactive({ id: "3", title: "Subang Jaya", function: () => { setCollgeID("scsj") } })}
            {Buttonactive({ id: "4", title: "Sarawak", function: () => { setCollgeID("scsk") } })}
          </div>
          <div className='pt-3 rounded mt-5' id='categoriesrslt-container'>
            <div className='d-flex align-items-center justify-content-between' id='cat-title-row'>
              <p className=' fw-bold text-white m-0 fs-5'>{"Total Courses: " + categoryList.length}</p>
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
                    <p className='fw- pb-2 text-white fs-6 total-cat'>{"Course Name"}</p>
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

export default CategoryList