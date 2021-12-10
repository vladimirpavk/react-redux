import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';

import { auth } from './db';

onAuthStateChanged(auth,
    (loggedUser)=>console.log(loggedUser)
)

export const createUser = (username, password)=>createUserWithEmailAndPassword(auth, username, password);
export const signInUser = (username, password)=>signInWithEmailAndPassword(auth, username, password);
