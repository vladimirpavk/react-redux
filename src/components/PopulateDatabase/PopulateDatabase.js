import { collection, addDoc } from 'firebase/firestore';

import db from '../../db/db';

import { randomUsers } from '../../assets/randomUsers';

const getRandomInt = (max, base) => {
  return Math.floor(Math.random() * max) + base;
}

const PopulateDatabase = (props)=>{
    const populateDb = ()=>{
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

         //console.log(messedUsers);

        messedUsers.forEach(user=>{
          addDoc(collection(db, "randomUsers"), user).then(doc=>console.log(doc)).catch(e=>console.error(e))
        });
    }
    return(
        <button onClick={populateDb}>Populate</button>
    )
}

export default PopulateDatabase;