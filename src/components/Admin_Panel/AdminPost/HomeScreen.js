import React, { useState, useEffect, useRef, } from 'react'
import Sidebar from '../Sidebar'
// import { listenToData } from '../../../util/CommonFunc';
import ApiClient from '../../../util/ApiClient';
import API from '../../../constant/API';
import { userStore } from '../../../store/userStore';
import { commonStore } from '../../../store/commonStore';
import './HomeScreen.css'
import { RiFilterLine, RiCloseFill } from "react-icons/ri";
import { BiAddToQueue } from "react-icons/bi";
import { AiOutlineFileProtect } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { FaUserNinja, FaWindowClose } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Post from './Post';
import LoadingSpinner from "../../general-components/LoadingSpinner";
import emailjs from 'emailjs-com';
import { getDataEvent } from '../../../util/commonDB';

const HomeScreen = () => {
  const selectedUser = userStore.useState(s => s.selectedUser)
  const userList = commonStore.useState(s => s.userList)
  const categoryList = commonStore.useState(s => s.categoryList)
  const userID = userStore.useState(s => s.userID);
  const postList = commonStore.useState(s => s.postList);

  const [isLoading, setIsLoading] = useState(false);
  const [Annonymous, setAnnonymous] = useState(false);
  const [selectedCat, setSelectedCat] = useState('');
  const [checkTac, setCheckTac] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postIdea, setPostIdea] = useState('');
  const [postFileName, setPostFileName] = useState('');
  const [selectedImage, setSelectedImage] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [checkedSelectCat, setCheckedSelectCat] = useState(false)
  const [appear, setappear] = useState(false)
  const [categoryisDisabled, setCategoryisDisabled] = useState(true)

  // const storage = firebase.storage();
  useEffect(() => {
    if (userID !== '') {
      getDataEvent(userID);
      console.log('success mount data')
    }
    else {
      console.log('no userID')
    }
  }, [userID]);

  const emailForm = useRef();

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
    // if (selectedTag !== '' && postTitle !== '' && postIdea !== '') {
    //   if (checkTac !== false) {

    //     var UserList = [];

    //     for (var i = 0; i < userList.length; i++) {
    //       const record = userList[i].UserID
    //       UserList.push(record);
    //     }
    //     if (selectedImage !== '') {
    //       const ref = storage.ref(`/document/${postImage !== null ? postImage.name : ''}`);
    //       const uploadTask = ref.put(postImage);
    //       uploadTask.on("state_changed", console.log, console.error, () => {
    //         ref
    //           .getDownloadURL()
    //           .then((url) => {

    //             var body = {
    //               UserID: userID,
    //               TagID: selectedTag,
    //               PostTitle: postTitle,
    //               PostIdea: postIdea,
    //               image: selectedImage,
    //               PostFileName: url,
    //               Annonymous: Annonymous === true ? 1 : 0,
    //               UserList: UserList,
    //             };
    //             setIsLoading(false);
    //             ApiClient.POST(API.createPost, body).then((result) => {
    //               setappear(false)
    //               clearfunction()
    //               var userEmail = '';

    //               for (var x = 0; x < userList.length; x++) {
    //                 if (userList[x].DepartmentID === userListDetails.DepartmentID) {
    //                   if (userList[x].UserPosition === "QA Coordinator") {
    //                     userEmail = userList[x].UserEmail
    //                   }
    //                 }
    //               }

    //               var targetBlock = {
    //                 send_to: userEmail,
    //                 type: 'post',
    //                 post_author: userListDetails.UserName,
    //               }

    //               emailjs.send('service_t41roh7', 'template_b3e0izi', targetBlock, 'B7FQ2OkOz8Cyu4mvQ')

    //               if (userID !== '') {
    //                 // listenToData(userID);
    //                 console.log('success mount data')
    //               }
    //               else {
    //                 console.log('no userID')
    //               }
    //             });
    //           })
    //       });
    //     }
    //     else {
    //       var body = {
    //         UserID: userID,
    //         TagID: selectedTag,
    //         PostTitle: postTitle,
    //         PostIdea: postIdea,
    //         PostFileName: postFileName,
    //         Annonymous: Annonymous === true ? 1 : 0,
    //         UserList: UserList,
    //       };

    //       ApiClient.POST(API.createPostPlain, body).then((result) => {
    //         setappear(false)
    //         clearfunction()
    //         setIsLoading(false);
    //         var userEmail = '';

    //         for (var x = 0; x < userList.length; x++) {
    //           if (userList[x].DepartmentID === userListDetails.DepartmentID) {
    //             if (userList[x].UserPosition === "QA Coordinator") {
    //               userEmail = userList[x].UserEmail
    //             }
    //           }
    //         }

    //         var targetBlock = {
    //           send_to: userEmail,
    //           post_author: userListDetails.UserName,
    //         }

    //         emailjs.send('service_t41roh7', 'template_b3e0izi', targetBlock, 'B7FQ2OkOz8Cyu4mvQ')

    //         if (userID !== '') {
    //           // listenToData(userID);
    //           console.log('success mount data')
    //         }
    //         else {
    //           console.log('no userID')
    //         }
    //       });
    //     }
    //   }
    //   else {
    //     alert('You must agree with the terms & conditions')
    //     setIsLoading(false);

    //   }
    // }
    // else {
    //   alert('Please fill in all the field')
    //   setIsLoading(false);

    // }
  };

  const ref = React.useRef();
  const clearfunction = () => {
    ref.current.value = ""
    setPostTitle("")
    setPostIdea("")
    setAnnonymous(false)
    setCheckTac(false)
    setCheckedSelectCat(false)
    setPostFileName("")
    setSelectedImage("")
  }


  const [pageNum, setPageNum] = useState(0);
  const postPerPage = 5;
  const pagesVisited = pageNum * postPerPage;
  const [pagetype, setPageType] = useState(1)
  function handlechangepage() {
    setPageNum(0)
    setPageType(1)
  }
  function handlechangepage2() {
    setPageNum(0)
    setPageType(2)
  }
  function handlechangepage3() {
    setPageNum(0)
    setPageType(3)
  }
  function handlechangepage4() {
    setPageNum(0)
    setPageType(4)
  }

  const [categorytext, setcategorytext] = useState("")
  const [categoryid, setcategoryid] = useState("")

  const [catid, setcatid] = useState("")

  const [Aplliedfilter, setAplliedfilter] = useState(false)
  const clear_filter = () => {
    setcategorytext('')
    setAplliedfilter(false)
  }


  const displayPost = postList.slice().sort(function (a, b) {
    if (pagetype === 1) {
      return new Date(b.CreatedAt).getTime() - new Date(a.CreatedAt).getTime()
    }
    if (pagetype === 2) {
      return (parseInt(b.CommentLength) + parseInt(b.PostLike) + parseInt(b.PostDislike)) > (parseInt(a.CommentLength) + parseInt(a.PostLike) + parseInt(a.PostDislike)) ? 1 : -1
    }
    if (pagetype === 3) {
      return new Date(b.LatestComment).getTime() - new Date(a.LatestComment).getTime()
    }
    if (pagetype === 4) {
      return (parseInt(b.PostLike) - parseInt(b.PostDislike)) - (parseInt(a.PostLike) - parseInt(a.PostDislike))
    }

  }).filter((item) => {
    if (Aplliedfilter === false) {
      return item
    }
  }).slice(pagesVisited, pagesVisited + postPerPage).map((item) => (
    <Post data={item} userdetails={userList} />
  ));
  const pageCount = Math.ceil(postList.length / postPerPage);

  const changePage = ({ selected }) => {
    setPageNum(selected)
  }
  var today = new Date()
  const todaydate = today.getFullYear() + '-' + ("0" + (today.getMonth() + 1)).slice(-2) + '-' + today.getDate();
  return (
    <div className="d-flex" style={{ backgroundColor: '#333' }}>
      <Sidebar />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
      <div className="container-fluid p-4 " style={{ backgroundColor: '#22252D' }}>

        {isLoading ? <div className='container position-relative d-flex col h-100'>
          <LoadingSpinner /> </div> :

          <div className="container" id="post-middle-container">
            <div className="row px-2 py-3 rounded" id="admin-panel-add" style={{ backgroundColor: 'rgb(46, 49, 57)' }}>
              <div className="col align-items-center">
                <p className="text-light mb-0">Add new post</p>
              </div>
              <div className="col align-items-center d-flex justify-content-end">
                <BiAddToQueue onClick={() => setappear(true)} className="text-light" size={20} data-toggle="modal" data-target="#createCategoryModal" />
              </div>
            </div>
            <nav>
              <div className="nav nav-tabs position-relative align-items-center " id="nav-tab" role="tablist">
                <button className="nav-link active" onClick={() => handlechangepage()} id="nav-recent-tab" data-toggle="tab" data-target="#nav-recent" type="button" role="tab" aria-controls="nav-recent" aria-selected="true">Latest Ideas</button>
                <button className="nav-link" onClick={() => handlechangepage2()} id="nav-hot-tab" data-toggle="tab" data-target="#nav-hot" type="button" role="tab" aria-controls="nav-hot" aria-selected="false">Most Viewed Ideas</button>
                <button className="nav-link" onClick={() => handlechangepage3()} id="nav-comments-tab" data-toggle="tab" data-target="#nav-comments" type="button" role="tab" aria-controls="nav-comments" aria-selected="false">Latest Comments</button>
                <button className="nav-link" onClick={() => handlechangepage4()} id="nav-popular-tab" data-toggle="tab" data-target="#nav-popular" type="button" role="tab" aria-controls="nav-popular" aria-selected="false">Most Popular Ideas</button>
                <div className='position-absolute col align-items-center d-flex justify-content-end' id='home-filter'>
                  {categorytext ? <FaWindowClose className='me-3' color='white' onClick={clear_filter} /> : null}
                  <RiFilterLine className='text-light' data-toggle="modal" data-target="#staticBackdrop" />
                </div>
                {/* <!--Start Filter Modal--> */}
                <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" id="category-create-post-modal">
                      <div className="modal-header d-flex col align-items-center position-relative justify-content-center py-4" id="create-post-modal-header">
                        <h5 className="modal-title text-center text-white" id="create-post-modal-header-title">{"Categories"}</h5>
                        <RiCloseFill className="btn-close position-absolute text-light" onClick={() => setcategorytext("")} data-dismiss="modal" size={35} id='close-icon' />
                      </div>
                      <div className="modal-body row align-items-center" id="category-modal">
                        <div className='col text-light m-0'>
                          <p className='text-light m-0'>Select the courses you want to filter</p>
                          <small> <p className='text-light fw-light m-0 mt-2'> {categorytext ? "You have selected <" + categorytext.toUpperCase() + ">" : ""} </p></small>
                        </div>

                        <div className="col-3 dropdown">
                          <button className="px-2 py-2 border-0 rounded btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
                            {categorytext ? categorytext : "Courses"}
                          </button>
                          <ul className="dropdown-menu bg-dark rounded" aria-labelledby="dropdownMenuButton1">
                            {
                              categoryList.map((category) =>
                                <p className="" style={{ color: "white", paddingLeft: '1.5rem', margin: 0, paddingTop: "0.5rem", paddingBottom: "0.5rem" }} onClick={() => setcatid(category.CategoryID) & setcategorytext(category.CategoryName)}>{category.CategoryName}</p>
                              )
                            }
                          </ul>
                        </div>
                      </div>
                      <div className="modal-footer border-0 justify-content-end">
                        <button type="button" className='px-4 py-1 border-0 rounded text-light' id="modal-general-button" onClick={() => setcategorytext("")}>Clear</button>
                        <button type="button" className='px-4 py-1 border-0 rounded text-light' id="modal-general-button" data-dismiss="modal" onClick={() => setAplliedfilter(true) & setcategoryid(catid)}>Apply</button>
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
                <h5 className="modal-title text-light col text-center py-2">Create Post</h5>
                <RiCloseFill className="btn-close position-absolute" id='modal-close-button' onClick={() => clearfunction()} color='white' data-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body row justify-content-md-center m-2 px-1 py-4" id="create-post-modal-body">
                <div className=" col-3 col-lg-3 search-category" id="create-post-modal-search-category">
                  <div id="create-post-modal-category-container">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <p className="m-0 text-light">Category</p>
                    </div>
                    {categoryList.map((item, index) => (
                      <div key={index} >
                        <div className=" flex-row justify-content-between align-items-center mt-4" style={{ display: item.ClosureDate <= todaydate ? "none" : "flex" }}>
                          <p className="text-light m-0" id="">{item.CategoryName}</p>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="RadioButton"
                            id="radio-title"
                            value={item.CategoryName}
                            onChange={(select) => { setSelectedCat(select.target.value); console.log(select.target.value) }}
                            checked={checkedSelectCat}
                            onClick={() => setCheckedSelectCat(true)}

                          />
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
                <div className='col-9 col-lg-9' id="create-post-modal-small-container">
                  <div className="input-group py-3 mb-3 row pt-2 pb-1 m-auto rounded justify-content-between" style={{ border: "1px solid #363A43" }}>
                    <div className=' col-8'>
                      <p className="text-light m-0">{"Click the icon to add your files"}</p>
                      <small> <p className="fw-light m-0" style={{ color: "#D3D3D3", fontSize: '0.7rem' }}>{"*Only image files are accepted"}</p></small>
                    </div>
                    <input type="file" id="imagenfile" style={{ display: 'none' }} ref={ref}
                      accept="image/*" onChange={e => { onFileChange(e); setPostImage(e.target.files[0]) }}
                    />
                    <label htmlFor="imagenfile" className='d-flex align-items-center' style={{ width: "unset" }}>
                      <AiOutlineFileProtect type="file" aria-label="Upload" className="text-light" size={30} />
                    </label>
                  </div>
                  <div className="input-group">
                    <div className="input-group mb-3">
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
                        value={postIdea} onChange={(e) => { setPostIdea(e.target.value); console.log(postIdea) }}
                      />
                    </div>
                    <small className='pb-3' style={{ padding: "0 1rem", fontSize: "0.7rem" }}>
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
                          <p className='text-light m-0'> Welcome to our Idea.Co Company. We want people to use this website to express themselves and post ideas that are important to them but not at the expense of the safety and well-being of others or the integrity of our community. You, therefore, agree not to engage in the conduct described below (or to facilitate or support others in doing so):</p>

                          <p className='text-light fw-light m-0 pt-2'>  1. You must be an employee of the company.</p>
                          <p className='text-light fw-light  m-0'>  2. You must not be prohibited from receiving any aspect of our Service under applicable laws.</p>
                          <p className='text-light fw-light  m-0'>  3. You must not have previously disabled your account for violation of law or any of our policies.</p>
                          <p className='text-light fw-light  m-0'>  4. You may not upload viruses or do anything that could disable, overburden or impair the proper working for the appearance of the post.</p>

                          <p className='text-light m-0 pt-4'> USER-SUBMITTED CONTENT</p>
                          <p className='text-light m-0 pt-1 fw-light '>Our Site may have publicly accessible areas" such as message boards, ideas, member profiles, yellow posts, Job folders, or other features that allow users to post content that will generally be accessible by the public or the user population. Concerning any message, data, image, text, photos, graphic, audio, video, or other material you elect to post to such publicity accessible areas of our Site. </p>
                        </div>
                      </div>
                    </small>
                    <div className="form-check m-0 p-0 form-switch d-flex w-100 align-items-center row">
                      <div className="d-flex align-items-center col">
                        <p className="text-light m-0">Anonymous</p>
                        <FaUserNinja className="text-light ms-3" />
                        <input className="form-check-input ms-3" checked={Annonymous} onChange={() => { setAnnonymous(!Annonymous); console.log(Annonymous) }} type="checkbox" id="Createpost-toggleswitch" />
                      </div>
                      <div className='d-flex col justify-content-end'>
                        <button type="button" data-dismiss={"modal"} className="btn bg-danger text-light" onClick={() => { createPost() }} >Create Post</button>
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

    </div>
  )
}

export default HomeScreen