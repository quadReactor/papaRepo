import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from 'firebase';

import { login } from '../../actions/firebase_actions';
import { firebaseAuth } from './../../utils/firebase';


class Login extends Component {
  getProvider = (provider) => {
    switch (provider) {
      case 'github':
        return new firebase.auth.GithubAuthProvider();
      case 'google':
        return new firebase.auth.GoogleAuthProvider();
      default:
        throw new Error('Provider is not supported!!!');
    }
  }

  loginWithProvider = (p) => {
    const provider = this.getProvider(p);
    firebaseAuth.signInWithPopup(provider)
      .then(firebase.auth().currentUser)
      .then(result => this.login(result))
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message,
      }));
  }

  render() {
    return (
      <div>
        <h4>Login with</h4>
          <a
            onClick={() => {
              this.loginWithProvider('google');
            }}
          >Google</a>
          <a
            onClick={() => {
              this.loginWithProvider('google');
            }}
          >Github</a>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    login,
  }, dispatch);
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
