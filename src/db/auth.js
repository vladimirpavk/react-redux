import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './db';

auth.onAuthStateChanged((usersInfo)=>console.log(usersInfo));

export const createUser = (username, password)=>createUserWithEmailAndPassword(auth, username, password);
