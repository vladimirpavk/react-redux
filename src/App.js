import { Fragment } from 'react';

import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

function App() {
  return (   
    <Fragment>
      <Header />
      <Auth />
      <UserProfile />
      <Counter />          
    </Fragment>     
  );
}

export default App;
