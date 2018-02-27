import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Link from 'redux-first-router-link';

import { fetchUser, logoutUser } from '../actions/firebase_actions';
import style from './../css/navbar.css';

class Navbar extends Component {

  logOut() {
    this.props.logoutUser();
    // .then((data) => {
    //   this.props.fetchUser();
    // });
  }

  render() {
    return (
      <div className={style.fixed}>
        <div className={style.navbar}>
          <Link
            to='/'
            className={style.homeleft}
          >
            <div className={style.home}>
              <div>
                <img
                className={style.logo}
                src="http://icons.iconarchive.com/icons/iconshock/smurf/256/papa-smurf-icon.png"
                />
              </div>
            <div className={style.billabong}>InstaSmurf</div>
            </div>
          </Link>

          <Link to='/profile' className={style.profile} className={style.left}>
            Profile
          </Link>

          <Link to='/follow' className={style.follow}>
            Followers/Following
          </Link>

          <Link to='/logout' onClick={() => this.logOut } className ={style.logout}>
            Logout
          </Link>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser, logoutUser }, dispatch);
}


function mapStateToProps(state) {
  return { currentUser: state.currentUser };
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
