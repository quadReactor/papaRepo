import React from 'react';
import { connect } from 'react-redux';
import Link, { NavLink } from 'redux-first-router-link';
import styles from './../css/navbar.css'

const NavBar = ({path, dispatch}) => (
  <div>
    <span
      role='link'
      tabIndex='0'
      className={isActive(path, '/')}
      onClick={() => dispatch({ type: 'HOME' })}
    >
      <img src="http://icons.iconarchive.com/icons/iconshock/smurf/256/papa-smurf-icon.png" />
    </span>

    <span
      role='link'
      tabIndex='0'
      className={isActive(path, '/profile')}
      onClick={() => dispatch({ type: 'PROFILE', payload: { category: 'profile' } })}
    >
      Profile
    </span>

    <span
      role='link'
      tabIndex='0'
      className={isActive(path, '/follow')}
      onClick={() => dispatch({ type: 'follow', payload: { category: 'follow' } })}
    >
      Followers/Following
    </span>

    <span 
      className = {styles.logout}
      role='link'
      tabIndex='0'
      className={isActive(path, '/logout')}
      onClick={() => dispatch({ type: 'logout', payload: { category: 'logout' } })}
    >
      Logout
    </span>
  </div>  
)
 

const isActive = (actualPath, expectedPath) =>
  actualPath === expectedPath ? styles.active : ''

const mapStateToProps = state => ({
  path: state.location.pathname
})

export default connect(mapStateToProps)(NavBar);