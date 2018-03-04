import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from './../../actions/follow_actions';
import PendingRequestPerson from './pendingRequestPerson.jsx';

class PendingRequest extends Component {
  constructor() {
    super();
    this.accept = this.accept.bind(this);
    this.deny = this.deny.bind(this);
  }

  accept(person) {
    axios.put(`/api/${this.props.username}/approvefollower`, { username: person })
      .then(() => this.props.refreshCurrentUser());
  }

  deny(person) {
    axios.put(`/api/${this.props.username}/denyfollower`, { username: person })
      .then(() => this.props.refreshCurrentUser());
  }

  render() {
    return (
      <div>
      { this.props.pendingFollowers &&
        this.props.pendingFollowers.length
        ? this.props.pendingFollowers
          .map((person, index) => (
            <PendingRequestPerson
              key={index}
              person={person}
              stop={this.deny}
              accept={this.accept}
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
    pendingFollowers: state.currentUser.pendingFollowers,
    username: state.currentUser.username,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PendingRequest);
