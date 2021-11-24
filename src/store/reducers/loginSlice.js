import { createSlice } from '@reduxjs/toolkit';
import { collection, getDocs, query, where } from 'firebase/firestore';

import db from '../../db/db';

const INITIAL_STATE = {
    isLoggedIn: false,
    authLevels: []
}

const loginSlice = createSlice({
    name: 'login',
    initialState: INITIAL_STATE,
    reducers: {
        login(state, action) {
            return {
                isLoggedIn: true,
                authLevels: action.value.auth
            }
        },
        logout(state, action){
            return {
                isLoggedIn: false,
                authLevels: []
            };
        }
    }           
});

export const { loginAction, logoutAction } = loginSlice.actions;

//login action creator
export const loginAsync = (username, password)=>  
    dispatch=>{
        console.log('dispatch');
        const usersRef = collection(db, 'users');   
        const q = query(usersRef, where("username", "==", username), where("password", "==", password));
        console.log(q);
        getDocs(q).then(docs=>{ 
          console.log(docs);
          if(!docs.empty){
            docs.forEach(doc => {
              //if there is any, there is only one document 
              dispatch(loginAction(doc.data()));            
            })
          }    
        }).catch(e=>console.log(e));    
}

export default loginSlice.reducer;