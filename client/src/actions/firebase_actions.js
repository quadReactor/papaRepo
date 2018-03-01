import utils from './../utils/firebase';


export default {
  login(provider) {
    return (dispatch) => {
      utils.loginWithProvider(provider)
        .then((res) => {
          if (res.user) {
            const userData = {
              username: res.user.email,
              displayname: res.user.displayName,
              profilePic: res.user.photoURL,
            };
            dispatch({
              type: 'LOGIN_SUCCESS',
              payload: userData,
            });
          } else {
            console.log(res);
            dispatch({ type: 'LOGIN_FAILURE' });
          }
        })
        .then(() => dispatch({ type: 'HOME' }));
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
