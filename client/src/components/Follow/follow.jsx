import React from 'react';
import Pending from './pending.jsx';
import PendingRequest from './pendingRequest.jsx';
import Following from './following.jsx';
import Followers from './followers.jsx';
import AddFollowers from './AddFollowers.jsx';
import Navbar from './../Navbar/navbar.jsx';

const Follow = () => (
  <div>
    <br />
    <br />
    <br />
    <br />
    <Navbar />
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
);

export default Follow;
