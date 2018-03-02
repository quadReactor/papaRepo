import React from 'react';
import { connect } from 'react-redux';
import UserPost from './userPost.jsx';
import Navbar from './../Navbar/Navbar.jsx';
import NewPost from './newPost.jsx';

class Profile extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <br />
        <br />
        <div>
          <img src={this.props.currentUser.profilePic} />
          <h2>Bio</h2>
          <h3>{this.props.currentUser.displayname}</h3>
          <div>{this.props.currentUser.bio}</div>
        </div>
        <h2>Feed</h2>
        <div>
          <p>NewPost below</p>
          <NewPost />
          <p>NewPost above</p>
        </div>

        <div>
          {this.props.photos.map(photo => (
            <UserPost key={photo._id} photo={photo} photoId={photo._id} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    photos: state.photos,
  };
}

export default connect(mapStateToProps)(Profile);
