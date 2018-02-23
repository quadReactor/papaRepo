import { createStore, applyMiddleware, combineReducers } from 'redux';
import { connectRoutes } from 'redux-first-router';

import routesMap from './routesMap'
import * as reducers from './reducers'

export default (history, preloadedState) => {
  const { reducer, middleware, enhancers, thunk } = connectRoutes(
    history,
    routesMap
  )

  const middlewares = applyMiddleware(middleware)
  const rootReducer = combineReducers({ ...reducers, location: reducer })
  const store = createStore(rootReducer, preloadedState, enhancers)

  return { store, thunk }
} 
