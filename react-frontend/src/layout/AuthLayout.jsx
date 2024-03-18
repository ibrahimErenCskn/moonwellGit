import { Outlet } from 'react-router-dom';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AuthLayout() {
    const getUserInfo = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/getuser', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            const userInfo = response.data;
            console.log(userInfo?.status ? userInfo.status : null)
        } catch (error) {
            console.error(error);
            // Hata mesajı gösterin
        }
    };

    const navigate = useNavigate();

    return (
        <div>
            <Outlet />
        </div>
    )
}
