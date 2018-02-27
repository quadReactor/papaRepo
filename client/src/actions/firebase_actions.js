import { LOGIN_FIREBASE, LOGOUT_FIREBASE } from './types';


export function login(result) {
  console.log(result)
  return {
    type: LOGIN_FIREBASE,
    payload: result,
  };
}

export function logout(user) {
  return {
    type: LOGOUT_FIREBASE,
    user,
  };
}

