import { loginWithProvider, logoutUser } from './../utils/firebase';


export default {
  login(provider) {
    return (dispatch) => {
      loginWithProvider(provider)
        .then((res) => {
          if (res) {
            dispatch({
              type: 'LOGIN_SUCCESS',
              payload: res,
            });
          } else {
            dispatch({ type: 'LOGIN_FAILURE' });
          }
        });
    };
  },

  logout() {
    return (dispatch) => {
      logoutUser()
        .then(() => {
          dispatch({ type: 'LOGOUT' });
        });
    };
  },
};
