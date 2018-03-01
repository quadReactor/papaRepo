import React from 'react';
import pendingPerson from './pendingPerson';
import axios from 'axios';
import { connect } from 'react-redux';

// const Pending = () => <div>pending smurfs</div>;
// export default Pending;

// Render Pending Following

class Pending extends React.Component {
  constructor() {
    super();

    this.stopRequest = this.stopRequest.bind(this);
  }

  stopRequest(person) {
    console.log('i clicked -- pending', person);
    // axios.put(`/api/${this.props.username}/stoppendingfollowing`, {username: person});
  }

  render() {
    // change currentUser to store name
    return (
      this.props.pendingFollowing ?
      <div>
        {this.props.pendingFollowing.map((person) => {
          <Person person={person} stop={this.stopRequest} />;
        })}
      </div> :
      null
    );
  }
}

function mapStateToProps(state) {
  return {
    pendingFollowing: state.currentUser.pendingFollowing,
    username: state.currentUser.username,
  };
}

export default connect(mapStateToProps)(Pending);
