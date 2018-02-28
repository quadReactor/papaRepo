import React from 'react';
import Person from './person.jsx';

// const Pending = () => <div>pending smurfs</div>;
// export default Pending;

// Render Pending Following

class Pending extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        {this.props.currentUser.pendingFollowering.map((person) => {
          <Person person={person} /> <br />
          <button>Accept</button> 
          <button>Deny</button>
        })}
      </div>
    );
  }
}
