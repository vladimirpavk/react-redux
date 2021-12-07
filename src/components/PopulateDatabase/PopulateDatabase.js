import { addDoc, collection } from 'firebase/firestore';

import { dbStore } from '../../db/db';

import { randomUsers } from '../../assets/randomUsers';

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

         console.log(messedUsers.length);

         let detailedUsers = await Promise.all(messedUsers.map(
          async (messedUser) => {
            const createdUser = await createUser(messedUser.email, messedUser.login.password);             
            const detailedUser = {
                uid: createdUser.user.uid,
                ...messedUser
              }; 
              return detailedUser;                   
        }));

        console.log('Initializing user detail collection...', detailedUsers)

        detailedUsers.forEach(
          
        )
         /* messedUsers.forEach(
            user=>{
              createUser(user.email, user.login.password).then(
                registeredUser => {
                  return{
                    uid: registeredUser.user.uid,
                    details: user
                  }                                
                }
              ).then(
                detailedUser =>{
                  console.log(detailedUser);
                  addDoc(collection(dbStore, "userData"), detailedUser).then(
                    (dUser)=>console.log(dUser)
                  )
                })
            }
         ) */
  }
    return(
        <button onClick={populateDb}>Populate</button>
    )
}

export default PopulateDatabase;