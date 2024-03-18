import { Outlet } from 'react-router-dom';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function WebLayout() {
    const isLoggedIn = () => {
        return !!localStorage.getItem('token');
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn()) {
            navigate('/login');
        }
    }, [localStorage.getItem('token')])
    return (
        <div>
            <Outlet />
        </div>
    )
}
