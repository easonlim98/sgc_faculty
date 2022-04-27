import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, NavLink, Link, Route, Routes, Outlet, useNavigate } from 'react-router-dom';

const Preload = () => {

  const navigate = useNavigate();

  return (
    <div className='' id="landing-page-container" style={{
      //backgroundImage: "url(" + require('../asset/images/image.jpg') + ")"
    }}>
      <div className="container position-absolute top-50 start-50 translate-middle w-50">
        <div>
          <p className='text-light fw-bold fs-1'>Welcome to Idea.Co Website </p>
          <p className='text-light fw-normal fs-4 pt-3 pb-5'>A Secure web-enabled system for collecting the improvement from staff from your University.</p>
        </div>
        <div className="box-3 d-flex justify-content-end align-items-center pt-4">
          <button onClick={() => {
            navigate('/AdminPanel_HomePost')
          }}
            className="glow-on-hover px-3 py-2" type="button">Continue</button>
        </div>
      </div>
    </div >
  )
}

export default Preload