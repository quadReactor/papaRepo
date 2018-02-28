export default (state = [], action = {}) => {
  switch (action.type) {
    case 'PHOTOS_FETCHED':
      return action.payload.photos;
    default:
      return state;
  }
};
