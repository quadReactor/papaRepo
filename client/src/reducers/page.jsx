import { NOT_FOUND } from 'redux-first-router'

const components = {
  HOME: 'Feed',
  FEED: 'Feed',
  FOLLOW: 'Follow',
  PROFILE: 'Profile',
  LOGIN: 'Login',
  SIGNUP: 'Signup',
  LOGOUT: 'Logout',
  [NOT_FOUND]: 'Login',
};

export default (state = 'HOME', action = {}) => components[action.type] || state;
