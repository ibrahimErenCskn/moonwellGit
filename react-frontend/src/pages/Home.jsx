import React, { useEffect } from 'react'
import axios from 'axios';
import {jwtDecode} from 'jwt-decode'
export default function Home() {
    return (
        <div>
            <button>logout</button>
            <button>user info</button>
        </div>
    )
}
