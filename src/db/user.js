import {
    collection,
    query,
    where,
    getDocs
} from 'firebase/firestore';

import { dbStore } from './db';

const userDetailsRef = collection(dbStore, 'usersDetails');

export const findUserDetailByUID = (uid)=>{
    //const userDetailsRef = collection(dbStore, 'usersDetails');
    const userQuery = query(userDetailsRef, where('uid', '==', uid));
    
    return getDocs(userQuery).then(
        documents=>{
            if(!documents.empty){
                //if there is any, there is only one document 
               return documents.docs[0].data();                     
            }
            else
            {
                //integrity error, user is firebase authorized but user details does not exist   
                return null;
            }
        }
    );
}

export const getAllUsersDetails = async ()=>{
    const querySnapshot = await getDocs(userDetailsRef);
    querySnapshot.forEach(
        (userDetail)=>console.log(userDetail)
    )
}