import { collection, addDoc } from 'firebase/firestore';

import Users from '../../assets/import';
import db from '../../db/db';

const PopulateDatabase = (props)=>{
    const populateDb = ()=>{
      /*   Users.forEach(user => {
            //console.log(user)      ;
          fetch('https://meals-f92cb-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
          }).then(
            (response)=>response.json()
          ).then(
            data=>console.log(data)
          ).catch(
            (ex)=>console.log('Error', ex)
          )});     */
/*           Users.forEach(user=>{
            addDoc(collection(db, "users"), user).then(doc=>console.log(doc)).catch(e=>console.error(e))
          }); */
          
         /*  Users.forEach(user=>{
            addDoc(collection(db, "randomUsers"), user).then(doc=>console.log(doc)).catch(e=>console.error(e))
          }); */

          
    }
    return(
        <button onClick={populateDb}>Populate</button>
    )
}

export default PopulateDatabase;