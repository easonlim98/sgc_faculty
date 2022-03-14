import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './header.css';
import { useNavigate } from "react-router-dom";
import 'boxicons';

const Header = () => {

    const navigate = useNavigate();

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top containerPaddingTop">
                <div className="container containerSpace">
                    <img className="navbar-brand img" src={require("./assets/images/segi_logo.png")} alt="" />
                    <button className="navbar-toggler burgerButtonColor" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse alignBack" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto headerContainerSpacing">
                            <li className="nav-item active">
                                <a className="nav-link colorWhite">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link colorWhite">Explore</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link colorWhite">Future Students</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link colorWhite">Staff & Students</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link colorWhite ">Contact & Directories</a>
                            </li>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link list-group-item list-group-item-action borderNone colorWhite"><i className="bx bx-search"></i></a>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link list-group-item list-group-item-action borderNone colorWhite" onClick={() =>
                                        navigate('/Admin_Login')
                                    }>
                                        <i className="bx bx-user">

                                        </i>
                                    </button>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header