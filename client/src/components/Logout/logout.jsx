import React from 'react';
import Link from 'redux-first-router-link';

import style from './logout.css';

const Logout = () => (
  <div>
    <h3 className={style.loginWith}>Thanks for stopping by</h3>
    <Link to='/login' >
      <a className={style.buttons}>Login Again!</a>
    </Link>
  </div>
);

export default Logout;
