import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoggedIn: false
    },
    reducers:{
        logIn: (state, payload)=>{

            //console.log('Credentials valid.', payload.username, payload.password);
            console.log(payload.payload.username, payload.payload.password);
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
console.log(loginSlice);

export const loginActions = loginSlice.actions
export default loginSlice.reducer;