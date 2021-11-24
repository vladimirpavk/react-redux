import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './reducers/counterSlice';
import loginReducer from './reducers/loginSlice';

const store = configureStore({
    reducer: {        
            'loginReducer': loginReducer,
            'counterReducer': counterReducer                  
    }    
});

export default store;