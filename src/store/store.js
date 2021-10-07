import { createStore, combineReducers } from 'redux';

import counterReducer from './reducers/couterReducer';
import loginReducer from './reducers/loginReducer';

const rootReducer = combineReducers({counterReducer, loginReducer});

const store = createStore(rootReducer);

export default store;

console.log('store state...', store.getState());
console.log('store state...', store.getState());