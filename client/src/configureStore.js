import { createStore, applyMiddleware } from 'redux';
import { enhancer, middleware as routesMiddleware } from './route/routes.js';
import rootReducer from './reducer';
import { compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  enhancer, applyMiddleware(routesMiddleware),
);

const store = createStore(
  rootReducer,
  enhancers,
);

export default store;
