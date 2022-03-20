import React from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< HEAD
import './css/Standard.css';
import { FaFilter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { createRoutesFromChildren } from 'react-router-dom';

=======
import './css/standard.css';
import { FaFilter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { createRoutesFromChildren } from 'react-router-dom';
import './css/Search_Page.css'
>>>>>>> munkit

const Search_Page = () => {
  const ProgramArr = [
    {
      id: 1,
      Title: "Diploma in Computer Studies",
<<<<<<< HEAD
      Title_code: "(R/811/4/0041) (10/21) (FA0965)",
      Field_of_Interest: "Information Technology",
      Level_of_Study: "Diploma",
      Awarding: "Segi",
      Campus: ["KL", "SJ", "PE"]
    },
    {
      id: 2,
      Title: "Degree in Computer Studies",
      Title_code: "(R/811/4/0041) (10/21) (FA0965)",
      Field_of_Interest: "Information Technology",
      Level_of_Study: "Diploma",
      Awarding: "Segi",
      Campus: ["KL", "SJ", "PE"]
    },
    {
      id: 3,
      Title: "Degree in Computer Studies",
      Title_code: "(R/811/4/0041) (10/21) (FA0965)",
      Field_of_Interest: "Information Technology",
      Level_of_Study: "Diploma",
      Awarding: "Segi",
      Campus: ["KL", "SJ", "PE"]
    },

  ];
  // const [searchText,setsearchText]=useState('')
  // }
  // function Searchbutton() {
  //   const search = () => {
  //     ProgramArr.filter((value) => {

  //       if (SearchText === "") {
  //         return value
  //       } else if (value.Title.toLowerCase().includes(SearchText.toLowerCase())) {
  //         return value
  //       }

  //     })
  // }
  // }

  // const [searchText, setsearchText] = useState("");

  // const handleFilter = (event) => {
  //   const searchWord = event.target.value;
  //   setWordEntered(searchWord);

  // }
  const data =ProgramArr.length;


  const SegiProgram = ProgramArr.map((Program, index) =>
    <>

      <div style={{ marginBottom: '1rem' }}>
        <div class="card">
          <div class="card-body">
            <div style={{ display: 'flex', flexDirection: 'row', flex: 1, padding: '3rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h5 class="card-title">{Program.Title}</h5>
                <p class="card-text" style={{ fontWeight: 500, fontSize: '1.3vw' }}>Field of Interest:</p>
                <p class="card-text" style={{ fontWeight: 500, fontSize: '1.3vw' }}>Level of Study:</p>
                <p class="card-text" style={{ fontWeight: 500, fontSize: '1.3vw' }}>Awarding:</p>
                <p class="card-text" style={{ fontWeight: 500, fontSize: '1.3vw' }}>Campus:</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, paddingLeft: '1rem' }}>
                <p style={{ fontSize: '1.3vw', color: '#A71337', fontWeight: 500 }}>{Program.Title_code}</p>
                <p style={{ color: '#7D7D7D' }}>{Program.Field_of_Interest}</p>
                <p style={{ color: '#7D7D7D' }}>{Program.Level_of_Study}</p>
                <p style={{ color: '#7D7D7D' }}>{Program.Awarding}</p>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div style={{ height: '2.5rem', width: '2.5rem', borderRadius: '2.5rem', backgroundColor: '#ACACAC', fontSize: '1.3rem', color: '#FFF', textAlign: 'center', marginRight: '0.5rem' }}>
                    {Program.Campus[1]}
                  </div>
                  <div style={{ height: '2.5rem', width: '2.5rem', borderRadius: '2.5rem', backgroundColor: '#A71337', fontSize: '1.3rem', color: '#FFF', textAlign: 'center' }}>
                    {Program.Campus[2]}
                  </div>

                </div>

              </div>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <a href="#" style={{ color: '#A71337', fontWeight: 'bold' }} class="btn">More Details</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );

  return (
    <div>
      <div className="Search-Page-Banner" style={{ position: 'relative' }}>
        <img style={{ display: 'block', width: '100%', maxHeight: 'auto' }} src={require("../assets/images/Search_Page/IT_Search.gif")} alt="" />
        <div class="Search-Page-Searchbar" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>


          <input type="text" fontSize="3rem" placeholder="Type to search"  />
          <button  style={{ backgroundColor: '#A71337' }}><FaSearch style={{ color: '#FFF' }} /></button>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, padding: '5rem' }}>
        <div style={{ display: 'flex', flex: 1, backgroundColor: '#ECFAFF', flexDirection: 'column', padding: '3rem' }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <p style={{ marginBottom: '2rem', fontWeight: '500', fontSize: '1.25rem' }}>Total Search Result: {data}</p>
=======
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
      <div style={{ marginBottom: '1rem' }}>
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
                <p className="Search-Page-Value">{Program.Campus}</p>
              </div>
            </div>
            {/* {Campus} */}

          </div>
        </div>
      </div>
      
    </>
    
  )
 
  const result=SegiProgram.length;
  console.log(result)
 
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
>>>>>>> munkit
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