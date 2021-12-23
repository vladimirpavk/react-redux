import { 
    setDoc,
    doc
   } from 'firebase/firestore';
  
import { dbStore } from '../../db';
import { createUser } from '../../aut.';
import { randomUsers } from '../../../assets/randomUsers';

const getRandomInt = (max, base) => {
return Math.floor(Math.random() * max) + base;
}

export const populateDb = async ()=>{
    const messedUsers = randomUsers.map(user=>{
        let newGenList = [];
        for(let y=0; y<getRandomInt(3, 1); y++){
            let newRandomNumber = getRandomInt(9, 0);
            while(newGenList.indexOf(newRandomNumber)!==-1) newRandomNumber = getRandomInt(9, 0);
            newGenList.push(newRandomNumber);
        }
        return {
            auth: newGenList,
            password: 'proba1pass',
            ...user
        }
    });

    console.log(messedUsers);


 /*    let detailedUsers = await Promise.all(messedUsers.map(
    async (messedUser) => {
        const createdUser = await createUser(messedUser.email, messedUser.login.password);             
        const detailedUser = {
            uid: createdUser.user.uid,
            ...messedUser
        };               
        return detailedUser;                   
    }));


    console.log('Initializing user detail collection...', messedUsers);

    detailedUsers.forEach(
    async (detailedUser)=>{
        //const usersDetailsDocument = await addDoc(collection(dbStore, 'usersDetails'), detailedUser);
        const usersDetailsDocument = await setDoc(doc(dbStore, 'usersDetails', detailedUser.uid), detailedUser);
        console.log(usersDetailsDocument);
    }
    ); */
}