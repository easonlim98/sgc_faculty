import React, { useState, useEffect, useRef, } from 'react'
import Sidebar from '../Sidebar'
import ApiClient from '../../../util/ApiClient';
import API from '../../../constant/API';
import { userStore } from '../../../store/userStore';
import { commonStore } from '../../../store/commonStore';
import './HomeScreen.css'
import { RiFilterLine, RiCloseFill } from "react-icons/ri";
import { BiAddToQueue } from "react-icons/bi";
import { AiOutlineFileProtect } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Post from './Post';
import LoadingSpinner from "../../general-components/LoadingSpinner";
import { getDataEvent } from '../../../util/commonDB';
import 'firebase/storage'
import firebase from 'firebase/app';

const HomeScreen = () => {

  const storage = firebase.storage();

  const selectedUser = userStore.useState(s => s.selectedUser)
  const userList = commonStore.useState(s => s.userList)
  const allPost = commonStore.useState(s => s.allPost)
  const userID = userStore.useState(s => s.userID)
  const allFaculty = commonStore.useState(s => s.allFaculty)
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFal, setSelectedFal] = useState('');
  const [checkTac, setCheckTac] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postFileName, setPostFileName] = useState('');
  const [selectedImage, setSelectedImage] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [validate, setvalidate] = useState(false);
  const [categorytext, setcategorytext] = useState("")
  const [catid, setcatid] = useState("")
  const [Aplliedfilter, setAplliedfilter] = useState(false)
  useEffect(() => {
    if (userID !== '') {
      getDataEvent(userID);
      console.log('success mount data')
    }
    else {
      console.log('no userID')
    }
  }, [userID]);

  const onFileChange = (e) => {
    let files = e.target.files;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);
    setPostFileName(e.target.files[0]);
    fileReader.onload = (event) => {
      setSelectedImage(event.target.result)
    }
  }

  const createPost = () => {
    setIsLoading(false);
    if (selectedFal !== '' && postTitle !== '' && postContent !== '') {
      if (checkTac !== false) {

        var UserList = [];

        for (var i = 0; i < userList.length; i++) {
          const record = userList[i].UserID
          UserList.push(record);
        }
        if (selectedImage !== '') {
          const ref = storage.ref(`/announcementDoc/${postImage !== null ? postImage.name : ''}`);
          const uploadTask = ref.put(postImage);
          uploadTask.on("state_changed", console.log, console.error, () => {
            ref
              .getDownloadURL()
              .then((url) => {

                var body = {
                  UserID: userID,
                  FacultyID: selectedFal,
                  PostTitle: postTitle,
                  PostContent: postContent,
                  PostDoc: url,
                  UserList: UserList
                };
                setIsLoading(false);
                ApiClient.POST(API.createPost, body).then((result) => {
                  clearfunction()
                  toast.success("A public announcement had been created.", { theme: "colored" })

                  if (userID !== '') {
                    getDataEvent(userID);
                    console.log('success mount data')
                  }
                  else {
                    console.log('no userID')
                  }
                });
              })
          });
        }
        else {
          var body = {
            UserID: userID,
            FacultyID: selectedFal,
            PostTitle: postTitle,
            PostContent: postContent,
            PostDoc: '',
            UserList: UserList
          };

          ApiClient.POST(API.createPost, body).then((result) => {
            clearfunction()
            setIsLoading(false);

            if (userID !== '') {
              getDataEvent(userID);
              console.log('success mount data')
            }
            else {
              console.log('no userID')
            }
          });
        }
      }
      else {
        alert('You must agree with the terms & conditions')
        setIsLoading(false);

      }
    }
    else {
      alert('Please fill in all the field')
      setIsLoading(false);

    }
  };

  const ref = React.useRef();
  const clearfunction = () => {
    ref.current.value = ""
    setPostTitle("")
    setPostContent("")
    setCheckTac(false)
    setPostFileName("")
    setSelectedImage("")
    setSelectedFal('')
    setvalidate(false)
  }

  const [currenttab, setcurrenttab] = useState("Latest Announcement");

  const [pageNum, setPageNum] = useState(0);
  const postPerPage = 5;
  const pagesVisited = pageNum * postPerPage;
  const [pagetype, setPageType] = useState(1)
  function handlechangepage() {
    setPageNum(0)
    setPageType(1)
    setcurrenttab("Latest Announcement")
  }
  function handlechangepage4() {
    setPageNum(0)
    setPageType(2)
    setcurrenttab("Most Upvoted Announcement")
  }
  const checkvalidate = () => {
    if (selectedFal !== '' && postTitle !== '' && postContent !== '' && checkTac !== false) {
      setvalidate(true)
    }
    else {
      toast.error("Please fill in all the details in order to create an announcement", { theme: "colored" })
      setIsLoading(false)
    }
  }
  const clear_filter = () => {
    setcategorytext('')
    setAplliedfilter(false)
  }
  const displayPost = allPost.slice().sort(function (a, b) {
    if (pagetype === 1) {
      return new Date(b.CreatedAt).getTime() - new Date(a.CreatedAt).getTime()
    }
    if (pagetype === 2) {
      return b.PostVote - a.PostVote
    }

  }).filter((item) => {
    if (Aplliedfilter === true && item.FacultyID === catid) {
      return item
    } else if (Aplliedfilter === false) {
      return item
    }
  }).slice(pagesVisited, pagesVisited + postPerPage).map((item) => (
    <Post data={item} userdetails={userList} />
  ));
  const pageCount = Math.ceil(allPost.length / postPerPage);
  const changePage = ({ selected }) => {
    setPageNum(selected)
  }
  var today = new Date()
  const todaydate = today.getFullYear() + '-' + ("0" + (today.getMonth() + 1)).slice(-2) + '-' + today.getDate();
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
      <div className="col rounded py-5" id='pro-background-container'>
        <div className="col d-flex flex-column mb-3">
          <h2 id="homescreen-welcomeuser" className="text-light ">Welcome {selectedUser.UserName}</h2>
          <h5 id="homescreen-welcomeuser" className="our_theme_title mt-3">Announcement Page</h5>

        </div>
        {isLoading ? <div className='container position-relative d-flex col h-100 pt-5'>
          <LoadingSpinner /> </div> :

          <div className="container" id="post-middle-container">
            <div className="row px-2 py-3 rounded" id="home-add-new">
              <div className="col align-items-center">
                <p className="our_theme_title mb-0">Add new post</p>
              </div>
              <div className="col align-items-center d-flex justify-content-end">
                <BiAddToQueue onClick={() => ''} className="our_theme_title" size={20} data-toggle="modal" data-target="#createCategoryModal" />
              </div>
            </div>
            <nav>
              <div className="nav nav-tabs position-relative" id="nav-tab" role="tablist">
                <div className='d-flex col flex-row align-items-center p-0'>
                  <div className='col d-flex p-0'>
                    <button className={currenttab === "Latest Announcement" ? "nav-link active rounded" : "nav-link rounded"} onClick={() => handlechangepage()} id="nav-recent-tab" data-toggle="tab" data-target="#nav-recent" type="button" role="tab" aria-controls="nav-recent" aria-selected="true">Latest Announcement</button>
                    <button className={currenttab === "Most Upvoted Announcement" ? "nav-link active rounded" : "nav-link rounded"} onClick={() => handlechangepage4()} id="nav-popular-tab" data-toggle="tab" data-target="#nav-popular" type="button" role="tab" aria-controls="nav-popular" aria-selected="false">Most Upvoted Announcement</button>
                  </div>
                  <div className='' id='home-filter'>
                    {categorytext ? <FaWindowClose className='me-3' color='white' onClick={clear_filter} /> : null}
                    <RiFilterLine id='iconhover' className='text-light' data-toggle="modal" data-target="#staticBackdrop" />
                  </div>
                </div>
                {/* <!--Start Filter Modal--> */}
                <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '35%' }}>
                    <div className="modal-content" id="category-create-post-modal">
                      <div className="modal-header d-flex col align-items-center position-relative justify-content-center py-4" id="create-post-modal-header">
                        <h5 className="modal-title text-center text-white" id="create-post-modal-header-title">{"Courses"}</h5>
                        <RiCloseFill id="close-icon" className="btn-close position-absolute text-light" onClick={() => setcategorytext("")} data-dismiss="modal" size={35} />
                      </div>
                      <div className="modal-body row align-items-center" id="category-modal">
                        <div className='col text-light m-0'>
                          <p className='text-light m-0'>Select the courses you want to filter</p>
                          <small> <p className='text-light fw-light m-0 mt-2'> {categorytext ? "You have selected <" + categorytext.toUpperCase() + ">" : ""} </p></small>
                        </div>

                        <div className="col dropdown d-flex justify-content-end">
                          <button className="px-2 py-2 border-0 rounded btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
                            {categorytext ? categorytext : "Courses"}
                          </button>
                          <ul className="dropdown-menu bg-dark rounded" aria-labelledby="dropdownMenuButton1">
                            {
                              allFaculty.map((faculty) =>
                                <p className="" style={{ color: "white", paddingLeft: '1.5rem', margin: 0, paddingTop: "0.5rem", paddingBottom: "0.5rem" }} onClick={() => setcatid(faculty.FacultyID) & setcategorytext(faculty.FacultyName)}>{faculty.FacultyName}</p>
                              )
                            }
                          </ul>
                        </div>
                      </div>
                      <div className="modal-footer border-0 justify-content-end">
                        <button type="button" className='px-4 py-1 border-0 rounded text-light' id="modal-general-button" onClick={() => setcategorytext("")}>Clear</button>
                        <button type="button" className='px-4 py-1 border-0 rounded text-light' id="modal-general-button" data-dismiss="modal" onClick={() => setAplliedfilter(true)}>Apply</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Filter Modal --> */}
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-recent" role="tabpanel" aria-labelledby="nav-recent-tab">
                {/* <!-- Recent Post Start --> */}
                <div>
                  {displayPost}
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
                </div>
              </div>
              {/* <!-- Recent Post end --> */}
              <div className="tab-pane fade" id="nav-hot" role="tabpanel" aria-labelledby="nav-hot-tab">
                <div>
                  {displayPost}
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

                </div>
              </div>

              <div className="tab-pane fade" id="nav-comments" role="tabpanel" aria-labelledby="nav-comments-tab">
                {displayPost}
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
              </div>
              <div className="tab-pane fade" id="nav-popular" role="tabpanel" aria-labelledby="nav-popular-tab">
                {displayPost}
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
              </div>
            </div>
          </div>
        }
        {/*Modal Start */}
        <div className="modal fade" id="createCategoryModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"  >
          <div className="modal-dialog modal-dialog-centered" id="modal-maxwidth-container" >
            <div className="modal-content" id="home-modal-container">
              <div className="modal-header position-relative border-bottom-0">
                <h5 className="modal-title purple col text-center py-2">Create Announcement</h5>
                <RiCloseFill className="btn-close position-absolute purple" id='modal-close-button' onClick={() => clearfunction()} data-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body row justify-content-md-center m-2 px-1 py-4" id="create-post-modal-body">
                <div className=" col-3 col-lg-3 search-category" id="create-post-modal-search-category">
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <p className="m-0 purple">Faculties</p>
                  </div>
                  <div id="create-post-modal-category-container">

                    {allFaculty.map((item, index) => (
                      <div key={index} >
                        <div className=" flex-row justify-content-between align-items-center mt-3" style={{ display: item.ClosureDate <= todaydate ? "none" : "flex" }}>
                          <p className="our_theme_color m-0 one_line_css" id="longtitle">{item.FacultyName}</p>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="RadioButton"
                            id="radio-title"
                            value={item.FacultyID}
                            onChange={(e) => { setSelectedFal(e.currentTarget.value) }}
                            checked={item.FacultyID === selectedFal}
                          />
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
                <div className='col-9 col-lg-9' id="create-post-modal-small-container">
                  <div className="h-100 d-flex flex-column">
                    <div className="mb-3">
                      <input autoComplete='off' type="text" className="form-control" placeholder="Title (Maximum word 100)" aria-label="Title" id="create-post-modal-input-title" aria-describedby="inputGroup-sizing-default"
                        value={postTitle} onChange={(e) => { setPostTitle(e.target.value); console.log(postTitle) }}
                      />
                    </div>
                    <div className="create-post-modal-author-row w-100 justify-content-center d-flex position-relative" style={{}}>
                      {postImage ? <img className="mb-4 w-100" src={URL.createObjectURL(postImage)} alt={postFileName} /> : null}
                    </div>
                    <div className="create-post-modal-content-roww pt-3 d-flex ms-3 mb-4">
                      <img src={selectedUser.UserImage} className="img-thumbnail me-3" id='createpost-content-image' alt="..." />
                      <div className="create-post-modal-author-column">
                        <p className="card-text create-post-modal-content-author text-light m-0" id="">{selectedUser.UserName}</p>
                        <small> <p className="card-text create-post-modal-content-time text-muted" id="">{selectedUser.UserPosition}</p></small>
                      </div>
                    </div>
                    <div className="input-group mb-3">
                      <textarea className="form-control" id="create-post-modal-input-title" placeholder="What to you want to write? (Maximum word 300)" aria-label="Title" aria-describedby="inputGroup-sizing-default"
                        value={postContent} onChange={(e) => { setPostContent(e.target.value); console.log(postContent) }}
                      />
                    </div>
                    <small className='pb-3 w-100' style={{ padding: "0 1rem", fontSize: "0.7rem" }}>
                      <div className="form-check ps-4">
                        <input className="form-check-input" type="checkbox" checked={checkTac} id="flexCheckDefault"
                          onChange={(select) => { setCheckTac(select.target.checked); console.log(checkTac) }}
                        />
                        <label className="form-check-label text-light ps-1" htmlFor="flexCheckDefault"  >
                          Check here to indicate that you have read and agree the
                          <a data-toggle="collapse" href="#opentermscollapse" role="button" aria-expanded="false" className='text-decoration-underline'> terms and condition </a>
                          of the Idea.Co Company
                        </label>
                      </div>
                      <div className="collapse" id="opentermscollapse">
                        <div className="px-2 mt-2">
                          <p className='text-light m-0 pt-4'> USER-SUBMITTED CONTENT</p>
                          <p className='text-light m-0 pt-1 fw-light '>Our Site may have publicly accessible areas" such as message boards, ideas, member profiles, yellow posts, Job folders, or other features that allow users to post content that will generally be accessible by the public or the user population. Concerning any message, data, image, text, photos, graphic, audio, video, or other material you elect to post to such publicity accessible areas of our Site. </p>
                        </div>
                      </div>
                    </small>
                    {/* <div className=' col-8'>
                          <p className="purple m-0">{"Click the icon to add your files"}</p>
                          <small> <p className="fw-light our_theme_color  m-0" style={{ fontSize: '0.7rem' }}>{"*Only image files are accepted"}</p></small>
                        </div> */}
                    <div className="m-0 p-0 w-100 align-items-end justify-content-between d-flex flex-row col ">
                      <div className="py-2 rounded align-items-center d-flex flex-row">
                        <input type="file" id="imagenfile" style={{ display: 'none' }} ref={ref}
                          accept="image/*" onChange={e => { onFileChange(e); setPostImage(e.target.files[0]) }}
                        />
                        <label htmlFor="imagenfile" className='d-flex align-items-center m-0' style={{ width: "unset" }}>
                          <AiOutlineFileProtect type="file" aria-label="Upload" className="our_theme_color col" size={30} />
                          <p className='m-0 our_theme_color'>Click here to upload your image</p>
                        </label>
                      </div>
                      <div className='d-flex flex-row '>
                        {
                          validate ?
                            <>
                              <svg id='success-icon' version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                                <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                              </svg>
                            </>
                            : <></>
                        }
                        {
                          validate ?
                            <button type="button" data-dismiss={"modal"} className="px-3 py-2 rounded purple border-0" style={{ width: 'unset' }} id="Modal-done-button" onClick={() => createPost()} >{'Create'}</button>
                            :
                            <button type="button" className="px-3 py-2 rounded purple border-0" style={{ width: 'unset' }} id="Modal-done-button" onClick={() => checkvalidate()} >{'Validation'}</button>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Modal End*/}
      </div >

    </div >
  )
}

export default HomeScreen