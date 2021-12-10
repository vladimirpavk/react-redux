import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import db from '../db/db';
import PopulateDb from './PopulateDatabase/PopulateDatabase';

import { loginAsync } from '../store/reducers/loginSlice';

import classes from './Auth.module.css';

const Auth = (props) => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setShowError(props.loginFailed);
  }, [props.loginFailed])

  const onFormSubmitted = (eventData)=>{
    eventData.preventDefault();    
    props.loginAsync(eventData.target[0].value, eventData.target[1].value);
  }

  return (    
    <main className={classes.auth}>
      <section>
        <form onSubmit={onFormSubmitted}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' defaultValue='vladimirpavk@fite-firma.com' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' defaultValue='ncc1701a' />
          </div>
          <button type="submit">Login</button>
          {
            showError ?<p className={classes.errorLabel}>* Login error. Please re-enter username and password.</p> : null
          }          
        </form>
       { <PopulateDb />}
      </section>
    </main>
  );
};

const mapDispatchToProps = (dispatch)=>{
    return{
      'loginAsync': (username, password)=>{
        dispatch(loginAsync(username, password))
      }
    }
}

const mapStateToProps = (state)=>{
   return{
     'loginFailed': state.loginReducer.loginFailed
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth);
