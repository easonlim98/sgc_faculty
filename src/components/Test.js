import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css';
import { FaFilter, FaSearch, FaBookmark, FaWindowClose } from "react-icons/fa";
import './css/Test.css'


const Search_Page = () => {
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
  const lvlstudy = ['Diploma', "Certificate", "Bachelor Degree", "Foundation"]
  const [SearchText, setSearchText] = useState('');
  const [CategoryText, setCategoryText] = useState('');
  const [lvlstudyText, setlvlstudyText] = useState('');
  const [Aplliedfilter, setAplliedfilter] = useState(false);

  const clear_filter = () => {
    setlvlstudyText('Level Of Study')
    setCategoryText('Category')
    setAplliedfilter(false)
  }

  const SegiProgram = ProgramArr.filter((Program) => {

    if (SearchText === "" && Aplliedfilter === false) {
      return Program
    }
    else if (Aplliedfilter === true && Program.Level_of_Study.toLocaleLowerCase().includes(lvlstudyText.toLocaleLowerCase())) {
      return Program
    }
    else if (Program.Title.toLocaleLowerCase().includes(SearchText.toLocaleLowerCase()) && Aplliedfilter === false) {
      return Program
    }
  }).map((Program, index) =>

    <>
      {console.log(Program.Level_of_Study.toLocaleLowerCase().includes(lvlstudyText.toLocaleLowerCase()))}

      <div className="container card px-5 py-4 mw-100 mb-5" id="search-card-container">
        <div className="row pb-3">
          <div className="col d-flex align-items-center" id="search-content-container">
            <p className='font-weight-bold m-0'>{Program.Title}</p>
          </div>
          <div className="col d-flex align-items-center" id="search-content-container">
            <p className='font-weight-bold text-danger m-0'>{Program.Title_code}</p>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col d-flex align-items-center" id="search-content-container">
            <p className='font-weight-bold m-0'>Field of Interest:</p>
          </div>
          <div className="col d-flex align-items-center" id="search-content-container">
            <p className='font-weight-normal text-muted m-0'>{Program.Field_of_Interest}</p>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col d-flex align-items-center" id="search-content-container">
            <p className='font-weight-bold m-0'>Level of Study:</p>
          </div>
          <div className="col d-flex align-items-center" id="search-content-container">
            <p className='font-weight-normal text-muted m-0'>{Program.Level_of_Study}</p>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col d-flex align-items-center" id="search-content-container">
            <p className='font-weight-bold m-0'>Awarding:</p>
          </div>
          <div className="col d-flex align-items-center" id="search-content-container">
            <p className='font-weight-normal text-muted m-0'>{Program.Awarding}</p>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex align-items-center" id="search-content-container">
            <p className='font-weight-bold m-0'>Campus:</p>
          </div>
          <div className="col d-flex align-items-center" id="search-content-container">
            <p className='font-weight-normal text-muted m-0'>{Program.Campus}</p>
          </div>
        </div>
        <div className='' id='Searchpage-details-container'>
          <button className='text-light py-2 px-3' id='Searchpage-details-button'>More Details</button>
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
                <input className='py-2' id="searchpage-input" onChange={(event) => { setSearchText(event.target.value); }} type="text" fontSize="3rem" placeholder="Search" />

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
            <div className="modal-header">
              <h5 className="modal-title text-light" id="exampleModalLabel">Search Category</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span className="text-light" aria-hidden="true">&times;</span>
              </button>
            </div>
            <div>
              <div className="row py-3" id="modal-res-con">
                <div className="col-sm align-items-center d-flex justify-content-center" id="modal-res-item">
                  <p className="text-light m-0  w-75">Area Of Study</p>
                </div>
                <div className="col align-items-center d-flex justify-content-center btn-group dropright" id="modal-res-itemselect">
                  <button type="button"
                    className="btn btn-secondary dropdown-toggle" id="dropdownarea" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {CategoryText ? CategoryText : "Category"}
                  </button>
                  <div className="dropdown-menu" >
                    {
                      Category.map((category) =>
                        <>
                          <p className="dropdown-item m-0" onClick={() => setCategoryText(category)}>{category}</p>
                        </>
                      )
                    }
                  </div>
                </div>
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

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" >Apply changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal end --> */}
    </>
  )
}
export default Search_Page