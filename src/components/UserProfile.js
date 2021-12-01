import { connect } from 'react-redux';

import classes from './UserProfile.module.css';

const UserProfile = (props) => {
  return (
    <main className={classes.profile}>
      <h2>{props.userData.name.title}.{props.userData.name.first} {props.userData.name.last}</h2>
      <div>
        <p>{props.userData.location.country}, {props.userData.location.state}, {props.userData.location.city}</p>
        <img src={props.userData.picture.large} alt="User"/>

      </div>
    </main>
  );
};

const mapStateToProps = (state)=>{  
  console.log(state.loginReducer.userData);
  return{   
    'userData': state.loginReducer.userData
  }
}

export default connect(mapStateToProps, null)(UserProfile);

