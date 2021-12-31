import { 
  addDoc,
  collection,
  setDoc,
  doc
 } from 'firebase/firestore';

import { dbStore } from '../../db/db';

import { randomUsers } from '../../db/init/initFirebaseUsers/assets/randomUsers';

import { createUser } from '../../db/auth';

const getRandomInt = (max, base) => {
  return Math.floor(Math.random() * max) + base;
}

const PopulateDatabase = (props)=>{

    const populateDb = async ()=>{
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


        let detailedUsers = await Promise.all(messedUsers.map(
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
        );
  }
    return(
        <button onClick={populateDb}>Populate</button>
    )
}

export default PopulateDatabase;