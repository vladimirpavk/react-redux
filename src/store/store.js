import { configureStore, combineReducers } from '@reduxjs/toolkit';

import counterReducer from './reducers/counterSlice';
import loginReducer from './reducers/loginSlice';

console.log(loginReducer);

const store = configureStore({
    reducer: {        
            'loginReducer': loginReducer,
            'counterReducer': counterReducer                  
    }    
});

export default store;