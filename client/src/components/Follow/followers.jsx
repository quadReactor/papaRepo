import React from 'react';
import Person from './person.jsx';

const Followers = () => <div>Smurfs who follow me</div>;
export default Followers;

// Render Followers

// class Followers extends React.Component {
//   constructor() {
//     super();
//     this.deleteFollowing = this.deleteFollowing.bind(this);
//   }
//   deleteFollowing (person) {
//     axios.put(`/api/${this.props.username}/removefollower`, {username: person});
//     //rerender list
//   }

//   render() {
//     //change currentUser to store name
//     return (
//       <div>
//         {this.props.currentUser.following.map((person) => {
//           <Person person={person} /> <br />
//           <button onClick={()=>{this.deleteFollowing(person)}} >Delete</button>
//         })}
//       </div>
//     );
//   }
// }
