//  createBrowserRouter
import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./view/Login";
import Signup from "./view/signup";
import User from "./view/user";
import NotFound from "./view/NotFound";
import GuestLayout from "./components/GuestLayout";
import DeafualtLayout from "./components/DeafualtLayout";
import Dashboard from "./view/Dashboard";

// creating of route for the need pages.
const router = createBrowserRouter([
    {
        // route to the defualtlayout.
        path: "/default",
        element: <DeafualtLayout />,
        children: [
            {
                path: "/default",
                element:<Navigate to="user" />
            },
            {
                path: "user",
                element: <User />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
        ],
    },
    // route to the guest layout this shows registration nd login page.
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "signup",
                element: <Signup />,
            },
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },

]);

export default router;
