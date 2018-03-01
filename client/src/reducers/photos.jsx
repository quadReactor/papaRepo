export default (state = ['hi'], action = {}) => {
  switch (action.type) {
    case 'PHOTOS_RECIEVED':
      return action.payload;
    default:
      return state;
  }
};
