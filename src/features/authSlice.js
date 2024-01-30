import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        profilePicture: null,
        localId: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.email,
            state.token = action.payload.idToken  
            state.localId = action.payload.localId      
        },
        clearUser: state => {
            state.user = null,
            state.token = null
            state.profilePicture = null
            state.localId = null       
        },
        setProfilePicture: (state, action) => {
            state.profilePicture = action.payload
        }
    }
})

export const {setUser, clearUser, setProfilePicture} = authSlice.actions

export default authSlice.reducer