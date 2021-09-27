import { connect } from 'react-redux';

import { loginActions } from '../store/reducers/loginSlice';
import classes from './Auth.module.css';

const Auth = (props) => {
  const onFormSubmitted = (eventData)=>{
    eventData.preventDefault();    
    props.login(eventData.target[0].value, eventData.target[1].value);
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
        </form>
      </section>
    </main>
  );
};

const mapDispatchToProps = (dispatch)=>{
    return{
      'login': (user, pass)=>{
        dispatch(loginActions.logIn({
          username: user,
          password: pass
        }))
      }
    }
}

const mapStateToProps = (state)=>{
  return{

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth);
