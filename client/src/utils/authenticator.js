
const userKey = Object.keys(window.localStorage)
  .filter(it => it.startsWith('firebase:authUser'))[0];

const user = userKey ? JSON.parse(localStorage.getItem(userKey)) : undefined;

const userData = {
  username: user.email,
  displayname: user.displayName,
  profilePic: user.photoURL,
};


export default {
  onBeforeChange: (dispatch, getState) => {
    const authUser = getState().firebaseUser;
    if (!!user && !authUser) {
      dispatch({
        type: 'VERIFY_TOKEN_SUCCESS',
        payload: userData,
      });
    }
  },
  onAfterChange: (dispatch, getState) => {
    const page = getState().location;
    const homeAlready = (page.type === 'LOGIN');
    if (!user && !homeAlready) {
      dispatch({ type: 'LOGIN' });
    }
  },
};

