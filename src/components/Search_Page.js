import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './css/standard.css'

const ProgramArr =[
    {
        id:1,
        Title: "Diploma in Computer Studies",
        Field_of_Interest:"Information Technology",
        Level_of_Study:"Diploma",
        Awarding:"Segi",
        Campus:"KL,Subang"
    }
];
const Search_Page = () => {
    const SegiProgram= ProgramArr.map((Program)=>
        
    <div class="card-body">
            <h5 class="card-title">{Program.Title}</h5>
             <p class="card-text">Field of Interest: {Program.Field_of_Interest}</p>
            <a href="#" class="btn btn-primary">Button</a>
    </div>
    );
  return (
      <div>
    <div className="Search-Page-Banner" style={{position:'relative'}}>
            <img style={{display:'block',width:'100%',maxHeight:'auto'}} src={require("../assets/images/Search_Page/IT_Search.gif")} alt=""/>
            <div class="Search-Page-Searchbar" style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
                <input/>
            </div>
    </div>  
    <div style={{display: 'flex',flex:1,padding: '5rem'}}>
    <div style={{display: 'flex',flex: 1,backgrounColor:' #ECFAFF',flexDirection: 'column',alignItems: 'center',padding: '3rem'}}>
      <div style={{display: 'flex',flexDirection: 'row'}}>
        <p>Total Search Result:</p>

      </div>
      <div class="card w-75">
            {SegiProgram}
    </div>

    </div>
  
  </div> 
  </div>     
  )
}

export default Search_Page