import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import App from './components/app.jsx';
import allReducers from './reducers/index'
import { connectRoutes } from 'redux-first-router'

const store = createStore(allReducers);

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'));