import { connect } from 'react-redux';
import { useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';

import db from '../db/db';
import PopulateDb from './PopulateDatabase/PopulateDatabase';

import { logInAC } from '../store/reducers/loginSlice';

import classes from './Auth.module.css';

const Auth = (props) => {
  const [showError, setShowError] = useState(false);

  const onFormSubmitted = (eventData)=>{
    eventData.preventDefault();    
    logInAC.target(eventData.target[0].value, eventData.target[1].value);
   /*  const usersRef = collection(db, 'users');    
    const q = query(usersRef, where("username", "==", eventData.target[0].value), where("password", "==", eventData.target[1].value));
    getDocs(q).then(docs=>{
      setShowError(docs.empty);
      if(!docs.empty){
        docs.forEach(doc => {
          //if there is any, there is only one document        
          props.login(doc.data());
        })
      }    
    }).catch(e=>console.log(e)); */
  }

  return (    
    <main className={classes.auth}>
      <section>
        <form onSubmit={onFormSubmitted}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button type="submit">Login</button>
          {
            showError ?<p className={classes.errorLabel}>* Login error. Please re-enter username and password.</p> : null
          }          
        </form>
        <PopulateDb />
      </section>
    </main>
  );
};

const mapDispatchToProps = (dispatch)=>{
    return{
      'login': (user)=>{
        dispatch({
          type: 'logIn',
          value: user
        })
      }
    }
}

const mapStateToProps = (state)=>{
   return{
     
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth);
