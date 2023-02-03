import { createContext, useContext, useState } from "react";

// this object holds the data thats need to be passed to different components via the context API'S.
const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});
// THE CONTEXT API FUNCTIONAL COMPONENT.
export const ContextProvider = ({ children }) => {
    // this state will be used to update the context object.
    const [user, setUser] = useState({
        name:"olisa"
    });

    const [token, _setToken] = useState(null);

    // the function "Token" updates the _setToken.
    const setToken = (token) => {
        _setToken(token); // UPDATING THE TOKEN.

        //SAVING THE TOKEN TO THE LOCALSTORAGE TO AVOID LOSE OF TOKEN DATA IF PAGE IS REFRESHED, SO A TO KEEP USER AUTHENTICATED.
        if (!token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };
    return (
        <StateContext.Provider
            value={{
                user,
                token,
                setUser,
                setToken,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};
//exporting the context object with useContext.
export const UseStateContext = () => useContext(StateContext);
