import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './db';

export const createUser = (username, password)=>createUserWithEmailAndPassword(auth, username, password);
