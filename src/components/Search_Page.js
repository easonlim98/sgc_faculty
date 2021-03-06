import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css';
import { FaFilter, FaSearch, FaBookmark, FaWindowClose } from "react-icons/fa";
import './css/Search_Page.css'
import { commonStore } from '../store/commonStore';
import { useNavigate } from 'react-router-dom';
import ApiClient from '../util/ApiClient';
import API from '../constant/API';


const Search_Page = () => {

  const navigate = useNavigate();

  useEffect(() => {
    console.log(CourseList)
  }, []);

  useEffect(() => {

    ApiClient.GET(API.getCourseDetails).then(response => {
        setCourseDetails(response)
        console.log(response)
    })

    ApiClient.GET(API.getSubjectlist).then(response => {
      setSubjectList(response)
      console.log(response)
    })

    ApiClient.GET(API.getSubjectTitle).then(response => {
      setSubjectTitle(response)
      console.log(response)
    })

    ApiClient.GET(API.getAwardingInstitution).then(response => {
      setAwardingInstitution(response)
      console.log(response)
    })

  }, []);

  const [courseDetails, setCourseDetails] = useState([]);
  const [subjectList, setSubjectList] = useState([]);
  const [subjectTitle, setSubjectTitle] = useState([]);
  const [awardingInstitution, setAwardingInstitution] = useState([]);

  const CourseList = commonStore.useState(s => s.selectedCourseList)

  const ProgramArr = [
    {
      id: 1,
      Title: "Diploma in Computer Studies",
      Title_code: "(R/481/4/0309 ) (09/23) (A9341)",
      Field_of_Interest: "Information Technology",
      Level_of_Study: "Diploma",
      Awarding: "SEGi",
      Campus: "Segi College Kuala Lumpur"
    },
    {
      id: 2,
      Title: "Certificate in Information Technology",
      Title_code: "(R2/481/3/0308) (1/24) (A9473)",
      Field_of_Interest: "Information Technology",
      Level_of_Study: "Certificate",
      Awarding: "SEGi",
      Campus: "Segi College Kuala Lumpur"
    },
    {
      id: 3,
      Title: "Diploma in Computer Science",
      Title_code: "(N/481/4/0808) (08/23) (PA9727)",
      Field_of_Interest: "Information Technology",
      Level_of_Study: "Diploma",
      Awarding: "SEGi",
      Campus: "Segi College Kuala Lumpur"
    },

    {
      id: 4,
      Title: "BSc(Hons) Computing (3+0) ",
      Title_code: "(R2/481/6/0500) (05/24) (A10000)",
      Field_of_Interest: "Information Technology",
      Level_of_Study: "Bachelor Degree",
      Awarding: "SEGi",
      Campus: "Segi College Kuala Lumpur"
    },
  ];

  const Category = ['Creative Art & Design', "Business & Accounting", "Early Childhood", "Information Technology"]
  const lvlstudy = ['Certificate', "Foundation", "Diploma", "Bachelor Degree", "Executive Diploma", "Postgraduate"]
  const [SearchText, setSearchText] = useState('');
  const [CategoryText, setCategoryText] = useState('');
  const [lvlstudyText, setlvlstudyText] = useState('');
  const [Aplliedfilter, setAplliedfilter] = useState(false);

  const clear_filter = () => {
    setlvlstudyText('Level Of Study')
    setCategoryText('Category')
    setAplliedfilter(false)
  }

  const SegiProgram = CourseList.filter((item) => {

    if (SearchText === "" && Aplliedfilter === false) {
      return item
    }
    else if (Aplliedfilter === true && item.CourseLevelOfStudy.toLocaleLowerCase().includes(lvlstudyText.toLocaleLowerCase())) {
      return item
    }
    else if (item.CourseTitle.toLocaleLowerCase().includes(SearchText.toLocaleLowerCase()) && Aplliedfilter === false) {
      return item
    }
  }).map((item, index) =>

    <>
      {console.log(item.CourseLevelOfStudy.toLocaleLowerCase().includes(lvlstudyText.toLocaleLowerCase()))}

      <div className="container card px-5 py-4 mw-100 mb-5" id="search-card-container">
        <div className="row pb-3">
          <div className="col d-flex align-items-center" id="search-content-container">
            <p className='font-weight-bold m-0'>{item.CourseTitle}</p>
          </div>
          <div className="col d-flex align-items-center" id="search-content-container">
            <p className='font-weight-bold text-danger m-0'>{item.CourseCode}</p>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col d-flex align-items-center" id="search-content-container">
            <p className='font-weight-bold m-0'>Field of Interest:</p>
          </div>
          <div className="col d-flex align-items-center" id="search-content-container">
            <p className='font-weight-normal text-muted m-0'>{item.FacultyName}</p>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col d-flex align-items-center" id="search-content-container">
            <p className='font-weight-bold m-0'>Level of Study:</p>
          </div>
          <div className="col d-flex align-items-center" id="search-content-container">
            <p className='font-weight-normal text-muted m-0'>{item.CourseLevelOfStudy}</p>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col d-flex align-items-center" id="search-content-container">
            <p className='font-weight-bold m-0'>Awarding:</p>
          </div>
          
            <div className="col d-flex align-items-center" id="search-content-container">
            {awardingInstitution.map(award => {
            if(item.CourseID === award.CourseID){
            return (
              <p className='font-weight-normal text-muted m-0 pr-4'>{award.InstitutionName}</p>
                )
              }
            })}
            </div>
        </div>
        <div className="row">
          <div className="col d-flex align-items-center" id="search-content-container">
            <p className='font-weight-bold m-0'>Campus:</p>
          </div>
          <div className="col d-flex align-items-center" id="search-content-container">
            <p className='font-weight-normal text-muted m-0'>{item.CollegeName}</p>
          </div>
        </div>
        <div className='' id='Searchpage-details-container'>
          <button className='text-light py-2 px-3' id='Searchpage-details-button'
            onClick={() => {

              var tempCourseDetails = [];
              for(var x = 0; x < courseDetails.length; x++){
                  if(courseDetails[x].CourseID === item.CourseID){
                      const record = courseDetails[x];
                      tempCourseDetails.push(record);
                  }
              };
              var tempSubjectList = [];
              for(var i = 0; i < subjectList.length; i++){
                  if(subjectList[i].CourseID === item.CourseID){
                      const record = subjectList[i];
                      tempSubjectList.push(record);
                  }
              };
              var tempSubjectTitle = [];
              for(var j = 0; j < subjectTitle.length; j++){
                  if(subjectTitle[j].CourseID === item.CourseID){
                      const record = subjectTitle[j];
                      tempSubjectTitle.push(record);
                  }
              };
              var tempInstitutionLink = [];
              for(var k = 0; k < awardingInstitution.length; k++){
                  if(awardingInstitution[k].CourseID === item.CourseID){
                      const record = awardingInstitution[k];
                      tempInstitutionLink.push(record);
                  }
              };

              commonStore.update(s => {
                s.courseDetails = tempCourseDetails;
                s.subjectList = tempSubjectList;
                s.subjectTitle = tempSubjectTitle;
                s.institutionLink = tempInstitutionLink;
              })
              navigate('/CourseDetail');
                  
            }}
          >More Details</button>
        </div>
      </div>

    </>

  )



  const result = SegiProgram.length;

  return (
    <>
      <div className='w-100 px-5 py-5' id="Search-banner-image" style={{
        backgroundImage: "url(" + require('../assets/images/Search_Page/Search_banner2.png') + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
        overflow: "hidden",
      }}>
        <div className="input-group mb-3 py-3 px-5 mt-5 justify-content-center" id='searchbar-container'>
          <div className='d-flex flex-row bg-white rounded mt-5' style={{ overflow: 'hidden' }}>
            <div className="input-group-prepend align-items-center px-3">
              <FaSearch className='text-muted' />
            </div>
            {
              (Aplliedfilter === true) ?
                <input className='py-2' disabled={true} id="searchpage-input" onChange={(event) => { setSearchText(event.target.value); }} type="text" fontSize="3rem" placeholder="Search is disabled" />
                :
                <input className='py-2' autoComplete='off' id="searchpage-input" onChange={(event) => { setSearchText(event.target.value); }} type="text" fontSize="3rem" placeholder="Search" />

            }
          </div>
        </div>
      </div>

      <div className='m-3'>
        <div className="container px-4 py-4" id='Search-result-container'>
          <div className="row m-0 mt-3 mb-5 px-3">
            <div className="col" id="search-result-container">
              <h4 className="col">{"Total Search Result: " + result}</h4>
            </div>
            <div className="col d-flex justify-content-end mr-3 align-items-center" id="search-result-container">
              <FaFilter data-toggle="modal" onClick={() => setAplliedfilter(false)} data-target="#CategoryModal" />
            </div>
          </div>
          {Aplliedfilter === true ?
            <div className="row mt-3 mb-4" id='filter-row'>
              <div className='col d-flex align-items-start' id='filter-res-row'>
                <p className='m-0 px-3 py-1 bg-success rounded text-light'>
                  {lvlstudyText}
                </p>
              </div>
              <div className='col d-flex justify-content-end align-items-center' id='filter-res-row'>
                <p className='m-0 px-3 py-1 text-dark font-weight-bold'>
                  {"Clear Filter"}
                </p>
                <FaWindowClose onClick={clear_filter} />
              </div>
            </div>
            : null}
          {/* <------------Start Search col--------------> */}
          {SegiProgram}
          {/* <------------End Search col--------------> */}
        </div>
      </div>
      {/* <!-- Modal Start --> */}
      <div className="modal fade" id="CategoryModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" id="Categorysmallcontainer" role="document">
          <div className="modal-content" id='modal-container' style={{
            backgroundImage: "url(" + 'https://colleges.segi.edu.my/kualalumpur/wp-content/uploads/sites/7/2018/08/search-bg-2.jpg' + ")"
          }}>
            <div className="modal-header" style={{ border: 0 }}>
              <h5 className="modal-title text-light" id="exampleModalLabel">Search Category</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span className="text-light" aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="row py-3" id="modal-res-con">
              <div className="col-sm align-items-center d-flex justify-content-center" id="modal-res-item">
                <p className="text-light m-0  w-75">Level Of Study</p>
              </div>
              <div className="col align-items-center d-flex justify-content-center btn-group dropright" id="modal-res-itemselect">
                <button type="button"
                  className="btn btn-secondary dropdown-toggle" id="dropdownarea" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {lvlstudyText ? lvlstudyText : "Level Of Study"}
                </button>
                <div className="dropdown-menu" >
                  {
                    lvlstudy.map((study) =>
                      <>
                        <p className="dropdown-item m-0" onClick={() => setlvlstudyText(study)}>{study}</p>
                      </>
                    )
                  }
                </div>
              </div>
            </div>

            <div className="modal-footer" style={{ border: 0 }}>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => setAplliedfilter(true)}>Apply changes</button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal end --> */}
    </>
  )
}
export default Search_Page