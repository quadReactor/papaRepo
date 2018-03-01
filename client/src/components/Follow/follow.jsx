import React from 'react';
import Pending from './Pending.jsx';
import PendingRequest from './PendingRequest.jsx';
import Following from './Following.jsx';
import Followers from './Followers.jsx';
import AddFollowers from './AddFollowers.jsx';
import Navbar from './../Navbar/Navbar.jsx';

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
