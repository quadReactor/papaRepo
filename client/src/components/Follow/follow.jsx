import React from 'react';
import Pending from './pending';
import Following from './following';
import Followers from './followers';
import AddFollowers from './addFollowers';

const Follow = () => (
  <div>
    <AddFollowers />
    <Pending />
    <Following />
    <Followers />
  </div>  
)
 
export default Follow; 