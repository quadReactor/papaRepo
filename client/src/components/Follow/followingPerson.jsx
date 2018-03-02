import React from 'react';
import { connect } from 'react-redux';

const FollowingPerson = ({ person, stop, following }) => (
  <div>
    {person}
    <input
      type="button"
      value="Delete Following"
      onClick={() => {
        if (following.includes(person)) {
          stop(person);
        }
      }}
    />
  </div>
);

function mapStateToProps(state) {
  return {
    following: state.currentUser.following,
  };
}

export default connect(mapStateToProps)(FollowingPerson);
