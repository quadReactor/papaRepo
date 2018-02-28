import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import { connectRoutes } from 'redux-first-router';
import thunk from 'redux-thunk';

import routesMap from './routesMap';
import authenticator from './utils/authenticator';
import * as reducers from './reducers';

export default (history) => {
  const {
    reducer,
    middleware,
    enhancer,
  } = connectRoutes(history, routesMap, authenticator);

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  const rootReducer = combineReducers({ ...reducers, location: reducer });
  const middlewares = applyMiddleware(middleware, thunk, ReduxPromise);
  const enhancers = composeEnhancers(enhancer, middlewares);


  return createStore(rootReducer, enhancers);
};
