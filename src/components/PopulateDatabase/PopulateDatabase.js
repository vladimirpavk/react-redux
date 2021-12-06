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

         let user = 0;

         createUser(messedUsers[0].email, messedUsers[0].login.password).then(
              registeredUser => {
                return{
                  uid: registeredUser.user.uid,
                  details: messedUsers[0]
                }                                
              }
            ).then(
              detailedUser =>{
                console.log(detailedUser);
                addDoc(collection(dbStore, "userData"), detailedUser).then(
                  (dUser)=>console.log(dUser)
                )
            });                

            createUser(messedUsers[1].email, messedUsers[1].login.password).then(
              registeredUser => {
                return{
                  uid: registeredUser.user.uid,
                  details: messedUsers[1]
                }                                
              }
            ).then(
              detailedUser =>{
                console.log(detailedUser);
                addDoc(collection(dbStore, "userData"), detailedUser).then(
                  (dUser)=>console.log(dUser)
                )
            });      

            createUser(messedUsers[2].email, messedUsers[2].login.password).then(
              registeredUser => {
                return{
                  uid: registeredUser.user.uid,
                  details: messedUsers[2]
                }                                
              }
            ).then(
              detailedUser =>{
                console.log(detailedUser);
                addDoc(collection(dbStore, "userData"), detailedUser).then(
                  (dUser)=>console.log(dUser)
                )
            });      

       /*   messedUsers.forEach(
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

/*         messedUsers.forEach(async (user)=>{
          try{
            const registeredUser = await createUser(user.email, user.login.password);
            console.log(registeredUser);

            const userDetails = {
              uid: registeredUser.user.uid,
              details: user
            };

            try{
              console.log('Add user details', userDetails);
              addDoc(collection(db, "userData"), userDetails).then(
                (newUser)=>console.log('newUser', newUser)
              ).catch(
                (exception)=>console.log(exception)
              )              
            }
            catch(newuserDetailDocError){
              console.error(newuserDetailDocError);
            }
          }
          catch(registerUserError){
            console.error(registerUserError);
          }                                      
    }); */
  }
    return(
        <button onClick={populateDb}>Populate</button>
    )
}

export default PopulateDatabase;