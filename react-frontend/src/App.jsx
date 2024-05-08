import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import WebLayout from './layout/WebLayout'


export default function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={WebLayout()} >
                    <Route path='home' element={Home()} />
                </Route>
                <Route path='/login' element={Login()} />
                <Route path='/register' element={Register()} />
            </Routes>
        </>
    )
}
