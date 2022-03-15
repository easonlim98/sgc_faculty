import React, { useState, useEffect } from 'react'
import './css/AdminLogin.css'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import ApiClient from '../util/ApiClient';
import API from '../constant/API';
import { v4 as uuidv4 } from 'uuid';
import { getDataEvent } from '../util/commonDB';
import { userStore } from '../store/userStore';

const AdminLogin = () => {

        const [userEmail, setUserEmail] = useState('');
        const [userName, setUserName] = useState('');

        const userDetails = userStore.useState((s) => s.userDetails);

        useEffect(() => {
               console.log(userDetails);
        },[]);

        const createUser = () => {
                var body = {
                        id: uuidv4(),
                        user_email: userEmail,
                        user_name: userName
                };
                ApiClient.POST(API.createUser, body).then((result) => {
                        //console.log(result)

                                console.log('successfully inserted')

                }).catch(err => {
                        console.log(err)
                })
        }

        return (
                <div className="login">
                <h1>Login</h1>

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
                <button type="submit" className="btn btn-primary btn-block btn-large"
                        onClick={() => {
                                createUser();
                        }}
                >Create</button>
                </div>
        )
}

export default AdminLogin;

