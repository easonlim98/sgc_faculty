import React from 'react'
import './css/Admin_Login.css'
import 'bootstrap/dist/css/bootstrap.css';

const Admin_Login = () => {
        return (
                <div class="login">
                        <h1>Login</h1>
                        <form method="post">
                                <input type="text" name="u" placeholder="Username" required="required" />
                                <input type="password" name="p" placeholder="Password" required="required" />
                                <button type="submit" class="btn btn-primary btn-block btn-large">Login</button>
                                <br />
                                <button type="submit" class="btn btn-primary btn-block btn-large">Register</button>
                        </form>
                </div>
        )
}

export default Admin_Login;

