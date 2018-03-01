
export default (state = null, action) => {
  switch (action.type) {
    case 'COMMENT_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};