import axios from 'axios';

export default {
  editComment(user, commentID, page) {
    return (dispatch) => {
      axios.put(`/api/${user}/${commentID}/comments`)
        .then(() => {
          dispatch({
            type: page,
          });
        })
        .catch(err => console.log(err))
    };
  },
  deleteComment(user, commentID, page) {
    return (dispatch) => {
      axios.delete(`/api/${user}/${commentID}/comments`)
        .then(() => {
          dispatch({
            type: page,
          });
        })
        .catch(err => console.log(err));
    };
  },
  addComment(user, photoID, page) {
    return (dispatch) => {
      axios.post(`/api/${user}/${photoID}/comments`)
        .then(() => {
          dispatch({
            type: page,
          });
        })
        .catch(err => console.log(err));
    };
  },
};
