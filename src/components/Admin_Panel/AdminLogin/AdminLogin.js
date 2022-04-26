import React, { useState, useEffect } from 'react'
import './AdminLogin.css'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import ApiClient from '../../../util/ApiClient';
import API from '../../../constant/API';
import { v4 as uuidv4 } from 'uuid';
import { getDataEvent } from '../../../util/commonDB';
import { userStore } from '../../../store/userStore';
import { useNavigate } from "react-router-dom";
import { Card } from 'react-bootstrap';

const AdminLogin = () => {

        const navigate = useNavigate();

        const [userEmail, setUserEmail] = useState('');
        const [userName, setUserName] = useState('');

        const userDetails = userStore.useState((s) => s.userDetails);

        useEffect(() => {

                console.log(userDetails)

        }, [userDetails]);

        const LoginUser = () => {
                navigate('/AdminPanel_Profile')

                var body = {
                        id: uuidv4(),
                        user_email: userEmail,
                        user_name: userName
                };

                ApiClient.POST(API.createUser, body).then((result) => {

                        console.log('successfully inserted')
                        //navigate('./FacultyList')

                }).catch(err => {
                        console.log(err)
                })
        }

        return (
                <div id="admin-background">
                        <div className='rounded px-4 py-4' id='custom-card'>
                                <div className='ml-auto mr-auto' id='setminwidth'>
                                        <div className='w-100 my-5 position-relative' >
                                                <div className='d-flex justify-content-center align-items-center '>
                                                        <img id='key_logo' src={require('../../../assets/images/Admin_Panel/Key.png')} />
                                                        <div className='d-flex flex-column ml-5' >
                                                                <h4 className='text-light font-weight-bold'>Segi Admin Panel</h4>
                                                                <p className='m-0 text-light'>Here is the Admin Panel for the Segi Website</p>
                                                        </div>
                                                </div>
                                        </div>
                                        {/* <div className=' ml-auto mr-auto pb-4'>
                                                <h4 className='text-center'>Login</h4>
                                        </div> */}
                                        <div className='mt-4' id='input_container'>
                                                <p className='m-0 pb-2' id='purple-theme'>Email</p>
                                                <input autoComplete='off' type="text" className='rounded' id='admin-input'
                                                        onChange={text =>
                                                                setUserEmail(text.target.value)
                                                        }
                                                />
                                        </div>
                                        <div className='mt-4' id='input_container'>
                                                <p className='m-0 pb-2' id='purple-theme'>Password</p>
                                                <input autoComplete='off' type="text" className='rounded' id='admin-input'
                                                        onChange={text =>
                                                                setUserName(text.target.value)
                                                        }
                                                />
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                                <button className='rounded' type="submit" id='admin-button'
                                                        onClick={() => {
                                                                LoginUser();
                                                        }}
                                                >Sign In</button>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default AdminLogin;

