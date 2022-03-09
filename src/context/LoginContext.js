import React, { createContext, useState } from 'react';
import { getUserFromCookie } from '../cookies/cookies';

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
    const cookieUserData = getUserFromCookie();
    const [userData, dispatchUserData] = useState(cookieUserData || { user: null, token: "" });

    const [loginMode, setloginMode] = useState(false)


    return (
        <LoginContext.Provider value={{ userData, dispatchUserData, loginMode, setloginMode }}>
            {props.children}
        </LoginContext.Provider>
    );
};

export default LoginContextProvider;