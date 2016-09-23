import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './containers/App';

const initialState = rootReducer(undefined, { type:null });
const preloadState = Object.assign({}, initialState);
const store = createStore(rootReducer, preloadState);

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app')
);
