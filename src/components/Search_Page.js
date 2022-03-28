import React, { useState } from 'react'
// import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css';
import { FaFilter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { createRoutesFromChildren } from 'react-router-dom';
import './css/Search_Page.css'


const Search_Page = () => {
  const ProgramArr = [
    {
      id: 1,
      Title: "Diploma in Computer Studies",
      Title_code: "(R/481/4/0309 ) (09/23) (A9341)",
      Field_of_Interest: "Information Technology",
      Level_of_Study: "Diploma",
      Awarding: "SEGi",
      Campus: ["KL,", "SJ,", "PE"]
    },
    {
      id: 2,
      Title: "Certificate in Information Technology",
      Title_code: "(R2/481/3/0308) (1/24) (A9473)",
      Field_of_Interest: "Information Technology",
      Level_of_Study: "Certificate",
      Awarding: "SEGi",
      Campus: ["KL,", "SJ,", "PE"]
    },
    {
      id: 3,
      Title: "Diploma in Computer Science",
      Title_code: "(N/481/4/0808) (08/23) (PA9727)",
      Field_of_Interest: "Information Technology",
      Level_of_Study: "Diploma",
      Awarding: "SEGi",
      Campus: ["KL,", "PE"]
    },

    {
      id: 4,
      Title: "BSc(Hons) Computing (3+0) ",
      Title_code: "(R2/481/6/0500) (05/24) (A10000)",
      Field_of_Interest: "Information Technology",
      Level_of_Study: "Bachelor Degree",
      Awarding: "SEGi",
      Campus: ["KL,", "SJ"]
    },
  ];
  // const Campus = ProgramArr.map((program)=>{
  //   return program.Campus
  // }  
  // )
  // console.log(Campus)
  {/* <div style={{ display: 'flex', flexDirection: 'row' }}>
    <div style = {{backgroundColor:(data.Campus == "KL")?:}}>
      <p>
        {Program.Campus[1]}
      </p>
    </div>


  </div> */}

  // const campus = SegiProgram.Campus.map((campus)=> {
  //   return campus.Campus.length;

  // })

  const [SearchText, setSearchText] = useState('');
  const SegiProgram = ProgramArr.filter((Program) => {

    if (SearchText === "") {
      return Program
    } else if (Program.Title.toLocaleLowerCase().includes(SearchText.toLocaleLowerCase())) {
      return Program
    }
  }).map((Program, index) =>


    <>
      <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column' }}>
        <div class="card">
          <div class="card-body">
            <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
              <div style={{ display: 'flex', flex: 1 }}>
                <h5 class="card-title Search-Page-Title">{Program.Title}</h5>
              </div>
              {/* <div style={{ display: 'flex', flex: 1 }}>
                <p className="Search-Page-Value">{Program.Title_code}</p>
              </div> */}
            </div>
            <div className="Search-Page-Attribute-Container">
              <div className="Search-Page-Attribute-LeftContent">
                <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                  <div style={{ display: 'flex', flex: 1 }}>
                    <p class="card-text Search-Page-Attribute" >Field of Interest:</p>
                  </div>
                  <div style={{ display: 'flex', flex: 1 }}>
                    <p className="Search-Page-Value">{Program.Field_of_Interest}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                  <div style={{ display: 'flex', flex: 1 }}>
                    <p class="card-text Search-Page-Attribute" >Level of Study:</p>
                  </div>
                  <div style={{ display: 'flex', flex: 1 }}>
                    <p className="Search-Page-Value">{Program.Level_of_Study}</p>
                  </div>

                </div>

                <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                  <div style={{ display: 'flex', flex: 1 }}>
                    <p class="card-text Search-Page-Attribute">Awarding:</p>
                  </div>
                  <div style={{ display: 'flex', flex: 1 }}>
                    <p className="Search-Page-Value">{Program.Awarding}</p>
                  </div>

                </div>

                <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                  <div style={{ display: 'flex', flex: 1 }}>
                    <p class="card-text Search-Page-Attribute" >Campus:</p>
                  </div>
                  <div style={{ display: 'flex', flex: 1 }}>
                   {Program.Campus.map((campus)=>
                   
                        <div style={{color:(campus==="KL") ? '#7FFFD4' : '#00FFFF'}}>{campus}</div>
                        // {color:(campus==="KL") ? '#7FFFD4' : '#00FFFF'}
                        
                    )}
                    
                  </div>

                </div>
              </div>
              {/* {Campus} */}

              <div className="Search-Page-Attribute-ButtonSide">
                <div class="Search-Page-Cotent-Button2" >
                  <button>Visit</button>
                </div>
                <div class="Search-Page-Cotent-Button" >
                  <button>Details</button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </>

  )

  const result = SegiProgram.length;


  return (
    <div>
      <div className="Search-Page-Banner" style={{ position: 'relative' }}>
        <img style={{ display: 'block', width: '100%', maxHeight: 'auto' }} src={require("../assets/images/Search_Page/Search_banner2.png")} alt="" />
        <div class="Search-Page-Searchbar" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>

          <FaSearch style={{ color: '#000000', position: 'absolute', bottom: '0.5rem', left: '0.5rem' }} />
          <input style={{ borderRadius: '0.3rem', border: 'none', padding: '0.2rem', textAlign: 'center' }} onChange={(event) => { setSearchText(event.target.value); }} type="text" fontSize="3rem" placeholder="Type to search" />
        </div>
      </div>

      <div class="IT_intro_search">
        <div style={{ display: 'flex', flex: 1, backgroundColor: '#ECFAFF', flexDirection: 'column', padding: '3rem' }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <p className="Search-Page-TotalResult" >Total Search Result: {result}</p>
            <FaFilter />

          </div>
          <div className='Container' style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            {SegiProgram}
          </div>

        </div>

      </div>
    </div>
  )
}

export default Search_Page