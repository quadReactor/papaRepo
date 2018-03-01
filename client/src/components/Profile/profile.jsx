import React from 'react';
import { connect } from 'react-redux';
import UserPost from './userPost.jsx';
import Navbar from './../Navbar/navbar.jsx';

const Profile = () => {
  <div>
    <Navbar />
  </div>;
};

export default Profile;

// class Profile extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return (
//       <div>
//         <Navbar />
//         <br />
//         <br />
//         <br />
//         <h2>Bio</h2>
//         <div>{this.props.currentUser.bio}</div>
//         <h2>Feed</h2>
//         {this.props.photos.map(photo => <UserPost key={photo._id} photo={photo} />)}
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     currentUser: state.currentUser,
//     photos: state.photos,
//   };
// }

// export default connect(mapStateToProps)(Profile);
