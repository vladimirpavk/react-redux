import { createSlice } from '@reduxjs/toolkit';
import { collection, getDocs, query, where } from 'firebase/firestore';

import db from '../../db/db';

const INITIAL_STATE = {
    isLoggedIn: false,
    authLevels: []
}

const loginReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        
        
        default:{
            return state;
        }
    }    
}

const loginReducer = createSlice({
    name: 'login',
    INITIAL_STATE,
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

//login action creator
export const logInAC = (username, password)=>{
    return (dispatch)=>{
        const usersRef = collection(db, 'users');   
        const q = query(usersRef, where("username", "==", username), where("password", "==", password));
        getDocs(q).then(docs=>{          
          if(!docs.empty){
            docs.forEach(doc => {
              //if there is any, there is only one document    
              dispatch({
                  type: 'logIn',
                  value: doc.data()
              })
            })
          }    
        }).catch(e=>console.log(e));
    }
}

export const { loginAction, logoutAction } = loginReducer.actions;
export default loginReducer;