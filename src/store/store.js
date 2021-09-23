import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './reducers/counterSlice';
import loginReducer from './reducers/loginSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        logIn: loginReducer
    }
});

export default store;