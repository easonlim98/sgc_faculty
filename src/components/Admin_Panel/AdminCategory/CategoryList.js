import React, { useState, useEffect,useMemo } from 'react'
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
import { VscPreview } from "react-icons/vsc";

const CategoryList = () => {
  const userID = userStore.useState(s => s.userID);
  const categoryList = commonStore.useState(s => s.categoryList);
  const courseDetails = commonStore.useState(s => s.courseDetails);
  const [targetCategoryID, setTargetCategoryID] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [closureDate, setClosureDate] = useState('');
  const [finalClosure, setFinalClosure] = useState('');
  const [editfunction, seteditfunction] = useState(false);
  const [targetcode, settargetcode] = useState('');
  const [targetcourse, settargetcourse] = useState('');
  const [targetlvl, settargetlvl] = useState('');
  const arraylvl = [
    { lvlname: 'Certificate' }, { lvlname: 'Foundation' }, { lvlname: 'Diploma' }, { lvlname: 'Bachelor Degree' }, { lvlname: 'Executive Diploma' }, { lvlname: 'Postgraduate' },
  ];
  const [CollegeID, setCollgeID] = useState("sckl")
  const filteredcourse = useMemo(() => {
    return courseDetails.filter((course) => {
      if (course.CollegeID.includes(CollegeID)) {
        return true
      }
    })});
  const [pageNum, setPageNum] = useState(0);
  const postPerPage = 8;
  const pagesVisited = pageNum * postPerPage;
  const pageCount = Math.ceil(filteredcourse.length / postPerPage);
 
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
        <p className='m-0 our_theme_title text-center  py-3'>{item}</p>
      </th>
    )
  }

  const updateCategory = () => {
    //must put after return success
    seteditfunction(false)
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
  const setidfunction = (item) => {
    settargetcode(item.corcode)
    settargetcourse(item.corname)
    settargetlvl(item.corlvl)
    {
      item.id === 1 ?
        seteditfunction(true)
        : seteditfunction(false)
    }
  }

  const Tablecontent = ({ corcode, corname, corlvl, index }) => {

    return (
      <div className="row m-0 b-0 py-2 align-items-center" style={{ backgroundColor: "transparent" }}>
        <div className="col text-center our_theme_title fw-normal one_line_css" id="cat-tablecontent">{corcode}</div>
        <div className="col text-center our_theme_title fw-normal one_line_css" id="cat-tablecontent">{corname}</div>
        <div className="col text-center our_theme_title fw-normal one_line_css" id="cat-tablecontent">{corlvl}</div>
        <div className="col text-center our_theme_title d-flex align-items-center justify-content-center" id="cat-tablecontent">
          <AiOutlineEdit id="iconhover" size={25} className="me-4" data-toggle="modal" data-target="#staticBackdrop" onClick={() => setidfunction({ id: 1, corcode: corcode, corname: corname, corlvl: corlvl })} />
          <VscPreview id="iconhover" size={25} className="me-4" data-toggle="modal" data-target="#staticBackdrop" onClick={() => setidfunction({ id: 2, corcode: corcode, corname: corname, corlvl: corlvl })} />
        </div>
      </div>
    )
  }
  const Modaltextinput = (item) => {
    return (
      <div className={editfunction ? 'mb-3' : ''}>
        <p className='fw- mt-3 pb-1 purple fs-6 total-cat'>{item.title}</p>
        {editfunction ? <textarea className='rounded py-2 px-3 border-0 w-100' style={{ outline: "unset" }} type="text" value={item.data} onChange={item.onchange} /> :
          <textarea className='rounded border-0 w-100 our_theme_color mb-2' disabled style={{ outline: "unset", background: 'unset', resize: "none" }} type="text" value={item.data} onChange={item.onchange} />}
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
      <button onClick={() => active_function(item.id)} id={(currentid === item.id) ? "admin-cat-button--active" : "admin-cat-button"} className="d-flex col text-white rounded bg-dark mx-1 align-middle justify-content-center p-2">{item.title}</button>
    )
  }

  const [searchText, setSearchText] = useState('')
  
   
  const CatItemComponent = () => {
    return (
      <div className='d-flex flex-row'>
        <table className="table m-0">
          <thead>
            <tr className='row m-0 border-0' style={{ backgroundColor: "#14213d" }}>
              {tableheader("Course Code")}
              {tableheader("Course Name")}
              {tableheader("Level of Study")}
              {tableheader("")}
            </tr>
          </thead>
          <tbody className='border-0'>
            {courseDetails ? courseDetails.slice().filter((item) => {
              if (item.CollegeID.includes(CollegeID)) {
                return item
              }

            }).filter((item) => {
              if (searchText === "") {
                return item
              }
              else if (item.CourseTitle.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
                return item
              }
              else if (item.CourseTitle.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
                return item
              }
              else if (item.CourseTitle.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
                return item
              }

            }).slice(pagesVisited, pagesVisited + postPerPage).map((item, index) => (
              Tablecontent({ facID: item.FacultyID, corcode: item.CourseCode, corID: item.CourseID, corname: item.CourseTitle, corlvl: item.CourseLevelOfStudy, index: index })
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
              <AiOutlineSearch className='text-dark position-absolute top-50 translate-middle-y' id='category-searchicon' />
              <input autoComplete='off' type="text" onChange={(event) => { setSearchText(event.target.value); }} className="ps-3 pe-3 py-2 text-dark rounded" placeholder="Search Courses..." aria-label="Title" id="search-category-input-title" />
            </div>
          </div>
          <div id="course-collegelist" className="row">
            {Buttonactive({ id: "1", title: "Kuala Lumpur", function: () => { setCollgeID("sckl") } })}
            {Buttonactive({ id: "2", title: "Penang", function: () => { setCollgeID("scpg") } })}
            {Buttonactive({ id: "3", title: "Subang Jaya", function: () => { setCollgeID("scsj") } })}
            {Buttonactive({ id: "4", title: "Sarawak", function: () => { setCollgeID("scsk") } })}
          </div>
          <div className='rounded mt-5 rounded' id='categoriesrslt-container'>
            <CatItemComponent />
          </div>

          {/* <-- Modal --> */}
          <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content" id="category-create-post-modal">
                <div className="modal-header d-flex col align-items-center position-relative justify-content-center py-4" id="create-post-modal-header">
                  <h5 className="modal-title text-center purple" id="create-post-modal-header-title">{editfunction ? "Edit Course Details" : "View Courses Details"}</h5>
                  <RiCloseFill className="btn-close position-absolute purple" onClick={() => seteditfunction(false)} data-dismiss="modal" size={35} id='close-icon' />
                </div>
                <div className="modal-body" id="category-modal">
                  {Modaltextinput({ title: "Course Name", data: targetcourse, onchange: e => { settargetcourse(e.target.value) } })}
                  {Modaltextinput({ title: "Course Code", data: targetcode, onchange: e => { settargetcode(e.target.value) } })}
                  <div className='dropright mb-3'>
                    <p className='fw- mt-3 pb-1 purple fs-6 total-cat' >{"Level Of Study"}</p>
                    {editfunction ? <>
                      <button class="btn dropdown-toggle text-light" style={{ backgroundColor: "#565EB7" }} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {targetlvl ? targetlvl : "Select your Level Of Study"}
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {arraylvl.map((item, index) => (
                          <a class="dropdown-item" onClick={() => settargetlvl(item.lvlname)} id={index}>{item.lvlname}</a>
                        ))}
                      </div>
                    </> :
                      <input className='rounded border-0 w-100 our_theme_color' disabled={true} style={{ outline: "unset", background: 'unset' }} type="text" value={targetlvl} />}

                  </div>
                  {
                    editfunction ? <div className="modal-footer border-0 justify-content-center" id="category-footer">
                      <button type="button" className="px-3 py-2 rounded purple border-0 " id="Modal-done-button" data-dismiss="modal" onClick={() => updateCategory()}>{"Edit Course"}</button>
                    </div> : <></>
                  }
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