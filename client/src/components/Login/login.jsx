import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from 'firebase';

import actions from '../../actions/firebase_actions';
import { firebaseAuth } from './../../utils/firebase';


class Login extends Component {
  render() {
    return (
      <div>
        <h4>Login with</h4>
          <a
            onClick={() => {
              this.props.login('google');
            }}
          >Google</a>
          <a
            onClick={() => {
              this.props.login('google');
            }}
          >Github</a>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    login: actions.login,
  }, dispatch);
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
