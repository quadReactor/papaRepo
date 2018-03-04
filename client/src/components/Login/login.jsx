import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './login.css';
import actions from '../../actions/firebase_actions';


class Login extends Component {
  render() {
    return (
      <div className={style.login}>
          <a className={style.billabong}>InstaSmurf</a>
          <a className={style.loginWith}>Login with</a>
          <a className={style.buttons}
              onClick={() => {
                this.props.login('google');
              }}
          >Google</a>
          <a className={style.buttons}
              onClick={() => {
                this.props.login('github');
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

function mapStateToProps() {
  return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
