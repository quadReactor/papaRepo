import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import FollowingPerson from './FollowingPerson';

class Following extends React.Component {
  constructor() {
    super();
    this.stopFollowing = this.stopFollowing.bind(this);
  }

  stopFollowing(person) {
    axios.put(`/api/${this.props.username}/stopfollowing`, { username: person });
  }

  render() {
    // change currentUser to store name
    return this.props.following ? (
      <div>
        {this.props.following.map((person, index) => (
          <FollowingPerson key={index} person={person} stop={this.stopFollowing} />
        ))}
      </div>
    ) : (
      <div>Not Following</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    following: state.currentUser.following,
    username: state.currentUser.username,
  };
}

export default connect(mapStateToProps)(Following);
