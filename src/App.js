import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { collection, addDoc } from "firebase/firestore"; 

import db from './db/db';

import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

function App(props) {
  console.log('App', db);

  /* useEffect(() => {  
    addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      }).then(
        (newDoc)=>console.group(newDoc)  
      ).catch(
        (error)=>console.log(error)
      );
  }, []); */

  return (   
    <Fragment>
      {
        props.isLoggedIn ?
        <Fragment>
            <Header />
            <UserProfile />
        </Fragment> : <Auth />  
      }
      <Counter />          
    </Fragment>     
  );
}

const mapStateToProps = (state)=>{
  return{
    'isLoggedIn': state.logIn.isLoggedIn
  }
}

export default connect(mapStateToProps, null)(App);
