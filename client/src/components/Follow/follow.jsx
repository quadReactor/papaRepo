import React from 'react';

import Pending from './pending.jsx';
import PendingRequest from './pendingRequest.jsx';
import Following from './following.jsx';
import Followers from './followers.jsx';
import AddFollowers from './addFollowers.jsx';
import Navbar from './../Navbar/navbar.jsx';
import style from './follow.css';

const Follow = () => (
  <div>
    <Navbar />
    <div className={style.body}>
      <h3>Find</h3>
      <AddFollowers />

      <h3>Pending Following</h3>
      <Pending />

      <h3>Following</h3>
      <Following />

      <h3>Pending Follower Request</h3>
      <PendingRequest />

      <h3>Followers</h3>
      <Followers />
    </div>
  </div>
);

export default Follow;
