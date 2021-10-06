import { createStore, combineReducers } from 'redux';

import { firstReducer, secondReducer, thirdReducer  } from './reducers.js'

console.log(firstReducer, secondReducer, thirdReducer);

const rootReducer = combineReducers({firstReducer, secondReducer, thirdReducer});

const store = createStore(rootReducer);

console.log('store state...', store.getState());
console.log('store state...', store.getState());