import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoggedIn: false,
        authLevels: []
    },
    reducers:{
        logIn: (state, action)=>{            
            console.log(action.payload.user);
            return {
                isLoggedIn: true,      
                authLevels: action.payload.user.auth          
            }
        },
        logOut: (state)=>{
            console.log('Logged out...');
            return {
                isLoggedIn: false
            }
        }
    }
});

export const loginActions = loginSlice.actions
export default loginSlice.reducer;