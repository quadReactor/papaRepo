import React from 'react';
import pendingRequestPerson from './pendingRequestPerson.jsx';
import axios from 'axios';
import { connect } from 'react-redux';


// const PendingRequest = () => <div>pending smurfs Request</div>;
// export default PendingRequest;

// Render Pending Followers

class PendingRequest extends React.Component {
  constructor() {
    super();
    this.accept = this.accept.bind(this);
    this.deny = this.deny.bind(this);
  }

  accept(person) {
    console.log('accepted');
    // axios.put(`/api/${this.props.username}/approvefollower`, {username: person});
  }

  deny(person) {
    console.log('denied');
    // axios.put(`/api/${this.props.username}/denyfollower`, {username: person});
  }

  render() {
    // change currentUser to store name
    return (
      this.props.pendingFollowers ? 
      <div>
        {this.props.pendingFollowers.map((person) => {
          <Person person={person} stop={this.deny} accept={this.accept} />;
        })}
      </div> :
        null
    );
  }
}

function mapStateToProps(state) {
  return {
    pendingFollowers: state.currentUser.pendingFollowers,
    username: state.currentUser.username,
  };
}

export default connect(mapStateToProps)(PendingRequest);
