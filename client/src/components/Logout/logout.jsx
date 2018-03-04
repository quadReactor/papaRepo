import React from 'react';
import Link from 'redux-first-router-link';

import style from './logout.css';

const Logout = () => (
  <div className={style.login}>
    <h3 className={style.loginWith}>Thanks for stopping by</h3>
    <Link to='/login' >
      <div className={style.buttons}>Login Again!</div>
    </Link>
  </div>
);

export default Logout;
