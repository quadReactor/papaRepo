import React from 'react';
import Person from './person.jsx';

// const PendingRequest = () => <div>pending smurfs Request</div>;
// export default PendingRequest;

// Render Pending Followers

class PendingRequest extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        {this.props.currentUser.pendingFollowers.map((person) => {
          <Person person={person} /> <br />
          <button>Accept</button>
          <button>Deny</button>
        })}
      </div>
    );
  }
}
