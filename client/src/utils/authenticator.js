import { redirect } from 'redux-first-router';
import fb from './firebase';

export default {
  onAfterChange: (dispatch, getState) => {
    console.log(localStorage)
    const page = getState().location;
    const allowed = localStorage.uid;
    const homeAlready = (page.type === 'LOGIN');

    if (!allowed && !homeAlready) {
      const action = { type: 'LOGIN' };
      dispatch(action);
    }
  },
  //  onAfterChange: (dispatch, getState) => {
  //    console.log('taco test taco test')
  //  },
};
