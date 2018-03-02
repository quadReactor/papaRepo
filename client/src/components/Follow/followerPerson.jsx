import React from 'react';
import { connect } from 'react-redux';

const FollowerPerson = ({ person, stop, followers }) => (
  <div>
    {person}
    <input
      type="button"
      value="Delete Follower"
      onClick={() => {
        if (followers.includes(person)) {
          stop(person);
        }
      }}
    />
  </div>
);

function mapStateToProps(state) {
  return {
    followers: state.currentUser.followers,
  };
}

export default connect(mapStateToProps)(FollowerPerson);
