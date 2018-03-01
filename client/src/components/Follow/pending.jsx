import React from 'react';
import Person from './person.jsx';

const Pending = () => <div>pending smurfs</div>;
export default Pending;

// Render Pending Following

// class Pending extends React.Component {
//   constructor() {
//     super();

//     this.deny = this.deny.bind(this);
//   }

//   stopRequest(person) {
//     axios.put(`/api/${this.props.username}/stoppendingfollowing`, {username: person});
//   }

//   render() {
//     //change currentUser to store name
//     return (
//       <div>
//         {this.props.currentUser.pendingFollowering.map((person) => {
//           <Person person={person} /> <br />
//           <button onClick={()=>{this.stopRequest(person)}} >UnRequest</button>
//         })}
//       </div>
//     );
//   }
// }
