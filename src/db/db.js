import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBza_8IYd4pwgQoBoBNzlITSVz_H2CYVws",
    authDomain: "meals-f92cb.firebaseapp.com",
    databaseURL: "https://meals-f92cb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "meals-f92cb",
    storageBucket: "meals-f92cb.appspot.com",
    messagingSenderId: "876325346027",
    appId: "1:876325346027:web:04c5f4288cf58685cbfcae"
});  

export const dbStore = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);