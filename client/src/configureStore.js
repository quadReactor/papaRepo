import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import { connectRoutes } from 'redux-first-router';

import routesMap from './routesMap';
import options from './options';
import requireAuth from './utils/authenticated';
import * as reducers from './reducers';
import * as actionCreators from './actions/types';

export default (history) => {
  const {
    reducer,
    middleware,
    enhancer,
  } = connectRoutes(history, routesMap, requireAuth);

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionCreators })
    : compose;

  const rootReducer = combineReducers({ ...reducers, location: reducer });
  const middlewares = applyMiddleware(middleware, ReduxPromise);
  const enhancers = composeEnhancers(enhancer, middlewares);


  return createStore(rootReducer, enhancers);
};
