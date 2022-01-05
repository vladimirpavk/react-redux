import { Fragment } from 'react';
import { connect } from 'react-redux';

import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

function App(props) {

  const listAllUsersClicked = ()=>{
    console.log('listAllUsersClicked');
  }

  const deleteUser = () =>{
    console.log('deleteUser');
  }

  const createNewUser = ()=>{
    console.log('createNewUser');
  }

  return (   
    <Fragment>
      {
        props.isLoggedIn ?
        <Fragment>
            <Header
              deleteUser={deleteUser}
              listAllUsers={listAllUsersClicked}
              createNewUser={createNewUser}
            />
            <UserProfile />
        </Fragment> : <Auth />  
      }          
    </Fragment>     
  );
}

const mapStateToProps = (state)=>{ 
  return{
    'isLoggedIn': state.loginReducer.isLoggedIn
  }
}

export default connect(mapStateToProps, null)(App);
