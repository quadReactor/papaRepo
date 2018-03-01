import React from 'react';

const FollowerPerson = ({ person, stop }) => (
  <div>
    {person}
    <input
      type="button"
      value="Delete Follower"
      onClick={() => {
        stop(person);
      }}
    />
  </div>
);

export default FollowerPerson;
