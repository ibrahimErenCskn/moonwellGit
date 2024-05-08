import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const checkUser = createAsyncThunk(
    'users/checkUser',
    async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/getuser', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            return response.data && true
        } catch (error) {
            return false
        }
    },
)

export const login = createAsyncThunk(
    'users/login',
    async ({ data }) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', data);
            return response.data
        } catch (error) {
            return error.response.data
        }
    },
)

export const register = createAsyncThunk(
    'users/register',
    async ({ data }) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', data);
            //console.log(data)
            return response.data
        } catch (error) {
            return error.response.data
        }
    },
)

export const logout = createAsyncThunk(
    'users/logout',
    async () => {
        try {
            return true
        } catch (error) {
            return error.response.data
        }
    },
)


const initialState = {
    userData: {},
    registerMessage: false,
    isLogedin: false,
    isLoading: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            //Login
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                if (action.payload?.status) {
                    state.userData = action.payload
                    state.isLoading = false
                    localStorage.setItem('token', state.userData?.authorization.token)
                    state.isLogedin = true
                }
                else {
                    state.isLogedin = action.payload.message
                }
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false
                console.log('Rejected')
            })
            //Register
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                if (action.payload?.status) {
                    state.registerMessage = action.payload.status
                    console.log(action.payload.status)
                }
                else {
                    state.registerMessage = action.payload.message
                }
            })
            .addCase(register.rejected, (state) => {
                state.isLoading = false
                console.log('Rejected')
            })
            //Check User
            .addCase(checkUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(checkUser.fulfilled, (state, action) => {
                state.isLogedin = action.payload
                state.isLoading = false
                console.log(state.isLogedin)
            })
            .addCase(checkUser.rejected, (state) => {
                state.isLoading = false
                console.log('Rejected')
            })
    }
})

// Action creators are generated for each case reducer function
export const { } = authSlice.actions

export default authSlice.reducer