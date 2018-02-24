import React from 'react';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';
import style from './../css/navbar.css'

export default props => {

  return(
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

      <Link to='/profile' className={style.left}> 
        Profile
      </Link>

      <Link to='/follow' className={style.left}>
        Followers/Following
      </Link>
      
      <Link to='/logout' className ={style.logout}>
        Logout
      </Link>
    </div>  
  )
};