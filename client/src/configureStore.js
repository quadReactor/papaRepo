import { createStore, middleware, combineReducers } from 'redux';
import { connectRoutes } from 'redux-first-router';

import routesMap from './routesMap'
import * as reducers from './reducers'
  const middlewares = applyMiddleware(middleware)

export default (history, preloadedState) => {
  const { reducer, middleware, enhancer, thunk } = connectRoutes(
    history,
    routesMap
  )

  const middlewares = applyMiddleware(middleware)
  const rootReducer = combineReducers({ ...reducers, location: reducer })
  const store = createStore(rootReducer, preloadedState, enhancers)

  return { store, thunk }
}
