import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../redux/slices/AuthSlice'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const { registerMessage } = useSelector((state) => state.auth)
    const registerHandle = (e) => {
        e.preventDefault()
        dispatch(
            register(
                {
                    data: {
                        name: e.target.elements.name.value,
                        email: e.target.elements.email.value,
                        password: e.target.elements.password.value
                    }
                }
            )
        )
    }
    useEffect(() => {
        if (registerMessage === true) {
            navigation('/login')
        }
    }, [registerMessage])

    return (
        <div onSubmit={(e) => registerHandle(e)}>
            <form>
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
