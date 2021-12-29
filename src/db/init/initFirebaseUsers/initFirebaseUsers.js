import { 
    setDoc,
    doc
   } from 'firebase/firestore';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'
  
import { randomUsers } from './assets/randomUsers.js';

const getRandomInt = (max, base) => {
return Math.floor(Math.random() * max) + base;
}

export const changeUsersList = ()=>{
    randomUsers.map(user=>{
        let newGenList = [];
        for(let y=0; y<getRandomInt(3, 1); y++){
            let newRandomNumber = getRandomInt(9, 0);
            while(newGenList.indexOf(newRandomNumber)!==-1) newRandomNumber = getRandomInt(9, 0);
            newGenList.push(newRandomNumber);
        }
        const {login, dob, registered, id, ...reducedUser} = user;
        return {
            auth: newGenList,
            password: 'try1pass',
            ...reducedUser
        }
    });
}

export const populateFirebase = async (dbStore, firebaseAuth)=>{
    let detailedUsers = await Promise.all(randomUsers.map(
        async (messedUser) => {
            const createdUser = await createUserWithEmailAndPassword(firebaseAuth, messedUser.email, messedUser.password);             
            return {
                uid: createdUser.user.uid,
                ...messedUser
            };        
        }));
    
        detailedUsers.forEach(
        async (detailedUser)=>{
            //const usersDetailsDocument = await addDoc(collection(dbStore, 'usersDetails'), detailedUser);
            const usersDetailsDocument = await setDoc(doc(dbStore, 'usersDetails', detailedUser.uid), detailedUser);
            console.log(usersDetailsDocument);
        }
        );
}

export const populateFirebaseX = (dbStore, firebaseAuth) =>{
    signInWithEmailAndPassword(firebaseAuth, 'vladimirpavk@fite-firma.com', 'proba1pass').then(
        (signedIn)=>{
            console.log('User signed in...', signedIn);

            randomUsers.map(
                async (randomUser)=>{
                    try{
                        const createdUser = await createUserWithEmailAndPassword(firebaseAuth, randomUser.email, randomUser.login);
                        console.log(createdUser);
                        try{
                            const usersDetailsDocument = await setDoc(doc(dbStore, 'usersDetails', createdUser.uid), createdUser);
                            console.log(usersDetailsDocument);
                        }
                        catch(exception){
                            console.log('usersDetailsDocument exception...');
                        }
                    }
                    catch(exception){
                        console.log('createUser exception...', exception);
                    }
                     
                }
            )
        }
    )
}