import { 
    setDoc,
    doc
   } from 'firebase/firestore';

import {
    createUserWithEmailAndPassword
} from 'firebase/auth'
  
import { randUsers } from './assets/randomUsers.js';

import { firebaseDefaultUserPassword } from '../environment.js';

const getRandomInt = (max, base) => {
return Math.floor(Math.random() * max) + base;
}

let userCount = 1;

export const changeUsersList = ()=>{
    let newUsers = randUsers.map(user=>{
        let newGenList = [];
        for(let y=0; y<getRandomInt(3, 1); y++){
            let newRandomNumber = getRandomInt(9, 0);
            while(newGenList.indexOf(newRandomNumber)!==-1) newRandomNumber = getRandomInt(9, 0);
            newGenList.push(newRandomNumber);
        }
        const {login, dob, registered, id, ...reducedUser} = user; 
        return {
            auth: newGenList,
            ...reducedUser
        }
    });
    return newUsers;
}

export const populateFirebase = async (dbStore, firebaseAuth, userBase)=>{
    console.log('Creating Firebase app users...');
    let detailedUsers = await Promise.all(userBase.map(
        async (messedUser) => {
            try{            
                const createdUser = await createUserWithEmailAndPassword(firebaseAuth, messedUser.email, firebaseDefaultUserPassword);             
                const { password, ...restOfUser } = messedUser;
                return {
                    uid: createdUser.user.uid,
                    ...restOfUser
                };        
            }
            catch(exception){
                console.log('Something bad happened when writing additional users informations...', exception);
            }
        }));
        
        console.log('Storing additional users information');
        detailedUsers.forEach(
            async (detailedUser)=>{
                console.log(userCount++);
                try{            
                    await setDoc(doc(dbStore, 'usersDetails', detailedUser.uid), detailedUser);                    
                }
                catch(exception){
                    console.log('Something bad happened when writing additional users informations...', exception);
                }
                           
            }
        );
        console.log('All ok... Firebase initialized');
}