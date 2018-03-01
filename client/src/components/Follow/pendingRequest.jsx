import React from 'react';
import Person from './person.jsx';

const PendingRequest = () => <div>pending smurfs Request</div>;
export default PendingRequest;

// Render Pending Followers

// class PendingRequest extends React.Component {
//   constructor() {
//     super();
//     this.accept = this.accept.bind(this);
//     this.deny = this.deny.bind(this);
//   }

//   accept(person) {
//     axios.put(`/api/${this.props.username}/approvefollower`, {username: person});
//   }

//   deny(person) {
//     axios.put(`/api/${this.props.username}/denyfollower`, {username: person});
//   }

//   render() {
//     //change currentUser to store name
//     return (
//       <div>
//         {this.props.currentUser.pendingFollowers.map((person) => {
//           <Person person={person} /> <br />
//           <button onClick={()=>{this.accept(person)}} >Accept</button>
//           <button onClick={()=>{this.deny(person)}} >Deny</button>
//         })}
//       </div>
//     );
//   }
// }
