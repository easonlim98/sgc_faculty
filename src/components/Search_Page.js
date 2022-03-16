import React from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/Standard.css';
import { FaFilter } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { createRoutesFromChildren } from 'react-router-dom';


const Search_Page = () => {
  const ProgramArr = [
    {
      id: 1,
      Title: "Diploma in Computer Studies",
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