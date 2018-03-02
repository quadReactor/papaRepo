import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import FollowerPerson from './followerPerson';

class Followers extends React.Component {
  constructor() {
    super();
    this.deleteFollower = this.deleteFollower.bind(this);
  }

  deleteFollower(person) {
    // console.log('i was clicked', person);
    axios.put(`/api/${this.props.username}/removefollower`, { username: person });
  }

  render() {
    // change currentUser to store name
    return this.props.followers ? (
      <div>
        {this.props.followers.map((person, index) => (
          <FollowerPerson key={index} person={person} stop={this.deleteFollower} />
        ))}
      </div>
    ) : (
      <div>No Followers</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    followers: state.currentUser.followers,
    username: state.currentUser.username,
  };
}

export default connect(mapStateToProps)(Followers);
