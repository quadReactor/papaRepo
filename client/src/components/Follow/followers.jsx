import React from 'react';
import Person from './person.jsx';

const Followers = () => <div>Smurfs who follow me</div>;
export default Followers;

// Render Followers

// class Followers extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return (
//       <div>
//         {this.props.currentUser.following.map((person) => {
//           <Person person={person} />;
//         })}
//       </div>
//     );
//   }
// }
