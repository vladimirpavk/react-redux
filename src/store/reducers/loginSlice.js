import { createSlice } from '@reduxjs/toolkit';
import { collection, getDocs, query, where } from 'firebase/firestore';

import db from '../../db/db';

const INITIAL_STATE = {
    isLoggedIn: false,
    loginFailed: false,
    authLevels: []
}

const loginSlice = createSlice({
    name: 'login',
    initialState: INITIAL_STATE,
    reducers: {
        login(state, action) {
            return {
                isLoggedIn: true,
                loginFailed: false,
                authLevels: action.payload.auth
            }
        },
        logout(state, action){
            return {
                isLoggedIn: false,
                loginFailed: false,
                authLevels: []
            };
        },
        loginFailed(state){
            return{
                ...state,
                loginFailed: true
            }
        }
    }           
});

export const { login, logout, loginFailed } = loginSlice.actions;

//login action creator
export const loginAsync = (username, password)=>  
    dispatch=>{
        const usersRef = collection(db, 'users');   
        const q = query(usersRef, where("username", "==", username), where("password", "==", password));    
        getDocs(q).then(docs=>{           
          if(!docs.empty){
            docs.forEach(doc => {
              //if there is any, there is only one document 
              dispatch(login(doc.data()));            
            })
          }   
          else{              
            dispatch(loginFailed());
          } 
        }).catch(e=>{
            console.error(e);
        });    
}

export default loginSlice.reducer;