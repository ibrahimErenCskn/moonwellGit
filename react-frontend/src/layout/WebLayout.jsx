import { Outlet } from 'react-router-dom';
import React from 'react'

export default function WebLayout() {
    return (
        <div>
            <Outlet />
        </div>
    )
}
