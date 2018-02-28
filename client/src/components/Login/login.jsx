import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import style from './login.css';
import actions from '../../actions/firebase_actions';


class Login extends Component {
  render() {
    return (
      <div className={style.login}>
        <h1 className={style.billabong}>InstaSmurf</h1>
        <h4 className={style.loginWith}>Login with</h4>
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
          <img
            src='https://gameofroles.files.wordpress.com/2011/12/smurfs-imps-2008-3.jpg'
            className={style.image}
            />
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
  return { user: state.user };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
