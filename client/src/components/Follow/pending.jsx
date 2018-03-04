import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from './../../actions/follow_actions';
import PendingPerson from './pendingPerson.jsx';

// Render Pending Following

class Pending extends React.Component {
  constructor() {
    super();

    this.stopRequest = this.stopRequest.bind(this);
  }

  stopRequest(person) {
    axios.put(`/api/${this.props.username}/stoppendingfollowing`, { username: person })
      .then(() => this.props.refreshCurrentUser());
  }

  render() {
    return (
      <div>
      { this.props.pendingFollowing &&
        this.props.pendingFollowing.length
        ? this.props.pendingFollowing
          .map((person, index) => (
            <PendingPerson
              key={index}
              person={person}
              stop={this.stopRequest}
            />
          ))
        : 'none pending'
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
    pendingFollowing: state.currentUser.pendingFollowing,
    username: state.currentUser.username,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Pending);
