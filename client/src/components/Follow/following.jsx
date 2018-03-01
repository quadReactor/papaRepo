import React from 'react';
import FollowingPerson from './FollowingPerson';
import axios from 'axios';
import { connect } from 'react-redux';

class Following extends React.Component {
  constructor() {
    super();
    this.stopFollowing = this.stopFollowing.bind(this);
  }

  stopFollowing(person) {
    console.log('i was clicked', person);
    // axios.put(`/api/${this.props.username}/stopfollowing`, { username: person });
  }

  render() {
    // change currentUser to store name
    return (
      <div>
        {this.props.following.map((person, index) => (
          <FollowingPerson key={index} person={person} stop={this.stopFollowing} />
        ))}
      </div>
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
