import { Fragment } from 'react';
import { connect } from 'react-redux';

import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

function App(props) {
  return (   
    <Fragment>
      {
        props.isLoggedIn ?
        <Fragment>
            <Header/>
            <UserProfile />
        </Fragment> : <Auth />  
      }
      <Counter />          
    </Fragment>     
  );
}

const mapStateToProps = (state)=>{ 
  return{
    'isLoggedIn': state.loginReducer.isLoggedIn
  }
}

export default connect(mapStateToProps, null)(App);
