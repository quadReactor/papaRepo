import React from 'react';
import FollowerPerson from './followerPerson';
import axios from 'axios';
import { connect } from 'react-redux';

class Followers extends React.Component {
  constructor() {
    super();
    this.deleteFollower = this.deleteFollower.bind(this);
  }

  deleteFollower(person) {
    console.log('i was clicked', person);
    // axios.put(`/api/${this.props.username}/removefollower`, {username: person});
  }

  render() {
    // change currentUser to store name
    return (
      this.props.followers ?
      <div>
        {this.props.followers.map((person, index) => (
          <FollowerPerson key={index} person={person} stop={this.deleteFollower} />
        ))}
      </div> :
        null
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
