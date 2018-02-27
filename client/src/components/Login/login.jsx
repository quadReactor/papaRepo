import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginWithProvider } from '../../actions/firebase_actions';

class Login extends Component {
  constructor() {
    super();
    this.loginWithProvider = this.loginWithProvider.bind(this);
  }

  loginWithProvider(provider) {
    this.props.loginWithProvider(provider).then((data) => {
      if (data.payload.errorCode) {
        console.log(data.payload.errorMessage);
      } else {
        console.log(data);
      }
    });
  }
  render() {
    return (
      <div>
        <h4>Login with</h4>
          <a
            onClick={() => {
                this.loginWithProvider('google');
            }} data-provider="twitter"
          >Google</a>

          <a
            onClick={() => {
              this.loginWithProvider('github');
            }} data-provider="twitter"
          >Github</a>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loginWithProvider,
  }, dispatch);
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
