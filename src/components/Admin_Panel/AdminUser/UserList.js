import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar'
import './UserList.css'
// import Modal from "./Component/Modal.js";
import API from '../../../constant/API';
import ApiClient from '../../../util/ApiClient';
import 'bootstrap';
import { AiOutlineEdit, AiOutlineSearch, } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import { commonStore } from '../../../store/commonStore';
import { userStore } from '../../../store/userStore';
// import listenToData from '../util/CommonFunc';
// import firebase from 'firebase/app';
import emailjs from 'emailjs-com';
import Modal from '../Modal/Modal';
/* import { getAuth } from 'firebase-admin/auth' */
import LoadingSpinner from "../../general-components/LoadingSpinner";

const UserList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const userList = commonStore.useState(s => s.userList);
  const postList = commonStore.useState(s => s.postList);
  const departmentList = commonStore.useState(s => s.departmentList);
  const userID = userStore.useState(s => s.userID);

  const [targetUserID, setTargetUserID] = useState('');
  const [userName, setUserName] = useState('');
  const [userGender, setUserGender] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [employeeID, setEmployeeID] = useState('');
  const [userDepartment, setUserDepartment] = useState('');
  const [userPosition, setUserPosition] = useState('');
  const [userContact, setUserContact] = useState('');

  const [editfunction, seteditfunction] = useState(false);


  useEffect(() => {
    if (userID !== '') {
      // listenToData(userID);
      console.log('success mount data')
    }
    else {
      console.log('no userID')
    }
  }, [userID]);

  const createUser = () => {
    setIsLoading(false);
    var body = {
      UserID: userID,
      UserName: userName,
      UserTitle: userGender,
      UserContact: userContact,
      UserEmail: userEmail,
      EmployeeID: employeeID,
      UserPosition: userPosition,
    }
    console.log(body)
    // if (userDepartment !== '' && userName !== '' &&
    //   userGender !== '' && userEmail !== '' &&
    //   employeeID !== '' && userPosition !== '') {

    //   firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
    //     .then((userCredential) => {

    //       var departmentID = '';

    //       for (var i = 0; i < departmentList.length; i++) {
    //         if (userDepartment === departmentList[i].DepartmentName) {
    //           departmentID = departmentList[i].DepartmentID
    //         }
    //       }

    //       var allPostID = [];

    //       for (var x = 0; x < postList.length; x++) {
    //         allPostID.push(postList[x].PostID)
    //       }

    //       var body = {
    //         UserID: userCredential.user.uid,
    //         DepartmentID: departmentID,
    //         UserName: userName,
    //         UserGender: userGender,
    //         UserContact: userContact,
    //         UserEmail: userEmail,
    //         EmployeeID: employeeID,
    //         UserPosition: userPosition,
    //         PostID: allPostID,
    //       };

    //       console.log("BODY", body)

    //       ApiClient.POST(API.createUser, body).then((result) => {
    //         console.log(result)
    //         emptydata()
    //         setIsLoading(false);

    //         console.log('successfully created user')

    //         var targetBlock = {
    //           receiver: userEmail,
    //           userName: userName,
    //           userPassword: userPassword
    //         }

    //         emailjs.send('service_t41roh7', 'template_z9cu5dq', targetBlock, 'B7FQ2OkOz8Cyu4mvQ')

    //           .then(function (response) {

    //             if (userID !== '') {
    //               // listenToData(userID);
    //               console.log('success mount data')
    //             }
    //             else {
    //               console.log('no userID')
    //             }

    //             console.log('SUCCESS!', response.status, response.text);
    //             cleardatafunction()

    //           }, function (error) {

    //             console.log('FAILED...', error);

    //           });
    //       })

    //     }).catch((error) => {
    //       console.log(error)
    //       setIsLoading(false);

    //     });;

    // }
    // else {
    //   alert('ALl field are required to enter')
    //   setIsLoading(false);

    // }
  }

  const updateUser = () => {

    var departmentID = '';

    for (var i = 0; i < departmentList.length; i++) {
      if (userDepartment === departmentList[i].DepartmentName) {
        departmentID = departmentList[i].DepartmentID
      }
    }

    var body = {
      UserID: targetUserID,
      UserName: userName,
      DepartmentID: departmentID,
      UserPosition: userPosition,
    };

    ApiClient.POST(API.updateUser, body).then((result) => {
      if (userID !== '') {
        // listenToData(userID);
        console.log('success mount data')
        emptyedit()
      }
      else {
        console.log('no userID')
      }
    })

  }
  const emptyedit = () => {
    setUserName("")
    setUserDepartment("")
    setUserPosition("")
  }
  const emptydata = () => {
    setUserName("")
    setUserDepartment("")
    setUserPosition("")
    setUserGender("")
    setUserContact("")
    setUserEmail("")
  }
  const tableheader = (item) => {
    return (
      <th className="col text-center d-flex justify-content-center align-items-center border-0">
        <p className='m-0 our_theme_title text-center  py-3'>{item}</p>
      </th>
    )
  }
  const handleeditfunction = (item) => {
    setTargetUserID(item.UserID)
    setUserName(item.UserName)
    setUserPosition(item.UserPosition)
    setUserDepartment(item.UserDepartment)
    setUserContact("")
    console.log(item, "Insert Edit Data")
    seteditfunction(true)
  };

  const handlepropsdeletefunction = (item) => {

    var UserPostID = [];

    for (var x = 0; x < postList.length; x++) {
      if (postList[x].UserID === item) {
        UserPostID.push(postList[x].PostID)
      }
    }

    var body = {
      UserID: item,
      PostID: UserPostID
    };
    console.log(body, "body")
    ApiClient.POST(API.deleteUser, body).then((result) => {

      console.log(result, "wor")
      if (userID !== '') {
        // listenToData(userID);
        console.log('success mount data')
      }
      else {
        console.log('no userID')
      }
    })
  };


  const Tablecontent = ({ UserID, UserName, UserGender, UserPosition, UserEmail, UserContact }) => {
    return (
      <div className="row m-0 b-0 py-3 align-items-center">
        <td className="col text-center our_theme_title fw-normal one_line_css" id="cat-tablecontent">{UserGender + " " + UserName}</td>
        <td className="col text-center our_theme_title fw-normal one_line_css" id="cat-tablecontent">{UserPosition}</td>
        <td className="col text-center our_theme_title fw-normal one_line_css" id="cat-tablecontent">{UserEmail}</td>
        <td className="col text-center our_theme_title fw-normal one_line_css" id="cat-tablecontent">{UserContact !== '' ? UserContact : 'N/A'}</td>
        <td className="col text-center text-white d-flex align-items-center justify-content-center" id="cat-tablecontent">
          <AiOutlineEdit className='our_theme_title me-4' id="iconhover" data-toggle="modal" data-target="#createCategoryModal" onClick={() => handleeditfunction({ UserID, UserName, UserGender, UserPosition, UserEmail, UserContact })} size={25} />
          <MdDeleteForever id="iconhover" data-toggle="modal" data-target={"#Delete-" + UserID} size={25} className="me-4 our_theme_title" />
        </td>
        <Modal id={"Delete-" + UserID} name={"Delete"} function={handlepropsdeletefunction} currentid={UserID} warning={'you are allowed to delete inactive user'} />
      </div>
    )
  }

  const Modaltextinput = (item) => {
    return (
      <div>
        <p className='fw-normal pb-1 purple fs-6 total-cat pt-4'>{item.name}</p>
        <input value={item.data} onChange={(e) => item.onchange(e)} autoComplete='off' type="text" className="form-control rounded border-0" placeholder={item.placeholder} aria-label="Title" id="side-bar-search-title" aria-describedby="inputGroup-sizing-default" />
      </div>
    )
  }

  const Modaldropdowninput = (item) => {
    return (
      <div>
        <p className='fw-normal pb-2 purple fs-6 total-cat pt-4'>{item.name}</p>
        <div className="btn-group dropend">
          <button type="button" className="px-2 py-2 border-0 rounded btn-secondary dropdown-toggle" style={{ backgroundColor: "rgb(86, 94, 183)" }} data-toggle="dropdown" aria-expanded="false">
            {(item.data === "") ? item.name : item.data}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {item.datainput.map((data) =>
              <li key={data}><a className="dropdown-item" onClick={() => item.onchange(data)}>{data}</a></li>
            )}
          </ul>
        </div>
      </div>
    )
  }
  const [searchText, setSearchText] = useState('')

  const CatItemComponent = () => {
    return (
      <div className='d-flex flex-row mt-3'>
        <table className="table m-0">
          <thead>
            <tr className='row m-0 border-0' style={{ backgroundColor: "#14213d" }}>
              {tableheader("Name")}
              {tableheader("Position")}
              {tableheader("Email")}
              {tableheader("Number")}
              {tableheader("")}
            </tr>
          </thead>
          <tbody className='border-0'>
            {console.log(userList)}
            {userList ? userList.filter((item) => {

              if (searchText === "") {
                return item
              }
              else if (item.UserName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
                return item
              }
              else if (item.UserPosition.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
                return item
              }
              else if (item.UserEmail.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
                return item
              }
              else if (item.UserContact.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
                return item
              }

            }).map((item, index) => (
              Tablecontent({
                UserID: item.UserID,
                UserName: item.UserName,
                UserGender: item.UserTitle,
                UserEmail: item.UserEmail,
                UserPosition: item.UserPosition,
                UserContact: item.UserContact,
              })
            )) : null}
          </tbody>
        </table>
        < div className='Cat-column' style={{
          backgroundColor: '#5F5F5F'
        }}>
        </div>
      </div >
    );
  };
  const cleardatafunction = () => {
    setUserName("")
    setUserPosition("")
    setUserDepartment("")
    setUserContact("")
    seteditfunction(false)
  }

  const handlegender = (data) => { setUserGender(data) }
  const handledepartment = (data) => { setUserDepartment(data) }
  const handleposition = (data) => { setUserPosition(data) }


  return (
    <div className="d-flex" id="category-backgroundweh" style={{ backgroundColor: '#333' }}>
      <Sidebar />
      <div className='col rounded' id='pro-background-container'>
        {isLoading ? <div className='container position-relative d-flex col h-100'>
          <LoadingSpinner /> </div> :

          <div className='container' id='cat-maxwidth'>
            <div className='d-flex justify-content-between align-items-center mt-5 mb-4' id="cat-title-o">
              <p className='col fw-bold fs-2 text-white m-0 p-0'>User Settings</p>
              <div className="input-group col d-flex flex-row justify-content-end align-items-center position-relative p-0">
                < AiOutlineSearch className='text-dark position-absolute top-50 translate-middle-y' id='category-searchicon' />
                <input autoComplete='off' onChange={(event) => { setSearchText(event.target.value); }} type="text" className="ps-3 pe-3 py-2 text-dark rounded" placeholder="Search Users..." aria-label="Title" id="search-category-input-title" />
              </div>
            </div>
            <div className='pt-3 rounded mt-5' id='categoriesrslt-container'>
              <div className='d-flex align-items-center justify-content-between' id='cat-title-row'>
                <p className=' fw-bold our_theme_title m-0 fs-5'>{"Total Users: " + userList.length}</p>
                <button onClick={() => seteditfunction(false)} type="button" className="px-2 py-2 border-0 rounded text-white fw-bold d-flex align-items-center px-3" id="admin-cat-button--active" data-toggle="modal" data-target="#createCategoryModal">
                  NEW USER
                  <IoIosAddCircleOutline className="d-flex align-items-center" size={30} style={{ paddingLeft: '0.5rem' }} />
                </button>
              </div>
              <CatItemComponent />
            </div>

            {/* <-- Modal Start --> */}
            <div className="modal fade" id="createCategoryModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content" id="category-create-post-modal">
                  <div className="modal-header d-flex col align-items-center position-relative justify-content-center py-4" id="create-post-modal-header">
                    <h5 className="modal-title text-center purple" id="create-post-modal-header-title">{editfunction ? "Edit Username" : "Add New User"}</h5>
                    <RiCloseFill className="btn-close position-absolute purple" onClick={() => emptyedit()} data-dismiss="modal" size={35} id='close-icon' />
                  </div>

                  <div className="modal-body py-0" id="category-modal">
                    {/* All State: userName, userEmail, userPassword, employeeID, userDepartment, userPosition */}
                    {Modaltextinput({ name: "User Name", data: userName, onchange: e => { setUserName(e.target.value) }, placeholder: "e.g User Name" })}
                    {editfunction ? null : Modaltextinput({ name: "User Title", onchange: e => { setUserGender(e.target.value) }, placeholder: "e.g Prof." })}
                    {editfunction ? null : Modaltextinput({ name: "Contact Number", onchange: e => { setUserContact(e.target.value) }, placeholder: "e.g 012345678" })}
                    {editfunction ? null : Modaltextinput({ name: "User Email", onchange: e => { setUserEmail(e.target.value) }, placeholder: "e.g example@gmail.com" })}
                    {editfunction ? null : Modaltextinput({ name: "Password", onchange: e => { setUserPassword(e.target.value) }, placeholder: "e.g *******" })}
                    {editfunction ? null : Modaltextinput({ name: "Employee ID", onchange: e => { setEmployeeID(e.target.value) }, placeholder: "e.g QAC101419" })}
                    {editfunction ? null : Modaltextinput({ name: "User Position", onchange: e => { setUserPosition(e.target.value) }, placeholder: "e.g Staff" })}
                    <div className="modal-footer p-0 pt-4 pb-3 justify-content-center" id="user-footer">
                      <button type="button" className="px-3 py-2 rounded purple border-0 " id="Modal-done-button" data-dismiss="modal" onClick={() => { editfunction ? updateUser() : createUser(); }}>{editfunction ? "Save Changes" : "Add User"}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <-- Modal End --> */}

          </div>}
      </div>
    </div>
  )
}

export default UserList