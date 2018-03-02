import React from 'react';
import { connect } from 'react-redux';

// Rendering Pending Person

const PendingPerson = ({ person, stop, pendingFollowing }) => (
  <div>
    {person}
    <input
      type="button"
      value="Delete Following"
      onClick={() => {
        if (pendingFollowing.includes(person)) {
          stop(person);
        }
      }}
    />
  </div>
);

function mapStateToProps(state) {
  return {
    pendingFollowing: state.currentUser.pendingFollowing,
  };
}

export default connect(mapStateToProps)(PendingPerson);
