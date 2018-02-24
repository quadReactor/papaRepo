import { redirect } from 'redux-first-router'

// PLACEHOLDER CODE - This should be replaced but give an idea of how to use TOKENS to redirect.

const isAllowed = (type, user, routesMap) => {
  const role = routesMap[type] && routesMap[type].role; // you can put arbitrary keys in routes

  if (!role) return true;
  if (!user) return false;

  return user.roles.includes(role);
};

export default {
  onBeforeChange: (dispatch, getState, action) => {
    const { user, location: { routesMap } } = getState();
    const allowed = isAllowed(action.type, user, routesMap);

    if (!allowed) {
      const action = redirect({ type: 'LOGIN' });
      dispatch(action);
    }
  },
  onAfterChange: (dispatch, getState) => {
    const { type } = getState().location;

    if (type === 'LOGIN') {
      setTimeout(() => 'do something here')
    }
  },
};

