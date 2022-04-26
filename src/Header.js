import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './header.css';
import { BiUser, BiSearchAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';

const Header = () => {

    const [dropdown, setDropdown] = useState(false);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [sidebarDropdown, setSidebarDropdown] = useState(false);

    const navigate = useNavigate();

    const Navbar = () => {
        return (
            <>
                {menuItems.map((menu, index) => {
                    return <MenuItems items={menu} key={index} />;
                })}
            </>
        );
    };

    const MenuItems = ({ items }) => {
        return (
            <li className="menu-items" id="hovermenu">
                {items.submenu ? (
                    <>
                        <button className="colorWhite dropdownButtonTitle" id="menuhoverbutton" type="button"
                            aria-haspopup="menu"
                            aria-expanded={dropdown ? "true" : "false"}
                            onClick={() => setDropdown((prev) => !prev)}
                        >
                            {items.title}{" "}
                        </button>
                        <Dropdown dropdown={dropdown} submenus={items.submenu} />
                    </>
                ) : (
                    <a className="colorWhite" href="/#">{items.title}</a>
                )}
            </li>
        );
    };

    const Dropdown = ({ submenus }) => {
        return (
            <ul id="hd_tahalo" className={`dropdown ${dropdown ? "show" : ""}`}>
                <div class="dropdown-menu" aria-labelledby="hd_tahalo">
                    {submenus.map((submenu, index) => (
                        <li key={index} id='hd-menu-item' className="dropdown-items">
                            <a className="colorWhite dropdownTitle" id=''
                                href={submenu.title === "FACULTIES" ? "/#" : "/#"}
                            >{submenu.title}</a>
                        </li>
                    ))}
                </div>
            </ul>
        );
    };

    const menuItems = [
        {
            title: "Home"
        },
        {
            title: "Explore"
        },
        {
            title: "Future Students",
            submenu: [
                {
                    title: "FACULTIES"
                },
                {
                    title: "SCHOLARSHIPS",
                },
                {
                    title: "APPLY NOW"
                }
            ]
        },
        {
            title: "Staff & Students"
        },
        {
            title: "Contact & Directories"
        }
    ];

    const customStyles = {
        overlay: {
            zIndex: 10000,
            backdropFilter: 'none',
            backgroundColor: 'transparent',
        },
    };

    return (
        <header>
            <Modal
                isOpen={sidebarVisible}
                style={customStyles}
                className="ModalStyleOpen"
            >
                <div>
                    <button className="navbar-toggler burgerButtonColor"
                        type="button"
                        onClick={() => {
                            setSidebarVisible(false);
                            setSidebarDropdown(false);
                        }}>
                        <span className="navbar-toggler-icon backgroundImageBurger"></span>
                    </button>
                </div>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <button style={{ border: 'none', color: 'white', background: 'none' }}
                        ><BiSearchAlt2 size={20} /></button>

                        <button style={{ border: 'none', color: 'white', background: 'none' }}
                            onClick={() => {
                                navigate('./AdminLogin')
                            }}
                        ><BiUser size={20} /></button>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '50%',
                    justifyContent: 'space-between'
                }}>
                    <button className="nav-item active"
                        style={{
                            border: 'none',
                            backgroundColor: 'transparent',
                        }}>
                        <a className="nav-link colorWhite">Home</a>
                    </button>
                    <button className="nav-item"
                        style={{
                            border: 'none',
                            backgroundColor: 'transparent',
                        }}>
                        <a className="nav-link colorWhite">Explore</a>
                    </button>
                    <button className="nav-item"
                        onClick={() => {
                            setSidebarDropdown((prev) => !prev)
                        }}
                        style={{
                            border: 'none',
                            backgroundColor: 'transparent',
                        }}
                    >
                        <a className="nav-link colorWhite">Future Students</a>
                    </button>

                    {sidebarDropdown ?
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: '20%',
                            justifyContent: 'space-around'
                        }}>
                            <button className="nav-item"
                                style={{
                                    border: 'none',
                                    backgroundColor: 'transparent',
                                }}>
                                <a style={{ fontSize: 12 }} className="nav-link colorWhite" href='/#'>FACULTIES</a>
                            </button>
                            <button className="nav-item"
                                style={{
                                    border: 'none',
                                    backgroundColor: 'transparent',
                                }}>
                                <a style={{ fontSize: 12 }} className="nav-link colorWhite" href='/#'>SCHOLARSHIPS</a>
                            </button>
                            <button className="nav-item"
                                style={{
                                    border: 'none',
                                    backgroundColor: 'transparent',
                                }}>
                                <a style={{ fontSize: 12 }} className="nav-link colorWhite" href='/#'>APPLY NOW</a>
                            </button>
                        </div>
                        :
                        null
                    }

                    <button className="nav-item"
                        style={{
                            border: 'none',
                            backgroundColor: 'transparent',
                        }}>
                        <a className="nav-link colorWhite">Staff & Students</a>
                    </button>
                    <button className="nav-item"
                        style={{
                            border: 'none',
                            backgroundColor: 'transparent',
                        }}>
                        <a className="nav-link colorWhite ">Contact & Directories</a>
                    </button>
                </div>

            </Modal>

            <nav className="navbar navbar-expand-lg navbar-light fixed-top containerPaddingTop">
                <div className="container containerSpace">
                    <img className="navbar-brand img" src={require("./assets/images/segi_logo.png")} alt="" />
                    <button className="navbar-toggler burgerButtonColor"
                        type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => {
                            setSidebarVisible(true);
                        }}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse alignBack" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto headerContainerSpacing">

                            {/* <li className="nav-item active">
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
                    </li> */}
                            <Navbar />

                            <ul className="navbar-nav" style={{ alignItems: 'center' }}>
                                <li className="nav-item">
                                    <a className='nav-link list-group-item list-group-item-action borderNone colorWhite'
                                    ><BiSearchAlt2 size={20} /></a>
                                </li>
                                <li className="nav-item">
                                    <button className='nav-link list-group-item list-group-item-action borderNone colorWhite'
                                        onClick={() => {
                                            navigate('./AdminLogin')
                                        }}
                                    ><BiUser size={20} /></button>
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