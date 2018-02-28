import utils from './../utils/firebase';


export default {
  login(provider) {
    return (dispatch) => {
      utils.loginWithProvider(provider)
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
      utils.logoutUser()
        .then(dispatch({ type: 'LOGOUT_FIREBASE' }))
        .catch(console.log)
    };
  },
};
