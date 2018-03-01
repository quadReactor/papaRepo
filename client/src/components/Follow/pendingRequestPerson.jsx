import React from 'react';

// Rendering Pending Person
// needs accept button
const pendingRequestPerson = ({ person, stop }) => (
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

export default pendingRequestPerson;
