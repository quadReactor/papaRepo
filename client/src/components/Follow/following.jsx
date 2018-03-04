import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from './../../actions/follow_actions';
import FollowingPerson from './followingPerson.jsx';

class Following extends React.Component {
  constructor() {
    super();
    this.stopFollowing = this.stopFollowing.bind(this);
  }

  stopFollowing(person) {
    axios.put(`/api/${this.props.username}/stopfollowing`, { username: person })
      .then(() => this.props.refreshCurrentUser());
  }

  render() {
    return (
      <div>
      { this.props.following &&
        this.props.following.length
        ? this.props.following
          .map((person, index) => (
            <FollowingPerson
              key={index}
              person={person}
              stop={this.stopFollowing}
            />
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
    following: state.currentUser.following,
    username: state.currentUser.username,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Following);
