import React from 'react';
import Pending from './pending';
import Following from './following';
import Followers from './followers';
import AddFollowers from './addFollowers';
import Navbar from './../navbar.jsx';

const Follow = () => (
  <div>
    <Navbar />
    <AddFollowers />
    <Pending />
    <Following />
    <Followers />
  </div>  
)
 
export default Follow; 