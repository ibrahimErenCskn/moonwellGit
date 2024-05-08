import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { checkUser, login } from '../redux/slices/AuthSlice'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const dispatch = useDispatch()
    const { isLogedin } = useSelector((state) => state.auth)

    const navigation = useNavigate()
    const loginHandle = (e) => {
        e.preventDefault()
        dispatch(login({
            data: {
                email: e.target.elements.email.value,
                password: e.target.elements.password.value
            }
        }))
    }

    const userCheck = () => {
        dispatch(checkUser())
    }

    useEffect(() => {
        if (isLogedin) {
            navigation('/')
        }
    }, [])

    return (
        <div>
            <form onSubmit={(e) => loginHandle(e)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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
            <button onClick={() => userCheck()}>Check</button>
        </div>
    )
}
