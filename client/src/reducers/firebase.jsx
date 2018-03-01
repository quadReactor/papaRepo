
export default (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return action.payload;
    case 'RELOAD_USER_STATE_SUCCESS':
      return action.payload;
    case 'LOGIN_FAILURE':
      return null;
    case 'LOGOUT_FIREBASE':
      return null;
    default:
      return state;
  }
};

