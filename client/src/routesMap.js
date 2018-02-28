import axios from 'axios';

export default {
  HOME: {
    path: '/',
    thunk: async (dispatch, getState) => {
      try {
        //const { username } = getState().user;
        const photos = await axios.get(`/api/Papa@gmail.com/follower`);
        console.log(photos.data);
        dispatch({ type: 'PHOTOS_RECIEVED', payload: photos.data });
      } catch (error) {
        console.error(error);
      }
    },
  },
  PROFILE: {
    path: '/profile',
    // thunk: async (dispatch, getState) => {
    // //   const { payload: { user }} = getState().location;
    // //   const photos = await fetch(`/api/`)
    // // }
    // dispatch({type: ''})
  },
  FEED: {
    path: '/feed',
    thunk: async (dispatch, getState) => {
      try {
        const { username } = getState().user;
        const photos = await axios.get(`/api/${username}/follower`);
        console.log(photos.data);
        dispatch({ type: 'PHOTOS_RECIEVED', payload: photos.data });
      } catch (error) {
        console.error(error);
      }
    },
  },
  FOLLOW: '/follow',
  LOGIN: '/login',
  SIGNUP: '/signup',
  LOGOUT: '/logout',
};



// export default {
//   HOME: '/',

//   LIST: {
//     path: '/list/:category',
//     thunk: async (dispatch, getState) => {
//       const { payload: { category } } = getState().location
//       const packages = await fetch(`/api/category/${category}`)

//       if (packages.length === 0) {
//         const action = redirect({
//           type: 'LIST',
//           payload: { category: 'redux' }
//         })

//         return dispatch(action)
//       }

//       dispatch({ type: 'PACKAGES_FETCHED', payload: { category, packages } })
//     }
//   }
// }

// // this is essentially faking/mocking the fetch api
// // pretend this actually requested data over the network

// const fetch = async path => {
//   const category = path.replace('/api/category/', '')

//   switch (category) {
//     case 'redux':
//       return ['reselect', 'recompose', 'redux-first-router']
//     case 'react':
//       return [
//         'react-router',
//         'react-transition-group',
//         'react-universal-component'
//       ]
//     default:
//       return []
//   }
// }