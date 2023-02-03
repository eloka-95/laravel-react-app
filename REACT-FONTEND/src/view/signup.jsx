import React from "react";
import { Link } from "react-router-dom";
import "./view.css";

function Signup() {
    const signupUser = (e) => {
        e.preventDefault();
        console.log("login user form submited");
    };

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <form onSubmit={signupUser}>
                    <h1 className="title">Create account</h1>
                    <input type="email" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <button type="submit" className="btn-login">
                        Signup
                    </button>
                    <p>
                        Already Registerd?
                        <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;