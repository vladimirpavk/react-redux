import { createSlice } from '@reduxjs/toolkit';
import { collection, getDocs, query, where } from 'firebase/firestore';

import db from '../../db/db';

const INITIAL_STATE = {
    isLoggedIn: false,
    loginFailed: false,
    userData: {}
}

const loginSlice = createSlice({
    name: 'login',
    initialState: INITIAL_STATE,
    reducers: {
        login(state, action) {
            return {
                isLoggedIn: true,
                loginFailed: false,
                userData: action.payload
            }
        },
        logout(state, action){
            return {
                isLoggedIn: false,
                loginFailed: false,
                userData: {}
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
        const usersRef = collection(db, 'randomUsers');   
        const q = query(usersRef, where("login.username", "==", username), where("login.password", "==", password));    
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