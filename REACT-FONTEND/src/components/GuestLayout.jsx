import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UseStateContext } from '../Context/ContextProvider';

function GuestLayout(props) {
    const {token} = UseStateContext();
    if (token) {
        return <Navigate to="/default" />
    }
    return (
        <div>
                <Outlet />
        </div>
    );
}

export default GuestLayout;