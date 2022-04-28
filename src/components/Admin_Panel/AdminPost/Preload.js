import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, NavLink, Link, Route, Routes, Outlet, useNavigate } from 'react-router-dom';

const Preload = () => {

  const navigate = useNavigate();

  return (
    <div className='w-100 h-100 position-absolute col d-flex p-0' id="landing-page-container" style={{
      //backgroundImage: "url(" + require('../asset/images/image.jpg') + ")"
    }}>
      <div className='container' id='pro-background-container'>
        <div className="position-absolute top-50 start-50 translate-middle w-50" >
          <div>
            <p className='purple fw-bold fs-1'>Segi Website Admin Panel </p>
            <p className='our_theme_title fw-normal fs-4 pt-3 pb-5'>A Secure web-enabled system for collecting the improvement from staff from your University.</p>
          </div>
          <div className="box-3 d-flex justify-content-end align-items-center pt-4">

            <button onClick={() => {
              navigate('/AdminPanel_HomePost')
            }}
              className="glow-on-hover px-3 py-2 border-0 our_theme_title" style={{ background: "transparent" }} type="button">Click here to start your journey</button>
            <img style={{
              width: "4rem",
              objectFit: "unset",
            }} class="active" src={require("../../../assets/images/Admin_Panel/pikachu.gif")}></img>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Preload