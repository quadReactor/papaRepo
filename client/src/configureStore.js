import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import { connectRoutes } from 'redux-first-router';
import thunk from 'redux-thunk';

import routesMap from './routesMap';
import authenticator from './utils/authenticator';
import * as reducers from './reducers';
import * as actionCreators from './actions/types';

export default (history) => {
  const {
    reducer,
    middleware,
    enhancer,
  } = connectRoutes(history, routesMap);

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionCreators })
    : compose;

  const rootReducer = combineReducers({ ...reducers, location: reducer });
  const middlewares = applyMiddleware(middleware, thunk, ReduxPromise);
  const enhancers = composeEnhancers(enhancer, middlewares);


  return createStore(rootReducer, enhancers);
};
