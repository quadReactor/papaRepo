import axios from 'axios';

export default {
  getComments: (user, photoID) => {
    return (dispatch) => {
      axios.get(`/api/${user}/${photoID}/comments`)
        .then((res) => {
          dispatch({
            type: 'COMMENT_SUCCESS',
            payload: res.data,
          });
        });
    };
  },
};
