import { NOT_FOUND } from 'redux-first-router'

export default (state = 'HOME', action = {}) => components[action.type] || state

const components = {
  HOME: 'Home',
  LIST: 'List',
  FEED: 'Feed',
  FOLLOW: 'Follow',
  LOGIN: 'Login',
  SIGNUP: 'Signup',
  LOGOUT: 'Logout',
  [NOT_FOUND]: 'NotFound'
} 