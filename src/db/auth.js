import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth';

import { auth } from './db';

onAuthStateChanged(auth,
    (loggedUser)=>{
        if(loggedUser){
            console.log('User logged in...')
        }
        else{
            console.log('User logged out...');
        }        
    }
)

export const createUser = (username, password)=>createUserWithEmailAndPassword(auth, username, password);
export const signInUser = (username, password)=>signInWithEmailAndPassword(auth, username, password);
export const signOutUser = ()=>signOut(auth);
