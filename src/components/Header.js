import { connect } from 'react-redux';
import { loginActions } from '../store/reducers/loginSlice';

import classes from './Header.module.css';

const Header = (props) => {

  const logOutButtonClicked = ()=>{
    props.logOut();
  }

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

export default connect(null, mapDispatchToProps)(Header);
