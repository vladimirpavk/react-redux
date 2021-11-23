import { Fragment } from 'react';
import { connect } from 'react-redux';

import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

import { loginAction, logoutAction } from './store/reducers/loginSlice';

function App(props) {
  console.log('App', props);
  return (   
    <Fragment>
      {/* {
        props.isLoggedIn ?
        <Fragment>
            <Header/>
            <UserProfile />
        </Fragment> : <Auth />  
      } */}
      <Counter />          
    </Fragment>     
  );
}

const mapStateToProps = (state)=>{
  console.log('mapStateToProps', state);
  return{
    'isLoggedIn': state
  }
}

export default connect(mapStateToProps, null)(App);
