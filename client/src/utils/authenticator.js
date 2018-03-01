

const getFirebaseUserFromLocalStorage = () => {
  const userKey = Object.keys(window.localStorage)
    .filter(it => it.startsWith('firebase:authUser'))[0];

  const user = userKey ? JSON.parse(localStorage.getItem(userKey)) : undefined;

  const userData = !!user && {
    username: user.email,
    displayname: user.displayName,
    profilePic: user.photoURL,
  };
  return userData;
};

export default {
  onBeforeChange: async (dispatch, getState) => {
    const { firebaseUser } = getState();
    const { type } = getState().location;
    let shouldGetFirebaseUserFromLocalStorage = true;
    if (
      type === 'HOME' || 
      type === 'LOGIN' || 
      type === 'LOGOUT'
    ) {
      shouldGetFirebaseUserFromLocalStorage = false;
    }
    const data = await getFirebaseUserFromLocalStorage();
    if (!!data && !firebaseUser && shouldGetFirebaseUserFromLocalStorage) {
      dispatch({
        type: 'RELOAD_USER_STATE_SUCCESS',
        payload: data,
      });
    }
  },
  onAfterChange: async (dispatch, getState) => {
    const { type } = getState().location;
    const homeAlready = (type === 'LOGIN');
    const data = await getFirebaseUserFromLocalStorage();
    if (!data && !homeAlready) {
      dispatch({ type: 'LOGIN' });
    }
  },
};

