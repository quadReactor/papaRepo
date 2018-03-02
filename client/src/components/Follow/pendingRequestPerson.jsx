import React from 'react';

// Rendering Pending Person
// needs accept button
const PendingRequestPerson = ({ person, stop, accept }) => (
  <div>
    {person}
    <input
      type="button"
      value="Deny Following"
      onClick={() => {
        stop(person);
      }}
    />
    <input
      type="button"
      value="Accept Following"
      onClick={() => {
        accept(person);
      }}
    />
  </div>
);

export default PendingRequestPerson;
