import { redirect, NOT_FOUND } from 'redux-first-router';
import Feed from './components/Feed/feed.jsx';
import Follow from './components/Follow/follow.jsx';
import Profile from './components/Follow/follow.jsx';

export default {
  HOME: 'Feed',
  PROFILE: '/profile',
  FEED: 'Feed',
  FOLLOW:  '/follow',
  LOGIN: '/login',
  SIGNUP: '/signup',
  LOGOUT: '/logout',
}



const stateToProps = state => ({
  route: state.location.type,
})

const Container = ({route}) => {
  const Route = routesMap[route] || routesMap[NOT_FOUND];
  return (
    <Route />
  )
}

export default connect(stateToProps)(Container)