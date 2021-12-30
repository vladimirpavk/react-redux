import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import { firebaseConfig } from './environment';

import { 
    populateFirebase,
    changeUsersList 
} 
from './initFirebaseUsers/initFirebaseUsers.js';

const firebaseApp = initializeApp(firebaseConfig);  

export const dbStore = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

console.log('Initializing users base...');
let newUserBase = changeUsersList();
populateFirebase(dbStore, auth, newUserBase);