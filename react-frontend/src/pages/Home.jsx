import React from 'react'
import axios from 'axios';

export default function Home() {
    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload()
    };


    const getUserInfo = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/getuser', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            const userInfo = response.data;
            console.log(userInfo)
        } catch (error) {
            console.error(error);
            // Hata mesajı gösterin
        }
    };
    return (
        <div>
            <button onClick={() => logout()}>logout</button>
            <button onClick={() => getUserInfo()}>user info</button>
        </div>
    )
}
