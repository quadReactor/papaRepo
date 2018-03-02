export default (state = {}, action = {}) => {
  switch (action.type) {
    case 'USER_RECIEVED':
      return action.payload;
    case 'RELOAD_USER_DATABASE_STATE_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};
