// import firebaseActions from './../actions/firebase_actions';


export default (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload };
    case 'LOGIN_FAILURE':
      return { ...state, user: null };
    case 'LOGOUT_FIREBASE':
      return { ...state, user: null };
    default:
      return state;
  }
};

