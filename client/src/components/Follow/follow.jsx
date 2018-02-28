import React from 'react';
import Pending from './pending.jsx';
import PendingRequest from './pendingRequest.jsx';
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
    <h3>Find</h3>
    <AddFollowers />
<<<<<<< HEAD

    <h3>Pending Following</h3>
    <Pending />

    <h3>Following</h3>
    <Following />

    <h3>Pending Follower Request</h3>
    <PendingRequest />

=======
    <h3>Pending Request</h3>
    <Pending />
    <h3>Following</h3>
    <Following />
>>>>>>> 213798ffd13b54b90a09a7e97acdfb6db157498a
    <h3>Followers</h3>
    <Followers />
    <h3>Pending Followers</h3>
  </div>
);

export default Follow;
