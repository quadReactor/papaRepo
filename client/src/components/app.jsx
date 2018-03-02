import React, { Component } from 'react';
import { connect } from 'react-redux';

import Feed from './Feed/feed.jsx';
import Profile from './Profile/Profile.jsx';
import Login from './Login/Login.jsx';
import Follow from './Follow/follow.jsx';
import Logout from './Logout/Logout.jsx';
import style from './app.css';

class App extends Component {
  render() {
    let route;
    switch (this.props.page) {
      case 'Feed':
        route = <Feed />;
        break;
      case 'Profile':
        route = <Profile />;
        break;
      case 'Everyone':
        route = <Feed />;
        break;
      case 'Login':
        route = <Login />;
        break;
      case 'Follow':
        route = <Follow />;
        break;
      case 'Logout':
        route = <Logout />;
        break;
      default:
        break;
    }

    return (
      <div className={style.background}>
        {route}
      </div>
    );
  }
}


const mapStateToProps = (state) => {

  return {
    page: state.page,
  };
};

export default connect(mapStateToProps)(App);
