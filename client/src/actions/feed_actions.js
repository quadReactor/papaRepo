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
  addComment(user, photoID, page, message, name) {
    return (dispatch) => {
      const messageObj = {
        displayname: name,
        text: message,
      };
      axios.post(`/api/${user}/${photoID}/comments`, messageObj)
        .then(() => {
          dispatch({
            type: page,
          });
        })
        .catch(err => console.log(err));
    };
  },
  likePhoto(user, photoID, page) {
    return (dispatch) => {
      axios.post(`/api/${user}/${photoID}/like`)
        .then(() => {
          dispatch({
            type: page,
          });
        })
        .catch(err => console.log(err));
    };
  },
  unlikePhoto(user, photoID, page) {
    return (dispatch) => {
      axios.put(`/api/${user}/${photoID}/like`)
        .then(() => {
          dispatch({
            type: page,
          });
        })
        .catch(err => console.log(err));
    };
  },
};
