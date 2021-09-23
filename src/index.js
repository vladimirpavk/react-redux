import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
//import MyStore from './store/index';
import MyStore from './store/store';

import './index.css';
import App from './App';

ReactDOM.render(<Provider store={MyStore}><App /></Provider>, document.getElementById('root'));
