import axios from 'axios';

const createNew = (u, p, d) => {
  const signupObj = {
    username: u,
    displayname: d,
    profilePic: p,
  };
  axios.post('/api/signup', signupObj).then(() => axios.get(`/api/${u}/current`));
};

export default {
  HOME: {
    path: '/',
    thunk: async (dispatch, getState) => {
      try {
        if (getState().firebaseUser) {
          const { username, profilePic, displayname } = await getState().firebaseUser;
          let userFromDatabase = await axios.get(`/api/${username}/current`);
          if (userFromDatabase.data && userFromDatabase.data.length === 0) {
            userFromDatabase = await createNew(username, profilePic, displayname);
          }
          dispatch({ type: 'USER_RECIEVED', payload: userFromDatabase.data[0] });
          dispatch({ type: 'FEED' });
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  PROFILE: {
    path: '/profile',
    thunk: async (dispatch, getState) => {
      try {
        const { username } = await getState().firebaseUser;
        const userPhotos = await axios.get(`/api/${username}`);
        dispatch({ type: 'PHOTOS_RECIEVED', payload: userPhotos.data });
        const userFromDatabase = await axios.get(`/api/${username}/current`);
        dispatch({ type: 'USER_RECIEVED', payload: userFromDatabase.data[0] });
      } catch (error) {
        console.error(error);
      }
    },
  },
  FEED: {
    path: '/feed',
    thunk: async (dispatch, getState) => {
      try {
        if (getState().firebaseUser) {
          const { username } = await getState().firebaseUser;
          const photos = await axios.get(`/api/${username}/follower`);
          dispatch({ type: 'PHOTOS_RECIEVED', payload: photos.data });
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  EVERYONE: {
    path: '/everyone',
    thunk: async (dispatch, getState) => {
      try {
        if (getState().firebaseUser) {
          const { username } = await getState().firebaseUser;
          const photos = await axios.get(`/api/${username}/all`);
          dispatch({ type: 'PHOTOS_RECIEVED', payload: photos.data });
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  FOLLOW: {
    path: '/follow',
    thunk: async (dispatch, getState) => {
      try {
        if (getState().firebaseUser) {
          const { username } = await getState().firebaseUser;
          const userFromDatabase = await axios.get(`/api/${username}/current`);
          dispatch({ type: 'USER_RECIEVED', payload: userFromDatabase.data[0] });
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  LOGIN: '/login',
  SIGNUP: '/signup',
  LOGOUT: '/logout',
};

