import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import { firebaseConfig } from './environment';

const firebaseApp = initializeApp(firebaseConfig);  

export const dbStore = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);