import React, { useState, useEffect } from 'react'
import './css/AdminLogin.css'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import ApiClient from '../util/ApiClient';
import API from '../constant/API';
import { v4 as uuidv4 } from 'uuid';
import { getDataEvent } from '../util/commonDB';
import { userStore } from '../store/userStore';
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

        const navigate = useNavigate();

        const [userEmail, setUserEmail] = useState('');
        const [userName, setUserName] = useState('');

        const userDetails = userStore.useState((s) => s.userDetails);

        useEffect(() => {

                console.log(userDetails)

        },[userDetails]);

        const LoginUser = () => {
                
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
                <div style={{
                        height: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        background: 'rgba(35, 32, 34, 0.7)'
                }}>

                <h1 style={{
                        color: 'white',

                }}>{}</h1>

                <input type="text" placeholder="Email"
                onChange={text =>
                        setUserEmail(text.target.value)
                } 
                />

                <input type="text" placeholder="Name"
                onChange={text =>
                        setUserName(text.target.value)
                } 
                />

                <button type="submit" 
                        style={{ width: '30%', 
                        backgroundColor: 'blue',

                }}
                        onClick={() => {
                                LoginUser();
                        }}
                >Sign In</button>
                
                </div>
        )
}

export default AdminLogin;

