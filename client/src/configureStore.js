import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
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

  const rootReducer = combineReducers({ ...reducers, location: reducer });
  const middlewares = applyMiddleware(middleware, thunk);
  const enhancers = composeEnhancers(enhancer, middlewares);


  return createStore(rootReducer, enhancers);
};


const composeEnhancers = (...args) =>
  typeof window !== 'undefined'
    ? composeWithDevTools({})(...args)
    : compose(...args)

