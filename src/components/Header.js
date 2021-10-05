import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { loginActions } from '../store/reducers/loginSlice';

import classes from './Header.module.css';

const Header = (props) => {
  const [authMenu, setauthMenu] = useState('');

  const logOutButtonClicked = ()=>{   
    console.log(props.authLevels);
    //props.logOut();
  }

  useEffect(() => {
    let AuthMenu = props.authLevels.map(authLevel=>{  
      let retValue;
      switch(authLevel){
        case(0):{
          retValue = <li key={Math.random()}>Auth0</li>
          break;
        }
        case(1):{
          retValue = <li key={Math.random()}>Auth1</li>
          break;
        }
        case(2):{
          retValue = <li key={Math.random()}>Auth2</li>
          break;
        }
        case(3):{
          retValue = <li key={Math.random()}>Auth3</li>
          break;
        }
        case(4):{
          retValue = <li key={Math.random()}>Auth4</li>
          break;
        }
        case(5):{
          retValue = <li key={Math.random()}>Auth5</li>
          break;
        }
        case(6):{
          retValue = <li key={Math.random()}>Auth6</li>
          break;
        }
        case(7):{
          retValue = <li key={Math.random()}>Auth7</li>
          break;
        }
        case(8):{
          retValue = <li key={Math.random()}>Auth8</li>
          break;
        }
        case(9):{
          retValue = <li key={Math.random()}>Auth9</li>
          break;
        }
        default:{
          break;
        }
      }
      return retValue;
    });  
    setauthMenu(AuthMenu);
  }, [props.authLevels])
 
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logOutButtonClicked}>Logout</button>
          </li>        
          {
            authMenu
          }
        </ul>
      </nav>
    </header>
  );
};

const mapDispatchToProps = (dispatch)=>{
  return{    
    'logOut': ()=>{
      dispatch(loginActions.logOut());
    }
  }
}

const mapStateToProps = (state)=>{
  return{
    'authLevels': state.logIn.authLevels
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
