import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './reducers/couterReducer';
import loginReducer from './reducers/loginReducer';

const store = configureStore({
    reducer:{
        counterReducer: counterReducer,
        loginReducer: loginReducer
    }    
});

export default store;