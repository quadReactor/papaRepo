import React from 'react';
import Pending from './pending.jsx';
import Following from './following.jsx';
import Followers from './followers.jsx';
import AddFollowers from './addFollowers.jsx';
import Navbar from './../Navbar/navbar.jsx';

const Follow = () => (
  <div>
    <br />
    <br />
    <br />
    <br />
    <Navbar />
    <AddFollowers />
    <h3>Pending Request</h3>
    <Pending />
    <h3>Following</h3>
    <Following />
    <h3>Followers</h3>
    <Followers />
    <h3>Pending Followers</h3>
  </div>
);

export default Follow;
