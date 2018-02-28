import React from 'react';
import Person from './person.jsx';

const Following = () => <div>Smurfs i'm following</div>;
export default Following;

// Render Following

// class Following extends React.Component {
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
