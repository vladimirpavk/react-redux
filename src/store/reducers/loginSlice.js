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

export const { login, logout } = loginSlice.actions;
console.log('actions', loginSlice.actions);

//login action creator
export const loginAsync = (username, password)=>  
    dispatch=>{
        const usersRef = collection(db, 'users');   
        const q = query(usersRef, where("username", "==", username), where("password", "==", password));    
        getDocs(q).then(docs=>{           
          if(!docs.empty){
              console.log('docs not empty');
            docs.forEach(doc => {
              //if there is any, there is only one document 
              console.log(doc.data());
              dispatch(login(doc.data()));            
            })
          }    
        }).catch(e=>console.log(e));    
}

export default loginSlice.reducer;