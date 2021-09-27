import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoggedIn: false
    },
    reducers:{
        logIn: (state, action)=>{            
            console.log(action.payload.username, action.payload.password);
            return {
                isLoggedIn: true
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