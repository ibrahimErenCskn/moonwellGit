import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const useAuth = () => {
    const { isLoggedIn, token, setAuth } = useContext(AuthContext);
    return { isLoggedIn, token, setAuth };
};

export default useAuth;