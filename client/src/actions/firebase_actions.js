import {
  LOGIN_WITH_PROVIDER_FIREBASE,
  // FETCH_FIREBASE_USER,
  LOGOUT_FIREBASE_USER,
} from './types';


export function loginWithProvider(provider) {
  return {
    type: LOGIN_WITH_PROVIDER_FIREBASE,
    provider,
  };
}

// export function fetchUser() {  
//   return {
//     type: FETCH_FIREBASE_USER    
//   };
// }

export function logoutUser(user) {
  return {
    type: LOGOUT_FIREBASE_USER,
    user,
  };
}
