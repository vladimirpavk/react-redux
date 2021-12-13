import { createSlice } from '@reduxjs/toolkit';

import { 
    signInUser,
    signOutUser 
} from '../../db/auth';
import { findUserDetailByUID } from '../../db/user';

const INITIAL_STATE = {
    isLoggedIn: false,
    loginFailed: false,
    loginFailedErrorText: '',
    userData: {}
}

const loginSlice = createSlice({
    name: 'login',
    initialState: INITIAL_STATE,
    reducers: {
        login(state, action) {
            return {
                ...state,
                isLoggedIn: true,
                loginFailed: false,
                loginFailedErrorText: '',
                userData: action.payload
            }
        },
        logout(state){
            return {
                ...state,
                isLoggedIn: false,
                loginFailed: false,
                loginFailedErrorText: '',
                userData: {}
            };
        },
        loginFailed(state, action){
            return{
                ...state,
                loginFailed: true,
                loginFailedErrorText: action.payload
            }
        }
    }           
});

export const { login, logout, loginFailed } = loginSlice.actions;

export const logOutAsync = ()=>    
    (dispatch)=>signOutUser().then(()=>dispatch(logout()))

export const loginAsync = (username, password)=>    
    (dispatch)=>{
        console.log(username, password);
        signInUser(username, password).then(
            (userCredential)=>{
                //console.log(userCredential);
                findUserDetailByUID(userCredential.user.uid).then(
                    (detailedUser)=>{
                        console.log(detailedUser);
                        dispatch(login(detailedUser));
                    }
                )
                //dispatch(login())
            }
        ).catch(
            (error)=>{
                //console.log('Something bad happened...', error.code, error.message)
                dispatch(loginFailed(error.message));
            }
        )
    }



export default loginSlice.reducer;