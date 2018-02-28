// import React from 'react';
// import axios from 'axios';

// class Like extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       like: false,
//     };
//   }
//   toggleLike() {
//     if (this.state.like) {
//       // remove like
//     } else {
//       // add like
//       axios.put(`/api/${this.props.username}/${this.props.photoId}/like`, {});
//     }
//     this.setState({ like: !this.state.like });
//   }

//   render() {
//     return (
//       <div>
//         <img onClick={this.toggleLike} src="this is a like button immage" />
//         <p>{this.props.likes.length} </p>
//       </div>
//     );
//   }
// }

// export default Like;
