import { LOGIN_FIREBASE, LOGOUT_FIREBASE } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case LOGOUT_FIREBASE:
      return action.user;
    case LOGIN_FIREBASE:
      console.log('in reducer', action.result);
      return action.result;
    default:
      return state;
  }
}
