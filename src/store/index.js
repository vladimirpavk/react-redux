import { createStore } from 'redux';

import CounterReducer from './reducers/counter';

const store = createStore(CounterReducer);

export default store;