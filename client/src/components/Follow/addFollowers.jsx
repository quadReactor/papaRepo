import React from 'react';

const AddFollowers = () => (
  <div>
    <form>
      <input placeholder="add a follower" />
    </form>
  </div>
);
export default AddFollowers;

// class AddFollowers extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//     };
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.setState({ value: '' })}>
//           <input
//             placeholder="add a follower"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     );
//   }
// }
