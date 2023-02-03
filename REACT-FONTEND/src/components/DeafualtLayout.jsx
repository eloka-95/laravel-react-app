import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { UseStateContext } from "../Context/ContextProvider";
import "./deafualtlayout.css";

function DeafualtLayout() {
    // destructuring the values in usestatecontext.
    const { user, token } = UseStateContext();
    //protecting unauthorized user from accessing this page.
    if (!token) {
        return <Navigate to="/login" />;
    }
    const LogoutUser = (e) => {
        e.preventDefault();
    };
    return (
        <div id="defualtlayout">
            <aside>
                <Link to="user">User</Link>
                <Link to="dashboard">Dashboard</Link>
            </aside>
            <div className="header_section">
                <header>
                    <div>Header</div>
                    <div>
                        {user.name}
                        <button className="btn-logout" onClick={LogoutUser}>
                            Logout
                        </button>
                    </div>
                </header>
            </div>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default DeafualtLayout;
