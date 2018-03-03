import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class AddFollowers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    const { value } = this.state;
    axios
      .post(`/api/${this.props.username}/addfollower`, {
        username: value,
      })
      .then(() => {
        this.setState({ value: '' });
      });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="add a follower"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.currentUser.username,
  };
}

export default connect(mapStateToProps)(AddFollowers);
