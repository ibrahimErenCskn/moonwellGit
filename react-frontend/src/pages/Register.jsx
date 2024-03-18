import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const navigate = useNavigate();
    const register = async (event) => {
        try {
            event.preventDefault();
            console.log(event.target.elements.name.value)
            console.log(event.target.elements.email.value)
            console.log(event.target.elements.password.value)
            const response = await axios.post('http://127.0.0.1:8000/api/register', {
                name: event.target.elements.name.value,
                email: event.target.elements.email.value,
                password: event.target.elements.password.value
            });
            if (
                response.data?.status
            ) {
                navigate('/login')
            }
        } catch (error) {
            console.error(error);
            // Hata mesajı gösterin
        }
    };
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

    return (
        <div>
            <form onSubmit={(e) => register(e)}>
                <div className="form-group">
                    <label htmlFor="exampleInputName">Name</label>
                    <input name='name' type="text" className="form-control" id="exampleInputName" placeholder="Enter name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input name='password' type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
