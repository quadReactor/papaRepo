import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from './../../actions/follow_actions';
import FollowerPerson from './followerPerson.jsx';

class Followers extends Component {
  constructor() {
    super();
    this.deleteFollower = this.deleteFollower.bind(this);
  }

  deleteFollower(person) {
    axios.put(`/api/${this.props.username}/removefollower`, { username: person })
      .then(() => this.props.refreshCurrentUser());
  }

  render() {
    return (
      <div>
      { this.props.followers &&
        this.props.followers.length
        ? this.props.followers
          .map((person, index) => (
            <FollowerPerson
              key={index}
              person={person}
              stop={this.deleteFollower} />
          ))
        : 'none'
      }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    refreshCurrentUser: actions.refreshCurrentUser,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    followers: state.currentUser.followers,
    username: state.currentUser.username,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Followers);
