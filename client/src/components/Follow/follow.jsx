import React from 'react';
import Pending from './pending.jsx';
import Following from './following.jsx';
import Followers from './followers.jsx';
import AddFollowers from './addFollowers.jsx';
import Navbar from './../Navbar/navbar.jsx';

const Follow = () => (
  <div>
    <Navbar />
    <AddFollowers />
    <Pending />
    <Following />
    <Followers />
  </div>
);

export default Follow;
