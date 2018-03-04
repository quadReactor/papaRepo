import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';

import actions from './../../actions/follow_actions';


class AddFollowers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick() {
    const { value } = this.state;
    axios
      .post(`/api/${this.props.username}/addfollower`, {
        username: value,
      })
      .then(() => {
        this.setState({ value: '' });
        this.props.refreshCurrentUser();
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleClick();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="add a follower"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        <button onClick={this.handleClick}>Submit</button>
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
    username: state.currentUser.username,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFollowers);
