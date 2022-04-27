import React, { useState, useEffect, useRef } from 'react'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { BrowserRouter as Router, NavLink, Link, Route, Routes, useNavigate } from 'react-router-dom';
import './sidebar.css'
import { userStore } from '../../store/userStore';

///////////

const Sidebar = () => {

  let navigate = useNavigate();

  const SignOutFunc = () => {
      navigate('/AdminLogin')
      console.log("signed out")
  }
  
  const userListDetails = userStore.useState(s => s.userListDetails[0]);
  const [userImage, setuserImage] = useState(userListDetails.UserImage);


  return (

    <div style={{ display: 'flex', overflow: 'scroll initial', height: '100vh', position: 'sticky', top: '0' }}>
      <CDBSidebar backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Ideas .Co
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/AdminPanel_Dashboard">
              <CDBSidebarMenuItem icon="chart-line" iconType="solid">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/AdminPanel_HomePost">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/AdminPanel_UserList">
              <CDBSidebarMenuItem icon="user-edit">User</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/AdminPanel_Enquiry">
              <CDBSidebarMenuItem icon="envelope">Enquiry</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/AdminPanel_CategoryList">
              <CDBSidebarMenuItem icon="tags">Category</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/AdminPanel_Profile">
              <CDBSidebarMenuItem icon="id-card">Profile</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <img className='rounded-circle mb-4' src={userImage === userListDetails.UserImage ? userImage : URL.createObjectURL(userImage)} id='sidebar-user-avatar' />
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            
            <button style={{ borderWidth: 0, borderRadius: 10, backgroundColor: 'transparent' }}
              onClick={() => {
                SignOutFunc();
              }}
            >
              <a style={{ color: 'white', fontWeight: 'bold', borderRadius: 10, borderWidth: 0 }}>Logout</a>
            </button>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>

  );
};

export default Sidebar;