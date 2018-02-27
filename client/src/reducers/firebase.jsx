import FireBaseTools from '../utils/firebase';

import {
  LOGIN_WITH_PROVIDER_FIREBASE,
  LOGOUT_FIREBASE_USER,
  // FETCH_FIREBASE_USER,
} from '../actions/types';

function loginWithProvider(provider) {
  FireBaseTools.loginWithProvider(provider);
}

function logoutUser(user) {
  FireBaseTools.logoutUser(user);
}

// function fetchUser() {
//   FireBaseTools.fetchUser();
// }

export default function (state = 'null', action) {
  switch (action.type) {
    case LOGOUT_FIREBASE_USER:
      return logoutUser(action.user);

    case LOGIN_WITH_PROVIDER_FIREBASE:
      return loginWithProvider(action.provider);

    // case FETCH_FIREBASE_USER:
    //   return fetchUser(action.user);

    default:
      return state;
  }
}
