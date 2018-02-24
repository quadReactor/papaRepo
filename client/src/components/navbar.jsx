import React from 'react';
import { connect } from 'react-redux';
import Link, { NavLink } from 'redux-first-router-link';
import style from './../css/navbar.css'

const NavBar = ({path, dispatch}) => (
    <ul className={style.navbar}>
    <li className={style.homeleft}>
      <a
      role='link'
      tabIndex='0'
      className={isActive(path, '/')}
      onClick={() => dispatch({ type: 'HOME' })}
    >
      <div className={style.home}>
      <div><img className={style.logo} src="http://icons.iconarchive.com/icons/iconshock/smurf/256/papa-smurf-icon.png" /></div>
      <div className={style.billabong}>InstaSmurf</div>
      </div>
      </a>
    </li>

    <li className={style.left}>
      <a
      role='link'
      tabIndex='0'
      className={isActive(path, '/profile')}
      onClick={() => dispatch({ type: 'PROFILE' })}
    >
      Profile
      </a>
    </li>
    <li className={style.left}>
      <a
      role='link'
      tabIndex='0'
      className={isActive(path, '/follow')}
      onClick={() => dispatch({ type: 'FOLLOW'})}
    >
      Followers/Following
      </a>
    </li>
    <li className ={style.logout}>
      <a
      role='link'
      tabIndex='0'
      className={isActive(path, '/logout')}
      onClick={() => dispatch({ type: 'LOGOUT'})}
    >
      Logout
    </a>
    </li>
  </ul>  
) 
 

const isActive = (actualPath, expectedPath) =>
  actualPath === expectedPath ? style.active : ''

const mapStateToProps = state => ({
  path: state.location.pathname
})

export default connect(mapStateToProps)(NavBar);