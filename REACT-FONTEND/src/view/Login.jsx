import React from "react";
import { Link } from "react-router-dom";
import "./view.css";

function Login() {
    const loginUser = (e) => {
        e.preventDefault();
        console.log("login user form submited");
    };

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <form onSubmit={loginUser}>
                    <h1 className="title">Login into your account</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="password" />
                    <button type="submit" className="btn-login">
                        Login
                    </button>
                    <p>
                        Not Registerd?
                        <Link to="/signup">Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
