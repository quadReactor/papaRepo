import React, {Component} from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/app.jsx'

render(<App />, document.getElementById('app'));