import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);

    const setAuth = (newIsLoggedIn, newToken) => {
        setIsLoggedIn(newIsLoggedIn);
        setToken(newToken);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, token, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
