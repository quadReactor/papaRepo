import { redirect } from 'redux-first-router';
import fb from './firebase';

export default {
  onAfterChange: (dispatch, getState) => {
    const page = getState().location;
    const allowed = localStorage.length;
    const homeAlready = (page.type === 'LOGIN');

    if (!allowed && !homeAlready) {
      const action = { type: 'LOGIN' };
      dispatch(action);
    }
  },
};
