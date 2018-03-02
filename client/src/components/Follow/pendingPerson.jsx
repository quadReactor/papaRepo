import React from 'react';

// Rendering Pending Person

const PendingPerson = ({ person, stop }) => (
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

export default PendingPerson;

// {person}
//     <input
//       type="button"
//       value="Delete Following"
//       onClick={() => {
//         stop(person);
//       }}
//     />
