import React from 'react';

const FollowingPerson = ({ person, stop }) => (
  <div>
    {person}
    <input
      type="button"
      value="Delete Following"
      onClick={() => {
        stop(person);
      }}
    />
  </div>
);

export default FollowingPerson;
