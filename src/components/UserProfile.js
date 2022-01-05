import { connect } from 'react-redux';

import male from './public/male.png';
import female from './public/female.png';

import classes from './UserProfile.module.css';

const UserProfile = (props) => {
  return (
    <main className={classes.profile}>
      <h2>{props.userData.name.title}.{props.userData.name.first} {props.userData.name.last}</h2>
      {props.userData.gender==='male' ? <img alt = "male" src={male} /> : <img alt = "female" src={female} />}
      <div>
        <p>{props.userData.location.country}, {props.userData.location.state}, {props.userData.location.city}</p>
        <img src={props.userData.picture.large} alt="User"/>
      </div>
      <div>
        <h3>User privileges</h3>
        <ul>
          {props.userData.auth.includes(0) ? <li>Read any user's additional user information</li> : null}
          {props.userData.auth.includes(1) ? <li>Create new user</li> : null}
          {props.userData.auth.includes(2) ? <li>Delete user</li> : null}
        </ul>
      </div>
    </main>
  );
};

const mapStateToProps = (state)=>{  
  return{   
    'userData': state.loginReducer.userData
  }
}

export default connect(mapStateToProps, null)(UserProfile);

