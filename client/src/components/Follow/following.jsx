import React from 'react';
import Person from './person.jsx';

const Following = () => <div>Smurfs i'm following</div>;
export default Following;

// Render Following

// class Following extends React.Component {
//   constructor() {
//     super();
//     this.stopFollowing = this.stopFollowing.bind(this);
//   }

//   stopFollowing (person) {
//     axios.put(`/api/${this.props.username}/stopfollowing`, {username: person});
//     //rerender list
//   }

//   render() {
//     //change currentUser to store name
//     return (
//       <div>
//         {this.props.currentUser.following.map((person) => {
//           <Person person={person} /> <br />
//           <button onClick={()=>{this.stopFollowing(person)}} >Delete</button>
//         })}
//       </div>
//     );
//   }
// }
