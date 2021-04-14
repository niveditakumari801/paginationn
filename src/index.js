import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
// import { createStore } from 'redux';
import {Provider} from 'react-redux'
import Store from './Store';

// const reduxLogger = require('redux-logger')
// const applyMiddleware = redux.applyMiddleware

// const store= createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store ={Store}>
    <App />
  </Provider>,
  
  document.getElementById('root')
);


reportWebVitals();
