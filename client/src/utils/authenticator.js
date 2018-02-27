import { redirect } from 'redux-first-router';
import fb from './firebase';

export default {
  onBeforeChange: (dispatch, getState) => {
    const page = getState().location;
    const allowed = false;
    const homeAlready = (page.type !== 'home');

    if (!allowed && !homeAlready) {
      const action = redirect({ type: 'LOGOUT' });
      dispatch(action);
    }
  },
  onAfterChange: (dispatch, getState) => {
    const { type } = getState().location;
  },
};
