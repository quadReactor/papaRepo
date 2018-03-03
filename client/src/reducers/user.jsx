export default (state = {}, action = {}) => {
  switch (action.type) {
    case 'USER_RECIEVED':
      return action.payload;
    default:
      return state;
  }
};
