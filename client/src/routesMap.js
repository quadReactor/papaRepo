import React from 'react';
import { connect } from 'react-redux';
import { NOT_FOUND } from 'redux-first-router';

import Feed from './components/Feed/feed.jsx';
import Follow from './components/Follow/follow.jsx';
import Profile from './components/Profile/profile.jsx';
import Login from './components/Login/login.jsx';

const routesMap = {
  HOME: Feed,
  PROFILE: Profile,
  FEED: Feed,
  FOLLOW: Follow,
  LOGIN: Login,
  SIGNUP: Login,
  LOGOUT: Login,
  [NOT_FOUND]: Feed,
};


const stateToProps = state => ({
  route: state.location.type,
});

const Container = ({ route }) => {
  const Route = routesMap[route] || routesMap[NOT_FOUND];
  return (
    <Route />
  );
};

export default connect(stateToProps)(Container);
